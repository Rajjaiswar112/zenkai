import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Zap, Mail, Lock } from "lucide-react";
import { errMsg } from "../lib/api";
import { toast } from "sonner";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const nav = useNavigate();
    const loc = useLocation();

    const redirect = loc.state?.from || "/";

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login(email, password);

            toast.success("System unlocked. Welcome back.");

            nav(redirect, { replace: true });
        } catch (e) {
            toast.error(errMsg(e));
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12 bg-[#050505] overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 w-full max-w-md">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center justify-center gap-3 mb-10 group"
                >
                    <Zap
                        className="w-10 h-10 text-neon-purple group-hover:text-neon-cyan transition-all duration-300"
                        strokeWidth={1.5}
                    />

                    <span className="font-heading text-4xl font-bold uppercase tracking-[0.3em] text-white">
                        ZENKAI
                    </span>
                </Link>

                {/* Card */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-purple-500/10">

                    <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-neon-cyan mb-3">
                        // authentication
                    </div>

                    <h1 className="font-heading text-4xl uppercase tracking-tight text-white mb-2">
                        Access
                    </h1>

                    <p className="text-zinc-500 font-body text-sm mb-8">
                        Enter the grid — your collection awaits.
                    </p>

                    <form onSubmit={submit} className="space-y-6">

                        {/* Email */}
                        <div>
                            <label className="block font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
                                Email
                            </label>

                            <div className="relative">

                                <Mail
                                    className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
                                    strokeWidth={1.5}
                                />

                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    data-testid="login-email"
                                    className="
                                        w-full
                                        h-14
                                        bg-black/40
                                        border
                                        border-white/10
                                        rounded-2xl
                                        pl-16
                                        pr-4
                                        text-white
                                        placeholder:text-zinc-600
                                        outline-none
                                        transition-all
                                        duration-300
                                        focus:border-purple-500
                                        focus:shadow-lg
                                        focus:shadow-purple-500/20
                                    "
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
                                Password
                            </label>

                            <div className="relative">

                                <Lock
                                    className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
                                    strokeWidth={1.5}
                                />

                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    data-testid="login-password"
                                    className="
                                        w-full
                                        h-14
                                        bg-black/40
                                        border
                                        border-white/10
                                        rounded-2xl
                                        pl-16
                                        pr-4
                                        text-white
                                        placeholder:text-zinc-600
                                        outline-none
                                        transition-all
                                        duration-300
                                        focus:border-purple-500
                                        focus:shadow-lg
                                        focus:shadow-purple-500/20
                                    "
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            data-testid="login-submit"
                            className="
                                w-full
                                h-14
                                rounded-2xl
                                bg-gradient-to-r
                                from-purple-600
                                to-cyan-600
                                text-white
                                font-heading
                                uppercase
                                tracking-[0.3em]
                                transition-all
                                duration-300
                                hover:scale-[1.02]
                                hover:shadow-xl
                                hover:shadow-purple-500/30
                                disabled:opacity-50
                            "
                        >
                            {loading ? "Authenticating..." : "Sign In"}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-zinc-400 font-body">
                        No account?{" "}

                        <Link
                            to="/register"
                            className="text-neon-cyan hover:text-white transition-colors font-heading uppercase tracking-[0.2em] text-xs"
                            data-testid="register-link"
                        >
                            Create one
                        </Link>
                    </div>                </div>
            </div>
        </main>
    );
}
