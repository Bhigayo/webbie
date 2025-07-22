// src/components/Gallery.tsx
export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Preview Our Drop
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out"
            >
              {/* Placeholder image blur effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/60 to-black/90 blur-sm z-0" />

              <div className="relative z-10 flex flex-col items-center justify-center h-64 text-center">
                <p className="text-xl font-semibold tracking-wide">Coming Soon</p>
                <p className="text-sm text-gray-400 mt-2">Stay tuned for exclusive visuals</p>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
