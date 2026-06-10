import { createFileRoute, Link } from "@tanstack/react-router"
import { Clock, MapPin, BookOpen, ArrowRight, GraduationCap, Globe } from "lucide-react"

export const Route = createFileRoute("/programs")({ component: ProgramsPage })

const programs = [
  {
    id: "certificate-biblical",
    title: "Certificate in Biblical Studies",
    subtitle: "Foundation Level",
    duration: "3 Months",
    mode: "Part-time Residential / Online Zoom",
    entryRequirements: "None",
    textbook: "The Holy Bible (any standard version)",
    modules: [
      "BIB001: Biblical Hermeneutics",
      "BIB002: First Corinthians",
      "BIB003: Minor Prophets",
      "BIB004: Gospel of John"
    ],
    description: "A foundational exploration of Scripture through hermeneutics, Pauline epistle, prophetic literature, and the Gospel of John. Ideal for those beginning serious biblical study."
  },
  {
    id: "certificate-theological",
    title: "Certificate in Theological Studies",
    subtitle: "Foundation Level",
    duration: "3 Months",
    mode: "Part-time Residential / Online Zoom",
    entryRequirements: "None",
    textbook: "Systematic Theology: An Introduction",
    modules: [
      "THE001: Pneumatology",
      "THE002: Theology Proper and Angelology",
      "THE003: Soteriology",
      "THE004: Christology"
    ],
    description: "A systematic study of core Christian doctrines covering the Holy Spirit, the nature of God, salvation, and the person and work of Christ. Builds a firm theological foundation."
  },
  {
    id: "certificate-ministerial",
    title: "Certificate in Ministerial Studies",
    subtitle: "Foundation Level",
    duration: "3 Months",
    mode: "Part-time Residential / Online Zoom",
    entryRequirements: "None",
    textbook: "Ministry Gifts by Dr Richard Oswald Commey",
    modules: [
      "MIN001: Pastoral Ministries",
      "MIN002: Principles of Preaching",
      "MIN003: Principles of Teaching",
      "MIN004: Introduction to Missions"
    ],
    description: "Practical training for effective Christian service, covering pastoral care, homiletics, teaching methods, and an introduction to global missions."
  },
  {
    id: "advanced-biblical",
    title: "Advanced Certificate in Biblical Studies",
    subtitle: "Advanced Level",
    duration: "6 Months",
    mode: "Part-time / Online",
    entryRequirements: "Certificate in Biblical Studies or equivalent",
    textbook: "Advanced Biblical Studies Texts",
    modules: [
      "BIB100: Advanced Biblical Hermeneutics",
      "BIB101: Epistle to the Hebrews",
      "BIB102: Epistle to the Galatians",
      "BIB103: Themes in Hosea and Amos"
    ],
    description: "Advanced biblical study deepening skills in hermeneutics and exegesis through key New Testament epistles and Old Testament prophetic texts."
  },
  {
    id: "advanced-theological",
    title: "Advanced Certificate in Theological Studies",
    subtitle: "Advanced Level",
    duration: "6 Months",
    mode: "Part-time / Online",
    entryRequirements: "Certificate in Theological Studies or equivalent",
    textbook: "Advanced Systematic Theology",
    modules: [
      "THE100: Theology and History of Acts",
      "THE101: Pneumatology of Luke",
      "THE102: Biblical Theology of Missions",
      "THE103: Pastoral Theology"
    ],
    description: "Advanced theological study examining the Acts of the Apostles, Lukan pneumatology, mission theology, and pastoral theology for ministry formation."
  },
  {
    id: "advanced-ministerial",
    title: "Advanced Certificate in Ministerial Studies",
    subtitle: "Advanced Level",
    duration: "6 Months",
    mode: "Part-time / Online",
    entryRequirements: "Certificate in Ministerial Studies or equivalent",
    textbook: "Advanced Ministry Leadership Texts",
    modules: [
      "MIN100: Leadership Development",
      "MIN101: Christian Organisations",
      "MIN102: Ministerial Ethics",
      "MIN103: Marriage Counselling"
    ],
    description: "Advanced ministerial training focused on leadership, organisational management, ethical integrity, and counselling for holistic and effective ministry."
  }
]

