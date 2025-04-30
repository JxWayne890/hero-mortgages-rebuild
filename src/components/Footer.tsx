
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 bg-midnight text-white">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {currentYear} Hero Mortgages LLC · All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
