import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { BookOpen, Heart, Target } from "lucide-react"

export const Route = createFileRoute("/about")({ component: AboutPage })

function AboutPage() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Page Header with Image Background */}
      <section className="relative py-32 md:py-48 text-parchment overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=1920&q=80" 
          alt="About Ramah Bible College"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-ink/70" />
        
        <div className="container-narrow text-center relative z-10">
          <span className="text-caption text-gold mb-6 block">About Us</span>
          <h1 className="font-serif text-parchment text-5xl md:text-6xl lg:text-7xl mb-6">Our Story</h1>
          <div className="rule-gold mx-auto" style={{ width: '8rem' }} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-caption text-gold mb-6 block">Our Mission</span>
              <h2 className="font-serif mb-8">Equipping the Saints</h2>
              <div className="rule mb-8" />
              
              <div className="space-y-6 text-editorial text-stone">
                <p>
                  The mission statement of this college is based on two key biblical texts. In <strong>Ephesians 4:11-12</strong>, the Bible declares that the main purpose of the five-fold ministry gifts is <em>the equipping of the saints for the work of the ministry</em>.
                </p>
                <p>
                  In <strong>2 Timothy 2:15</strong>, the Bible admonishes Christian workers to <em>study to show themselves approved unto God</em>. It is abundantly clear that Christian education is vital to enhance the maturity of the saints and to empower them through knowledge.
                </p>
                <p>
                  There are three aspects of Christian education:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-3 shrink-0" />
                    <span><strong>Formal</strong> — pursued in a Bible College or Theological seminary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-3 shrink-0" />
                    <span><strong>Non-formal</strong> — unstructured specialized topics delivered seasonally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-3 shrink-0" />
                    <span><strong>Informal</strong> — mentoring relationships for personal growth</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="card-editorial bg-ink text-parchment border-0">
                <BookOpen className="w-10 h-10 text-gold mb-6" strokeWidth={1.5} />
                <blockquote className="font-serif text-2xl italic leading-relaxed mb-6">
                  "The lips of a priest should keep knowledge, and people ought to seek the law from his lips"
                </blockquote>
                <div className="rule-gold mb-4" />
                <p className="text-parchment/60 text-sm">Malachi 2:7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-32 bg-stone/5">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <span className="text-caption text-stone mb-4 block">Our Vision</span>
            <h2 className="font-serif mb-6">What We Aspire To</h2>
            <div className="rule mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence in Education",
                description: "Attaining excellent ministerial training while acquiring a strong foundation in biblical and theological studies"
              },
              {
                icon: Heart,
                title: "Spiritual Formation",
                description: "Maintaining a strong Pentecostal ethos while welcoming Christians from any denominational background"
              },
              {
                icon: BookOpen,
                title: "Biblical Knowledge",
                description: "Preparing believers who can give an answer to anyone who asks for a reason for their faith"
              }
            ].map((item, index) => (
              <div key={index} className="card-editorial text-center">
                <item.icon className="w-8 h-8 mx-auto mb-4 text-gold" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-stone">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 container-narrow">
            <div className="card-editorial">
              <blockquote className="quote-editorial text-center">
                "We believe in the priesthood of all New Testament saints, hence we welcome all believers who desire a deeper knowledge of the Scriptures"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <span className="text-caption text-stone mb-6 block text-center">Our Approach</span>
          <h2 className="font-serif mb-8 text-center">Educational Philosophy</h2>
          <div className="rule mx-auto mb-12" />

          <div className="space-y-8 text-editorial text-stone">
            <p>
              Unfortunately, there are two extremes when it comes to theological education. On one hand, there are Bible colleges where the focus is solely on academic study by liberal theologians devoid of the Spirit. In such colleges, the truth will be elusive since the Holy Spirit is the agent of revelation.
            </p>
            <p>
              On the other hand, there are Bible colleges that have the spiritual ethos but lack sound and rigorous academic standards. Such institutions are really schools of ministry but not Bible colleges — the academic element is absent.
            </p>
            <p>
              According to the book of Proverbs, <em>a false balance is an abomination to the Lord</em>. Ramah Bible College has a sound balance between the academic and the spiritual.
            </p>
            
            <div className="bg-gold/10 p-8 my-12">
              <p className="font-serif text-xl text-ink text-center italic">
                "All faculty members are spirit-filled and mature Christians with sound theological education. Most lecturers have masters and doctoral degrees in biblical studies and theology."
              </p>
            </div>

            <p>
              The goal of Ramah Bible College is to train charismatic Christian leaders and believers on a global scale. Theological education is not only for ordained ministers but also for any serious Christian who wants a deeper understanding of Scripture.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 md:py-32 bg-ink text-parchment">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <span className="text-caption text-gold mb-6 block">Leadership</span>
            <h2 className="font-serif text-parchment text-4xl md:text-5xl mb-6">Our Founder & President</h2>
            <div className="rule-gold mx-auto" style={{ width: '8rem' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] relative overflow-hidden border border-parchment/20">
                <img 
                  src="https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?w=800&q=80" 
                  alt="Dr. Richard Oswald Commey"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-ink/10 hover:bg-transparent transition-all" />
              </div>
              
              {/* Floating quote */}
              <div className="absolute -bottom-6 -right-6 bg-gold text-ink p-6 max-w-xs" style={{ border: '1px solid #0A0A0F' }}>
                <p className="font-serif text-lg leading-snug">
                  "Called as a prophet to the nations"
                </p>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-parchment text-3xl md:text-4xl mb-6">
                Dr. Richard<br />
                <span className="text-gold">Oswald Commey</span>
              </h3>
              
              <div className="space-y-6 text-parchment/70 text-lg leading-relaxed mb-8">
                <p>
                  Born in 1960 in Ghana, Dr. Commey had a life-changing encounter with the risen Lord at age fourteen when he was caught up to heaven. This vision revealed a special calling on his life.
                </p>
                <p>
                  After fifteen years utilizing prophetic gifts and earning degrees in Electrical Engineering, he entered the prophetic office full time in 1995. He has traveled extensively to nations holding prophetic conferences, called as a 'Samuel' in his generation.
                </p>
                <p>
                  As soon as he received the baptism of the Holy Spirit on Christmas day of 1980, he began to experience remarkable manifestations of the revelation gifts. The Lord spoke to him and said he had been called as a prophet to the nations.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Dip.Ed', 'B.ENG', 'MIET', 'BA', 'MA', 'M.Div', 'PhD'].map((credential) => (
                  <span key={credential} className="px-3 py-1.5 border border-parchment/20 text-sm text-parchment/70 hover:border-gold hover:text-gold transition-colors">
                    {credential}
                  </span>
                ))}
              </div>
              
              <div className="p-6 bg-gold/20 border-l-4 border-gold">
                <p className="font-serif text-xl text-parchment italic">
                  "We believe in the priesthood of all New Testament saints, hence we welcome all believers who desire a deeper knowledge of the Scriptures"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-parchment">
        <div className="container-narrow text-center">
          <h2 className="font-serif mb-6">Learn More About Ramah</h2>
          <div className="rule mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs" className="btn-primary">
              Explore Programs
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
