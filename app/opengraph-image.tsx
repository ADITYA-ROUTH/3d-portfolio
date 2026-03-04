import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aditya Routh — 3D Portfolio | AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #000000 0%, #0a0a2e 40%, #0f0f3d 60%, #000000 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Grid lines */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Accent glow top-left */}
                <div
                    style={{
                        position: "absolute",
                        top: -80,
                        left: -80,
                        width: 350,
                        height: 350,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
                    }}
                />

                {/* Accent glow bottom-right */}
                <div
                    style={{
                        position: "absolute",
                        bottom: -60,
                        right: -60,
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
                    }}
                />

                {/* Small floating cubes */}
                {[
                    { top: 80, left: 120, size: 30, rot: 15 },
                    { top: 150, right: 180, size: 22, rot: -20 },
                    { bottom: 120, left: 200, size: 26, rot: 25 },
                    { bottom: 80, right: 120, size: 18, rot: -10 },
                    { top: 200, left: 500, size: 14, rot: 45 },
                ].map((cube, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            top: cube.top ?? undefined,
                            bottom: cube.bottom ?? undefined,
                            left: cube.left ?? undefined,
                            right: cube.right ?? undefined,
                            width: cube.size,
                            height: cube.size,
                            border: "1.5px solid rgba(59,130,246,0.4)",
                            borderRadius: 3,
                            transform: `rotate(${cube.rot}deg)`,
                            background: "rgba(59,130,246,0.08)",
                        }}
                    />
                ))}

                {/* Main content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                    }}
                >
                    {/* Name */}
                    <h1
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #c084fc 100%)",
                            backgroundClip: "text",
                            color: "transparent",
                            margin: 0,
                            letterSpacing: "-2px",
                            lineHeight: 1,
                        }}
                    >
                        ADITYA ROUTH
                    </h1>

                    {/* Tagline */}
                    <p
                        style={{
                            fontSize: 24,
                            color: "rgba(255,255,255,0.6)",
                            marginTop: 16,
                            letterSpacing: "4px",
                            textTransform: "uppercase",
                        }}
                    >
                        3D Web Developer • AI/ML Engineer
                    </p>

                    {/* Accent line */}
                    <div
                        style={{
                            width: 200,
                            height: 3,
                            marginTop: 24,
                            borderRadius: 2,
                            background: "linear-gradient(90deg, #3b82f6, #a855f7)",
                        }}
                    />
                </div>

                {/* Bottom gradient line */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: "linear-gradient(90deg, transparent, #3b82f6, #a855f7, transparent)",
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
