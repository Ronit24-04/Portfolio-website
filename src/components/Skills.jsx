import React from "react";
import skills from "../data/skillsData";

export default function Skills() {
    return (
        <section id="skills" className="py-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Skills</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((s) => (
                    <div key={s.name} className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                        <h5 className="font-semibold text-slate-900 dark:text-white">{s.name}</h5>
                        <p className="text-sm text-slate-500 dark:text-slate-300">{s.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
