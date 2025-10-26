export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-background)] text-[var(--color-text-secondary)] border-t border-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
        {/* Left: Navigation Links */}
        <ul className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm sm:text-base">
          <li className="hover:text-[var(--color-primary)] cursor-pointer transition-colors">
            About
          </li>
          <li className="hover:text-[var(--color-primary)] cursor-pointer transition-colors">
            Support
          </li>
          <li className="hover:text-[var(--color-primary)] cursor-pointer transition-colors">
            Terms
          </li>
          <li className="hover:text-[var(--color-primary)] cursor-pointer transition-colors">
            Privacy
          </li>
        </ul>

        {/* Right: Social + Copyright */}
        <div className="flex flex-col items-center sm:items-end gap-2 text-xs sm:text-sm">
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              🌐
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              🐦
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              📸
            </a>
          </div>
          <p className="text-[var(--color-text-secondary)] mt-2">
            © 2025 Xiaomi Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
