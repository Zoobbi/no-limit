import { Button } from "@Basket/components/atoms/button";
import { HeroSection } from "@Basket/components/components/hero-section";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <Button>текст</Button>
    </main>
  );
}
