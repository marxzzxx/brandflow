'use client';

import React from 'react';
import Script from 'next/script';

const CalendlyWidget: React.FC = () => {
  return (
    <>
      {/* The Calendly script: only runs in client-side */}
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      
      {/* Calendly inline widget container */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/marx-brandflow/discovery-call"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </>
  );
};

export default CalendlyWidget;
