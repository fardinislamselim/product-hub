
const Hero = () => {
  return (
    <section className="bg-[#fcfcfd] py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-5xl lg:text-[72px] font-extrabold text-[#111827] leading-[1] mb-8 tracking-[-0.03em]">
              Discover Quality <br />
              Products at <br />
              ProductHub
            </h1>
            <p className="text-lg lg:text-xl text-[#6b7280] max-w-[480px] mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
              Experience a professional and minimal e-commerce platform designed for quality and speed. Find the best deals on premium essentials.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="btn bg-[#0070f3] hover:bg-[#0060df] text-white px-9 py-4 h-auto text-[17px] font-bold rounded-[14px] border-none shadow-[0_8px_30px_rgb(0,112,243,0.2)]">
                Browse Products
              </button>
              <button className="btn bg-[#e5e7eb] hover:bg-[#d1d5db] text-[#374151] px-9 py-4 h-auto text-[17px] font-bold rounded-[14px] border-none">
                Add Product
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full max-w-[650px]">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1200&auto=format&fit=crop" 
                alt="Product Showcase" 
                className="w-full aspect-[4/3] object-cover"
              />
              {/* This image has a nice teal/grey neutral tone similar to the reference */}
            </div>
            {/* Soft decorative blur background */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-500/10 blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
