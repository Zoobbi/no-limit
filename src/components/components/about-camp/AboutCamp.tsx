import { PLUSES_CAMP_TEXT } from "@Basket/data/content";
import { TextWithImage } from "@Basket/components/moleculas/text-with-image";

export const AboutCamp = () => {
  return (
    <TextWithImage
      text={PLUSES_CAMP_TEXT}
      image={{
        src: "/traning2.webp",
        alt: "дети играют в баскетбол",
        width: 320,
        height: 320,
      }}
      isTextCenter
    />
  );
};
