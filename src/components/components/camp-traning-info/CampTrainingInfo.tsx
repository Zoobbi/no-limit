import { FC } from "react";

import { InformationSVGSection } from "@Basket/components/organisms/information-svg-section";
import { CAMP_TRAINING_INFO, NAVIGATION_MENU } from "@Basket/data/content";

export const CampTrainingInfo: FC = () => (
  <InformationSVGSection id={NAVIGATION_MENU[0].id} items={CAMP_TRAINING_INFO} />
);
