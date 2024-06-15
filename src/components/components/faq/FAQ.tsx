import { Accordion } from "@Basket/components/organisms/accordion";
import { FAQ_CONTENT, FAQ_HEADER, NAVIGATION_MENU } from "@Basket/data/content";

export const FAQ = () => (<Accordion id={NAVIGATION_MENU[3].id} items={FAQ_CONTENT} headerText={FAQ_HEADER} />);
