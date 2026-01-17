import { IoBagHandleOutline } from "react-icons/io5";

const Logo = ({ className = "" }) => {
  return (
    <a href="/" className={`flex items-center gap-2 group transition-all duration-300 ${className}`}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30 group-hover:rotate-12 transition-transform">
        <IoBagHandleOutline className="text-xl" />
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-secondary animate-pulse border-2 border-white"></div>
      </div>
      <span className="text-xl font-black tracking-tight flex items-center">
        Product<span className="text-primary">Hub</span>
      </span>
    </a>
  );
};

export default Logo;
