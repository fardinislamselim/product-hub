const Newsletter = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-100 rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
          
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] mb-4">
            Stay in the loop
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-10">
            Subscribe to our newsletter and be the first to know about new arrivals and exclusive discounts.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input bg-[#f1f5f9] border-none text-gray-700 w-full h-12 rounded-xl focus:bg-white focus:ring-2 ring-primary/20 transition-all px-6 font-medium"
            />
            <button className="btn bg-[#0070f3] text-white hover:bg-blue-600 border-none px-8 h-12 rounded-xl font-bold shadow-lg shadow-blue-500/20">
              Subscribe Now
            </button>
          </div>
          
          <p className="text-xs text-gray-400 mt-6">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
