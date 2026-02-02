import React, { useState, useEffect } from 'react';
import { Button, buttonVariants } from './button';
import { cn } from '../../lib/utils';
import { MenuToggleIcon } from './menu-toggle-icon';
import { useScroll } from './use-scroll';

interface HeaderProps {
	activePage?: string;
	onNavigate?: (page: string) => void;
}

export function Header({ activePage = 'home', onNavigate }: HeaderProps) {
	const [open, setOpen] = useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'Who we are', id: 'who-we-are' },
		{ label: 'Portfolio', id: 'portfolio' },
		{ label: 'Services', id: 'services' },
		{ label: 'News', id: 'news' },
		{ label: 'Careers', id: 'careers' },
		{ label: 'Contact Us', id: 'contact' },
	];

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	const handleNav = (id: string) => {
		onNavigate?.(id);
		setOpen(false);
	};

	return (
		<header
			className={cn(
				'fixed left-1/2 -translate-x-1/2 z-[60] w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
				{
					'top-4 max-w-[95%] md:max-w-6xl bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl py-2': scrolled && !open,
					'top-0 max-w-full bg-transparent border-transparent py-6': !scrolled && !open,
					'top-0 max-w-full bg-black border-none h-screen rounded-none py-4': open
				}
			)}
		>
			<nav
				className={cn(
					'flex w-full items-center justify-between px-6 mx-auto transition-all duration-500',
					{ 'px-4': scrolled }
				)}
			>
				<div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
					<WordmarkIcon className="h-8 w-auto" />
				</div>
				
				<div className="hidden items-center gap-1 md:flex">
					<div className="flex items-center gap-1 mr-4">
						{links.map((link, i) => (
							<button 
								key={i} 
								onClick={() => handleNav(link.id)}
								className={buttonVariants({ 
									variant: 'ghost', 
									className: cn(
										'text-white/70 hover:text-white hover:bg-white/5 transition-all text-xs lg:text-sm px-3',
										activePage === link.id && 'text-white bg-white/10'
									) 
								})} 
							>
								{link.label}
							</button>
						))}
					</div>
					<div className="flex items-center gap-4 border-l border-white/10 pl-4">
						<Button 
							variant="ghost" 
							className="text-white/70 hover:text-white text-xs lg:text-sm"
							onClick={() => handleNav('signin')}
						>
							Sign In
						</Button>
						<Button 
							onClick={() => handleNav('get-started')}
							className="bg-white text-black hover:bg-white/90 shadow-lg text-xs lg:text-sm px-5 rounded-full font-semibold"
						>
							Get Started
						</Button>
					</div>
				</div>

				<Button 
					size="icon" 
					variant="ghost" 
					onClick={() => setOpen(!open)} 
					className="md:hidden text-white hover:bg-white/10 transition-colors"
				>
					<MenuToggleIcon open={open} className="size-6" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'fixed inset-0 top-20 z-50 flex flex-col bg-black md:hidden transition-all duration-300 ease-in-out',
					open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
				)}
			>
				<div className="flex h-full w-full flex-col justify-between gap-y-8 p-8 overflow-y-auto">
					<div className="grid gap-y-4 pt-4">
						{links.map((link) => (
							<button
								key={link.id}
								onClick={() => handleNav(link.id)}
								className={cn(
									"text-3xl font-bold text-left text-white/90 hover:text-white transition-colors tracking-tight",
									activePage === link.id && "text-indigo-400"
								)}
							>
								{link.label}
							</button>
						))}
					</div>
					<div className="flex flex-col gap-4 mb-20">
						<Button 
							variant="outline" 
							className="w-full text-lg py-7 border-white/20 text-white rounded-xl"
							onClick={() => handleNav('signin')}
						>
							Sign In
						</Button>
						<Button 
							onClick={() => handleNav('get-started')}
							className="w-full text-lg py-7 bg-white text-black rounded-xl font-bold"
						>
							Get Started
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

export const WordmarkIcon = (props: React.ComponentProps<"svg">) => (
  <svg 
    width="50" 
    height="50" 
    viewBox="0 0 50 50" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M45.2438 20.446C46.7793 19.3029 48.2176 18.2376 49.8775 17.0081C49.9187 17.7554 49.9733 18.2893 49.9737 18.8233C49.9781 25.0473 49.9592 31.2714 49.9805 37.4953C49.9885 39.8435 49.1896 41.7013 47.1915 43.1193C44.1166 45.3014 41.137 47.6144 37.9455 50C37.8944 49.5044 37.827 49.1535 37.8266 48.8026C37.8182 41.7141 37.837 34.6255 37.7945 27.5372C37.7881 26.4638 38.054 25.741 38.9924 25.0945C41.0963 23.6451 43.1013 22.056 45.2438 20.446Z" fill="currentColor"/>
    <path d="M11.3557 49.403C8.46483 47.2487 5.71068 45.1109 2.86733 43.0957C1.00451 41.7753 0.019513 40.0704 0.0124146 37.8438C-0.00959283 30.9424 0.00436322 24.0409 0.00436322 16.8235C1.18847 17.7033 2.19046 18.4427 3.18701 19.1891C5.83656 21.1737 8.51009 23.1288 11.1092 25.1759C11.6155 25.5746 12.1266 26.333 12.132 26.9299C12.2006 34.5287 12.1772 42.1284 12.1772 49.919C11.8783 49.7339 11.6664 49.6027 11.3557 49.403Z" fill="currentColor"/>
    <path d="M11.4489 17.5232C8.48053 15.2667 5.59643 13.1038 2.7479 10.8961C-0.267802 8.55895 -0.843408 5.12662 1.27492 2.40923C3.36026 -0.265832 7.29258 -0.74388 10.2091 1.43929C14.7229 4.81825 19.1774 8.27443 23.6572 11.6978C24.1112 12.0447 24.5657 12.3911 25.0902 12.7912C29.8596 9.0927 34.6066 5.4557 39.2983 1.75065C41.0479 0.369027 42.908 -0.361158 45.1354 0.178406C47.5462 0.762389 49.1472 2.22246 49.7832 4.61756C50.4153 6.99813 49.6431 8.98927 47.7438 10.4586C40.2062 16.2901 32.6247 22.0664 24.9694 27.9321C20.4631 24.4618 16.0059 21.0294 11.4489 17.5232Z" fill="currentColor"/>
    <path d="M31.6091 31.4888C31.5679 34.9007 31.6619 38.1911 31.4481 41.4619C31.23 44.7994 28.0873 47.3952 24.7662 47.2774C21.3654 47.1567 18.6071 44.4411 18.4771 41.0514C18.433 39.901 18.4634 38.7478 18.4628 37.5959C18.4615 35.3538 18.4624 33.1116 18.4624 30.5881C20.7566 32.3154 22.9 33.9291 25.1574 35.6287C26.973 34.2303 28.7897 32.808 30.6433 31.4342C30.8614 31.2725 31.2824 31.3773 31.6091 31.4888Z" fill="currentColor"/>
  </svg>
);
