import { BMI } from ".";

export default {
  title: "Components/BMI Form",
};

const BMIArgs = {
  title: "Interested in Nonsurgical Weight Loss?",
  description:
    "We offer several programs and strategies to help you successfully lose weight, keep it off and lead your healthiest life!",
  description2:
    "Fill out this form to let us know if you are interested in learning more about UC San Diego Health's Weight Management Program.",
  description3:
    "You can also call 858-657-8860 or email weightmanagement@health.ucsd.edu.",
  phone: "858-657-8860",
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email Address",
  subject: "Subject",
  message: "Message",
};

const BMIComponents = (args) => <BMI {...args}></BMI>;

export const BMIForm = BMIComponents.bind({});
BMIForm.args = BMIArgs;
