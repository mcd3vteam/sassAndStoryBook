import { AccordionCard } from ".";

export default {
  title: "Molecules/Accordion",
};

const AccordionArgs = {
  list: {
    question: "Do you offer coronavirus antibody testing?",
    answer:
      "Call our COVID-19 Nurse Line at 800-926-8273 to discuss your symptoms before coming to any of our hospitals or clinics",
    additionalInfo: [
      "View COVID-19 information for patients and visitors",
      "View COVID-19 FAQs",
    ],
    links: ["www.google.com", "www.google.com"],
  },
};

const Acc = (args) => (
  <>
    <AccordionCard {...args} />
    <AccordionCard {...args} />
    <AccordionCard {...args} />
    <AccordionCard {...args} />
  </>
);
export const Default = Acc.bind({});
Default.args = AccordionArgs;
