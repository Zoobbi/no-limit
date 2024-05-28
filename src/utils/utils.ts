export const getColClasses = (gridValues: {lg: number, md: number, sm: number}) => {
  return `col-lg-${gridValues.lg} col-md-${gridValues.md} col-sm-${gridValues.sm}`;
};
