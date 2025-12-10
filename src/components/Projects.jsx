import React from "react";
import projects from "../data/projectsData";

export default function Projects() {
    return (
        <section id="projects" className="py-16">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 text-center mb-10">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
                {projects.map(p => (
                    <div key={p.id} className="bg-white dark:bg-darkBg rounded-2xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold dark:text-white text-slate-900">{p.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 mt-2">{p.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 border rounded-md text-slate-600 dark:text-slate-300">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-4 flex gap-3">
                                <a href={p.demo} className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition">Demo</a>
                                <a href={p.repo} className="border border-slate-300 dark:border-slate-700 px-4 py-2 rounded-md hover:bg-secondary/10 transition">Repo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