function ProgramsPage() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero with Image Background */}
      <section className="relative py-32 md:py-48 text-parchment overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&q=80" 
          alt="Academic Programs"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-ink/70" />
        
        <div className="container-narrow text-center relative z-10">
          <span className="text-caption text-gold mb-6 block">Academic Offerings</span>
          <h1 className="font-serif text-parchment text-5xl md:text-6xl lg:text-7xl mb-6">Programs of Study</h1>
          <div className="rule-gold mx-auto mb-8" style={{ width: '8rem' }} />
          <p className="text-parchment/80 text-lg max-w-2xl mx-auto">
            From foundational certificates to advanced ministerial training, 
            our programs combine academic rigor with spiritual formation.
          </p>
        </div>
      </section>

      {/* Program Pathway */}
      <section className="py-16 bg-gold/10">
        <div className="container-editorial">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-ink rounded-full" />
              <span className="font-medium">Foundation</span>
            </div>
            <ArrowRight size={16} className="text-stone" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-ink rounded-full" />
              <span className="font-medium">Intermediate</span>
            </div>
            <ArrowRight size={16} className="text-stone" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-ink rounded-full" />
              <span className="font-medium">Advanced</span>
            </div>
            <ArrowRight size={16} className="text-stone" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gold rounded-full" />
              <span className="font-medium text-gold">Specialization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div 
                key={program.id} 
                id={program.id}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${index !== programs.length - 1 ? 'pb-16 border-b border-stone/20' : ''}`}
              >
                {/* Program Header */}
                <div className="lg:col-span-1">
                  <span className="text-caption text-gold mb-2 block">{program.subtitle}</span>
                  <h2 className="font-serif text-3xl mb-4">{program.title}</h2>
                  <p className="text-stone mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock size={16} className="text-gold" />
                      <span className="text-stone">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin size={16} className="text-gold" />
                      <span className="text-stone">{program.mode}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <GraduationCap size={16} className="text-gold" />
                      <span className="text-stone">Entry: {program.entryRequirements}</span>
                    </div>
                  </div>

                  {/* Required Text - Consistent position */}
                  <div className="p-4 bg-gold/10 border-l-4 border-gold mb-6">
                    <p className="text-sm">
                      <span className="font-medium text-ink">Required Text:</span>
                      <span className="text-stone block mt-1">{program.textbook}</span>
                    </p>
                  </div>

                  <a 
                    href="https://app-exampro-fdt6ljl6jpxd4.azurewebsites.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-3 px-6"
                  >
                    Apply for this Program
                  </a>
                </div>

                {/* Program Details - Modules only */}
                <div className="lg:col-span-2">
                  <div className="card-editorial">
                    <div className="flex items-center gap-3 mb-6">
                      <BookOpen size={20} className="text-gold" />
                      <h3 className="font-serif text-xl">Course Modules</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {program.modules.map((module, idx) => {
                        const [code, ...nameParts] = module.split(': ')
                        const name = nameParts.join(': ')
                        return (
                          <div key={idx} className="flex items-center gap-4 py-3 border-b border-stone/10 last:border-0">
                            <span className="font-mono text-gold font-semibold text-sm shrink-0">{code}</span>
                            <span className="text-ink text-base font-medium">{name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distance Learning Note */}
      <section className="py-24 bg-stone/5">
        <div className="container-narrow">
          <div className="card-editorial text-center">
            <Globe className="w-10 h-10 mx-auto mb-4 text-gold" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl mb-4">Distance Learning Available</h3>
            <p className="text-stone mb-6 max-w-2xl mx-auto">
              All programs can be completed through our flexible distance learning options. 
              Study from anywhere in the world through our online platform and video course materials.
            </p>
            <Link to="/contact" className="btn-outline">
              Learn About Distance Learning
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-parchment">
        <div className="container-narrow text-center">
          <h2 className="font-serif mb-6">Ready to Begin?</h2>
          <div className="rule mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app-exampro-fdt6ljl6jpxd4.azurewebsites.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Apply Now
            </a>
            <Link to="/contact" className="btn-outline">
              Request Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
