import { ChildCategoriesCTA } from ".";

export default {
  title: "Organisms/Child Categories CTA",
};

const ChildCategoriesCTAArgs = {
  title: "H3 intro head linecontent to  to connect to child pages",
  description: "Dynamic display of related content",
  list: [
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
    { specialty: "Primary Care" },
  ],
};

const CTAChildCat = (args) => (
  <>
    <ChildCategoriesCTA {...args} />
  </>
);
export const Default = CTAChildCat.bind({});
Default.args = ChildCategoriesCTAArgs;
