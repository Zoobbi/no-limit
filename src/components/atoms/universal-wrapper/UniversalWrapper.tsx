import { getStylesForUniversalWrapper } from "./helpers";
import { UniversalWrapperProps } from "./types";

export const UniversalWrapper = (props: UniversalWrapperProps) => {
  const {
    additionalStyles,
    as: Component = "div",
    children,
  } = props;

  const commonStyles = getStylesForUniversalWrapper(props);
  const moreStyles = additionalStyles || "";

  return <Component className={`${commonStyles} ${moreStyles}`}>{children}</Component>;
};
