import { createFileRoute } from "@tanstack/react-router"
import { useState, useEffect, useCallback } from "react"
import { Play, PlayCircle, Search, X, Filter } from "lucide-react"

export const Route = createFileRoute("/teachings")({ component: TeachingsPage })

const teachings = [
  { id: 1, videoId: "2anSyIjgndI", title: "Walking in the Spirit", speaker: "Dr. Richard Oswald Commey", category: "Biblical Studies" },
  { id: 2, videoId: "20bEaHj4dfY", title: "The Power of the Holy Ghost", speaker: "Dr. Richard Oswald Commey", category: "Theology" },
  { id: 3, videoId: "Rb0LKZ9ynJ0", title: "Principles of Effective Ministry", speaker: "Dr. Richard Oswald Commey", category: "Ministry" },
  { id: 4, videoId: "6ksqil5RnqU", title: "Unlocking the Scriptures", speaker: "Dr. Richard Oswald Commey", category: "Biblical Studies" },
  { id: 5, videoId: "YG1Bi7byer4", title: "The Prophetic Office", speaker: "Dr. Richard Oswald Commey", category: "Prophecy" },
  { id: 6, videoId: "Q5huEhp7Vg0", title: "Building the Local Church", speaker: "Dr. Richard Oswald Commey", category: "Ministry" },
  { id: 7, videoId: "LnG3MDU3NCM", title: "Understanding Soteriology", speaker: "Dr. Richard Oswald Commey", category: "Theology" },
  { id: 8, videoId: "eE4whVUJy2s", title: "Hermeneutics & Bible Interpretation", speaker: "Dr. Richard Oswald Commey", category: "Biblical Studies" },
  { id: 9, videoId: "xLmmdr9ytaY", title: "Pastoral Leadership", speaker: "Dr. Richard Oswald Commey", category: "Ministry" },
  { id: 10, videoId: "mA4l1fhhPd8", title: "Christology: The Person of Christ", speaker: "Dr. Richard Oswald Commey", category: "Theology" },
  { id: 11, videoId: "DlDrIlvbcl4", title: "Activating the Prophetic Gift", speaker: "Dr. Richard Oswald Commey", category: "Prophecy" },
  { id: 12, videoId: "jEvckVhkTNc", title: "Gospel of John: Deep Study", speaker: "Dr. Richard Oswald Commey", category: "Biblical Studies" },
]

const categories = ["All", "Biblical Studies", "Theology", "Ministry", "Prophecy"]

type Teaching = typeof teachings[0]

function VideoModal({ teaching, onClose }: { teaching: Teaching; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/90 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xs uppercase tracking-wider text-gold font-medium">{teaching.category}</span>
            <h3 className="font-serif text-parchment text-xl mt-1">{teaching.title}</h3>
            <p className="text-parchment/50 text-xs uppercase tracking-wider mt-0.5">{teaching.speaker}</p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-parchment/60 hover:text-parchment transition-colors text-sm"
          >
            <X size={18} />
            <span className="text-xs uppercase tracking-wider hidden sm:block">Close</span>
          </button>
        </div>

        {/* Video */}
        <div className="relative aspect-video bg-ink w-full">
          <iframe
            src={`https://www.youtube.com/embed/${teaching.videoId}?autoplay=1&rel=0`}
            title={teaching.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Hint */}
        <p className="text-parchment/30 text-xs text-center mt-3 uppercase tracking-wider">
          Press Esc or click outside to close
        </p>
      </div>
    </div>
  )
}

