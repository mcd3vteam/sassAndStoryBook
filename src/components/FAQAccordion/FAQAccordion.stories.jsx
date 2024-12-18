import { FAQAccordion } from ".";

export default {
  title: "Components/FAQAccordion",
};

const FAQAccordianArgs = {
  title: "FAQs to help you switch your care",
  description:
    "Faucibus fames quam erat neque mi. Ac hendrerit metus massa orci. Integer nibh felis, sit elit, adipiscing.",
  seeAll: "See All FAQ",
  list: [
    {
      question: "Do you offer coronavirus antibody testing?",
      answer:
        "Call our COVID-19 Nurse Line at 800-926-8273 to discuss your symptoms before coming to any of our hospitals or clinics",
      additionalInfo: [
        "View COVID-19 information for patients and visitors",
        "View COVID-19 FAQs",
      ],
      links: ["www.google.com", "www.google.com"],
    },
    {
      question: "What should I do if I think I have coronavirus?",
      answer:
        "Call our COVID-19 Nurse Line at 800-926-8273 to discuss your symptoms before coming to any of our hospitals or clinics",
    },
    {
      question: "Can I get tested for COVID-19?",
      answer:
        "Call our COVID-19 Nurse Line at 800-926-8273 to discuss your symptoms before coming to any of our hospitals or clinics",
    },
    {
      question: "What are you doing about COVID-19?",
      answer:
        "Call our COVID-19 Nurse Line at 800-926-8273 to discuss your symptoms before coming to any of our hospitals or clinics",
    },
    {
      question: "How do I find a specialist?",
      answer:
        "Call our COVID-19 Nurse Line at 800-926-8273 to discuss your symptoms before coming to any of our hospitals or clinics",
    },
    {
      question: "How do I find an OB/GYN?",
      answer:
        "Call our COVID-19 Nurse Line at 800-926-8273 to discuss your symptoms before coming to any of our hospitals or clinics",
    },
  ],
};

const FAQ = (args) => <FAQAccordion {...args} />;
export const Default = FAQ.bind({});
Default.args = FAQAccordianArgs;
