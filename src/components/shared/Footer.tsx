"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">eLaundry</h3>
          <p className="text-gray-200">
            eLaundry is your trusted laundry service. We provide fast, reliable,
            and affordable laundry and dry-cleaning services at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Wash
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Iron
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Wash & Iron
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Dry Cleaning
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="tel:+8801XXXXXXXXX" className="hover:text-gray-300 flex items-center">
                <Phone size={16} /> <span className="ml-2">+880 1XXXXXXXXX</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@elaundry.com" className="hover:text-gray-300 flex items-center">
                <Mail size={16} /> <span className="ml-2">info@elaundry.com</span>
              </a>
            </li>
            <li>
              <span className="flex items-center">
                <MapPin size={16} /> <span className="ml-2">Dhaka, Bangladesh</span>
              </span>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-blue-700 text-center py-4 text-gray-300">
        &copy; {new Date().getFullYear()} eLaundry. All rights reserved. A Product of <span className="font-bold text-white">
          <Link href="https://orbgenix.com" target="_blank">OrbGenix</Link>
          </span>.
      </div>
    </footer>
  );
}
