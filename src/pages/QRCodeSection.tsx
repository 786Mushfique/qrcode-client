import React, { useState } from "react";
import "./QRCodeSection.scss";

const QRCodeSection: React.FC = () => {
  const [showQRGenerator, setShowQRGenerator] = useState(false);

  return (
    <section className="qr-code-section">
      <div className="container">
        <div className="content">
          <h1>Create Professional QR Codes</h1>
          <p>
            Generate dynamic and static QR codes for your business. Track scans,
            customize designs, and manage all your QR codes in one place.
          </p>
          <button className="generate-button" onClick={() => setShowQRGenerator(true)}>
            Generate QR Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
