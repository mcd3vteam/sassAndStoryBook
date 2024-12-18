import { SpecialtyDetailPage } from ".";

export default {
  title: "Components/Specialty Detail Page",
};

const SpecialtyDetailArgs = {
  cta: [
    {
      type: "Call Us",
      label: "855-827-3633 9 a.m. to 6 p.m. weekdays",
      icon: "fa-phone",
    },
    {
      type: "Appointments & Referrals",
      label: "For Referring Physicians",
      icon: "fa-calendar-check",
    },
    {
      type: "Specialists",
      label: "Head and Neck Cancer Care Team",
      icon: "fa-users",
    },
  ],
};

const SpecialtyDetail = (args) => <>
<SpecialtyDetailPage {...args} />
<div className="container" style={{backgroundColor:"blue", height: "100px"}}/>
</>;
export const Default = SpecialtyDetail.bind({});
Default.args = SpecialtyDetailArgs;
