import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");

        const SERVICE_ID = "service_0cod6ar";
        const TEMPLATE_ID = "template_6uviuz4";
        const PUBLIC_KEY = "lhMAqZlu-3aHakW6w";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus("success");
                formRef.current.reset();
            })
            .catch(() => {
                setStatus("error");
            });
    };

    return (
        <section id="contact" className="py-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contact</h3>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-100 dark:border-slate-800">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-300">Get in touch</h4>
                    <p className="text-sm text-slate-900 dark:text-slate-300 mt-2">
                        For collaboration, internships, or job opportunities — send a message.
                    </p>

                    <div className="mt-4 space-y-2 text-sm">
                        <div className="text-slate-900 dark:text-slate-300">Email: <span className="font-mono text-slate-900 dark:text-slate-300">aravmahale2011@gmail.com</span></div>
                        <div className="text-slate-900 dark:text-slate-300">Location: Goa, India</div>
                    </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-100 dark:border-slate-800">
                    <div className="grid gap-3">
                        <input name="from_name" required placeholder="Your name" className="p-3 border rounded-md bg-transparent" />
                        <input name="from_email" required placeholder="Your email" type="email" className="p-3 border rounded-md bg-transparent" />
                        <textarea name="message" required placeholder="Message" rows="6" className="p-3 border rounded-md bg-transparent"></textarea>

                        <div className="flex items-center gap-3">
                            <button type="submit" className="bg-secondary text-white px-4 py-2 rounded-md">Send</button>
                            {status === "loading" && <span>Sending…</span>}
                            {status === "success" && <span className="text-green-500">Sent!</span>}
                            {status === "error" && <span className="text-red-500">Error. Try again.</span>}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
