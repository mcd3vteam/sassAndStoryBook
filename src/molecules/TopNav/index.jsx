import React from "react";
import { AlertBanner } from "../AlertBanner";
import { SearchBar } from "../SearchBar";

const alertArgs = {
  animationDisabled: false,
  backgroundColor: "blue",
  hasLink: true,
  icon: "fas fa-circle-exclamation",
  dismissed: false,
};

export const TopNav = ({ animationDisabled }) => {
  return (
    <header className="header" id="header">
      <AlertBanner {...alertArgs} />
      <div
        className="header__info"
        id="header-info"
        {...(animationDisabled && { "data-animate-disabled": true })}
        data-animate
        data-animate-delay="1.2"
        data-animate-duration=".5"
        data-animate-y="-75"
      >
        <a className="sr__only" href="#main">
          Skip to Main Content
        </a>
        <span className="fal fa-notes-medical header__info__icon" />
        <a className="header__info__link" href="#">
          MyUCSDChart
        </a>
        <span className="fas fa-phone-alt header__info__icon" />
        <a
          className="header__info__link"
          href="tel:8586577000"
          aria-label="Contact phone number: 858-657-7000"
        >
          858-657-7000
        </a>
      </div>

      <nav
        className="header__top-nav"
        id="top-nav"
        {...(animationDisabled && { "data-animate-disabled": true })}
        data-animate
        data-animate-delay="1.45"
        data-animate-duration=".5"
        data-animate-y="-50"
        data-animate-opacity="0"
      >
        <a
          role="button"
          href="#"
          className="header__hamburger-menu"
          id="hamburger"
        >
          <span />
          <span />
          <span />
        </a>
        <div className="header__logo-container">
          <a href="#" aria-label="UC San Diego Health Home">
            <img
              className="header__logo"
              id="logo"
              alt="UC San Diego Health logo"
              src="/resources/images/Logo/Dark.svg"
            />
          </a>
          {/* This section will be hidden by default, and then conditionally displayed depending on top-level navigation selections. */}
          {/* The top-level navigation items have a data-target that matches the associated div's id. */}
          <div className="header__nav-preview hidden" aria-hidden="true">
            <div className="header__nav-preview-card hidden" id="primary-care">
              <img
                src="/resources/images/primary-care-2.png"
                alt="header-cta"
              />
              <div className="header__nav-preview-card-details">
                <h4>Primary &amp; Specialty Care</h4>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore sapiente repellat perspiciatis repudiandae sunt, quo
                  laudantium veritatis, nihil, repellendus rerum ea facere. At
                  eos aspernatur accusamus quis magnam minima excepturi.
                </span>
              </div>
            </div>
            <div
              className="header__nav-preview-card hidden"
              id="insurance-billing"
            >
              <img
                src="/resources/images/insurance-billing.jpg"
                alt="header-cta-billing"
              />
              <div className="header__nav-preview-card-details">
                <h4>Insurance &amp; Billing</h4>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore sapiente repellat perspiciatis repudiandae sunt, quo
                  laudantium veritatis, nihil, repellendus rerum ea facere. At
                  eos aspernatur accusamus quis magnam minima excepturi.
                </span>
              </div>
              <a href="#" className="btn" tabIndex="-1">
                <span className="btn-label">
                  See Locations &amp; Wait Times
                </span>
                <span className="btn-round btn-md btn-primary">
                  <span className="fas fa-arrow-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="header__nav-links" id="nav-links">
          <ul id="nav-links-ul" role="menu" aria-expanded="false">
            <li>
              <a
                data-target="primary-care"
                className="has-submenu"
                href="#"
                aria-expanded="false"
                aria-controls="primary-care"
                role="button"
              >
                <span>Primary &amp; Specialty Care</span>
              </a>
              <ul className="header__nav-menu">
                <li className="sr__only feature-card-data">
                  <img
                    src="/resources/images/primary-care-2.png"
                    alt="header-cta"
                  />
                  <h4>Primary &amp; Specialty Care</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Labore sapiente repellat perspiciatis repudiandae sunt, quo
                    laudantium veritatis, nihil, repellendus rerum ea facere. At
                    eos aspernatur accusamus quis magnam minima excepturi.
                  </span>
                </li>
                <ul>
                  <li>
                    <a className="collapsed" href="#">
                      Medical Services
                    </a>
                  </li>
                  <li>
                    <a className="collapsed" href="#">
                      Medical Services
                    </a>
                  </li>
                </ul>
                <li>
                  <a className="secondary-links" href="#">
                    Explore Care Options
                  </a>
                  <ul className="header__nav-submenu">
                    <li>
                      <a href="#">Walk-in Care</a>
                    </li>
                    <li>
                      <a href="#">Primary Care</a>
                    </li>
                    <li>
                      <a href="#">Labs</a>
                    </li>
                    <li>
                      <a href="#">Specialty Care</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="secondary-links" href="#">
                    Explore Care Options
                  </a>
                  <ul className="header__nav-submenu">
                    <li>
                      <a href="#">Walk-in Care</a>
                    </li>
                    <li>
                      <a href="#">Primary Care</a>
                    </li>
                    <li>
                      <a href="#">Labs</a>
                    </li>
                    <li>
                      <a href="#">Specialty Care</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li role="none">
              <a href="#">Find a Doctor</a>
            </li>
            <li role="none">
              <a href="#">Locations</a>
            </li>
            <li>
              <a
                data-target="insurance-billing"
                className="has-submenu"
                href="#"
                aria-expanded="false"
                aria-controls="insurance-billing"
                role="button"
              >
                <span>Insurance &amp; Billing</span>
              </a>
              <ul className="header__nav-menu">
                <li className="sr__only feature-card-data">
                  <img
                    src="/resources/images/insurance-billing.jpg"
                    alt="header-cta-billing"
                  />
                  <h4>Insurance and Billing</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Labore sapiente repellat perspiciatis repudiandae sunt, quo
                    laudantium veritatis, nihil, repellendus rerum ea facere. At
                    eos aspernatur accusamus quis magnam minima excepturi.
                  </span>
                  <a href="www.google.com">See Locations and Wait Times</a>
                </li>
                <ul>
                  <li>
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">Make a Payment</a>
                  </li>
                  <li>
                    <a href="#">How to Switch Your Care</a>
                  </li>
                  <li>
                    <a href="#">Accepted Plans</a>
                  </li>
                  <li>
                    <a href="#">Financial Assistance</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
          <div className="header__info-mobile" id="header-info-mobile">
            <div>
              <div className="header__info__link">
                <span className="fal fa-notes-medical header__info__icon" />
                <a href="#">MyUCSDChart</a>
              </div>
              <div className="header__info__link">
                <span className="fas fa-phone-alt header__info__icon" />
                <a
                  href="tel:8586577000"
                  aria-label="Call 8 5 8. 6 5 7. 7 0 0 0"
                >
                  858-657-7000
                </a>
              </div>
            </div>
            <div className="header__appointment-mobile">
              <a
                className="header__appointment-link-mobile"
                id="appointment-link-mobile"
                href="#"
              >
                Make an Appointment
              </a>
            </div>
          </div>
        </div>
        <a
          className="header__search-btn"
          href="#"
          id="header-search-btn"
          role="button"
          aria-label="Open global search bar"
          data-open-label="Open global search bar"
          data-close-label="Close global search bar"
          aria-expanded="false"
        ></a>
        <a
          className="header__appointment-link-desktop"
          id="appointment-link-desktop"
          href="#"
        >
          Make an Appointment
        </a>
      </nav>
      <div className="header__global-search" id="mobile-menu-search">
        <SearchBar />

        <div className="header__info-mobile" id="header-info-mobile">
          <div>
            <div className="header__info__link">
              <span className="fal fa-notes-medical header__info__icon" />
              <a href="#">MyUCSDChart</a>
            </div>
            <div className="header__info__link">
              <span className="fas fa-phone-alt header__info__icon" />
              <a href="tel:8586577000" aria-label="Call 8 5 8. 6 5 7. 7 0 0 0">
                858-657-7000
              </a>
            </div>
          </div>
          <div className="header__appointment-mobile">
            <a
              className="header__appointment-link-mobile"
              id="appointment-link-mobile"
              href="#"
            >
              Make an Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
