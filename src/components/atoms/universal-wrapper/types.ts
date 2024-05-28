import { ReactNode } from "react";

type Steps = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 48;

interface LayoutData {
  margin?: Steps,
  mt?: Steps,
  mb?: Steps,
  marginLg?: Steps,
  mtLg?: Steps,
  mbLg?: Steps,
  marginMd?: Steps,
  mtMd?: Steps,
  mbMd?: Steps,
  marginSm?: Steps,
  mtSm?: Steps,
  mbSm?: Steps,
  padding?: Steps,
  pt?: Steps,
  pb?: Steps,
  paddingLg?: Steps,
  ptLg?: Steps,
  pbLg?: Steps,
  paddingMd?: Steps,
  ptMd?: Steps,
  pbMd?: Steps,
  paddingSm?: Steps,
  ptSm?: Steps,
  pbSm?: Steps,
}

interface FlexGrid {
  isFlex?: boolean;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
}

export type GetUniversalWrapperProps = FlexGrid & LayoutData;

export interface UniversalWrapperProps extends LayoutData, FlexGrid{
  children: ReactNode;
  additionalStyles?: string;
  as?: keyof JSX.IntrinsicElements;
}
