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

const FooterLogo = (props: React.ComponentProps<"svg">) => (
  <svg width="140" height="50" viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M45.2438 20.4458C46.7793 19.3028 48.2176 18.2374 49.8775 17.0079C49.9187 17.7553 49.9733 18.2892 49.9737 18.8232C49.9781 25.0472 49.9592 31.2713 49.9805 37.4952C49.9885 39.8433 49.1896 41.7012 47.1915 43.1192C44.1166 45.3013 41.137 47.6143 37.9455 49.9999C37.8944 49.5043 37.827 49.1534 37.8266 48.8025C37.8182 41.714 37.837 34.6253 37.7945 27.5371C37.7881 26.4637 38.054 25.7409 38.9924 25.0944C41.0963 23.645 43.1013 22.0558 45.2438 20.4458Z" fill="currentColor"/>
    <path d="M11.3557 49.403C8.46483 47.2487 5.71068 45.1109 2.86733 43.0957C1.00451 41.7753 0.019513 40.0704 0.0124146 37.8438C-0.00959283 30.9424 0.00436322 24.0409 0.00436322 16.8235C1.18847 17.7033 2.19046 18.4427 3.18701 19.1891C5.83656 21.1737 8.51009 23.1288 11.1092 25.1759C11.6155 25.5746 12.1266 26.333 12.132 26.9299C12.2006 34.5287 12.1772 42.1284 12.1772 49.919C11.8783 49.7339 11.6664 49.6027 11.3557 49.403Z" fill="currentColor"/>
    <path d="M11.4489 17.5232C8.48053 15.2667 5.59643 13.1038 2.7479 10.8961C-0.267802 8.55895 -0.843408 5.12662 1.27492 2.40923C3.36026 -0.265832 7.29258 -0.74388 10.2091 1.43929C14.7229 4.81825 19.1774 8.27443 23.6572 11.6978C24.1112 12.0447 24.5657 12.3911 25.0902 12.7912C29.8596 9.0927 34.6066 5.4557 39.2983 1.75065C41.0479 0.369027 42.908 -0.361158 45.1354 0.178406C47.5462 0.762389 49.1472 2.22246 49.7832 4.61756C50.4153 6.99813 49.6431 8.98927 47.7438 10.4586C40.2062 16.2901 32.6247 22.0664 24.9694 27.9321C20.4631 24.4618 16.0059 21.0294 11.4489 17.5232Z" fill="currentColor"/>
    <path d="M31.6091 31.4888C31.5679 34.9007 31.6619 38.1911 31.4481 41.4619C31.23 44.7994 28.0873 47.3952 24.7662 47.2774C21.3654 47.1567 18.6071 44.4411 18.4771 41.0514C18.433 39.901 18.4634 38.7478 18.4628 37.5959C18.4615 35.3538 18.4624 33.1116 18.4624 30.5881C20.7566 32.3154 22.9 33.9291 25.1574 35.6287C26.973 34.2303 28.7897 32.808 30.6433 31.4342C30.8614 31.2725 31.2824 31.3773 31.6091 31.4888Z" fill="currentColor"/>
    <path d="M61.996 16V7.6H63.604L67.18 13.528H66.328L69.844 7.6H71.44L71.464 16H69.64L69.628 10.396H69.964L67.156 15.112H66.28L63.412 10.396H63.82V16H61.996ZM73.3369 16V7.6H76.9729C77.7249 7.6 78.3729 7.724 78.9169 7.972C79.4609 8.212 79.8809 8.56 80.1769 9.016C80.4729 9.472 80.6209 10.016 80.6209 10.648C80.6209 11.272 80.4729 11.812 80.1769 12.268C79.8809 12.716 79.4609 13.06 78.9169 13.3C78.3729 13.54 77.7249 13.66 76.9729 13.66H74.4169L75.2809 12.808V16H73.3369ZM78.6769 16L76.5769 12.952H78.6529L80.7769 16H78.6769ZM75.2809 13.024L74.4169 12.112H76.8649C77.4649 12.112 77.9129 11.984 78.2089 11.728C78.5049 11.464 78.6529 11.104 78.6529 10.648C78.6529 10.184 78.5049 9.824 78.2089 9.568C77.9129 9.312 77.4649 9.184 76.8649 9.184H74.4169L75.2809 8.26V13.024ZM86.0972 16.144C85.4332 16.144 84.8212 16.04 84.2612 15.832C83.7092 15.616 83.2252 15.312 82.8092 14.92C82.4012 14.528 82.0812 14.068 81.8492 13.54C81.6252 13.012 81.5132 12.432 81.5132 11.8C81.5132 11.168 81.6252 10.588 81.8492 10.06C82.0812 9.532 82.4052 9.072 82.8212 8.68C83.2372 8.288 83.7252 7.988 84.2852 7.78C84.8452 7.564 85.4612 7.456 86.1332 7.456C86.8772 7.456 87.5452 7.58 88.1372 7.828C88.7372 8.076 89.2412 8.436 89.6492 8.908L88.4012 10.06C88.0972 9.74 87.7652 9.504 87.4052 9.352C87.0452 9.192 86.6532 9.112 86.2292 9.112C85.8212 9.112 85.4492 9.176 85.1132 9.304C84.7772 9.432 84.4852 9.616 84.2372 9.856C83.9972 10.096 83.8092 10.38 83.6732 10.708C83.5452 11.036 83.4812 11.4 83.4812 11.8C83.4812 12.192 83.5452 12.552 83.6732 12.88C83.8092 13.208 83.9972 13.496 84.2372 13.744C84.4852 13.984 84.7732 14.168 85.1012 14.296C85.4372 14.424 85.8052 14.488 86.2052 14.488C86.5892 14.488 86.9612 14.428 87.3212 14.308C87.6892 14.18 88.0452 13.968 88.3892 13.672L89.4932 15.076C89.0372 15.42 88.5052 15.684 87.8972 15.868C87.2972 16.052 86.6972 16.144 86.0972 16.144ZM87.7172 14.824V11.668H89.4932V15.076L87.7172 14.824ZM96.939 7.6H98.883V16H96.939V7.6ZM93.123 16H91.179V7.6H93.123V16ZM97.083 12.556H92.979V10.912H97.083V12.556ZM100.75 16V7.6H102.694V16H100.75ZM108.588 16.144C107.94 16.144 107.336 16.04 106.776 15.832C106.224 15.616 105.744 15.312 105.336 14.92C104.928 14.528 104.608 14.068 104.376 13.54C104.152 13.012 104.04 12.432 104.04 11.8C104.04 11.168 104.152 10.588 104.376 10.06C104.608 9.532 104.928 9.072 105.336 8.68C105.752 8.288 106.236 7.988 106.788 7.78C107.34 7.564 107.944 7.456 108.6 7.456C109.328 7.456 109.984 7.584 110.568 7.84C111.16 8.088 111.656 8.456 112.056 8.944L110.808 10.096C110.52 9.768 110.2 9.524 109.848 9.364C109.496 9.196 109.112 9.112 108.696 9.112C108.304 9.112 107.944 9.176 107.616 9.304C107.288 9.432 107.004 9.616 106.764 9.856C106.524 10.096 106.336 10.38 106.2 10.708C106.072 11.036 106.008 11.4 106.008 11.8C106.008 12.2 106.072 12.564 106.2 12.892C106.336 13.22 106.524 13.504 106.764 13.744C107.004 13.984 107.288 14.168 107.616 14.296C107.944 14.424 108.304 14.488 108.696 14.488C109.112 14.488 109.496 14.408 109.848 14.248C110.2 14.08 110.52 13.828 110.808 13.492L112.056 14.644C111.656 15.132 111.16 15.504 110.568 15.76C109.984 16.016 109.324 16.144 108.588 16.144ZM119.009 7.6H120.953V16H119.009V7.6ZM115.193 16H113.249V7.6H115.193V16ZM119.153 12.556H115.049V10.912H119.153V12.556ZM124.608 10.984H128.652V12.496H124.608V10.984ZM124.752 14.44H129.324V16H122.82V7.6H129.168V9.16H124.752V14.44Z" fill="white"/>
    <path d="M66.016 29.072C65.384 29.072 64.8 28.968 64.264 28.76C63.728 28.544 63.264 28.244 62.872 27.86C62.48 27.476 62.172 27.024 61.948 26.504C61.732 25.984 61.624 25.416 61.624 24.8C61.624 24.184 61.732 23.616 61.948 23.096C62.172 22.576 62.48 22.124 62.872 21.74C63.272 21.356 63.74 21.06 64.276 20.852C64.812 20.636 65.396 20.528 66.028 20.528C66.636 20.528 67.208 20.632 67.744 20.84C68.28 21.04 68.732 21.344 69.1 21.752L68.536 22.316C68.192 21.964 67.812 21.712 67.396 21.56C66.98 21.4 66.532 21.32 66.052 21.32C65.548 21.32 65.08 21.408 64.648 21.584C64.216 21.752 63.84 21.996 63.52 22.316C63.2 22.628 62.948 22.996 62.764 23.42C62.588 23.836 62.5 24.296 62.5 24.8C62.5 25.304 62.588 25.768 62.764 26.192C62.948 26.608 63.2 26.976 63.52 27.296C63.84 27.608 64.216 27.852 64.648 28.028C65.08 28.196 65.548 28.28 66.052 28.28C66.532 28.28 66.98 28.2 67.396 28.04C67.812 27.88 68.192 27.624 68.536 27.272L69.1 27.836C68.732 28.244 68.28 28.552 67.744 28.76C67.208 28.968 66.632 29.072 66.016 29.072ZM69.3181 29L73.1581 20.6H74.0341L77.8741 29H76.9381L73.4101 21.116H73.7701L70.2421 29H69.3181ZM70.8301 26.756L71.0941 26.036H75.9781L76.2421 26.756H70.8301ZM79.1436 29V20.6H82.2876C82.9996 20.6 83.6116 20.716 84.1236 20.948C84.6356 21.172 85.0276 21.5 85.2996 21.932C85.5796 22.356 85.7196 22.872 85.7196 23.48C85.7196 24.072 85.5796 24.584 85.2996 25.016C85.0276 25.44 84.6356 25.768 84.1236 26C83.6116 26.232 82.9996 26.348 82.2876 26.348H79.6356L80.0316 25.928V29H79.1436ZM80.0316 26L79.6356 25.568H82.2636C83.1036 25.568 83.7396 25.388 84.1716 25.028C84.6116 24.66 84.8316 24.144 84.8316 23.48C84.8316 22.808 84.6116 22.288 84.1716 21.92C83.7396 21.552 83.1036 21.368 82.2636 21.368H79.6356L80.0316 20.948V26ZM87.5197 29V20.6H88.4077V29H87.5197ZM92.6528 29V21.368H89.7008V20.6H96.4928V21.368H93.5408V29H92.6528ZM96.0256 29L99.8656 20.6H100.742L104.582 29H103.646L100.118 21.116H100.478L96.9496 29H96.0256ZM97.5376 26.756L97.8016 26.036H102.686L102.95 26.756H97.5376ZM105.851 29V20.6H106.739V28.232H111.443V29H105.851Z" fill="white"/>
    <path d="M62.368 41V32.6H63.256V41H62.368ZM65.8691 41V32.6H66.6011L72.3971 39.896H72.0131V32.6H72.8891V41H72.1571L66.3731 33.704H66.7571V41H65.8691ZM77.8051 41L74.0851 32.6H75.0451L78.5251 40.508H77.9971L81.5011 32.6H82.4011L78.6811 41H77.8051ZM84.2922 36.356H88.7322V37.112H84.2922V36.356ZM84.3882 40.232H89.4402V41H83.5002V32.6H89.2602V33.368H84.3882V40.232ZM93.7235 41.072C93.0995 41.072 92.4995 40.972 91.9235 40.772C91.3555 40.564 90.9155 40.3 90.6035 39.98L90.9515 39.296C91.2475 39.584 91.6435 39.828 92.1395 40.028C92.6435 40.22 93.1715 40.316 93.7235 40.316C94.2515 40.316 94.6795 40.252 95.0075 40.124C95.3435 39.988 95.5875 39.808 95.7395 39.584C95.8995 39.36 95.9795 39.112 95.9795 38.84C95.9795 38.512 95.8835 38.248 95.6915 38.048C95.5075 37.848 95.2635 37.692 94.9595 37.58C94.6555 37.46 94.3195 37.356 93.9515 37.268C93.5835 37.18 93.2155 37.088 92.8475 36.992C92.4795 36.888 92.1395 36.752 91.8275 36.584C91.5235 36.416 91.2755 36.196 91.0835 35.924C90.8995 35.644 90.8075 35.28 90.8075 34.832C90.8075 34.416 90.9155 34.036 91.1315 33.692C91.3555 33.34 91.6955 33.06 92.1515 32.852C92.6075 32.636 93.1915 32.528 93.9035 32.528C94.3755 32.528 94.8435 32.596 95.3075 32.732C95.7715 32.86 96.1715 33.04 96.5075 33.272L96.2075 33.98C95.8475 33.74 95.4635 33.564 95.0555 33.452C94.6555 33.34 94.2675 33.284 93.8915 33.284C93.3875 33.284 92.9715 33.352 92.6435 33.488C92.3155 33.624 92.0715 33.808 91.9115 34.04C91.7595 34.264 91.6835 34.52 91.6835 34.808C91.6835 35.136 91.7755 35.4 91.9595 35.6C92.1515 35.8 92.3995 35.956 92.7035 36.068C93.0155 36.18 93.3555 36.28 93.7235 36.368C94.0915 36.456 94.4555 36.552 94.8155 36.656C95.1835 36.76 95.5195 36.896 95.8235 37.064C96.1355 37.224 96.3835 37.44 96.5675 37.712C96.7595 37.984 96.8555 38.34 96.8555 38.78C96.8555 39.188 96.7435 39.568 96.5195 39.92C96.2955 40.264 95.9515 40.544 95.4875 40.76C95.0315 40.968 94.4435 41.072 93.7235 41.072ZM100.185 41V33.368H97.2332V32.6H104.025V33.368H101.073V41H100.185ZM105.324 41V32.6H106.056L109.896 39.152H109.512L113.316 32.6H114.048V41H113.196V33.932H113.4L109.896 39.932H109.476L105.948 33.932H106.176V41H105.324ZM117.457 36.356H121.897V37.112H117.457V36.356ZM117.553 40.232H122.605V41H116.665V32.6H122.425V33.368H117.553V40.232ZM124.572 41V32.6H125.304L131.1 39.896H130.716V32.6H131.592V41H130.86L125.076 33.704H125.46V41H124.572ZM135.846 41V33.368H132.894V32.6H139.686V33.368H136.734V41H135.846Z" fill="white"/>
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
  { text: 'Company History', href: '#', id: 'who-we-are' },
  { text: 'Meet the Team', href: '#', id: 'who-we-are' },
  { text: 'Employee Handbook', href: '#' },
  { text: 'Careers', href: '#', id: 'careers' },
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
              <FooterLogo className="h-10 w-auto text-white group-hover:text-indigo-400 transition-colors" />
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
                {aboutLinks.map(({ text, href, id }) => (
                  <li key={text}>
                    <a
                      className="text-white/40 hover:text-white transition-colors cursor-pointer"
                      href={href}
                      onClick={(e) => {
                        if (id) {
                          e.preventDefault();
                          onNavigate?.(id);
                        }
                      }}
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
