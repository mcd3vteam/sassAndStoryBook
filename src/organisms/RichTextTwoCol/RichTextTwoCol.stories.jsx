import { RichText2Columns } from ".";

export default {
  title: "Organisms/Rich Text 2 Columns",
};

const AComponent = (args) => (
  <RichText2Columns {...args}>
    <p>
      Lörem ipsum sulig para pamyra och katura. Multinera tektiga komis, i nån
      pöv. Benårad synde. Preling askänka detaren än pladade den tris. Binat
      krodebel utom bugen dåd.
    </p>
    <p>
      Lörem ipsum sulig para pamyra och katura. Multinera tektiga komis, i nån
      pöv. Benårad synde. Preling askänka detaren än pladade den tris. Binat
      krodebel utom bugen dåd.
    </p>
  </RichText2Columns>
);

const BComponent = (args) => (
  <RichText2Columns {...args}>
    <p>
      Lörem ipsum sulig para pamyra och katura. Multinera tektiga komis, i nån
      pöv. Benårad synde. Preling askänka detaren än pladade den tris. Binat
      krodebel utom bugen dåd.
    </p>
    <p>
      Lörem ipsum sulig para pamyra och katura. Multinera tektiga komis, i nån
      pöv. Benårad synde. Preling askänka detaren än pladade den tris. Binat
      krodebel utom bugen dåd.
    </p>
  </RichText2Columns>
);

const TitleBlockComponent = (args) => (
  <RichText2Columns {...args}>
    <h3>World-class care right in your backyard</h3>
    <p>
      Lörem ipsum sulig para pamyra och katura. Multinera tektiga komis, i nån
      pöv. Benårad synde. Preling askänka detaren än pladade den tris. Binat
      krodebel utom bugen dåd.
    </p>
  </RichText2Columns>
);

const TitleBlock2Component = (args) => (
  <RichText2Columns {...args}>
    {null}
    <p>
      Lörem ipsum sulig para pamyra och katura. Multinera tektiga komis, i nån
      pöv. Benårad synde. Preling askänka detaren än pladade den tris. Binat
      krodebel utom bugen dåd.
    </p>
  </RichText2Columns>
);

export const A = AComponent.bind({});
A.args = {
  eyebrow: "",
  leftTitle: "",
  leftSubtitle: "H3 short title",
  rightTitle: "",
  rightSubtitle: "H3 short title",
};

export const B = BComponent.bind({});
B.args = {
  eyebrow: "H3 short title",
};

export const TitleBlock = TitleBlockComponent.bind({});
TitleBlock.args = {
  leftTitle: "Access and Facilities",
  isTitleBlock: "true",
};
export const TitleBlock2 = TitleBlock2Component.bind({});
TitleBlock2.args = {
  leftTitle: "Snippgympa ambifaktisk",
  leftSubtitle: "Baligt helogi hedersvåld.",
  isTitleBlock: "true",
};
