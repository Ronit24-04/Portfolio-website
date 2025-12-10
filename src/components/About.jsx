import React from "react";

export default function About() {
    return (
        <section id="about" className="py-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About Me</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <p className="text-slate-600 dark:text-slate-300">
                    I'm a third-year BCA student focusing on software development. I enjoy building performant, accessible, and
                    well-designed web applications. I work primarily with React, TailwindCSS, and JavaScript.
                </p>

                <div className="space-y-3">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                        <h4 className="font-semibold text-slate-800 dark:text-white">Experience</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Internship at SPARK-IIT (Fullstack Development)</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                        <h4 className="font-semibold text-slate-800 dark:text-white">Education</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">BCA — Third Year</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
