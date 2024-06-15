import { FC } from "react";

import { PersonalInfoSection } from "@Basket/components/organisms/personal-info-section";
import { TRAINERS, TRAINERS_HEADER } from "@Basket/data/content";

export const Trainers: FC = () => (<PersonalInfoSection sectionHeader={TRAINERS_HEADER} personals={TRAINERS} />);
