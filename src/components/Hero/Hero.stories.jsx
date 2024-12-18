import { Hero } from ".";
import { QuickActionCards } from "../../organisms/Cards/QuickActionCards";

export default {
  title: "Components/Hero/With Cards",
  argTypes: {
    textColor: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

const cards = [
  {
    url: "#",
    title: "Call Us",
    description: "855-8273633 9a.m. to 6p.m. weekdays",
    iconClasses: "fal fa-user-plus",
  },
  {
    url: "#",
    title: "Request an Appointment",
    description: "855-8273633 9a.m. to 6p.m. weekdays",
    iconClasses: "fal fa-user-plus",
  },
  {
    url: "#",
    title: "Card Title",
    description: "Lörem ipsum pertyp ",
    iconClasses: "fal fa-user-plus",
  },
  {
    url: "#",
    title: "For Referring Physicians",
    description: "Lörem ipsum pertyp aska",
    iconClasses: "fal fa-user-plus",
  },
  {
    url: "#",
    title: "Accepted Insurance Plans",
    description: "Lörem ipsum pertyp aska.",
    iconClasses: "fal fa-user-plus",
  },
  {
    url: "#",
    title: "Covid-19",
    description: "Lörem ipsum pertyp aska.",
    iconClasses: "fal fa-user-plus",
  },
  {
    url: "#",
    title: "Card Title",
    description:
      "Lörem ipsum pertyp aska. Biolig dining tidirtad. Disegisk bida: jak. Fagede homofask behet agt or. ",
    iconClasses: "fal fa-user-plus",
  },
];

const Component = (args) => {
  const { heroArgs, cardsArgs, textColor } = args;
  return (
    <div className="main">
      <div className="hero-content">
        <Hero {...heroArgs} textColor={textColor} />
        <QuickActionCards {...cardsArgs} />
      </div>
    </div>
  );
};

// 5 cards
export const AboutUs = Component.bind({});
AboutUs.args = {
  heroArgs: {
    title: "About UC San Diego Health",
    imageSrc: "/resources/images/jobs.png",
  },
  cardsArgs: { cards: cards.slice(4) },
};

// 3 cards
export const HeadNeckCancer = Component.bind({});
HeadNeckCancer.args = {
  heroArgs: {
    title: "Head & Neck Cancers",
    description:
      "If you have a cancer of the head or neck, it’s important to receive the highest quality of care. Trust us to treat your cancer with the most advanced treatments.",
    ctaLabel: "Make an Appointment",
  },
  cardsArgs: { cards: cards.slice(0, 3) },
};

// 2 cards
export const MedicalRecords = Component.bind({});
MedicalRecords.args = {
  heroArgs: {
    title: "Medical Records",
    minimal: true,
  },
  cardsArgs: { cards: cards.slice(4, 6) },
};

// 1 card
export const PatientFamilyInfo = Component.bind({});
PatientFamilyInfo.args = {
  heroArgs: {
    title: "Patient & Families",
    subtitle: "lorem ipsum dolor",
    description:
      "Welcome to UC San Diego Health — offering comprehensive, compassionate and customized care for every member of your family.",
    imageSrc: "/resources/images/jobs.png",
  },
  cardsArgs: { cards: cards.slice(0, 1) },
};
