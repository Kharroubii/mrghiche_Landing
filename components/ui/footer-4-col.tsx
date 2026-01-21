"use client";

import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

const FooterLogo = (props: React.ComponentProps<"svg">) => (
  <svg width="140" height="50" viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M45.2438 20.4458C46.7793 19.3028 48.2176 18.2374 49.8775 17.0079C49.9187 17.7553 49.9733 18.2892 49.9737 18.8232C49.9781 25.0472 49.9592 31.2713 49.9805 37.4952C49.9885 39.8433 49.1896 41.7012 47.1915 43.1192C44.1166 45.3013 41.137 47.6143 37.9455 49.9999C37.8944 49.5043 37.827 49.1534 37.8266 48.8025C37.8182 41.714 37.837 34.6253 37.7945 27.5371C37.7881 26.4637 38.054 25.7409 38.9924 25.0944C41.0963 23.645 43.1013 22.0558 45.2438 20.4458Z" fill="currentColor"/>
    <path d="M11.3557 49.403C8.46483 47.2487 5.71068 45.1109 2.86733 43.0957C1.00451 41.7753 0.019513 40.0704 0.0124146 37.8438C-0.00959283 30.9424 0.00436322 24.0409 0.00436322 16.8235C1.18847 17.7033 2.19046 18.4427 3.18701 19.1891C5.83656 21.1737 8.51009 23.1288 11.1092 25.1759C11.6155 25.5746 12.1266 26.333 12.132 26.9299C12.2006 34.5287 12.1772 42.1284 12.1772 49.919C11.8783 49.7339 11.6664 49.6027 11.3557 49.403Z" fill="currentColor"/>
    <path d="M11.4489 17.5232C8.48053 15.2667 5.59643 13.1038 2.7479 10.8961C-0.267802 8.55895 -0.843408 5.12662 1.27492 2.40923C3.36026 -0.265832 7.29258 -0.74388 10.2091 1.43929C14.7229 4.81825 19.1774 8.27443 23.6572 11.6978C24.1112 12.0447 24.5657 12.3911 25.0902 12.7912C29.8596 9.0927 34.6066 5.4557 39.2983 1.75065C41.0479 0.369027 42.908 -0.361158 45.1354 0.178406C47.5462 0.762389 49.1472 2.22246 49.7832 4.61756C50.4153 6.99813 49.6431 8.98927 47.7438 10.4586C40.2062 16.2901 32.6247 22.0664 24.9694 27.9321C20.4631 24.4618 16.0059 21.0294 11.4489 17.5232Z" fill="currentColor"/>
    <path d="M31.6091 31.4888C31.5679 34.9007 31.6619 38.1911 31.4481 41.4619C31.23 44.7994 28.0873 47.3952 24.7662 47.2774C21.3654 47.1567 18.6071 44.4411 18.4771 41.0514C18.433 39.901 18.4634 38.7478 18.4628 37.5959C18.4615 35.3538 18.4624 33.1116 18.4624 30.5881C20.7566 32.3154 22.9 33.9291 25.1574 35.6287C26.973 34.2303 28.7897 32.808 30.6433 31.4342C30.8614 31.2725 31.2824 31.3773 31.6091 31.4888Z" fill="currentColor"/>
  </svg>
);

const data = {
  facebookLink: 'https://facebook.com/mrghiche',
  instaLink: 'https://instagram.com/mrghiche',
  twitterLink: 'https://twitter.com/mrghiche',
  tiktokLink: 'https://www.tiktok.com/@mrghiche',
  linkedinLink: 'https://www.linkedin.com/company/mrghiche',
  contact: {
    email: 'hello@mrghichecapital.com',
    phone: '+44 (0) 20 7946 0000',
    address: '15 Berkeley Square, Mayfair, London W1J 6BQ',
  },
  company: {
    name: 'Mrghiche Capital',
    description:
      'Providing institutional-grade investment management and strategic capital growth for global clients. Built on a foundation of discipline and market insight.',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
];

const aboutLinks = [
  { text: 'Who we are', href: '/about', id: 'who-we-are' },
  { text: 'Meet the Team', href: '/about', id: 'who-we-are' },
  { text: 'Projects', href: '/projects', id: 'projects' },
  { text: 'Careers', href: '/careers', id: 'careers' },
];

const serviceLinks = [
  { text: 'Private Equity', href: '/services', id: 'services' },
  { text: 'Real Estate', href: '/services', id: 'services' },
  { text: 'Liquid Markets', href: '/services', id: 'services' },
  { text: 'Advisory', href: '/services', id: 'services' },
];

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer4Col({ onNavigate }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent, href: string, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white/[0.02] border-t border-white/5 mt-16 w-full rounded-t-[2.5rem] relative z-20">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <a 
              href="/"
              onClick={(e) => handleLinkClick(e, '/', 'home')}
              className="flex justify-center gap-2 sm:justify-start cursor-pointer group"
            >
              <FooterLogo className="h-10 w-auto text-white group-hover:text-indigo-400 transition-colors" />
            </a>

            <p className="text-white/40 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left text-sm">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white uppercase tracking-widest">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href, id }) => (
                  <li key={text}>
                    <a
                      className="text-white/40 hover:text-white transition-colors cursor-pointer"
                      href={href}
                      onClick={(e) => handleLinkClick(e, href, id)}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white uppercase tracking-widest">Strategies</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href, id }) => (
                  <li key={text}>
                    <a
                      className="text-white/40 hover:text-white transition-colors cursor-pointer"
                      href={href}
                      onClick={(e) => handleLinkClick(e, href, id)}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white uppercase tracking-widest">Legal</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li><a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/40 hover:text-white transition-colors">Disclosures</a></li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white uppercase tracking-widest">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm text-white/40">
                <li>{data.contact.email}</li>
                <li>{data.contact.phone}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-xs text-white/20">
              &copy; 2025 {data.company.name} Investment. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}