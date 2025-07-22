// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black">
    <video
  className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
  autoPlay
  muted         // mute to allow autoplay
  loop
  playsInline   // prevents fullscreen on iOS and helps autoplay
  preload="auto"
>
  <source src="/bg.mp4" type="video/mp4" />
</video>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Metic Apparel
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-xl mx-auto">
          Quiet Souls, Loud Visions
        </p>
      </div>
      <div className="absolute bottom-10 z-10 text-center w-full">
        <p className="text-sm text-gray-300">Coming Soon</p>
      </div>
    </section>
  );
}
