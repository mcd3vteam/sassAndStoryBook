import { MedicalServicesCards } from ".";

export default {
  title: "Organisms/Medical Services Cards",
};

const Template = (args) => <MedicalServicesCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      service: "Cancer (Oncology)",
      options: [],
    },
    {
      service: "Cancer (Oncology)",
      options: [
        "Moores Cancer Center / All Cancers",
        "Blood & Marrow Transplant (BMT)",
        "Brain Tumors",
        "Breast Cancer",
        "Family Cancer Genetics",
        "Gastrointestinal Cancers",
        "Gynecological Cancers",
        "Pancreatic Cancer",
        "Urologic Cancers",
      ],
    },
    {
      service: "Cancer (Oncology)",
      options: [],
    },
    {
      service: "Cancer (Oncology)",
      options: [
        "Moores Cancer Center / All Cancers",
        "Blood & Marrow Transplant (BMT)",
        "Brain Tumors",
        "Breast Cancer",
        "Family Cancer Genetics",
        "Gastrointestinal Cancers",
        "Gynecological Cancers",
        "Pancreatic Cancer",
        "Urologic Cancers",
      ],
    },
  ],
};
