"use client";

import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, ExternalLink, Phone } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const socialLinks = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/ADITYA-ROUTH",
        username: "@ADITYA-ROUTH",
        color: "hover:border-purple-400/50 hover:shadow-purple-500/20",
        iconColor: "group-hover:text-purple-400",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aditya-routh-231ab92a0",
        username: "Aditya Routh",
        color: "hover:border-blue-400/50 hover:shadow-blue-500/20",
        iconColor: "group-hover:text-blue-400",
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:premrouth00@gmail.com",
        username: "premrouth00@gmail.com",
        color: "hover:border-emerald-400/50 hover:shadow-emerald-500/20",
        iconColor: "group-hover:text-emerald-400",
    },
];

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "premrouth00@gmail.com",
        href: "mailto:premrouth00@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 6289362253",
        href: "tel:+916289362253",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Kolkata, India",
        href: null,
    },
];

export default function ContactSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useGSAP(() => {
        gsap.from(".contact-header", {
            opacity: 0,
            y: -30,
            duration: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
        });
    }, { scope: containerRef });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate sending — replace with your actual API endpoint
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section
            ref={containerRef}
            id="contact"
            className="reveal-section relative min-h-screen flex flex-col items-center justify-center py-24 px-6 border-t border-white/10 overflow-hidden"
        >
            {/* Ambient glow effects */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto">
                {/* Header */}
                <div className="contact-header text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-accent text-sm uppercase tracking-[0.3em] font-medium mb-4"
                    >
                        Get In Touch
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                        Let&apos;s Connect
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-4 rounded-full" />
                    <p className="text-white/50 mt-6 max-w-lg mx-auto text-lg">
                        Whether you have a project idea, a question, or just want to say hello — my inbox is always open.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column — Contact Info & Socials */}
                    <div className="space-y-8">
                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {contactInfo.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/30 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                                        <item.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider">{item.label}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-white/80 text-sm hover:text-accent transition-colors duration-200"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white/80 text-sm">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4">Find Me On</h3>
                            <div className="space-y-3">
                                {socialLinks.map((link, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                                        viewport={{ once: true }}
                                        className={`group flex items-center justify-between p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-lg ${link.color}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <link.icon className={`w-5 h-5 text-white/60 transition-colors duration-300 ${link.iconColor}`} />
                                            <div>
                                                <p className="text-white/90 text-sm font-medium">{link.label}</p>
                                                <p className="text-white/40 text-xs">{link.username}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors duration-300" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column — Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-6"
                        >
                            <h3 className="text-white text-xl font-semibold mb-2">Send a Message</h3>
                            <p className="text-white/40 text-sm mb-6">
                                Fill out the form below and I&apos;ll get back to you as soon as possible.
                            </p>

                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={5}
                                        value={formState.message}
                                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none"
                                        placeholder="What's on your mind?"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-gradient-to-r from-accent to-purple-500 text-white font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : submitted ? (
                                    <>
                                        ✓ Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitted && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-emerald-400 text-sm text-center"
                                >
                                    Thanks for reaching out! I&apos;ll respond shortly.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-8 border-t border-white/5 text-center"
                >
                    <p className="text-white/30 text-sm">
                        Designed & Built by{" "}
                        <span className="text-accent">Aditya Routh</span>
                        {" "}• © {new Date().getFullYear()}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
