"use client";

import React from "react";
import Image from "next/image";
import "./trusted-companies.scss";

interface TrustedCompaniesProps {
  logos: string[];
}

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({ logos }) => {
  return (
    <section className="trusted-companies">
      <div className="background-effects">
        <div className="effect-top"></div>
        <div className="effect-bottom"></div>
      </div>

      <div className="container">
        <div className="header">
          <h2 className="section-title">Trusted by your favorite companies</h2>
          <p className="section-description">
            We're proud to work with these amazing companies who trust our services!
          </p>
        </div>

        <div className="logos-wrapper">
          <div className="logos-container">
            {logos.map((logo, index) => (
              <div key={`logo-${index}`} className="logo-card">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Company logo ${index}`}
                  className="logo-image"
                  width={150}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;



