import { MediaPlayer } from ".";

export default {
  title: "Organisms/Media Player",
};

const MediaPlayerArgs = {
  title: "H2 Supporting Video",
  description:
    "Lörem ipsum villamatta nätfiske. Dymebelt ena 5:2-diet hyponade. Spetesm euning spede. Prekir bepaligt last, solent. Kar kapselbryggare. ",
  imageSrc: "/resources/images/image.png",
  ctaLabel: "Give now",
  animationDisabled: false,
  videoSrc: "https://youtube.com/embed/PDY2FzIWtO8",
};
const MediaPlayerParameters = {
  controls: {
    exclude: ["isVideo"],
  },
};

const MediaPlayerComponent = (args) => <MediaPlayer {...args} />;

export const WithMediaPlayer = MediaPlayerComponent.bind({});
WithMediaPlayer.args = MediaPlayerArgs;
WithMediaPlayer.parameters = MediaPlayerParameters;
