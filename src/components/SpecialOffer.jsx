import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const SpecialOffer = () => {
  return (
    <section className="py-10 px-6 lg:px-20 container mx-auto">
      <div className="bg-[#0070f3] rounded-[40px] p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-blue-500/20 text-white">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        {/* Cart Icon Graphic */}
        <IoCartOutline className="absolute -bottom-10 -right-10 text-[300px] text-white/10 rotate-12 pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold tracking-wide mb-6 border border-white/10">
            LIMITED OFFER
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Get 20% off your first purchase
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-lg font-medium">
            Join over 10,000 customers who enjoy premium quality products at unbeatable prices.
          </p>
          <Link 
            href="/products" 
            className="btn bg-white text-[#0070f3] border-none hover:bg-gray-100 px-8 py-3 h-auto rounded-xl font-bold text-lg shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
