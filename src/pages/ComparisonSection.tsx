"use client"

import type React from "react"
import { ArrowRight, Zap, Lock } from "lucide-react"
import "./comparison-section.scss"

export const ComparisonSection: React.FC = () => {
  return (
    <section className="comparison-section">
      <div className="background-effects">
        <div className="effect-top"></div>
        <div className="effect-bottom"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <h2 className="section-title">
          Dynamic <span className="accent">vs</span> Static QR Codes
        </h2>
        <p className="section-description">
          Understand the difference between these QR code types and determine the best choice for your needs. Each type
          serves unique purposes and audiences.
        </p>

        {/* Comparison Cards */}
        <div className="comparison-cards">
          {/* Dynamic QR Codes */}
          <div className="card-wrapper dynamic">
            <div className="card-glow"></div>
            <div className="card">
              <div className="card-content">
                <div className="icon-container dynamic">
                  <Zap className="icon" />
                </div>
                <h3 className="card-title dynamic">Dynamic QR Codes</h3>
                <p className="card-description">
                  Fully customizable with real-time analytics, enabling businesses to adapt quickly and track
                  performance.
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <span className="feature-icon dynamic">
                      <ArrowRight className="arrow-icon" />
                    </span>
                    Real-time scan tracking
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon dynamic">
                      <ArrowRight className="arrow-icon" />
                    </span>
                    Flexible updates to content
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon dynamic">
                      <ArrowRight className="arrow-icon" />
                    </span>
                    Ideal for campaigns and businesses
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Static QR Codes */}
          <div className="card-wrapper static">
            <div className="card-glow"></div>
            <div className="card">
              <div className="card-content">
                <div className="icon-container static">
                  <Lock className="icon" />
                </div>
                <h3 className="card-title static">Static QR Codes</h3>
                <p className="card-description">
                  Simple and unchangeable codes, perfect for permanent use cases without the need for analytics.
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <span className="feature-icon static">
                      <ArrowRight className="arrow-icon" />
                    </span>
                    Fixed and uneditable
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon static">
                      <ArrowRight className="arrow-icon" />
                    </span>
                    No analytics or tracking
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon static">
                      <ArrowRight className="arrow-icon" />
                    </span>
                    Suitable for developers and permanent uses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

