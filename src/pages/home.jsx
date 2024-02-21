import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "../assets/background.jpg"

const home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="container-fluid d-flex align-items-center justify-content-center text-center min-vh-100"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Adjust the image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white", // Set text color to be visible on the background
          }}
        >
          <div>
            <h1>Welcome to Adiwiyata</h1>
            <p>Your awesome content goes here!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default home;
