const schools = [
  { symbol: "JOUR", name: "Medill School of Journalism" },
  { symbol: "LAW", name: "Law School" },
  { symbol: "MEAS", name: "McCmick Schl of Engg & App Sci" },
  { symbol: "SESP", name: "School of Educ & Social Policy" },
  { symbol: "SPCH", name: "School of Communication" },
  { symbol: "UC", name: "School of Professional Studies" },
  { symbol: "WCAS", name: "Weinberg College of Arts & Sci" },
];

export function getSchools() {
  return schools.filter((school) => school);
}
