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

const Tiktok = (props) => (
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

const FooterLogo = (props) => (
  <svg 
    width="50" 
    height="50" 
    viewBox="0 0 50 50" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M45.2438 20.446C46.7793 19.3029 48.2176 18.2376 49.8775 17.0081C49.9187 17.7554 49.9733 18.2893 49.9737 18.8233C49.9781 25.0473 49.9592 31.2714 49.9805 37.4953C49.9885 39.8435 49.1896 41.7013 47.1915 43.1193C44.1166 45.3014 41.137 47.6144 37.9455 50C37.8944 49.5044 37.827 49.1535 37.8266 48.8026C37.8182 41.714 37.837 34.6255 37.7945 27.5372C37.7881 26.4638 38.054 25.741 38.9924 25.0945C41.0963 23.6451 43.1013 22.056 45.2438 20.446Z" fill="currentColor"/>
    <path d="M11.3557 49.403C8.46483 47.2487 5.71068 45.1109 2.86733 43.0957C1.00451 41.7753 0.019513 40.0704 0.0124146 37.8438C-0.00959283 30.9424 0.00436322 24.0409 0.00436322 16.8235C1.18847 17.7033 2.19046 18.4427 3.18701 19.1891C5.83656 21.1737 8.51009 23.1288 11.1092 25.1759C11.6155 25.5746 12.1266 26.333 12.132 26.9299C12.2006 34.5287 12.1772 42.1284 12.1772 49.919C11.8783 49.7339 11.6664 49.6027 11.3557 49.403Z" fill="currentColor"/>
    <path d="M11.4489 17.5232C8.48053 15.2667 5.59643 13.1038 2.7479 10.8961C-0.267802 8.55895 -0.843408 5.12662 1.27492 2.40923C3.36026 -0.265832 7.29258 -0.74388 10.2091 1.43929C14.7229 4.81825 19.1774 8.27443 23.6572 11.6978C24.1112 12.0447 24.5657 12.3911 25.0902 12.7912C29.8596 9.0927 34.6066 5.4557 39.2983 1.75065C41.0479 0.369027 42.908 -0.361158 45.1354 0.178406C47.5462 0.762389 49.1472 2.22246 49.7832 4.61756C50.4153 6.99813 49.6431 8.98927 47.7438 10.4586C40.2062 16.2901 32.6247 22.0664 24.9694 27.9321C20.4631 24.4618 16.0059 21.0294 11.4489 17.5232Z" fill="currentColor"/>
    <path d="M31.6091 31.4888C31.5679 34.9007 31.6619 38.1911 31.4481 41.4619C31.23 44.7994 28.0873 47.3952 24.7662 47.2774C21.3654 47.1567 18.6071 44.4411 18.4771 41.0514C18.433 39.901 18.4634 38.7478 18.4628 37.5959C18.4615 35.3538 18.4624 33.1116 18.4624 30.5881C20.7566 32.3154 22.9 33.9291 25.1574 35.6287C26.973 34.2303 28.7897 32.808 30.6433 31.4342C30.8614 31.2725 31.2824 31.3773 31.6091 31.4888Z" fill="currentColor"/>
  </svg>
);

const Footer4Col = ({ onNavigate }) => {
  return (
    <footer className="bg-[#030303] text-white py-16 px-6 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate?.('home')}>
            <FooterLogo className="h-10 w-auto text-white" />
            <span className="font-bold text-xl tracking-tight">Mrghiche Capital</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Institutional investment management with strategic discipline and global market agility. Founded in 2019.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="https://instagram.com/mrghiche" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Tiktok className="size-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4">
            <li><button onClick={() => onNavigate?.('who-we-are')} className="text-white/40 hover:text-white text-sm transition-colors text-left">Who we are</button></li>
            <li><button onClick={() => onNavigate?.('portfolio')} className="text-white/40 hover:text-white text-sm transition-colors text-left">Portfolio</button></li>
            <li><button onClick={() => onNavigate?.('careers')} className="text-white/40 hover:text-white text-sm transition-colors text-left">Careers</button></li>
            <li><button onClick={() => onNavigate?.('contact')} className="text-white/40 hover:text-white text-sm transition-colors text-left">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Services</h4>
          <ul className="space-y-4">
            <li><button onClick={() => onNavigate?.('services')} className="text-white/40 hover:text-white text-sm transition-colors text-left">Private Equity</button></li>
            <li><button onClick={() => onNavigate?.('services')} className="text-white/40 hover:text-white text-sm transition-colors text-left">Real Estate</button></li>
            <li><button onClick={() => onNavigate?.('services')} className="text-white/40 hover:text-white text-sm transition-colors text-left">Asset Management</button></li>
            <li><button onClick={() => onNavigate?.('news')} className="text-white/40 hover:text-white text-sm transition-colors text-left">Latest Insights</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li className="flex items-center gap-3"><Mail size={16} /> inquiries@mrghichecapital.com</li>
            <li className="flex items-center gap-3"><Phone size={16} /> +44 (0) 20 7946 0000</li>
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-1" /> 15 Berkeley Square, Mayfair, London</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">© 2025 MRGHICHE CAPITAL. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-white/40">Privacy Policy</a>
          <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-white/40">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer4Col;