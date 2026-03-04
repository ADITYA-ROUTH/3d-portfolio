"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Creates a lush ambient drone using the Web Audio API.
 * No external audio file required — pure synthesized sound.
 */
function createAmbientContext() {
    const ctx = new AudioContext();
    const master = ctx.createGain();
    master.gain.value = 0; // start silent, will fade in
    master.connect(ctx.destination);

    const oscillators: OscillatorNode[] = [];
    const gains: GainNode[] = [];

    // Deep drone layers — warm, cinematic tones
    const voices = [
        { freq: 55, type: "sine" as OscillatorType, vol: 0.18 },       // A1 bass
        { freq: 82.41, type: "sine" as OscillatorType, vol: 0.12 },    // E2
        { freq: 110, type: "triangle" as OscillatorType, vol: 0.08 },  // A2 shimmer
        { freq: 164.81, type: "sine" as OscillatorType, vol: 0.05 },   // E3 harmonic
        { freq: 220, type: "sine" as OscillatorType, vol: 0.03 },      // A3 overtone
    ];

    voices.forEach(({ freq, type, vol }) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        g.gain.value = vol;
        osc.connect(g);
        g.connect(master);
        osc.start();
        oscillators.push(osc);
        gains.push(g);
    });

    // Slow LFO that modulates overall volume for a "breathing" feel
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine";
    lfo.frequency.value = 0.08; // very slow pulse
    lfoGain.gain.value = 0.04;
    lfo.connect(lfoGain);
    lfoGain.connect(master.gain);
    lfo.start();

    return { ctx, master, oscillators, lfo };
}

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ambientRef = useRef<ReturnType<typeof createAmbientContext> | null>(null);
    const fadeRef = useRef<number | null>(null);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (ambientRef.current) {
                ambientRef.current.ctx.close();
                ambientRef.current = null;
            }
            if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
        };
    }, []);

    const fadeGain = useCallback((target: number, durationMs: number) => {
        if (!ambientRef.current) return;
        const { master, ctx } = ambientRef.current;
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
        master.gain.linearRampToValueAtTime(target, ctx.currentTime + durationMs / 1000);
    }, []);

    const togglePlay = useCallback(async () => {
        if (isPlaying) {
            // Fade out
            fadeGain(0, 800);
            setIsPlaying(false);
            // Suspend after fade
            setTimeout(() => {
                ambientRef.current?.ctx.suspend();
            }, 900);
        } else {
            // Initialize on first play
            if (!ambientRef.current) {
                ambientRef.current = createAmbientContext();
            }
            // Resume if suspended
            if (ambientRef.current.ctx.state === "suspended") {
                await ambientRef.current.ctx.resume();
            }
            // Fade in
            fadeGain(0.35, 1200);
            setIsPlaying(true);
        }
    }, [isPlaying, fadeGain]);

    return (
        <button
            onClick={togglePlay}
            className="fixed bottom-6 right-20 z-50 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_var(--color-accent-glow)] transition-all duration-300 group"
            aria-label="Toggle ambient audio"
            title={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
        >
            {isPlaying ? (
                <Volume2 size={20} className="text-accent group-hover:scale-110 transition-transform" />
            ) : (
                <VolumeX size={20} className="group-hover:scale-110 transition-transform" />
            )}

            {/* Animated ring when playing */}
            {isPlaying && (
                <span className="absolute inset-0 rounded-full border-2 border-accent/40 animate-ping pointer-events-none" />
            )}
        </button>
    );
}
