import { getStylesForUniversalWrapper } from "./helpers";
import { UniversalWrapperProps } from "./types";

export const UniversalWrapper = (props: UniversalWrapperProps) => {
  const {
    additionalStyles,
    id,
    as: Component = "div",
    children,
  } = props;

  const commonStyles = getStylesForUniversalWrapper(props);
  const moreStyles = additionalStyles || "";

  return (
    <Component id={id} className={`${commonStyles} ${moreStyles}`}>
      {children}
    </Component>
  );
};
