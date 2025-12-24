// src/components/navigation/Footer.jsx
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ratopia-border/60 mt-12">
      <div className="
        max-w-content mx-auto px-4 md:px-6 lg:px-8 py-8
        flex flex-col md:flex-row md:items-center md:justify-between
        gap-4 text-xs text-white/60 leading-relaxed
      ">
        
        <div className="text-center md:text-left">
          © {year} Ratopia Rattery. All rights reserved.
        </div>

         <div className="text-center md:text-right leading-relaxed">
             Ethical fancy rat breeding
           <br className="md:hidden" />
             __Temperament__Health__Transparency__
        </div>


      </div>
    </footer>
  );
};

export default Footer;
