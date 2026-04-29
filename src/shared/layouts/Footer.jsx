import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-light pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-muted/20">
        {/* Logo and title  */}
        <div className="col-span-2 lg:col-span-1">
          <h2 className="text-3xl font-serif tracking-tighter">
            <Logo />
          </h2>
          <p className="text-muted leading-relaxed">
            Crafting unforgettable stays where modern luxury meets timeless
            hospitality.
          </p>
        </div>
        {/* Navigation  */}
        <div className="col-span-1">
          <h4 className="font-medium mb-2">Navigation</h4>
          <ul className="space-y-4 text-muted text-sm">
            <li className="hover:text-light transition-colors cursor-pointer">
              Our Story
            </li>
            <li className="hover:text-light transition-colors cursor-pointer">
              Rooms & Suites
            </li>
            <li className="hover:text-light transition-colors cursor-pointer">
              Dining Experience
            </li>
            <li className="hover:text-light transition-colors cursor-pointer">
              Wellness Spa
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="col-span-1">
          <h4 className="font-medium mb-2">Contact</h4>
          <ul className="space-y-4 text-muted text-sm">
            <li>Gulshan 2, Dhaka, Bangladesh</li>
            <li>+880 1234 567890</li>
            <li>concierge@hotelio.com</li>
          </ul>
        </div>
        {/* Newsletter  */}
        <div className="col-span-2 lg:col-span-1">
          <h4 className="font-medium mb-2">Newsletter</h4>
          <div className="relative flex items-center">
            <input
              type="email" // Changed to email for better validation
              placeholder="Your email"
              className="w-full border border-muted rounded-full py-4 pl-6 pr-24 focus:ring-2 focus:ring-secondary transition-all outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-light text-primary px-6 rounded-full font-medium text-sm"
            >
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Policy & Terms  */}
      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:row justify-between items-center text-muted/60 text-xs">
        <p>© 2026 Hotelio Luxury Stays. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="hover:text-light cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-light cursor-pointer transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
