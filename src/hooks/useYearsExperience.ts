// Place this in a utility file or wherever you need
export function yearsOfExperience(
  startYear: number,
  type: "commercial" | "personal"
): string {
  const currentYear = new Date().getFullYear();
  const length = currentYear - startYear;

  const plural = length === 1 ? "" : "s";
  return type === "commercial" && length > 0
    ? `${length} year${plural} commercial experience`
    : `${length} year${plural} personal experience`;
}
