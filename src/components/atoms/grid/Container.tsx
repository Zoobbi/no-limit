import { FC, ReactNode } from "react";

// eslint-disable-next-line no-undef
export const Container: FC<{children: ReactNode, as?: keyof JSX.IntrinsicElements}> = (
  {
    children,
    as: Component = "div",
  },
) => {
  return <Component className="container">{children}</Component>;
};
