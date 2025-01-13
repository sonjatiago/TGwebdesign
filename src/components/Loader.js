import React from 'react';
import styled from 'styled-components';
import Logo1 from '../assets/logo2.png'; // Adjust the path to where the logo is located

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinner">
        <div className="spinnerin" />
      </div>
      {/* Logo below the loader */}
      <div className="logo">
        <img src={Logo1} alt="Logo" />
      </div>
      {/* Message below the logo */}
      <div className="message">
        Your best web design experience is about to begin...
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Full screen loader with a solid black background */
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black; /* Solid black background */
  z-index: 9999; 
  flex-direction: column; /* Stack the spinner and logo vertically */
  text-align: center;

  .spinner {
    width: 3em;
    height: 3em;
    cursor: not-allowed;
    border-radius: 50%;
    border: 2px solid #444;
    box-shadow: -10px -10px 10px #6359f8, 0px -10px 10px 0px #9c32e2, 10px -10px 10px #f36896, 10px 0 10px #ff0b0b, 10px 10px 10px 0px#ff5500, 0 10px 10px 0px #ff9500, -10px 10px 10px 0px #ffb700;
    animation: rot55 0.7s linear infinite;
  }

  .spinnerin {
    border: 2px solid #444;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes rot55 {
    to {
      transform: rotate(360deg);
    }
  }

  /* Logo styling */
  .logo {
    position: relative;
    margin-top: -300px; /* Space between spinner and logo */
    opacity: 0.15;
    color: white;
  }

  .logo img {
    max-width: 300px; /* Default size of the logo */
    height: auto;
  }

  /* Message styling */
  .message {
    margin-top: 20px; /* Space between logo and text */
    color: white;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    opacity: 0.8;
    animation: fadeInText 2s ease-in-out infinite alternate;
  }

  @keyframes fadeInText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .spinner {
      width: 2.5em;
      height: 2.5em;
    }

    .spinnerin {
      width: 1.2em;
      height: 1.2em;
    }

    .logo img {
      max-width: 250px; /* Smaller logo size */
    }

    .message {
      font-size: 16px; /* Adjust font size for smaller screens */
    }
  }

  @media (max-width: 480px) {
    .spinner {
      width: 2em;
      height: 2em;
    }

    .spinnerin {
      width: 1em;
      height: 1em;
    }

    .logo img {
      max-width: 200px; /* Even smaller logo */
    }

    .message {
      font-size: 14px; /* Further adjust font size for very small screens */
    }
  }
`;

export default Loader;
