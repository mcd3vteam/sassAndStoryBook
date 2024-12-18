import { StickyNav } from ".";

export default {
  title: "Molecules/StickyNav",
};

const StickyNavComponent = (args) => <StickyNav {...args} />;
const stickyNavLinks = {
  links: [
    {
      label: "Intro",
      href: "#area-1",
      section: (
        <div
          style={{
            marginTop: "64px",
            marginBottom: "64px",
            backgroundColor: "#bde9df",
            height: "1500px",
          }}
          id="area-1"
          className="specialty-block"
        >
          area-1
        </div>
      ),
    },
    {
      label: "Locations",
      href: "#area-2",
      section: (
        <div
          style={{
            marginTop: "64px",
            marginBottom: "64px",
            backgroundColor: "#38665b",
            height: "1500px",
          }}
          id="area-2"
          className="specialty-block"
        >
          area-2
        </div>
      ),
    },
    {
      label: "Services",
      href: "#area-3",
      section: (
        <div
          style={{
            marginTop: "64px",
            marginBottom: "64px",
            backgroundColor: "#bde9df",
            height: "1500px",
          }}
          id="area-3"
          className="specialty-block"
        >
          area-3
        </div>
      ),
    },
    {
      label: "Diagnosis & Treatment",
      href: "#area-4",
      section: (
        <div
          style={{
            marginTop: "64px",
            marginBottom: "64px",
            backgroundColor: "#38665b",
            height: "1500px",
          }}
          id="area-4"
          className="specialty-block"
        >
          area-4
        </div>
      ),
    },
    {
      label: "About",
      href: "#area-5",
      section: (
        <div
          style={{
            marginTop: "64px",
            marginBottom: "64px",
            backgroundColor: "#bde9df",
            height: "1500px",
          }}
          id="area-5"
          className="specialty-block"
        >
          area-5
        </div>
      ),
    },
    {
      label: "stuff",
      href: "#area-6",
      section: (
        <div
          style={{
            marginTop: "64px",
            marginBottom: "64px",
            backgroundColor: "#38665b",
            height: "1500px",
          }}
          id="area-6"
          className="specialty-block"
        >
          area-6
        </div>
      ),
    },
  ],
};

// const StickyNavComponent2 = (args) => (
//   <div className="main">
//     <div id="stickynavbar" className="sticky-nav">
//       <a className="sticky-nav__item btn active" href="#rich-text">
//         <span className="btn-label">Rich text</span>
//       </a>
//       <a className="sticky-nav__item btn" href="#notification-red">
//         <span className="btn-label">Notification red</span>
//       </a>
//       <a className="sticky-nav__item btn" href="#text-callout">
//         <span className="btn-label">Text call</span>
//       </a>
//       <a className="sticky-nav__item btn" href="#rich-text2">
//         <span className="btn-label">Rich Text 2</span>
//       </a>
//       <a className="sticky-nav__item btn" href="#notification-blue">
//         <span className="btn-label">Notification Blue</span>
//       </a>
//       <a className="sticky-nav__item btn" href="#text-callout2">
//         <span className="btn-label">Text Callout 2</span>
//       </a>
//     </div>
//     {/* rich text */}
//     <div id="rich-text" className="specialty-block">
//       <div className="specialty-detail-page container">
//         <div className="row between-md top-xs">
//           <div className="specialty-detail-page__left col-xs-6 col-md-7 col-lg-7">
//             <h1>Specialty Details Page</h1>

