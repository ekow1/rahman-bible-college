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
      "Introduction to Biblical Studies",
      "Old Testament Survey",
      "New Testament Survey",
      "Biblical Hermeneutics",
      "Pentateuch Studies",
      "Gospels and Acts",
      "Pauline Epistles",
      "General Epistles and Revelation",
      "Biblical Geography",
      "The Life and Ministry of Jesus"
    ],
    description: "A comprehensive foundation in biblical knowledge, exploring both Old and New Testaments. Perfect for those seeking to understand Scripture more deeply and apply it to their lives."
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
      "The Concept of Ministry",
      "The Divine Call",
      "The Ministry Gifts",
      "The Office of the Apostle",
      "The Office of the Prophet",
      "The Office of an Evangelist",
      "The Office of a Pastor",
      "The Office of a Teacher",
      "Practical Ministry Skills",
      "Jesus Christ: The Role Model for Ministry"
    ],
    description: "An introductory program designed to establish foundational understanding of ministry gifts and the five-fold offices. Ideal for those beginning their journey in Christian service."
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
      "Introduction to Theology",
      "The Doctrine of God",
      "The Doctrine of Christ",
      "The Doctrine of the Holy Spirit",
      "The Doctrine of the Church",
      "The Doctrine of Salvation",
      "The Doctrine of Eschatology",
      "Christian Ethics",
      "Church History Overview",
      "Contemporary Theological Issues"
    ],
    description: "A systematic exploration of Christian doctrine and theology. Provides a solid theological foundation for believers seeking to understand and articulate their faith."
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
      "Advanced Hermeneutics",
      "Biblical Hebrew: Elementary",
      "Biblical Greek: Elementary",
      "Old Testament Exegesis",
      "New Testament Exegesis",
      "Biblical Theology",
      "Textual Criticism",
      "Archaeology and the Bible",
      "Ancient Near Eastern Context",
      "The Intertestamental Period"
    ],
    description: "Advanced study of Scripture with introduction to biblical languages. Develops skills in exegesis and deeper understanding of biblical texts and their contexts."
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
      "Advanced Homiletics",
      "Pastoral Counseling",
      "Church Administration",
      "Strategic Leadership",
      "Missions and Evangelism",
      "Worship Ministry",
      "Youth and Children's Ministry",
      "Discipleship Development",
      "Conflict Resolution",
      "Ministry Ethics and Professionalism"
    ],
    description: "Advanced preparation for ministry leadership. Covers pastoral care, church management, and specialized ministry areas for effective service in diverse contexts."
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
      "Historical Theology",
      "Advanced Christology",
      "Pneumatology: Doctrine of the Spirit",
      "Soteriology: Doctrine of Salvation",
      "Ecclesiology: Doctrine of the Church",
      "Eschatology: Doctrine of Last Things",
      "Apologetics",
      "Comparative Religions",
      "Contemporary Theological Movements",
      "Research and Writing in Theology"
    ],
    description: "Advanced theological study with emphasis on historical development of doctrine and contemporary theological discourse. Prepares students for teaching and theological writing."
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
