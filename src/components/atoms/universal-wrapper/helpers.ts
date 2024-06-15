import { GetUniversalWrapperProps } from "./types";

export const getStylesForUniversalWrapper = ({
  margin,
  mt,
  mb,
  marginLg,
  mtLg,
  mbLg,
  marginMd,
  mtMd,
  mbMd,
  marginSm,
  mtSm,
  mbSm,
  padding,
  pt,
  pb,
  paddingLg,
  ptLg,
  pbLg,
  paddingMd,
  ptMd,
  pbMd,
  paddingSm,
  ptSm,
  pbSm,
  isFlex,
  flexDirection,
  justifyContent,
  alignItems,
}: GetUniversalWrapperProps): string | undefined => {
  const finalStyles = [];

  if (margin) {
    finalStyles.push(`margin${margin}`);
  }

  if (mt) {
    finalStyles.push(`mt${mt}`);
  }

  if (mb) {
    finalStyles.push(`mb${mb}`);
  }

  if (marginLg) {
    finalStyles.push(`marginLg${marginLg}`);
  }

  if (mtLg) {
    finalStyles.push(`mtLg${mtLg}`);
  }

  if (mbLg) {
    finalStyles.push(`mbLg${mbLg}`);
  }

  if (marginMd) {
    finalStyles.push(`marginMd${marginMd}`);
  }

  if (mtMd) {
    finalStyles.push(`mtMd${mtMd}`);
  }

  if (mbMd) {
    finalStyles.push(`mbMd${mbMd}`);
  }

  if (marginSm) {
    finalStyles.push(`marginSm${marginSm}`);
  }

  if (mtSm) {
    finalStyles.push(`mtSm${mtSm}`);
  }

  if (mbSm) {
    finalStyles.push(`mbSm${mbSm}`);
  }

  if (padding) {
    finalStyles.push(`padding${padding}`);
  }

  if (pt) {
    finalStyles.push(`pt${pt}`);
  }

  if (pb) {
    finalStyles.push(`pb${pb}`);
  }

  if (paddingLg) {
    finalStyles.push(`paddingLg${paddingLg}`);
  }

  if (ptLg) {
    finalStyles.push(`ptLg${ptLg}`);
  }

  if (pbLg) {
    finalStyles.push(`pbLg${pbLg}`);
  }

  if (paddingMd) {
    finalStyles.push(`paddingMd${paddingMd}`);
  }

  if (ptMd) {
    finalStyles.push(`ptMd${ptMd}`);
  }

  if (pbMd) {
    finalStyles.push(`pbMd${pbMd}`);
  }

  if (paddingSm) {
    finalStyles.push(`paddingSm${paddingSm}`);
  }

  if (ptSm) {
    finalStyles.push(`ptSm${ptSm}`);
  }

  if (pbSm) {
    finalStyles.push(`pbSm${pbSm}`);
  }

  if (isFlex) {
    finalStyles.push("display-flex");
  }

  if (isFlex && flexDirection) {
    finalStyles.push(`flex-direction-${flexDirection}`);
  }

  if (isFlex && justifyContent) {
    finalStyles.push(`justify-content-${justifyContent}`);
  }

  if (isFlex && alignItems) {
    finalStyles.push(`align-items-${alignItems}`);
  }

  return finalStyles.join(" ");
};