//             <div>
//               <div>
//                 <section className="container">
//                   <div className="row">
//                     <div
//                       className="rich-text-block centered"
//                       data-animate-disabled=""
//                     >
//                       <p>
//                         US San Diego Health touches the lives of those in San
//                         Diego and beyond through programs and services that
//                         promote health care access, health education, and
//                         physical and mental wellness. US San Diego Health
//                         touches the lives of those in San Diego and beyond
//                         through programs and services that promote health care
//                         access, health education, and physical and mental
//                         wellness. US San Diego Health touches the lives of those
//                         in San Diego and beyond through programs and services
//                         that promote health care access, health education, and
//                         physical and mental wellness. US San Diego Health
//                         touches the lives of those in San Diego and beyond
//                         through programs and services that promote health care
//                         access, health education, and physical and mental
//                         wellness. US San Diego Health touches the lives of those
//                         in San Diego and beyond through programs and services
//                         that promote health care access, health education, and
//                         physical and mental wellness. US San Diego Health
//                         touches the lives of those in San Diego and beyond
//                         through programs and services that promote health care
//                         access, health education, and physical and mental
//                         wellness. US San Diego Health touches the lives of those
//                         in San Diego and beyond through programs and services
//                         that promote health care access, health education, and
//                         physical and mental wellness.
//                       </p>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </div>
//           <div className="specialty-detail-page__right col-xs-6 col-md-5 col-lg-4">
//             <a className="specialty-detail-page__cta" href="/find-a-provider/">
//               <div>
//                 <i className="fas fa-stethoscope"></i>
//               </div>
//               <div>
//                 <span>Find a provider</span>
//                 <span></span>
//               </div>
//             </a>
//             <a
//               className="specialty-detail-page__cta"
//               href="/make-an-appointment/"
//             >
//               <div>
//                 <i className="fas fa-calendar-alt"></i>
//               </div>
//               <div>
//                 <span>Appointments</span>
//                 <span>Make an appointment</span>
//               </div>
//             </a>
//             <a className="specialty-detail-page__cta" href="/">
//               <div>
//                 <i className="fas fa-phone-alt"></i>
//               </div>
//               <div>
//                 <span>Call Us</span>
//                 <span>855-786-7899 9 a.m. to 5 p.m. weekdays</span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* notification red */}
//     <div id="notification-red" className="specialty-block">
//       <div>
//         <div>
//           <section className="container">
//             <div className="notification red">
//               <div className="notification__icon-container">
//                 <span className="notification__icon fas fa-exclamation-circle"></span>
//               </div>
//               <div className="notification__copy">
//                 <h3 className="notification__title">Notification Block</h3>
//                 <p className="notification__body">
//                   D US San Diego Health touches the lives of those in San Diego
//                   and beyond through programs and services that promote health
//                   care access, health education, and physical and mental
//                   wellness. US San Diego Health touches the lives of those in
//                   San Diego and beyond through programs and services that
//                   promote health care access, health education, and physical and
//                   mental wellness. US San Diego Health touches the lives of
//                   those in San Diego and beyond through programs and services
//                   that promote health care access, health education, and
//                   physical and mental wellness. US San Diego Health touches the
//                   lives of those in San Diego and beyond through programs and
//                   services that promote health care access, health education,
//                   and physical and mental wellness. US San Diego Health touches
//                   the lives of those in San Diego and beyond through programs
//                   and services that promote health care access, health
//                   education, and physical and mental wellness.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>{" "}
//     </div>
//     {/* text callout */}
//     <div id="text-callout" className="specialty-block">
//       <div>
//         <div>
//           <section className="callout-text">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. US San
//               Diego Health touches the lives of those in San Diego and beyond
//               through programs and services that promote health care access,
//               health education, and physical and mental wellness. US San Diego
//               Health touches the lives of those in San Diego and beyond through
//               programs and services that promote health care access, health
//               education, and physical and mental wellness. US San Diego Health
//               touches the lives of those in San Diego and beyond through
//               programs and services that promote health care access, health
//               education, and physical and mental wellness. US San Diego Health
//               touches the lives of those in San Diego and beyond through
//               programs and services that promote health care access, health
//               education, and physical and mental wellness. US San Diego Health
//               touches the lives of those in San Diego and beyond through
//               programs and services that promote health care access, health
//               education, and physical and mental wellness.
//             </p>
//           </section>
//         </div>
//       </div>{" "}
//     </div>
//     {/* rich-text2 */}
//     <div id="rich-text2" className="specialty-block">
//       <div>
//         <div>
//           <section className="container">
//             <div className="row">
//               <div
//                 className="rich-text-block centered"
//                 data-animate-disabled=""
//               >
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   US San Diego Health touches the lives of those in San Diego
//                   and beyond through programs and services that promote health
//                   care access, health education, and physical and mental
//                   wellness. US San Diego Health touches the lives of those in
//                   San Diego and beyond through programs and services that
//                   promote health care access, health education, and physical and
//                   mental wellness. US San Diego Health touches the lives of
//                   those in San Diego and beyond through programs and services
//                   that promote health care access, health education, and
//                   physical and mental wellness. US San Diego Health touches the
//                   lives of those in San Diego and beyond through programs and
//                   services that promote health care access, health education,
//                   and physical and mental wellness.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>{" "}
//     </div>

