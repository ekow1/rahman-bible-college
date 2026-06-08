import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen, Users, GraduationCap, Globe } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

export const Route = createFileRoute("/")({ component: HomePage })

const slides = [
  {
    id: 1,
    label: "Welcome",
    title: "Ramah Bible College",
    description: "Equipping the saints for the work of the ministry",
    cta: "Explore Programs",
    link: "/programs",
    image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=1920&q=80"
  },
  {
    id: 2,
    label: "Academics",
    title: "Sound Theology",
    description: "Academic rigor meets spiritual formation",
    cta: "View Programs",
    link: "/programs",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&q=80"
  },
  {
    id: 3,
    label: "Global",
    title: "Worldwide Ministry",
    description: "Training leaders across the nations",
    cta: "Learn More",
    link: "/about",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
  }
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const goToSlide = useCallback((index: number, dir: 'next' | 'prev') => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    goToSlide((current + 1) % slides.length, 'next')
  }, [current, goToSlide])

  const prev = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length, 'prev')
  }, [current, goToSlide])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-screen bg-ink overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={s.image} 
              alt={s.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-ink/80" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container-editorial flex flex-col justify-center">
        <div className="max-w-3xl">

          {/* Title with animation */}
          <div className="overflow-hidden mb-8">
            <h1 
              key={current}
              className={`font-serif text-parchment text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.9] transition-all duration-700 ${
                direction === 'next' ? 'animate-slideUp' : 'animate-slideDown'
              }`}
            >
              {slides[current].title}
            </h1>
          </div>

          {/* Description */}
          <div className="overflow-hidden mb-10">
            <p 
              key={`desc-${current}`}
              className={`text-parchment/60 text-xl md:text-2xl font-light max-w-xl transition-all duration-700 delay-100 ${
                direction === 'next' ? 'animate-slideUp' : 'animate-slideDown'
              }`}
            >
              {slides[current].description}
            </p>
          </div>

          {/* CTA */}
          <div className="overflow-hidden">
            <Link
              key={`cta-${current}`}
              to={slides[current].link}
              className={`inline-flex items-center gap-3 text-parchment border-b border-parchment pb-2 hover:text-gold hover:border-gold transition-all duration-300 ${
                direction === 'next' ? 'animate-slideUp' : 'animate-slideDown'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              <span className="text-lg uppercase tracking-wider">{slides[current].cta}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Progress Bars - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-24 left-0 right-0 container-editorial">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index, index > current ? 'next' : 'prev')}
                className="flex-1 group"
              >
                <div className="h-px bg-parchment/20 relative overflow-hidden">
                  <div 
                    className={`absolute inset-y-0 left-0 bg-gold transition-all ${
                      index === current ? 'w-full duration-[5000ms]' : 'w-0'
                    }`}
                    style={index === current ? { transitionTimingFunction: 'linear' } : {}}
                  />
                </div>
                <span className={`text-xs uppercase tracking-wider mt-2 block transition-colors ${
                  index === current ? 'text-gold' : 'text-parchment/70 group-hover:text-parchment'
                }`}>
                  {String(index + 1).padStart(2, '0')} — {slides[index].label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation - Hidden on mobile */}
      <div className="hidden md:flex absolute bottom-24 right-8 lg:right-16 z-20 gap-4">
        <button
          onClick={prev}
          className="w-14 h-14 border border-parchment/30 flex items-center justify-center text-parchment hover:border-gold hover:text-gold transition-all"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="w-14 h-14 border border-parchment/30 flex items-center justify-center text-parchment hover:border-gold hover:text-gold transition-all"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Side text - Desktop only */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <span className="text-caption text-parchment/70 vertical-text">
          Est. 2010 — Spirit-Filled Education
        </span>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          letter-spacing: 0.3em;
        }
      `}</style>
    </section>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Mission Quote Section */}
      <section className="py-24 md:py-32 bg-parchment relative">
        <div className="container-narrow text-center">
          <span className="text-caption text-stone mb-8 block">Our Foundation</span>
          <blockquote className="font-serif text-3xl md:text-4xl italic text-ink mb-8 leading-relaxed">
            "The equipping of the saints for the work of the ministry"
          </blockquote>
          <div className="rule mx-auto mb-8" />
          <p className="text-stone text-lg">
            Ephesians 4:11-12 · 2 Timothy 2:15
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-cream relative overflow-hidden">
        {/* Vertical accent line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-stone/10 hidden lg:block" />
        
        <div className="container-editorial relative">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-caption text-gold mb-4 block">Why Ramah</span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Distinctives That Define Us</h2>
            <div className="rule mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                icon: BookOpen,
                title: "Sound Theology",
                description: "Academic rigor meets spiritual depth. Our curriculum balances intellectual excellence with Spirit led revelation."
              },
              {
                number: "02",
                icon: Users,
                title: "Spirit Filled",
                description: "Mature Christians with Pentecostal ethos. Faculty and students walk in the power and gifts of the Holy Spirit."
              },
              {
                number: "03",
                icon: GraduationCap,
                title: "Flexible Learning",
                description: "On campus and online options. Study from anywhere in the world with our distance learning programs."
              },
              {
                number: "04",
                icon: Globe,
                title: "Global Reach",
                description: "Extension centers worldwide. From Ghana to the UK, Nigeria to Europe, training leaders across nations."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-stone/10 p-10 hover:bg-ink hover:border-ink transition-all duration-500"
              >
                {/* Number - top right */}
                <span className="absolute top-6 right-6 font-serif text-5xl font-bold text-stone/40 group-hover:text-gold transition-colors">
                  {feature.number}
                </span>
                
                {/* Gold left border */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                
                {/* Icon with circular bg */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-cream border-2 border-stone/20 flex items-center justify-center mb-8 group-hover:border-gold group-hover:bg-gold/20 transition-all">
                  <feature.icon className="w-6 h-6 text-gold" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl mb-4 text-ink group-hover:!text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-stone/90 text-base leading-relaxed group-hover:!text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 md:py-32 bg-parchment relative">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left - Sticky Title */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <span className="text-caption text-gold mb-4 block">Academic Programs</span>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Programs of Study</h2>
                <div className="rule mb-8" />
                <p className="text-stone mb-8 text-lg leading-relaxed">
                  From foundational certificates to advanced ministerial training, our programs combine academic rigor with spiritual formation.
                </p>
                <Link to="/programs" className="btn-outline inline-flex items-center group">
                  <span>View All Programs</span>
                  <ArrowRight size={16} className="inline ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Right - Program Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Certificate in Ministry",
                  duration: "3 Months",
                  mode: "Part-time / Online",
                  description: "Foundation in ministry gifts",
                  image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80"
                },
                {
                  title: "Further Certificates",
                  duration: "Variable",
                  mode: "Part-time / Online",
                  description: "Expanded theological training",
                  image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80"
                },
                {
                  title: "Advanced Certificate I",
                  duration: "6 Months",
                  mode: "Part-time / Online",
                  description: "Deeper biblical studies",
                  image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
                },
                {
                  title: "Advanced Certificate II",
                  duration: "9 Months",
                  mode: "Part-time / Online",
                  description: "Advanced competencies",
                  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80"
                },
                {
                  title: "Advanced Certificate III",
                  duration: "12 Months",
                  mode: "Part-time / Online",
                  description: "Comprehensive preparation",
                  image: "https://images.unsplash.com/photo-1470549638415-0a0755be0619?w=600&q=80"
                },
                {
                  title: "Certificate in Prophecy",
                  duration: "Variable",
                  mode: "Online / Intensive",
                  description: "Prophetic ministry training",
                  image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80"
                }
              ].map((program, index) => (
                <Link 
                  key={index} 
                  to="/programs"
                  className="relative aspect-[4/5] overflow-hidden group"
                >
                  {/* Background Image */}
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/50 transition-all" />
                  
                  {/* Bottom gradient for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-caption text-gold text-xs">{program.duration}</span>
                      <span className="text-xs text-parchment/60">{program.mode}</span>
                    </div>
                    <h3 className="font-serif text-xl text-parchment mb-2 group-hover:text-gold transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-parchment/70 text-sm mb-4">{program.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-parchment group-hover:text-gold transition-colors">
                      <span>Learn More</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-colors pointer-events-none" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-ink text-parchment relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, #B8860B 50%, transparent 52%),
                             linear-gradient(-45deg, transparent 48%, #B8860B 50%, transparent 52%)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-editorial relative z-10">
          <div className="text-center mb-16">
            <span className="text-caption text-gold mb-6 block">Testimonials</span>
            <h2 className="font-serif text-parchment text-4xl md:text-5xl mb-6">Voices of Transformation</h2>
            <div className="rule-gold mx-auto" style={{ width: '8rem' }} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Ramah Bible College transformed my understanding of ministry. The prophetic training I received here has equipped me to serve effectively in my local church.",
                name: "Rev. Samuel Mensah",
                role: "Graduate, Certificate in Ministry",
                location: "Ghana"
              },
              {
                quote: "The sound theology and spirit-filled teaching at Ramah prepared me for the work of the ministry. Dr. Commey's mentorship changed my life forever.",
                name: "Pastor Grace Addo",
                role: "Graduate, Advanced Certificate III",
                location: "United Kingdom"
              },
              {
                quote: "Distance learning allowed me to study while working full-time. The online programs are rigorous and spiritually enriching. Highly recommended!",
                name: "Brother James Osei",
                role: "Current Student",
                location: "Nigeria"
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative p-8 border border-parchment/20 hover:border-gold transition-colors">
                <span className="absolute top-4 left-4 text-6xl text-gold/20 font-serif">"</span>
                <p className="text-parchment/80 text-lg leading-relaxed mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="border-t border-parchment/10 pt-6">
                  <p className="font-serif text-parchment text-lg">{testimonial.name}</p>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                  <p className="text-parchment/50 text-xs uppercase tracking-wider mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-parchment border-t border-b border-stone/20">
        <div className="container-narrow text-center">
          <span className="text-caption text-stone mb-6 block">Begin Your Journey</span>
          
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Answer the Call?</h2>
          
          <div className="rule mx-auto mb-8" />
          
          <p className="text-stone text-lg max-w-xl mx-auto mb-10">
            Whether you sense a call to the five-fold ministry or simply desire a deeper understanding of Scripture, Ramah Bible College welcomes you.
          </p>
          
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
