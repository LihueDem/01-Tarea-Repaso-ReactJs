import React from "react";

const FooterItem = () => {
  return (
    <>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-body-secondary">
              About
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterItem;
