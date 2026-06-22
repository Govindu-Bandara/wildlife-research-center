import { MessageCircle } from "lucide-react";
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94721048084"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-canopy text-mist pl-4 pr-5 py-3 shadow-lg shadow-canopy/30 hover:bg-canopy-light transition-colors"
    >
      <MessageCircle size={18} strokeWidth={2} />
      <span className="text-sm font-medium hidden sm:inline">Contact us on WhatsApp</span>
    </a>
  );
}