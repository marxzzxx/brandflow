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
  
          <ul className="flex justify-center space-x-10 mb-6">
            <li>
              <a href="https://www.linkedin.com/company/brandflow-dev/" className="text-gray-500 hover:text-gray-900">
                <i className="LinkedIn">
                  <img
                    alt="LinkedIn"
                    src="/linkedin.png"
                    className="h-[25px] w-auto"
                  
                  />
                </i>
              </a>
              
            </li>
            <li>
              <a href="https://www.instagram.com/brandflowsocial/" className="text-gray-500 hover:text-gray-900">
                <i className="Instagram">
                <img
                    alt="Instagram"
                    src="/instagram.png"
                    className="h-[25px] w-auto"
                  
                  />
                </i>
              </a>
            </li>
            {/* <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="Facebook">
                <img 
                    src="/facebook.png"
                    className="h-[25px] w-auto"
                  
                  />
                </i>
              </a>
            </li> */}
          </ul>
  
          <p className="text-gray-500 text-sm">
            &copy; 2024 Brandflow. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  