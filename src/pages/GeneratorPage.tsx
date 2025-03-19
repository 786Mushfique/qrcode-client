import React from 'react';

import { Generator } from '../components/Generator/Generator';
import { BusinessCards } from '../pages/BusinessCards';
import { Section } from '../components/UI/Section/Section';
import { SectionHeader } from '../components/UI/Section/SectionHeader';
import { ComparisonSection } from '../pages/ComparisonSection';
import QRCodeSection from '../pages/QRCodeSection';

export const GeneratorPage = () => (
  <Section>
    <QRCodeSection/>
    <SectionHeader title="QR code generator" />
    <Generator />
    <BusinessCards/>
    <ComparisonSection/>

 
  </Section>
);



