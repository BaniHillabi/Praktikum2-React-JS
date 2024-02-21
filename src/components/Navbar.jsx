import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Freya from "../assets/profil.jpg";

const Navbar = () => {
  const [isPhotoOpen, setPhotoOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [navbarText, setNavbarText] = useState("#ffffff")
  const photoRef = useRef();

  const handleProfileClick = () => {
    setPhotoOpen(!isPhotoOpen);
  };

  const handleCloseClick = () => {
    setPhotoOpen(false);
  };

  const handleClickOutside = (e) => {
    if (photoRef.current && !photoRef.current.contains(e.target)) {
      handleCloseClick();
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Adjust the scroll threshold as needed
    const scrollThreshold = 50;

    if (scrollPosition > scrollThreshold) {
      setNavbarBg("linear-gradient(to right, #4CAF50, #2196F3)"); // Change background color to white
      setNavbarText("#000000")
    } else {
      setNavbarBg("transparent"); // Set background color to transparent
      setNavbarText("#ffffff")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isPhotoOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPhotoOpen]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ background: navbarBg, transition: "background 0.3s", color:"#ffffff" }}
    >
      <div className="container">
        {/* Adiwiyata Logo on the left */}
        <Link to="/" className="navbar-brand text-white">
          Adiwiyata
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {/* Centered Navigation Items */}
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Gallery" className="nav-link text-white">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/HariBesar" className="nav-link text-white">
                Hari Besar
              </Link>
            </li>
          </ul>
        </div>

        {/* Profile Picture and Notification Logo on the right */}
        <div className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-bell-fill mr-2"
            viewBox="0 0 16 16"
            onClick={() => {
              console.log("Notifikasi clicked");
            }}
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
          <img
            src={Freya}
            alt="Profile"
            className="rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={handleProfileClick}
          />
        </div>

        {/* Display the profile photo when the profile is clicked */}
        {isPhotoOpen && (
          <div
            ref={photoRef}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
          >
            <img
              src={Freya}
              alt="Profile"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                marginBottom: "20px",
              }}
            />
            <button className="btn" onClick={handleCloseClick}>
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              }
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
