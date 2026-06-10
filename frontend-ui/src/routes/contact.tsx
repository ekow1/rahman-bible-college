import { createFileRoute } from "@tanstack/react-router"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const Route = createFileRoute("/contact")({ component: ContactPage })

function ContactPage() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero with Image Background */}
      <section className="relative py-32 md:py-48 text-parchment overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80" 
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-ink/70" />
        
        <div className="container-narrow text-center relative z-10">
          <span className="text-caption text-gold mb-6 block">Get in Touch</span>
          <h1 className="font-serif text-parchment text-5xl md:text-6xl lg:text-7xl mb-6">Contact Us</h1>
          <div className="rule-gold mx-auto mb-8" style={{ width: '8rem' }} />
          <p className="text-parchment/80 text-lg max-w-2xl mx-auto">
            We would love to hear from you. Reach out for inquiries about programs, admissions, or general information.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-caption text-stone mb-6 block">Contact Information</span>
              <h2 className="font-serif mb-8">Reach Out</h2>
              <div className="rule mb-8" />

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ink/5 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-2">Address</h3>
                    <p className="text-stone">
                      C/O Ramah Chapel International<br />
                      5 Lodge Close, Hutton, Brentwood<br />
                      CM13 1SW, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ink/5 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-2">Phone</h3>
                    <p className="text-stone">President: +44 (0)7983 332 175</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ink/5 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-2">Email</h3>
                    <p className="text-stone">richcommey@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ink/5 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-2">Office Hours</h3>
                    <p className="text-stone">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-ink text-parchment p-8 md:p-10">
                <span className="text-caption text-gold mb-4 block">Send a Message</span>
                <h3 className="font-serif text-2xl mb-2">Get in Touch</h3>
                <p className="text-parchment/60 text-sm mb-8">Fill out the form below and we'll respond within 24 hours.</p>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-parchment/60">First Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-parchment/10 border border-parchment/20 text-parchment placeholder:text-parchment/40 focus:border-gold focus:outline-none transition-colors" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-parchment/60">Last Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-parchment/10 border border-parchment/20 text-parchment placeholder:text-parchment/40 focus:border-gold focus:outline-none transition-colors" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-parchment/60">Email Address *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-parchment/10 border border-parchment/20 text-parchment placeholder:text-parchment/40 focus:border-gold focus:outline-none transition-colors" 
                      placeholder="john.doe@email.com" 
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-parchment/60">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-parchment/10 border border-parchment/20 text-parchment placeholder:text-parchment/40 focus:border-gold focus:outline-none transition-colors" 
                      placeholder="+44 (0) 123 456 7890" 
                    />
                  </div>
                  
                  {/* Subject Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-parchment/60">Inquiry Type *</label>
                    <select className="w-full px-4 py-3 bg-parchment/10 border border-parchment/20 text-parchment focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer">
                      <option value="" className="bg-ink text-parchment">Select an option</option>
                      <option value="admissions" className="bg-ink text-parchment">Admissions & Applications</option>
                      <option value="programs" className="bg-ink text-parchment">Program Information</option>
                      <option value="fees" className="bg-ink text-parchment">Tuition & Fees</option>
                      <option value="distance" className="bg-ink text-parchment">Distance Learning</option>
                      <option value="general" className="bg-ink text-parchment">General Inquiry</option>
                    </select>
                  </div>
                  
                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-parchment/60">Your Message *</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 bg-parchment/10 border border-parchment/20 text-parchment placeholder:text-parchment/40 focus:border-gold focus:outline-none transition-colors resize-none" 
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <button type="submit" className="w-full bg-gold text-ink py-4 font-medium uppercase tracking-wider text-sm hover:bg-parchment transition-colors">
                    Send Message
                  </button>
                  
                  <p className="text-parchment/40 text-xs text-center">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
