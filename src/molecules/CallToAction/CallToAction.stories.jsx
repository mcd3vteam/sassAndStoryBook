import { CallToAction } from ".";

export default {
  title: "Molecules/Call To Action",
};

const richTextArgs = {
  centered: false,
  title: "H2 title",
  lead: [
    "Lörem ipsum ast jelingar medan sont nerade. Hemick nyheten, därför att trenar tijoda. Jeberade tyng antingen tralig. Saliga deskapet, vada. Ninera semipreska.",
    "Tretrer. Autolerade morotsaktivism och mas ubel makrologi. Intrav kedösade då supraosmos trerat. Episa växtmjölk jojör jöniktig predäv. Etnopatologi nire eftersom tresk.",
  ],
  subtitle: "",
  ctaLabel: "Call us",
  url: "#",
};

const leadOnlyArgs = {
  centered: true,
  title: "Snippgympa ambifaktisk",
  lead: [
    "For decades, UC San Diego Health and its schools of medicine and pharmacy have been advancing medicine through breakthrough discoveries — including pioneering firsts in surgery, imaging, cancer treatment and cardiovascular care. In fact, we’re the only university-based health care system in San Diego to focus on developing new medicines and therapies — for both common and rare conditions. This all bodes well for our patients, because with hundreds of ongoing clinical trials, you’ll have immediate access to potentially life-saving medical advancements.",
  ],
  subtitle: "Baligt helogi hedersvåld.",
  ctaLabel: "Find a Clinical Trial",
  url: "#",
};

const CTAComponentWithRichText = (args) => (
  <CallToAction {...args}>
    <h2>H2 title</h2>
    <p>
      Lörem ipsum ast jelingar medan sont nerade. Hemick nyheten, därför att
      trenar tijoda. Jeberade tyng antingen tralig. Saliga deskapet, vada.
      Ninera semipreska. Tretrer. Autolerade morotsaktivism och mas ubel
      makrologi. Intrav kedösade då supraosmos trerat. Episa växtmjölk jojör
      jöniktig predäv. Etnopatologi nire eftersom tresk.
    </p>
    <h3>H3 title</h3>
    <p>
      Lörem ipsum televitin androgyn krodåprer: det vik. Besöda. Robotdräkt
      pånynade. Viligt finansfobi. Ode ren, megat. Nigivonade krobel. Diaren
      olabel moprenade. Pomorade pneumasofi geoktiga logodiktisk. Sedan dihet
      postitet Foppatoffel. Somolaska pånusologi.
    </p>
    <h4>H4 title</h4>
    <p>
      Lörem ipsum ser sekelsiffror sydaren fredsring. Spenat dohäning, när
      spedodar inte hemissa. Diarånat dol: så dosarade. Geon soskapet. Tibusamma
      engar och rölig. Ren. Valig megast, teles infraråligt. Treloning. Var.
      Plal vatt nerad.
    </p>
  </CallToAction>
);

const CTAComponentLeadOnly = (args) => <CallToAction {...args} />;

export const LeadFieldsOnly = CTAComponentLeadOnly.bind({});
LeadFieldsOnly.args = leadOnlyArgs;
export const WithRichText = CTAComponentWithRichText.bind({});
WithRichText.args = richTextArgs;
