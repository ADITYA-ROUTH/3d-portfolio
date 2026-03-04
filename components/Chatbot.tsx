"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, User, Bot, Loader2 } from "lucide-react";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: "/api/chat",
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    return (
        <>
            {/* Floating Action Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 p-4 bg-accent hover:bg-accent hover:shadow-[0_0_30px_var(--color-accent-glow)] text-white rounded-full shadow-[0_0_15px_var(--color-accent-glow)] transition-all duration-300 flex items-center justify-center group"
                    >
                        <MessageSquare size={24} className="group-hover:animate-pulse" />

                        {/* Notification pip */}
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-black"></span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] h-[550px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_40px_var(--color-accent-glow)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full border border-accent/50">
                                    <Sparkles size={18} className="text-accent" />
                                    <div className="absolute inset-0 bg-accent/20 blur-md rounded-full animate-pulse z-[-1]"></div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Aditya's AI Assistant</h3>
                                    <p className="text-white/50 text-xs font-mono">Ask me anything about his work</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-70">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center rotate-3 border border-white/10">
                                        <Bot size={32} className="text-accent" />
                                    </div>
                                    <p className="text-white/80 text-sm max-w-[250px]">
                                        Hi! I'm an AI trained on Aditya's resume. Ask me about his skills, experience, or projects!
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                                        <span className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded-full text-white/60 bg-white/5">"What are his core skills?"</span>
                                        <span className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded-full text-white/60 bg-white/5">"Tell me about his 3D projects"</span>
                                    </div>
                                </div>
                            ) : (
                                messages.map((m) => (
                                    <div key={m.id} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                        {/* Avatar */}
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 border ${m.role === "user"
                                            ? "bg-white/10 border-white/20 text-white"
                                            : "bg-accent/20 border-accent/40 text-accent"
                                            }`}>
                                            {m.role === "user" ? <User size={14} /> : <Sparkles size={14} />}
                                        </div>

                                        {/* Message Bubble */}
                                        <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user"
                                            ? "bg-accent text-white rounded-tr-sm"
                                            : "bg-white/10 text-white/90 border border-white/5 rounded-tl-sm"
                                            }`}>
                                            {m.content}
                                        </div>
                                    </div>
                                ))
                            )}

                            {/* Loading Indicator */}
                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-accent/20 border border-accent/40 rounded-full flex items-center justify-center text-accent mt-1">
                                        <Bot size={14} />
                                    </div>
                                    <div className="bg-white/10 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 h-[40px]">
                                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <form onSubmit={handleSubmit} className="relative flex items-center">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Ask a question..."
                                    className="w-full bg-black/50 border border-white/10 text-white text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all placeholder:text-white/30"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 p-2 bg-accent hover:shadow-[0_0_15px_var(--color-accent-glow)] disabled:bg-white/10 disabled:text-white/30 text-white rounded-full transition-all duration-300 flex items-center justify-center"
                                >
                                    {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="ml-0.5" />}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Basic scoped CSS for scrollbar mostly */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
        </>
    );
}
