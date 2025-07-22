// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-6 px-6 text-center text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} Metic Apparel. All rights reserved.
    </footer>
  );
}
