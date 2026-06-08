import { createFileRoute, Link } from "@tanstack/react-router"
import { Clock, MapPin, BookOpen, ArrowRight, GraduationCap, Globe } from "lucide-react"

export const Route = createFileRoute("/programs")({ component: ProgramsPage })

const programs = [
  {
    id: "certificate-ministry",
    title: "Certificate in Ministry",
    subtitle: "Foundation Level",
    duration: "3 Months",
    mode: "Part-time Residential / Online Zoom",
    entryRequirements: "None",
    textbook: "Ministry Gifts by Dr Richard Oswald Commey",
    modules: [
      "The Concept of Ministry",
      "The Governmental Offices in the Old Testament",
      "The Divine Call",
      "The Ministry Gifts",
      "The Office of the Apostle",
      "The Office of the Prophet",
      "The Office of an Evangelist",
      "The Office of a Pastor",
      "The Office of a Teacher",
      "Jesus Christ: The Role Model for New Testament Ministry"
    ],
    description: "An introductory program designed to establish foundational understanding of ministry gifts and the five-fold offices. Perfect for those beginning their journey in Christian service."
  },
  {
    id: "further-certificates",
    title: "Further Certificates in Ministry",
    subtitle: "Extended Foundation",
    duration: "Variable",
    mode: "Part-time / Online",
    entryRequirements: "Certificate in Ministry or equivalent",
    textbook: "Various texts assigned per module",
    modules: [
      "Advanced Hermeneutics",
      "Old Testament Survey",
      "New Testament Survey",
      "Church History",
      "Systematic Theology I",
      "Practical Ministry Skills",
      "Leadership Development"
    ],
    description: "Expanded theological and practical training for those who have completed the foundational certificate. Deeper exploration of biblical studies and ministry competencies."
  },
  {
    id: "advanced-1",
    title: "Advanced Certificate in Ministry I",
    subtitle: "Intermediate Level",
    duration: "6 Months",
    mode: "Part-time / Online",
    entryRequirements: "Further Certificates or equivalent experience",
    textbook: "Advanced Ministry Texts",
    modules: [
      "Biblical Exegesis Methods",
      "Pentateuch Studies",
      "Prophetic Literature",
      "Systematic Theology II",
      "Homiletics",
      "Pastoral Care",
      "Church Administration"
    ],
    description: "Intermediate program focusing on deeper biblical studies, leadership development, and pastoral competencies. Prepares students for more significant ministry responsibilities."
  },
  {
    id: "advanced-2",
    title: "Advanced Certificate in Ministry II",
    subtitle: "Advanced Level",
    duration: "9 Months",
    mode: "Part-time / Online",
    entryRequirements: "Advanced Certificate I or equivalent",
    textbook: "Graduate-level theological texts",
    modules: [
      "Advanced Biblical Greek",
      "New Testament Exegesis",
      "Pauline Theology",
      "Contemporary Theological Issues",
      "Ministry Ethics",
      "Strategic Leadership",
      "Mission and Evangelism"
    ],
    description: "Advanced ministerial preparation with emphasis on biblical languages, theological depth, and strategic leadership for effective ministry in diverse contexts."
  },
  {
    id: "advanced-3",
    title: "Advanced Certificate in Ministry III",
    subtitle: "Comprehensive Level",
    duration: "12 Months",
    mode: "Part-time / Online",
    entryRequirements: "Advanced Certificate II",
    textbook: "Seminary-level comprehensive texts",
    modules: [
      "Advanced Hebrew Studies",
      "Old Testament Exegesis",
      "Biblical Theology",
      "Historical Theology",
      "Research Methodology",
      "Thesis Preparation",
      "Advanced Pastoral Counseling"
    ],
    description: "Our most comprehensive certificate program, equivalent to graduate-level theological education. Includes research methodology and thesis preparation for serious ministry scholars."
  },
  {
    id: "certificate-prophecy",
    title: "Certificate in Prophecy",
    subtitle: "Specialized Track",
    duration: "Variable / Intensive Options",
    mode: "Online / Intensive Workshops",
    entryRequirements: "Open to all believers with pastoral recommendation",
    textbook: "Prophetic Ministry Texts by Dr. Commey",
    modules: [
      "The Prophetic Office in Scripture",
      "Old Testament Prophetic Models",
      "New Testament Prophetic Ministry",
      "The Revelation Gifts",
      "Prophetic Protocol",
      "Activating Prophetic Ministry",
      "Mentoring in the Prophetic"
    ],
    description: "Specialized training in prophetic ministry, unique to Ramah Bible College's identity. Based on Dr. Commey's decades of experience in the prophetic office and teaching."
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

                  <Link 
                    to="/apply" 
                    className="btn-primary text-xs py-3 px-6"
                  >
                    Apply for this Program
                  </Link>
                </div>

                {/* Program Details - Modules only */}
                <div className="lg:col-span-2">
                  <div className="card-editorial">
                    <div className="flex items-center gap-3 mb-6">
                      <BookOpen size={20} className="text-gold" />
                      <h3 className="font-serif text-xl">Course Modules</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {program.modules.map((module, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-gold font-medium text-sm">{String(idx + 1).padStart(2, '0')}</span>
                          <span className="text-stone text-sm">{module}</span>
                        </div>
                      ))}
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
            <Link to="/apply" className="btn-primary">
              Apply Now
            </Link>
            <Link to="/contact" className="btn-outline">
              Request Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
