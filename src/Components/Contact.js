/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-4">Contact Us Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600 mb-2">123 Main Street</p>
            <p className="text-gray-600 mb-2">City, State, Zip</p>
            <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-600 mb-2">Email: info@foodordering.com</p>

            {/* Customer Support */}
            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600 mb-2">
                For any queries or assistance, you can reach our customer
                support team at:
              </p>
              <p className="text-blue-500">Phone: 1-800-123-4567</p>
              <p className="text-blue-500">Email: support@foodordering.com</p>
              <p className="text-gray-600">
                Hours of Operation: Mon-Fri, 9:00 AM - 6:00 PM
              </p>
            </div>

            {/* Feedback and Complaints */}
            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">
                Feedback and Complaints
              </h3>
              <p className="text-gray-600 mb-2">
                Your feedback is valuable to us. If you have any suggestions or
                complaints, please share them with us:
              </p>
              <p className="text-blue-500">Email: feedback@foodordering.com</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            {/* FAQ */}
            <h3 className="text-xl font-semibold mb-2">
              Frequently Asked Questions
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">How can I place an order?</li>
              <li className="mb-2">What payment methods do you accept?</li>
              <li className="mb-2">How long does delivery take?</li>
              <li className="mb-2">Can I cancel my order?</li>
              <li className="mb-2">Do you have a loyalty program?</li>
            </ul>

            {/* Social Media Links */}
            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">Connect with Us</h3>
              <p className="text-gray-600 mb-2">
                Follow us on social media to stay updated with our latest news
                and offers:
              </p>
              <div className="flex">
                <a href="#" className="text-blue-500 mr-2">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-blue-500 mr-2">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-blue-500">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">Office Locations</h3>
              <p className="text-gray-600 mb-2">Main Headquarters:</p>
              <p className="text-gray-600 mb-2">
                123 Main Street, City, State, Zip
              </p>
              <p className="text-gray-600 mb-2">Regional Office:</p>
              <p className="text-gray-600 mb-2">
                456 Park Avenue, City, State, Zip
              </p>
            </div>

            {/* Careers */}
            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">Careers</h3>
              <p className="text-gray-600 mb-2">
                Interested in joining our team?
              </p>
              <p className="text-blue-500">
                Check out our latest job openings and apply today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
