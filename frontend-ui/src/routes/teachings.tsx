import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Play, PlayCircle } from "lucide-react"

export const Route = createFileRoute("/teachings")({ component: TeachingsPage })

const teachings = [
  {
    id: 1,
    type: "youtube",
    videoId: "2anSyIjgndI",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Biblical Studies",
  },
  {
    id: 2,
    type: "youtube",
    videoId: "20bEaHj4dfY",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Theology",
  },
  {
    id: 3,
    type: "youtube",
    videoId: "Rb0LKZ9ynJ0",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Ministry",
  },
  {
    id: 4,
    type: "youtube",
    videoId: "6ksqil5RnqU",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Biblical Studies",
  },
  {
    id: 5,
    type: "youtube",
    videoId: "YG1Bi7byer4",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Prophecy",
  },
  {
    id: 6,
    type: "youtube",
    videoId: "Q5huEhp7Vg0",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Ministry",
  },
  {
    id: 7,
    type: "youtube",
    videoId: "LnG3MDU3NCM",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Theology",
  },
  {
    id: 8,
    type: "youtube",
    videoId: "eE4whVUJy2s",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Biblical Studies",
  },
  {
    id: 9,
    type: "youtube",
    videoId: "xLmmdr9ytaY",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Ministry",
  },
  {
    id: 10,
    type: "youtube",
    videoId: "mA4l1fhhPd8",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Theology",
  },
  {
    id: 11,
    type: "youtube",
    videoId: "DlDrIlvbcl4",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Prophecy",
  },
  {
    id: 12,
    type: "youtube",
    videoId: "jEvckVhkTNc",
    title: "Teaching Session",
    speaker: "Dr. Richard Oswald Commey",
    category: "Biblical Studies",
  },
]

const categories = ["All", "Biblical Studies", "Theology", "Ministry", "Prophecy"]

function VideoCard({ teaching, index }: { teaching: typeof teachings[0]; index: number }) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://img.youtube.com/vi/${teaching.videoId}/maxresdefault.jpg`

  return (
    <div className="group flex flex-col bg-white border border-stone/10 hover:border-gold transition-all duration-300">
      {/* Thumbnail / Player */}
      <div className="relative aspect-video bg-ink overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${teaching.videoId}?autoplay=1`}
            title={teaching.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            <img
              src={thumb}
              alt={teaching.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.src = `https://img.youtube.com/vi/${teaching.videoId}/hqdefault.jpg`
              }}
            />
            <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors duration-300" />
            {/* Play button */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <div className="w-14 h-14 bg-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play size={22} fill="#0A0A0F" className="text-ink ml-1" />
              </div>
            </button>
            {/* Index number */}
            <div className="absolute top-3 left-3">
              <span className="font-mono text-xs text-parchment/50 font-medium">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            {/* YouTube badge */}
            <div className="absolute top-3 right-3">
              <div className="flex items-center gap-1 bg-ink/70 px-2 py-1">
                <PlayCircle size={12} className="text-gold" />
                <span className="text-parchment/70 text-xs font-medium uppercase tracking-wider">YouTube</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-gold font-medium">{teaching.category}</span>
        </div>
        <div className="h-px bg-stone/10 w-full">
          <div className="h-full bg-gold w-8 group-hover:w-full transition-all duration-500" />
        </div>
        <p className="text-xs text-stone/60 uppercase tracking-wider">{teaching.speaker}</p>
      </div>
    </div>
  )
}

function TeachingsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? teachings
    : teachings.filter(t => t.category === activeCategory)

  return (
    <div className="min-h-screen bg-parchment">
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

      {/* Filter Bar */}
      <section className="bg-white border-b border-stone/10 sticky top-20 z-30">
        <div className="container-editorial">
          <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-ink text-parchment"
                    : "text-stone hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <div className="flex items-center justify-between mb-10">
            <p className="text-stone text-sm">
              Showing <span className="text-ink font-semibold">{filtered.length}</span> teaching{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && <span> in <span className="text-gold font-medium">{activeCategory}</span></span>}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((teaching, index) => (
              <VideoCard key={teaching.id} teaching={teaching} index={index} />
            ))}
          </div>
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
