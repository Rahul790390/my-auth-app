
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10 text-center">
      <p className="text-sm">© 2025 MyAuthApp. Made with ❤️ by [Your Name]</p>
      <div className="mt-2 flex justify-center space-x-4 text-sm">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
