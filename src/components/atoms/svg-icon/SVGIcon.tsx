import InlinedSvg from "react-inlinesvg";

export interface SVGProps {
  src: string;
  title?: string | null;
  width?: string | number | undefined;
  height?: string | number | undefined;
  className?: string | undefined;
}

export const SVG_SIZE = {
  small: {
    width: 16,
    height: 16,
  },
  medium: {
    width: 32,
    height: 32,
  },
  large: {
    width: 64,
    height: 64,
  },
};
export const SVGIcon = ({ src, title, width, height, className }: SVGProps) => {
  return (
    <InlinedSvg
      src={src}
      title={title}
      width={width}
      height={height}
      className={className}
    />
  );
};
