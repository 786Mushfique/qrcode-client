import React from 'react';
// import Image from 'next/image';
import styles from './BusinessCards.module.scss';

export const BusinessCards: React.FC = () => {
  return (
    <section className={styles.businessCardsSection}>
      <div className={styles.backgroundShapes}>
        <svg
          className={styles.topLeftCircle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg
          className={styles.bottomRightCircle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.cardIndigo}>
            <h3>Describe Your Business</h3>
            <p>
              Add details about your business so when people scan your QR code, they learn more.
            </p>
          </div>
          <div className={styles.cardPurple}>
            <h3>Promote Events & Discounts</h3>
            <p>
              Use QR codes to engage customers with your latest promotions, events, or discounts.
            </p>
          </div>
          <div className={styles.cardPink}>
            <h3>Schedule Updates</h3>
            <p>
              Schedule timely updates or promotions, ensuring your audience receives relevant info at the right time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
