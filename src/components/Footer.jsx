import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p className="mb-1">
              <i className="bi bi-envelope"></i> Email: Adiwiyata@gmail.com
            </p>
            <p>
              <i className="bi bi-phone"></i> Phone: +62 81217320160
            </p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <p>
              <a
                href="https://github.com/BaniHillabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>{" "}
                GitHub
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/banihllbi_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <p className="text-muted small">
          &copy; 2024 Adiwiyata. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
