import { IoCallOutline, IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoMailOutline } from "react-icons/io5";
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-base-200 pt-16 pb-8 border-t border-base-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-base-content/70 max-w-xs leading-relaxed">
              Your ultimate destination for quality products and a seamless shopping experience. We bring you the best from around the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"><IoLogoFacebook className="text-xl" /></a>
              <a href="#" className="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"><IoLogoTwitter className="text-xl" /></a>
              <a href="#" className="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"><IoLogoInstagram className="text-xl" /></a>
              <a href="#" className="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"><IoLogoLinkedin className="text-xl" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary/80">Quick Links</h4>
            <ul className="space-y-4 font-medium text-base-content/70">
              <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Special Offers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Categories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary/80">Support</h4>
            <ul className="space-y-4 font-medium text-base-content/70">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary/80">Get In Touch</h4>
            <ul className="space-y-4 font-medium text-base-content/70">
              <li className="flex items-start gap-3">
                <IoLocationOutline className="text-xl text-primary mt-1" />
                <span>123 Market St, Digital City, DC 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <IoCallOutline className="text-xl text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <IoMailOutline className="text-xl text-primary" />
                <span>support@producthub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/50 font-medium whitespace-nowrap overflow-hidden">
          <p>© 2026 ProductHub Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
