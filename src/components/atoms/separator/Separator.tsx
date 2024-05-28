import { ReactNode } from "react";

import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";


interface SeparatorProps {
  children: ReactNode
}

export const Separator = ({ children }: SeparatorProps) => {
  return (
    <UniversalWrapper pbLg={48} pbMd={32} pbSm={24}>
      {children}
    </UniversalWrapper>
  );
};
