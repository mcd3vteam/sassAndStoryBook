import { ContactUs } from ".";
export default {
  title: "Components/Contact Us",
};

const ContactUsArgs = {
  title: "Send us a message",
  description:
    "Questions are answered during normal business hours, Monday through Friday, 8 a.m. to 4:30 p.m.",
  description2:
    "Please do not submit any medical questions or your personal health information.",
  description3: "If you need to contact your physician, please call",
  phone: "858-657-7000",
  yourInformation: ["First Name", "Last Name", "E-mail", "Subject", "Address"],
  message: "Message",
};

const ContactUsComponents = (args) => <ContactUs {...args}></ContactUs>;

export const ContactUsForm = ContactUsComponents.bind({});
ContactUsForm.args = ContactUsArgs;
