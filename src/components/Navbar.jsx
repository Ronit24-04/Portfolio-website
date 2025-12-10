import React, { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-darkBg/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="text-white font-bold bg-primary rounded-md w-10 h-10 flex items-center justify-center">
                        RM
                    </div>
                    <span className="hidden sm:block font-bold text-lg dark:text-white text-slate-900">Ronit Mahale</span>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-slate-700 dark:text-slate-200 font-medium">
                    <a href="#about" className="hover:text-primary transition">About</a>
                    <a href="#skills" className="hover:text-primary transition">Skills</a>
                    <a href="#projects" className="hover:text-primary transition">Projects</a>
                    <a href="#contact" className="hover:text-primary transition">Contact</a>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setDark(d => !d)}
                        className="p-2 rounded-md bg-secondary text-white flex items-center gap-1 hover:opacity-90 transition"
                    >
                        {dark ? <HiOutlineSun /> : <HiOutlineMoon />}
                        <span className="hidden sm:inline text-sm">{dark ? "Light" : "Dark"}</span>
                    </button>

                    <button className="md:hidden p-2" onClick={() => setOpen(o => !o)}>
                        <FaBars className="text-xl text-slate-800 dark:text-white" />
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden bg-white dark:bg-darkBg/90 border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-3 font-medium">
                    <a href="#about" className="hover:text-primary">About</a>
                    <a href="#skills" className="hover:text-primary">Skills</a>
                    <a href="#projects" className="hover:text-primary">Projects</a>
                    <a href="#contact" className="hover:text-primary">Contact</a>
                </div>
            )}
        </header>
    );
}
