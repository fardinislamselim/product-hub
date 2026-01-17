import Link from 'next/link';
import { IoBagHandleOutline, IoMenuOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import Logo from './Logo';

// Sub-component for Navigation Links
const NavLink = ({ href, children }) => (
  <li>
    <Link 
      href={href} 
      className="hover:text-primary transition-colors duration-200 font-semibold text-[15px] focus:bg-primary/10 rounded-lg"
    >
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-base-200 bg-base-100/80 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="navbar px-4 py-3">
          {/* Mobile Menu & Logo */}
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 mr-1">
                <IoMenuOutline className="text-2xl" />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-base-100 rounded-2xl w-60 border border-base-200 gap-1">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>{link.name}</NavLink>
                ))}
                <div className="divider my-1"></div>
                <li><Link href="/signin" className="bg-primary text-white hover:bg-primary-focus py-2.5 justify-center font-bold">Sign In</Link></li>
              </ul>
            </div>
            
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>{link.name}</NavLink>
              ))}
            </ul>
          </div>

          {/* Action Icons Section */}
          <div className="navbar-end gap-2">
            {/* Search - Hidden on tiny screens */}
            <button className="btn btn-ghost btn-circle hidden sm:flex hover:bg-base-200 transition-colors">
              <IoSearchOutline className="text-xl text-base-content/70" />
            </button>
            
            {/* Shopping Bag with Indicator */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-primary/10 group transition-all">
                <div className="indicator">
                  <IoBagHandleOutline className="text-[22px] text-base-content/80 group-hover:text-primary" />
                  <span className="badge badge-sm badge-primary indicator-item border-white font-bold">3</span>
                </div>
              </div>
              {/* Cart Dropdown Content */}
              <div tabIndex={0} className="mt-4 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow-2xl border border-base-200 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="card-body p-5">
                  <h3 className="font-extrabold text-lg flex justify-between items-center">
                    Your Bag <span className="badge badge-outline text-xs">3 Items</span>
                  </h3>
                  <div className="py-4 border-y border-base-200 my-2">
                    <p className="text-base-content/60 text-center italic">Shopping bag preview would go here...</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-base-content/60">Subtotal</span>
                    <span className="text-xl font-black text-primary">$998.00</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block rounded-xl font-bold">Checkout Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* User Login - Responsive */}
            <Link 
              href="/signin" 
              className="btn btn-primary rounded-xl px-7 hidden md:flex font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all gap-2"
            >
              <IoPersonOutline className="text-lg" />
              Sign In
            </Link>
            
            <Link 
              href="/profile" 
              className="btn btn-ghost btn-circle md:hidden hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <IoPersonOutline className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
