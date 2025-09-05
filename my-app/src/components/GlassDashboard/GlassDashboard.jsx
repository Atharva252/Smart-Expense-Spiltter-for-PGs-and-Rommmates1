import React from "react";

export default function GlassDashboard() {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(6px)',
      borderRadius: '20px',
      padding: '32px',
      color: '#232224',
      textAlign: 'center',
      border: '2px solid rgba(200,200,200,0.1)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.07)'
    }}>
      <h2 style={{ fontWeight: 700, fontSize: 28 }}>GlassDashboard Placeholder</h2>
      <p style={{ opacity: 0.7, marginTop: 12 }}>
        This is a placeholder for the missing GlassDashboard component.<br />
        Replace this file with your dashboard UI.
      </p>
    </div>
  );
}
