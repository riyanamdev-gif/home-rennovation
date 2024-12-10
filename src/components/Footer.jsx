import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex flex-col px-4 lg:px-20 pt-10 lg:pt-20 border pb-10 bg-zinc-300 gap-5">
      {/* Call to Action */}
      <div className="flex flex-col gap-3 text-center">
        <p className="text-2xl lg:text-4xl font-medium font-serif">
          Transform Your Home Today!
        </p>
        <p className="text-lg lg:text-xl font-medium">
          Ready to bring your vision to life?
        </p>
        <p>Contact us to start your home renovation journey!</p>
      </div>

      {/* Links and Contact */}
      <div className="flex flex-col lg:flex-row justify-between border-y border-y-black py-5 gap-10 lg:justify-around">
        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl lg:text-2xl font-semibold">Quick Links</h3>
          <ul className="list-disc pl-5 font-light">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-black'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/time"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-black'
                }
              >
                Project Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collaborate"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-black'
                }
              >
                Collaborate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/budget"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-black'
                }
              >
                Budget Tracker
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl lg:text-2xl font-semibold">Get in Touch</h3>
          <p>
            <span className="font-semibold">Address:</span> 123 Rennovation Lane, Dream City,
            Country
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91 1754754253
          </p>
          <p>
            <span className="font-semibold">Email:</span> support@renovateyourhome.com
          </p>
          <ul className="list-disc pl-5 font-light">
            <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
            <li>Sat: 10:00 AM – 4:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center font-light">
        <p>© 2024 Renovate Your Home. All rights reserved.</p>
        <p>"Building better spaces for a better you."</p>
      </div>
    </div>
  );
};

export default Footer;
