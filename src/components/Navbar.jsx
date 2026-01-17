import { IoBagHandleOutline, IoMenuOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[100] w-full border-b border-base-200 bg-base-100/80 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="navbar px-4 py-2">
          {/* Logo Section */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
                <IoMenuOutline className="text-2xl" />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium border border-base-200">
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
              <li>
                <a className="hover:text-primary transition-colors focus:bg-primary/10">Home</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors focus:bg-primary/10">Shop</a>
              </li>
              <li className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="hover:text-primary transition-colors">Categories</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
                  <li><a>Electronics</a></li>
                  <li><a>Fashion</a></li>
                  <li><a>Home Decor</a></li>
                </ul>
              </li>
              <li>
                <a className="hover:text-primary transition-colors focus:bg-primary/10">About</a>
              </li>
            </ul>
          </div>

          {/* Actions Section */}
          <div className="navbar-end gap-1 md:gap-3">
            <button className="btn btn-ghost btn-circle hidden sm:flex text-base-content/70 hover:text-primary">
              <IoSearchOutline className="text-xl" />
            </button>
            
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-primary/10 transition-colors">
                <div className="indicator">
                  <IoBagHandleOutline className="text-2xl text-base-content/80 group-hover:text-primary" />
                  <span className="badge badge-sm badge-primary indicator-item border-white">3</span>
                </div>
              </div>
              {/* Cart Preview Mockup */}
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-72 bg-base-100 shadow-2xl border border-base-200">
                <div className="card-body">
                  <span className="font-bold text-lg">3 Items</span>
                  <span className="text-primary font-medium">Subtotal: $999.00</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-primary rounded-xl px-6 flex-nowrap hidden md:flex font-bold shadow-lg shadow-primary/20">
              <IoPersonOutline className="text-lg" />
              Sign In
            </button>
            <button className="btn btn-ghost btn-circle md:hidden">
              <IoPersonOutline className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
