export default function SceneFallback() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-0">
            <div className="w-16 h-16 rounded-full border-t-2 border-b-2 border-accent animate-spin opacity-50 shadow-[0_0_15px_var(--color-accent-glow)]" />
        </div>
    );
}
