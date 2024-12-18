import { ExpressYourGratitudeForm } from ".";
export default {
  title: "Components/Express Your Gratitude Form",
};

const ExpressYourGratitudeFormArgs = {
  title: "Express Your Gratitude",
  description:
    "Has your life, or the life of a loved one been touched by UC San Diego Health?",
  description2:
    "We invite you to share your experience as a way to celebrate and voice gratitude to our rexceptional healthcare providedres and dedicated team members.",
  theirName: "Who do you want to recognize?*",
  theirLocation: "Location (Building):*",
  theirDepartment: "Department",
  yourName: "Your Name (first and last)",
  yourPhone: "Your Phone Number (xxx-xxx-xxxx)",
  yourEmail: "E-mail Address:",
  message: "Message*",
  submitMessage:
    "By clicking the 'SUBMIT' button below, you are agreeing that no compensation of any kind will be provided or expected in exchange for the distribution of your experience. Additionally, your story will be shared by email communications, media platforms, as well as print publications within the UC San Diego Health organization.",

  animationDisabled: false,
};

const ExpressYourGratitudeComponents = (args) => (
  <ExpressYourGratitudeForm {...args}></ExpressYourGratitudeForm>
);

export const ExpressYourGratitude = ExpressYourGratitudeComponents.bind({});
ExpressYourGratitude.args = ExpressYourGratitudeFormArgs;
