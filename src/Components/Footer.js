const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <p>123 Main Street</p>
          <p>City, State, Zip</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@foodordering.com</p>
        </div>
        <div className="footer-right">
          <ul className="footer-menu">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Food Ordering Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
