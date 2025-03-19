import React from "react";
import { BarChart, Smartphone, Paintbrush, Globe, Shield, Zap } from "lucide-react";
import styles from "./Features.module.scss";

const features = [
  {
    title: "Advanced Analytics",
    description: "Track scans, locations, and engagement with detailed analytics and reporting.",
    icon: <BarChart className={styles.icon} />,
  },
  {
    title: "Mobile Optimized",
    description: "Create QR codes that work seamlessly on all mobile devices and operating systems.",
    icon: <Smartphone className={styles.icon} />,
  },
  {
    title: "Custom Design",
    description: "Personalize your QR codes with logos, colors, and shapes to match your brand.",
    icon: <Paintbrush className={styles.icon} />,
  },
  {
    title: "Dynamic QR Codes",
    description: "Easily update QR code content without changing the actual code.",
    icon: <Globe className={styles.icon} />,
  },
  {
    title: "Secure & Reliable",
    description: "Ensure your QR codes are safe, encrypted, and reliable for all users.",
    icon: <Shield className={styles.icon} />,
  },
  {
    title: "Bulk Generation",
    description: "Generate multiple QR codes at once, saving time and effort.",
    icon: <Zap className={styles.icon} />,
  },
];

const QRFeatures: React.FC = () => {
  return (
    <div className={styles.featuresWrapper}>
      <h2 className={styles.title}>Powerful Features for Your QR Needs</h2>
      <p className={styles.subtitle}>Discover what makes our QR code solution stand out</p>

      <div className={styles.gridContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.iconWrapper}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRFeatures;


