/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Food Ordering Website. All rights
          reserved.
        </p>
        <div className="flex justify-center mt-2">
          <a
            href="#"
            className="text-white hover:text-gray-300 mx-2 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 mx-2 transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 mx-2 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 mx-2 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
