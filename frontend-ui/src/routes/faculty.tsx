import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/faculty")({ component: FacultyPage })

const facultyMembers = [
  {
    name: "Dr. Richard Oswald Commey",
    credentials: "Dip.Ed, B.ENG, MIET, BA, MA, M.Div, PhD",
    role: "President and Senior Lecturer",
    department: "Ministerial Studies",
    bio: "Founder of Ramah Bible College with over 25 years in prophetic and teaching ministry. Specializes in Old Testament prophetic texts.",
    specializations: ["Prophetic Ministry", "Old Testament", "Leadership"]
  },
  {
    name: "Professor George Kwamena Toworfe",
    credentials: "Dip.Ed, B.Sc, MThs, M.Phil, PhD",
    role: "Dean and Senior Lecturer",
    department: "Ministerial Studies",
    bio: "Academic leader with extensive experience in theological education and ministerial formation.",
    specializations: ["Theological Education", "Academic Leadership"]
  },
  {
    name: "Rev. Moses Owusu-Sekyere",
    credentials: "Dip Ed, BA, MA, MA, MPhil, PhD.c",
    role: "Senior Lecturer",
    department: "Practical Theology",
    bio: "Doctoral candidate with expertise in practical theology and pastoral ministry.",
    specializations: ["Practical Theology", "Pastoral Care"]
  },
  {
    name: "Rev. Francis Marfo",
    credentials: "Dip.Ed, MA, MBA",
    role: "Lecturer",
    department: "Research Methods",
    bio: "Combines theological training with business acumen. Specializes in research methodology.",
    specializations: ["Research Methods", "Academic Writing"]
  },
  {
    name: "Dr. Benedict Babatunde Olagunju",
    credentials: "BSc, MA, DD",
    role: "Lecturer",
    department: "Practical Theology",
    bio: "Experienced minister and educator with focus on practical aspects of ministry.",
    specializations: ["Practical Theology", "Church Leadership"]
  },
  {
    name: "Dr. Patrick Agdomar",
    credentials: "BSc, MA, DD",
    role: "Lecturer",
    department: "Practical Theology",
    bio: "Dedicated to equipping students with practical ministry skills.",
    specializations: ["Practical Theology", "Ministry Training"]
  },
  {
    name: "Pastor Eric Frimpong",
    credentials: "MA, MDiv, DMin.c",
    role: "Lecturer",
    department: "Practical Theology",
    bio: "Doctoral candidate in ministry with extensive pastoral experience.",
    specializations: ["Pastoral Ministry", "Church Growth"]
  },
  {
    name: "Mr. Kalu Donald Chioba",
    credentials: "B.Eng, MSc",
    role: "Lecturer",
    department: "New Testament Greek",
    bio: "Brings technical precision to biblical language studies.",
    specializations: ["New Testament Greek", "Biblical Languages"]
  }
]

function FacultyPage() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero with Image Background */}
      <section className="relative py-32 md:py-48 text-parchment overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1920&q=80" 
          alt="Faculty"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-ink/70" />
        
        <div className="container-narrow text-center relative z-10">
          <span className="text-caption text-gold mb-6 block">Academic Leadership</span>
          <h1 className="font-serif text-parchment text-5xl md:text-6xl lg:text-7xl mb-6">Faculty & Staff</h1>
          <div className="rule-gold mx-auto mb-8" style={{ width: '8rem' }} />
          <p className="text-parchment/80 text-lg max-w-2xl mx-auto">
            Our faculty members are spirit-filled and mature Christians with sound theological education.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="container-editorial">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-caption text-gold mb-4 block">Meet Our Team</span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Distinguished Faculty</h2>
            <div className="rule mx-auto" />
            <p className="text-stone mt-6 max-w-2xl mx-auto">
              Spirit-filled educators with advanced theological training and ministerial experience
            </p>
          </div>

          {/* Horizontal Faculty Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {facultyMembers.map((faculty, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-stone/10 hover:border-gold transition-all duration-500 flex flex-col sm:flex-row overflow-hidden"
              >
                {/* Left: Image Area */}
                <div className="sm:w-48 md:w-56 flex-shrink-0 relative bg-stone/20 overflow-hidden">
                  <img 
                    src={[
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
                      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
                      "https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?w=400&q=80",
                      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80"
                    ][index]} 
                    alt={faculty.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x400/1a1a1a/666?text=Photo";
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Index number */}
                  <div className="absolute bottom-4 left-4">
                    <span className="font-serif text-5xl font-bold text-white/30 group-hover:text-gold/50 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                {/* Right: Content Area */}
                <div className="flex-1 p-6 sm:p-5 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg text-ink group-hover:text-gold transition-colors leading-tight">
                          {faculty.name}
                        </h3>
                        <p className="text-xs text-stone mt-1 uppercase tracking-wider">{faculty.role}</p>
                      </div>
                      <span className="text-xs uppercase tracking-wider text-gold font-medium shrink-0">
                        {faculty.department}
                      </span>
                    </div>
                    
                    {/* Gold rule */}
                    <div className="h-px bg-stone/10 w-full">
                      <div className="h-full bg-gold w-12 group-hover:w-full transition-all duration-500" />
                    </div>
                    
                    {/* Bio */}
                    <p className="text-stone/80 text-sm leading-relaxed">
                      {faculty.bio}
                    </p>
                    
                    {/* Credentials */}
                    <div className="flex flex-wrap gap-1">
                      {faculty.credentials.split(', ').slice(0, 3).map((cred, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-ink/5 text-xs text-stone">
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Footer: Specializations */}
                  <div className="pt-4 mt-4 border-t border-stone/10 flex flex-wrap gap-2">
                    {faculty.specializations.map((spec, idx) => (
                      <span key={idx} className="text-xs text-gold/80 font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
