import { createFileRoute } from "@tanstack/react-router"
import { CheckCircle } from "lucide-react"

export const Route = createFileRoute("/apply")({ component: ApplyPage })

function ApplyPage() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero with Image Background */}
      <section className="relative py-32 md:py-48 text-parchment overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80" 
          alt="Apply"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-ink/70" />
        
        <div className="container-narrow text-center relative z-10">
          <span className="text-caption text-gold mb-6 block">Admissions</span>
          <h1 className="font-serif text-parchment text-5xl md:text-6xl lg:text-7xl mb-6">Apply Now</h1>
          <div className="rule-gold mx-auto mb-8" style={{ width: '8rem' }} />
          <p className="text-parchment/80 text-lg max-w-2xl mx-auto">
            Begin your journey in theological education. Complete the application form below to get started.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <div className="card-editorial">
              <span className="text-caption text-stone mb-4 block">Application Form</span>
              <h2 className="font-serif text-2xl mb-8">Personal Information</h2>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone mb-2">First Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-stone/30 bg-transparent focus:border-gold focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone mb-2">Last Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-stone/30 bg-transparent focus:border-gold focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-stone/30 bg-transparent focus:border-gold focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone mb-2">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-3 border border-stone/30 bg-transparent focus:border-gold focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone mb-2">Mailing Address *</label>
                  <textarea rows={3} required className="w-full px-4 py-3 border border-stone/30 bg-transparent focus:border-gold focus:outline-none resize-none"></textarea>
                </div>

                <div className="border-t border-stone/20 pt-8">
                  <h3 className="font-serif text-xl mb-6">Program Selection</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Certificate in Ministry",
                      "Further Certificates in Ministry",
                      "Advanced Certificate in Ministry I",
                      "Advanced Certificate in Ministry II",
                      "Advanced Certificate in Ministry III",
                      "Certificate in Prophecy"
                    ].map((program) => (
                      <label key={program} className="flex items-center gap-3 p-4 border border-stone/20 hover:border-gold/50 cursor-pointer transition-colors">
                        <input type="radio" name="program" value={program} className="text-gold focus:ring-gold" />
                        <span className="text-sm">{program}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-stone/20 pt-8">
                  <h3 className="font-serif text-xl mb-6">Additional Information</h3>

                  <div>
                    <label className="block text-sm font-medium text-stone mb-2">How did you hear about Ramah Bible College?</label>
                    <select className="w-full px-4 py-3 border border-stone/30 bg-transparent focus:border-gold focus:outline-none">
                      <option value="">Select an option</option>
                      <option value="church">Church / Pastor</option>
                      <option value="friend">Friend / Family</option>
                      <option value="online">Online Search</option>
                      <option value="social">Social Media</option>
                      <option value="conference">Conference / Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <label className="block text-sm font-medium text-stone mb-2">Statement of Purpose</label>
                    <p className="text-sm text-stone/70 mb-2">Briefly describe why you want to study at Ramah Bible College and your ministry goals.</p>
                    <textarea rows={5} className="w-full px-4 py-3 border border-stone/30 bg-transparent focus:border-gold focus:outline-none resize-none"></textarea>
                  </div>
                </div>

                <div className="border-t border-stone/20 pt-8">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1 text-gold focus:ring-gold" />
                    <span className="text-sm text-stone">
                      I confirm that the information provided is accurate and complete. I understand that Ramah Bible College is a Spirit-filled Christian institution and agree to abide by the college's standards and code of conduct.
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit Application
                </button>
              </form>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Review", desc: "Applications reviewed within 5-7 business days" },
                { title: "Interview", desc: "Selected applicants invited for interview" },
                { title: "Decision", desc: "Admission decision communicated via email" }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-gold/20 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle size={20} className="text-gold" />
                  </div>
                  <h4 className="font-medium mb-1">{step.title}</h4>
                  <p className="text-sm text-stone">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
