import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineBloodtype } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-black/70 backdrop-blur-md border-t border-white/10 px-6 py-12 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr] items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <MdOutlineBloodtype size={34} className="text-rose-500" />
            <span>Drop</span>
          </div>
          <p className="text-sm text-gray-300 max-w-md">
            A community-first blood donation platform making it easier to find
            help fast and keep every request transparent.
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-200">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            Live support 24/7
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-200">
            <Link to="/">Home</Link>
            <Link to="/find-blood">Find Blood</Link>
            <Link to="/registration">Register</Link>
            <Link to="/about">About</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white">Stay connected</h3>
          <div className="flex gap-3 text-gray-100">
            {[
              {
                icon: <FaFacebook size={18} />,
                label: "Facebook",
              },
              {
                icon: <FaInstagram size={18} />,
                label: "Instagram",
              },
              {
                icon: <FaLinkedin size={18} />,
                label: "LinkedIn",
              },
              {
                icon: <FaYoutube size={18} />,
                label: "YouTube",
              },
            ].map((item) => (
              <a
                key={item.label}
                className="p-2 rounded-full bg-white/10 border border-white/10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-500/20 transition"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Drop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
