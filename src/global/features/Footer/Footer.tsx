import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-transparent pt-1 relative inset-x-0 bottom-0">
      <div className="container mx-auto px-6">
        <div className="mt-16 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-md text-black dark:text-gray-100 font-bold mb-2">
              &copy; Alcanderia 2021-2022
            </p>
            <p className="text-sm text-black dark:text-gray-100 font-bold mb-2">
              contact@alcanderia.fr
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
