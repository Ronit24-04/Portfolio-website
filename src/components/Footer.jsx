import React from "react";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-darkBg/90 py-6">
            <div className="max-w-6xl mx-auto px-6 text-center text-slate-700 dark:text-slate-300">
                © {new Date().getFullYear()} Ronit Mahale • Built with React & Tailwind
            </div>
        </footer>
    );
}
