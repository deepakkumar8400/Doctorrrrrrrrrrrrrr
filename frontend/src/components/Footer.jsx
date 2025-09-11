import React from 'react';
import { assets } from '../assets/assets';

// This is the logo component provided in the original code.
const DocFindLogo = ({ className, onClick }) => (
  <div
    className={`flex items-center gap-3 cursor-pointer font-bold text-primary group ${className}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick && onClick();
      }
    }}
  >
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <path d="M10 12l2.5-4 2.5 4-2.5 4-2.5-4Z" fill="currentColor" />
      </svg>
      <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
    <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
      DocFind
    </span>
  </div>
);

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <DocFindLogo />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 mt-4'>
            Deepak Kumar is a Computer Science student specializing in full-stack web development with expertise in Data Structures and Algorithms. He has experience in building scalable web applications using the MERN stack and RESTful APIs, and has solved over 600 coding challenges.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Projects</li>
            <li>Skills</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-8400663713</li>
            <li>Dks8400663713@gmail.com</li>
            <li>linkedin.com/in/deepakkumar213213270</li>
            <li>github.com/deepakkumar8400</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="my-8" />
        <div className="flex justify-between items-center py-5 text-sm flex-col sm:flex-row">
          <p className='text-center sm:text-left'>Copyright 2024 &copy; Deepak Kumar - All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {/* Social media icons or links can go here */}
            {/* Example with a simple SVG icon for LinkedIn */}
            <a href="https://www.linkedin.com/in/deepakkumar213213270" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 hover:text-blue-700 transition-colors">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* Example with a simple SVG icon for GitHub */}
            <a href="https://github.com/deepakkumar8400" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 hover:text-gray-900 transition-colors">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.731.082-.717.082-.717 1.205.082 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.493.998.108-.77.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.652 1.652.241 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.802 5.626-5.474 5.926.432.373.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.197-6.088 8.197-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;