import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CustomCookieConsent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="websiteCookieConsent"
      enableDeclineButton
      style={{
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        padding: '20px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      buttonStyle={{
        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
        color: 'white',
        borderRadius: '50px',
        padding: '12px 24px',
        fontSize: '1rem',
        fontWeight: 600,
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        minWidth: '120px'
      }}
      declineButtonStyle={{
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        borderRadius: '50px',
        padding: '12px 24px',
        fontSize: '1rem',
        fontWeight: 600,
        border: 'none',
        cursor: 'pointer',
        marginRight: '15px',
        minWidth: '120px'
      }}
      contentStyle={{
        flex: 1,
        margin: '0 20px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          marginBottom: '8px',
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          We value your privacy
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '1rem',
          margin: 0
        }}>
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
        </p>
      </div>
    </CookieConsent>
  );
};

export default CustomCookieConsent;