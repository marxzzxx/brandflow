'use client'
import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
      <footer className="bg-[#fffcfa] py-8">
        <div className="container mx-auto text-center"> 
          <ul className="flex justify-center space-x-10 mb-6">
            <li>
              <a href="https://www.linkedin.com/company/brandflow-dev/" className="text-gray-500 hover:text-[#1E3A8A]">
                <i className="LinkedIn">
                  <Linkedin className="h-[25px] w-auto"/>
                </i>
              </a>
              
            </li>
            <li>
              <a href="https://www.instagram.com/brandflowsocial/" className="text-gray-500 hover:text-[#1E3A8A]">
                <i className="Instagram">
                  <Instagram className="h-[25px] w-auto"/>
                </i>
              </a>
            </li>
            <li>
              <a href="mailto:brandflow.contactus@gmail.com" className="text-gray-500 hover:text-[#1E3A8A]">
                <i className="Email">
                  <Mail className="h-[25px] w-auto"/>
                </i>
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
  