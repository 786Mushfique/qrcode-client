import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './PricingPage.scss';

const plans = [
  {
    name: 'Basic',
    price: '$0',
    period: 'month',
    features: ['5 QR codes per month', 'Basic analytics', 'Standard customization', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'month',
    features: ['Unlimited QR codes', 'Advanced analytics', 'Full customization', 'Priority support', 'API access'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Everything in Pro', 'Dedicated account manager', 'Custom integrations', 'SLA', 'On-premise deployment option'],
  },
];

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="pricing-page">
      <div className="container">
        <h1 className="title">Simple, Transparent Pricing</h1>
        <p className="subtitle">Choose the plan that's right for you</p>

        <div className="toggle-buttons">
          <button
            className={`toggle-btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${billingPeriod === 'annual' ? 'active' : ''}`}
            onClick={() => setBillingPeriod('annual')}
          >
            Annual
          </button>
        </div>

        <div className="plans">
          {plans.map((plan, index) => (
            <div key={index} className="plan">
              <h2 className="plan-name">{plan.name}</h2>
              <p className="plan-price">{plan.price}</p>
              {plan.period && <p className="plan-period">per {billingPeriod === 'annual' ? 'year' : plan.period}</p>}
              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature">
                    <Check className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
