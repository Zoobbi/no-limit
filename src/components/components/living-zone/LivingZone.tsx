import { LIVING_INFO, LIVING_ZONE_HEADER, NAVIGATION_MENU } from "@Basket/data/content";
import { PicturesWithText } from "@Basket/components/organisms/pictures-with-text";

export const LivingZone = () => (
  <PicturesWithText id={NAVIGATION_MENU[1].id} data={LIVING_INFO} headerText={LIVING_ZONE_HEADER} />
);
