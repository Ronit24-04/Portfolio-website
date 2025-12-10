import React from "react";

export default function Hero() {
    return (
        <section className="py-16" id="home">
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-6">
                <div>
                    <h1 className="text-5xl md:text-6xl font-extrabold dark:text-white text-slate-900 leading-tight">
                        Hi, I'm <span className="text-primary">Ronit</span>
                    </h1>
                    <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg">
                        I'm a fullstack developer building modern web apps with React and Tailwind CSS.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <a href="#projects" className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-lg hover:bg-secondary/10 transition">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-card">
                        <img src="/src/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