//     {/* notification blue*/}
//     <div id="notification-blue" className="specialty-block">
//       <div>
//         <div>
//           <section className="container">
//             <div className="notification blue">
//               <div className="notification__icon-container">
//                 <span className="notification__icon fas fa-exclamation-circle"></span>
//               </div>
//               <div className="notification__copy">
//                 <h3 className="notification__title">Notification Block</h3>
//                 <p className="notification__body">
//                   {" "}
//                   US San Diego Health touches the lives of those in San Diego
//                   and beyond through programs and services that promote health
//                   care access, health education, and physical and mental
//                   wellness. US San Diego Health touches the lives of those in
//                   San Diego and beyond through programs and services that
//                   promote health care access, health education, and physical and
//                   mental wellness.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>{" "}
//     </div>
//     {/* text callout 2 */}
//     <div id="text-callout2" className="specialty-block">
//       <div>
//         <div>
//           <section className="callout-text">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. US San
//               Diego Health touches the lives of those in San Diego and beyond
//               through programs and services that promote health care access,
//               health education, and physical and mental wellness. US San Diego
//               Health touches the lives of those in San Diego and beyond through
//               programs and services that promote health care access, health
//               education, and physical and mental wellness. US San Diego Health
//               touches the lives of those in San Diego and beyond through
//               programs and services that promote health care access, health
//               education, and physical and mental wellness.
//             </p>
//           </section>
//         </div>
//       </div>{" "}
//     </div>
//     <footer className="footer">
//       <div className="footer__logos-container">
//         <div>
//           <a href="#">
//             <img
//               alt="UC San Diego Health"
//               src="/resources/images/Logo/Dark.svg"
//             />
//           </a>
//         </div>
//         <div>
//           <img src="/resources/images/Magnet.png" alt="alt" />
//           <img src="/resources/images/BestHospitals.png" alt="alt" />
//         </div>
//       </div>
//       <div className="footer__second-level">
//         <div>
//           <div className="collapsible">
//             <a href="#">Patient & Family Information</a>
//           </div>
//           <ul className="links">
//             <li>
//               <a href="#">Medical Records</a>
//             </li>
//             <li>
//               <a href="#">Classes & Events</a>
//             </li>
//             <li>
//               <a href="#">Out-of-Town Patient Guide</a>
//             </li>
//           </ul>
//           <div className="collapsible">
//             <a href="#">Doctors Information</a>
//           </div>
//           <ul className="links">
//             <li>
//               <a href="#">International Patient Services</a>
//             </li>
//             <li>
//               <a href="#">Become a Patient</a>
//             </li>
//             <li>
//               <a href="#">Health Library</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div className="collapsible">
//             <a href="#">About Us</a>
//           </div>
//           <ul className="links">
//             <li>
//               <a href="#">Medical Records</a>
//             </li>
//             <li>
//               <a href="#">Classes & Events</a>
//             </li>
//             <li>
//               <a href="#">Out-of-Town Patient Guide</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div className="collapsible">
//             <a href="#">Giving</a>
//           </div>
//           <ul className="links">
//             <li>
//               <a href="#">Medical Records</a>
//             </li>
//             <li>
//               <a href="#">Classes & Events</a>
//             </li>
//             <li>
//               <a href="#">Out-of-Town Patient Guide</a>
//             </li>
//             <li>
//               <a href="#">International Patient Services</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div className="collapsible">
//             <a href="#">For Health Care Professionals</a>
//           </div>
//           <ul className="links">
//             <li>
//               <a href="#">Medical Records</a>
//             </li>
//             <li>
//               <a href="#">Classes & Events</a>
//             </li>
//             <li>
//               <a href="#">Out-of-Town Patient Guide</a>
//             </li>
//             <li>
//               <a href="#">International Patient Services</a>
//             </li>
//             <li>
//               <a href="#">Become a Patient</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div className="footer__second-level-standalone">
//             <a href="/link/71b7e594a05b4bfcab6c7ba9d07f03ba.aspx">Newsroom</a>
//           </div>
//           <div className="footer__second-level-standalone">
//             <a href="/for-health-care-professionals/jobs-at-uc-san-diego-health/">
//               Careers
//             </a>
//           </div>
//           <div className="footer__second-level-standalone">
//             <a href="/about-us/about-us-test/">Contact Us</a>
//           </div>
//         </div>
//       </div>
//       <div className="footer__bottom-level">
//         <div className="footer__copyright-section">
//           <span>2021 UC San Diego Health. All rights reserved.</span>
//         </div>
//         <ul className="footer__social-links">
//           <li>
//             <a href="#" aria-label="UCSDH LinkedIn">
//               <i className="fab fa-linkedin" />
//             </a>
//           </li>
//           <li>
//             <a href="#" aria-label="UCSDH Instagram">
//               <i className="fab fa-instagram-square" />
//             </a>
//           </li>
//           <li>
//             <a href="#" aria-label="UCSDH Facebook">
//               <i className="fab fa-facebook-square" />
//             </a>
//           </li>
//           <li>
//             <a href="#" aria-label="UCSDH Tumblr">
//               <i className="fab fa-tumblr-square" />
//             </a>
//           </li>
//           <li>
//             <a href="#" aria-label="UCSDH Twitter">
//               <i className="fab fa-twitter-square" />
//             </a>
//           </li>
//           <li>
//             <a href="#" aria-label="UCSDH YouTube">
//               <i className="fab fa-youtube-square" />
//             </a>
//           </li>
//         </ul>
//         <div className="footer__legal">
//           <a href="#">Privacy Policy</a>
//           <span>.</span>
//           <a href="#">Accessibility Statement</a>
//           <span>.</span>
//           <a href="#">Legal Notices</a>
//           <span>.</span>
//           <a href="#">Language Assistance</a>
//           <span>.</span>
//           <a href="#">UC San Diego</a>
//           <span>.</span>
//           <a href="#">UC San Diego School of Medicine</a>
//         </div>{" "}
//       </div>
//     </footer>
//   </div>
// );

export const Default = StickyNavComponent.bind({});
Default.args = stickyNavLinks;

// export const Model2 = StickyNavComponent2.bind({});
// Model2.args = stickArgs2;
