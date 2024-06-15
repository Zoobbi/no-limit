import { Separator } from "@Basket/components/atoms/separator";
import {
  FAQ,
  PromoVideo,
  CampTrainingInfo,
  Trainers,
  HeroSection,
  AboutCamp,
  LivingZone,
  Price,
} from "@Basket/components/components/";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutCamp />
      <Separator>
        <CampTrainingInfo />
      </Separator>
      <Separator>
        <Trainers />
      </Separator>
      <Separator>
        <LivingZone />
      </Separator>
      <Separator>
        <PromoVideo />
      </Separator>
      <Separator>
        <Price />
      </Separator>
      <Separator>
        <FAQ />
      </Separator>
    </main>
  );
}
