"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Oversized Metic Tee",
    price: "£45",
    image: "/products/tee1.jpg",
    status: "Coming Soon",
  },
  {
    id: 2,
    name: "Heavyweight Hoodie",
    price: "£65",
    image: "/products/hoodie1.jpg",
    status: "Limited",
  },
  {
    id: 3,
    name: "Cherry Crop Top",
    price: "£38",
    image: "/products/crop1.jpg",
    status: "Coming Soon",
  },
];

// Simple Badge replacement component
function Badge({ children, variant }: { children: React.ReactNode; variant?: string }) {
  const base = "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold";
  const variants: Record<string, string> = {
    default: "bg-gray-700 text-white",
    secondary: "bg-purple-600 text-white",
    destructive: "bg-red-600 text-white",
    outline: "border border-gray-400 text-gray-400",
  };
  return (
    <span className={`${base} ${variants[variant || "default"]}`}>
      {children}
    </span>
  );
}

// Simple Button replacement component
function Button({
  children,
  disabled,
  variant,
  size,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "default" | "ghost";
  size?: "default" | "sm" | "lg";
}) {
  const base = "rounded-md font-medium transition-colors focus:outline-none focus:ring";
  
  const variantStyles: Record<string, string> = {
    default: "bg-black text-white hover:bg-neutral-800",
    ghost: "bg-transparent text-white hover:bg-neutral-700",
  };

  const sizeStyles: Record<string, string> = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1 text-xs",
    lg: "px-6 py-3 text-base",
  };

  const disabledStyles = disabled
    ? "bg-gray-500 text-gray-300 cursor-not-allowed hover:bg-gray-500"
    : "";

  return (
    <button
      className={`${base} ${variantStyles[variant || "default"]} ${sizeStyles[size || "default"]} ${disabledStyles}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Shop the Drop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <span className="text-sm text-gray-400">{product.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{product.status}</Badge>
                  <Button variant="ghost" size="sm" disabled>
                    View
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
