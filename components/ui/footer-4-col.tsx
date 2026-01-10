'use client';
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
import { WordmarkIcon } from './header-2';

const Tiktok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 8V7l-1.41.41a6.93 6.93 0 0 1-5 2V3h-4v11a4 4 0 1 1-4-4V6.07a8 8 0 1 0 8 7.93V8.79A11 11 0 0 0 21 8z" />
  </svg>
);

const data = {
  facebookLink: 'https://facebook.com/mrghiche',
  instaLink: 'https://instagram.com/mrghiche',
  twitterLink: 'https://twitter.com/mrghiche',
  tiktokLink: 'https://www.tiktok.com/@mrghiche',
  linkedinLink: 'https://www.linkedin.com/company/mrghiche',
  services: {
    webdev: '#',
    webdesign: '#',
    marketing: '#',
    googleads: '#',
  },
  about: {
    history: '#',
    team: '#',
    handbook: '#',
    careers: '#',
  },
  help: {
    faqs: '#',
    support: '#',
    livechat: '#',
  },
  contact: {
    email: 'hello@mrghichecapital.com',
    phone: '+44 (0) 20 7946 0000',
    address: '15 Berkeley Square, Mayfair, London W1J 6BQ',
  },
  company: {
    name: 'Mrghiche Capital',
    description:
      'Providing institutional-grade investment management and strategic capital growth for global clients. Built on a foundation of discipline and market insight.',
    logo: null,
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Tiktok, label: 'TikTok', href: data.tiktokLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
];

const aboutLinks = [
  { text: 'Company History', href: '#' },
  { text: 'Meet the Team', href: '#' },
  { text: 'Employee Handbook', href: '#' },
  { text: 'Careers', href: '#' },
];

const serviceLinks = [
  { text: 'Private Equity', href: '#' },
  { text: 'Real Estate', href: '#' },
  { text: 'Liquid Markets', href: '#' },
  { text: 'Advisory', href: '#' },
];

const helpfulLinks = [
  { text: 'FAQs', href: '#' },
  { text: 'Support', href: '#' },
  { text: 'Live Chat', href: '#', hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <footer className="bg-white/[0.02] border-t border-white/5 mt-16 w-full rounded-t-[2.5rem] relative z-20">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div 
              className="flex justify-center gap-2 sm:justify-start cursor-pointer group"
              onClick={() => onNavigate?.('home')}
            >
              <WordmarkIcon className="h-6 text-white group-hover:text-indigo-400 transition-colors" />
            </div>

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
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-white/40 hover:text-white transition-colors"
                      href={href}
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
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-white/40 hover:text-white transition-colors"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white uppercase tracking-widest">Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start items-center'
                          : 'text-white/40 hover:text-white transition-colors'
                      }`}
                    >
                      <span className="text-white/40 group-hover:text-white transition-colors">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-indigo-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-indigo-500 relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white uppercase tracking-widest">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <div className="flex items-center justify-center gap-2.5 sm:justify-start">
                      <Icon className="text-white/20 size-4 shrink-0" />
                      {isAddress ? (
                        <address className="text-white/40 not-italic leading-relaxed">
                          {text}
                        </address>
                      ) : (
                        <span className="text-white/40">
                          {text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-xs text-white/20">
              <span className="block sm:inline">All rights reserved. Regulatory disclosures available upon request.</span>
            </p>

            <p className="text-white/20 mt-4 text-xs sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name} Investment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
