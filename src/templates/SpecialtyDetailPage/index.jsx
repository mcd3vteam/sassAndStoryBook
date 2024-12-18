import { TopNav } from "../../molecules/TopNav";
import { SpecialtyDetailArgs } from "./data";
import { SpecialtyDetailPage } from "../../components/SpecialtyDetailPage";
import { StickyNav } from "../../molecules/StickyNav";
import { Breadcrumb } from "../../molecules/Breadcrumb";
import { Footer } from "../../molecules/Footer";
const stickyNavLinks = [
  {
    label: "Intro",
    href: "#area-1",
    section: (
      <div id="area-1" className="specialty-block">
        <SpecialtyDetailPage {...SpecialtyDetailArgs} />
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
];

const breadcrumbProps = {
  color: "blue",
  links: [{ label: "Home", href: "#" }, { label: "Doctors" }],
  overlay: false,
  extraMargin: false,
};
export const SpecialtyDetailPageTemplate = () => {
  return (
    <>
      <TopNav animationDisabled={false} />
      <main className="main" id="main">
        <Breadcrumb {...breadcrumbProps}></Breadcrumb>
        <StickyNav links={stickyNavLinks}></StickyNav>
      </main>
      <Footer />
    </>
  );
};
