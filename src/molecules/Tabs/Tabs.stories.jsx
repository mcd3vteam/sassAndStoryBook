import { RenderFeaturedItems } from "../../organisms/Cards/FeaturedItems";
import { DefaultClasses } from "../../sharedReact/Carousels/defaults";
import { setFeaturedItemsArgs } from "../../organisms/Cards/FeaturedItems/FeaturedItems";
import { Tabs } from ".";

const cards = [
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
];

const cargs = {
  disableAnimation: false,
  cards: cards.slice(0, 3),
  karouselOptions: {
    buttons: true,
    classes: DefaultClasses,
    draggable: false,
    indicators: true,
    responsive: [
      {
        breakpoint: 1200,
        options: {
          slidesToShow: 2,
          indicators: true,
          buttons: true,
          draggable: true,
        },
      },
    ],
    slidesToScroll: 1,
  },
};

const id = "54";
setFeaturedItemsArgs(id, cargs);

export default {
  title: "Molecules/Tabs",
};

const storyArgs = {
  selectedIndex: 0,
  tabs: [
    {
      title: "Tab Item One",
      content: <div>Tab One Content</div>,
    },
    {
      title: "Tab Item Two",
      content: <div>Tab Two Content</div>,
    },
    { title: "Tab Item Three", content: <div>Tab Three Content</div> },
    { title: "Tab Item Four", content: <div>Tab Four Content</div> },
  ],
};

const StoryComponent = (args) => <Tabs {...args} />;
const ContainedStoryComponent = (args) => (
  <div className="container" style={{ border: "1px solid #000" }}>
    <Tabs {...args} />
  </div>
);

export const Empty = StoryComponent.bind({});
Empty.args = storyArgs;

export const WithContent = StoryComponent.bind({});
WithContent.args = {
  selectedIndex: 0,
  tabs: [
    {
      title: "Tab Item One",
      content: <RenderFeaturedItems args={cargs} id="54" />,
    },
    {
      title: "Tab Item Two",
      content: <div>Tab Two Content</div>,
    },
    { title: "Tab Item Three", content: <div>Tab Three Content</div> },
    { title: "Tab Item Four", content: <div>Tab Four Content</div> },
  ],
};

export const Contained = ContainedStoryComponent.bind({});
Contained.args = {
  selectedIndex: 0,
  tabs: [
    {
      title: "Tab Item One",
      content: <RenderFeaturedItems args={cargs} id="54" />,
    },
    {
      title: "Tab Item Two",
      content: <div>Tab Two Content</div>,
    },
    { title: "Tab Item Three", content: <div>Tab Three Content</div> },
    { title: "Tab Item Four", content: <div>Tab Four Content</div> },
  ],
};
