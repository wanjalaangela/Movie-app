'use client';

import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl font-bold">M</span>
            <span>Moovie</span>
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://apps.apple.com/us/app/apple-store/id375380948"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              className="inline-block"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                alt="Download on the App Store"
                className="h-12 object-contain"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.example.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="inline-block"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-12 object-contain"
              />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">My list</a></li>
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">General Info</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us:</h4>
          <p className="text-sm">support@egymovies.com</p>
          <p className="text-sm mb-3">Tel: +201045963322</p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-yellow-500">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Share Website Via:</h4>
          <div className="flex flex-col space-y-3 text-sm">
            <a href="#" className="flex items-center space-x-2 hover:text-yellow-500">
              <FaFacebookF />
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-yellow-500">
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
        © 2023 Movies. All rights reserved.
      </div>
    </footer>
  );
}