function VideoCard({ teaching, index, onPlay }: { teaching: Teaching; index: number; onPlay: (t: Teaching) => void }) {
  const thumb = `https://img.youtube.com/vi/${teaching.videoId}/maxresdefault.jpg`

  return (
    <div
      className="group flex flex-col bg-white border border-stone/10 hover:border-gold transition-all duration-300 cursor-pointer"
      onClick={() => onPlay(teaching)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-ink overflow-hidden">
        <img
          src={thumb}
          alt={teaching.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            const t = e.target as HTMLImageElement
            t.src = `https://img.youtube.com/vi/${teaching.videoId}/hqdefault.jpg`
          }}
        />
        <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/10 transition-colors duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Play size={18} fill="#0A0A0F" className="text-ink ml-0.5" />
          </div>
        </div>

        {/* Index */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-xs text-parchment/50">{String(index + 1).padStart(2, "0")}</span>
        </div>

        {/* Category pill */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-ink/80 text-gold text-xs px-2 py-0.5 uppercase tracking-wider font-medium">
            {teaching.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-ink text-base leading-snug group-hover:text-gold transition-colors">
          {teaching.title}
        </h3>
        <div className="h-px bg-stone/10 w-full mt-auto">
          <div className="h-full bg-gold w-8 group-hover:w-full transition-all duration-500" />
        </div>
        <p className="text-sm text-stone font-medium">{teaching.speaker}</p>
      </div>
    </div>
  )
}

function TeachingsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeVideo, setActiveVideo] = useState<Teaching | null>(null)

  const filtered = teachings.filter(t => {
    const matchCat = activeCategory === "All" || t.category === activeCategory
    const matchSearch = searchQuery === "" ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.speaker.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  const handleClose = useCallback(() => setActiveVideo(null), [])

  return (
    <div className="min-h-screen bg-parchment">
      {/* Modal */}
      {activeVideo && <VideoModal teaching={activeVideo} onClose={handleClose} />}

      {/* Hero */}
      <section className="relative py-32 md:py-48 text-parchment overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1920&q=80"
          alt="Teachings"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="container-narrow text-center relative z-10">
          <span className="text-caption text-gold mb-6 block">Video Library</span>
          <h1 className="font-serif text-parchment text-5xl md:text-6xl lg:text-7xl mb-6">Teachings</h1>
          <div className="rule-gold mx-auto mb-8" style={{ width: '8rem' }} />
          <p className="text-parchment/80 text-lg max-w-2xl mx-auto">
            Spirit-filled messages and biblical teachings from the faculty of Ramah Bible College.
          </p>
        </div>
      </section>

      {/* Filter + Search Bar */}
      <section className="bg-white border-b border-stone/10 sticky top-20 z-30 shadow-sm">
        <div className="container-editorial">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-4">

            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone/50" />
              <input
                type="text"
                placeholder="Search teachings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-sm border border-stone/20 bg-parchment/50 text-ink placeholder:text-stone/40 focus:border-gold focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone/40 hover:text-ink transition-colors"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-5 w-px bg-stone/20" />

            {/* Filter icon label */}
            <div className="flex items-center gap-2 text-stone/50 shrink-0">
              <Filter size={13} />
              <span className="text-xs uppercase tracking-wider">Filter</span>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-ink text-parchment border-ink"
                      : "text-stone border-stone/20 hover:border-ink hover:text-ink bg-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-stone text-sm">
              <span className="text-ink font-semibold">{filtered.length}</span> teaching{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && <span> in <span className="text-gold font-medium">{activeCategory}</span></span>}
              {searchQuery && <span> matching <span className="text-gold font-medium">"{searchQuery}"</span></span>}
            </p>
            {(searchQuery || activeCategory !== "All") && (
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All") }}
                className="text-xs text-stone/50 hover:text-ink transition-colors flex items-center gap-1"
              >
                <X size={12} /> Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-stone/40 mb-3">No teachings found</p>
              <p className="text-stone/30 text-sm">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((teaching, index) => (
                <VideoCard key={teaching.id} teaching={teaching} index={index} onPlay={setActiveVideo} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-parchment">
        <div className="container-narrow text-center">
          <span className="text-caption text-gold mb-4 block">Stay Connected</span>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">More Teachings Coming</h2>
          <div className="rule-gold mx-auto mb-8" style={{ width: '6rem' }} />
          <p className="text-parchment/70 mb-8 max-w-md mx-auto">
            Subscribe to our YouTube channel to receive new teachings and messages as they are published.
          </p>
          <a
            href="https://www.youtube.com/@ramahbiblecollege"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <PlayCircle size={16} />
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  )
}
