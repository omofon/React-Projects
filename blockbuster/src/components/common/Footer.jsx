import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        mt-16
        border-t border-(--border-subtle)
        bg-(--bg-primary)
      "
    >
      <div
        className="
          mx-auto max-w-6xl
          px-4 py-6
          flex items-center justify-center gap-2
          text-sm
          text-(--text-muted)
        "
      >
        <FaCopyright className="text-xs" />
        <span>Omofon Studios 2025</span>
      </div>
    </footer>
  );
}
