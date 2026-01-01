import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  // Status can be: "" (idle), "submitting", "succeeded", or "error"
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkogneay", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("succeeded");
        form.reset(); // Clear the form fields
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Talk Strategy</h2>
          <p className="text-gray-400">Ready to refine your positioning? Drop a message below.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl transition-all">
          {status === "succeeded" ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
              <p className="text-gray-600 mb-6">Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
              <button 
                onClick={() => setStatus("")}
                className="text-emerald-600 font-semibold hover:text-emerald-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-900/10"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send size={18} className={status === "submitting" ? "animate-pulse" : ""} />
              </button>

              {status === "error" && (
                <p className="text-red-500 text-center text-sm font-medium">
                  Oops! There was a problem submitting your form. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;