'use client';
import { Home, History, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, path, children, ...props }) => {
  const active = href === path;

  return (
    <Link
      className={cn(
        'flex flex-col justify-center items-center pt-[12px] pb-[8px] px-5 hover:bg-gray-300/50 transition-colors ease-in-out duration-300',
        active ? 'bg-gray-300/50 shadow-sm' : ''
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="w-full max-w-xl m-auto h-[64px] fixed left-1/2 translate-x-[-50%] bottom-0 shadow-sm z-50 bg-white content-center">
      <div className="w-full m-auto grid grid-cols-4 content-center">
        <NavItem href="/" path={path}>
          <Home size={24} />
          <div className="text-md font-ligh">Home</div>
        </NavItem>
        <NavItem href="/history" path={path}>
          <History size={24} />
          <div className="text-md font-light">History</div>
        </NavItem>
        <NavItem href="/profile" path={path}>
          <User size={24} />
          <div className="text-md font-light">Profile</div>
        </NavItem>
        <NavItem href="/logout" path={path}>
          <LogOut size={24} />
          <div className="text-md font-light">LogOut</div>
        </NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
