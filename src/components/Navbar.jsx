import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[rgba(11,11,16,0.6)] border-b border-[rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:py-5">
        <h1
          onClick={() => handleScroll("hero")}
          className="text-xl md:text-2xl font-semibold text-[var(--color-primary)] cursor-pointer"
        >
          Redmi
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[var(--color-text-primary)] text-sm">
          <li className="cursor-pointer hover:text-[var(--color-secondary)] transition" onClick={() => handleScroll("features")}>Features</li>
          <li className="cursor-pointer hover:text-[var(--color-secondary)] transition" onClick={() => handleScroll("design")}>Design</li>
          <li className="cursor-pointer hover:text-[var(--color-secondary)] transition" onClick={() => handleScroll("camera")}>Camera</li>
          <li className="cursor-pointer hover:text-[var(--color-secondary)] transition" onClick={() => handleScroll("performance")}>Performance</li>
          <li>
            <button
              onClick={() => handleScroll("cta")}
              className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-4 py-2 rounded-lg transition font-medium"
            >
              ⚡ Buy Now
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[var(--color-text-primary)] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[rgba(11,11,16,0.95)] backdrop-blur-lg border-t border-[rgba(255,255,255,0.1)]">
          <ul className="flex flex-col space-y-4 p-6 text-[var(--color-text-primary)] text-base">
            <li onClick={() => handleScroll("features")} className="cursor-pointer hover:text-[var(--color-secondary)] transition">Features</li>
            <li onClick={() => handleScroll("design")} className="cursor-pointer hover:text-[var(--color-secondary)] transition">Design</li>
            <li onClick={() => handleScroll("camera")} className="cursor-pointer hover:text-[var(--color-secondary)] transition">Camera</li>
            <li onClick={() => handleScroll("performance")} className="cursor-pointer hover:text-[var(--color-secondary)] transition">Performance</li>
            <li>
              <button
                onClick={() => handleScroll("cta")}
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-4 py-2 rounded-lg transition font-medium"
              >
                ⚡ Buy Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
