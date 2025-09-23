export const getImagePath = (imagePath: string): string => {
  // In production, we need to prefix with the basePath
  const basePath =
    process.env.NODE_ENV === "production" ? "/portfolio-2023" : "";
  return `${basePath}${imagePath}`;
};
