import { Link } from "react-router-dom";
import { Logo } from "../index"

function Footer() {
  return (
    <section className="py-5 bg-secondary border-top border-dark text-dark">
      <div className="container">
        <div className="row">
          {/* Logo and Copyright */}
          <div className="col-12 col-md-6 col-lg-5 mb-4">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="mb-3 d-inline-flex align-items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="small text-muted mb-0">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="col-12 col-md-6 col-lg-2 mb-4">
            <div className="h-100">
              <h6 className="text-uppercase text-muted mb-3 small fw-semibold">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Features</Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Pricing</Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Affiliate Program</Link>
                </li>
                <li>
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Press Kit</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="col-12 col-md-6 col-lg-2 mb-4">
            <div className="h-100">
              <h6 className="text-uppercase text-muted mb-3 small fw-semibold">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Account</Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Help</Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Contact Us</Link>
                </li>
                <li>
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Customer Support</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legals */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="h-100">
              <h6 className="text-uppercase text-muted mb-3 small fw-semibold">Legals</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Terms &amp; Conditions</Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/" className="text-dark text-decoration-none fw-medium">Licensing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
