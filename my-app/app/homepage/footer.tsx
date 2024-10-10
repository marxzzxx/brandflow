'use client'
// components/Footer.js

export default function Footer() {
    return (
      <footer className="bg-white py-8">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-8 mb-6">
            <li>
              <a href="mailto:brandflow.contactus@gmail.com" className="text-gray-500 hover:text-gray-900">brandflow.contactus@gmail.com</a>
            </li>
          </ul>
  
          <ul className="flex justify-center space-x-6 mb-6">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-xing"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
  
          <p className="text-gray-500 text-sm">
            &copy; 2024 Brandflow. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  