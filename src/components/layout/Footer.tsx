import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-canopy text-mist/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-display text-xl text-mist">Wildlife Research<br />& Study Center</h3>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            A dedicated team of wildlife experts organising field visits, conducting wildlife
            assessments across Sri Lanka, and sharing knowledge through lectures and workshops.
          </p>
          <div className="flex gap-4 mt-6 text-sm">
            <a href="#" className="hover:text-clay transition-colors underline">Facebook</a>
            <a href="#" className="hover:text-clay transition-colors underline">Instagram</a>
          </div>
        </div>

        <div>
          <h4 className="text-mist text-sm font-semibold uppercase tracking-wide mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/research" className="hover:text-clay transition-colors">Research & Conservation</Link></li>
            <li><Link to="/field-visits" className="hover:text-clay transition-colors">Field Visits</Link></li>
            <li><Link to="/workshops" className="hover:text-clay transition-colors">Workshops & Training</Link></li>
            <li><Link to="/gallery" className="hover:text-clay transition-colors">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-clay transition-colors">Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-mist text-sm font-semibold uppercase tracking-wide mb-4">Organisation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-clay transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-clay transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-mist text-sm font-semibold uppercase tracking-wide mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={15} /> 077 402 8135</li>
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5" /> Field expeditions conducted islandwide, Sri Lanka</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mist/10 py-6 text-center text-xs text-mist/50">
        © {new Date().getFullYear()} Wildlife Research and Study Center. All rights reserved.
      </div>
    </footer>
  );
}