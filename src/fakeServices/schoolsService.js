const schools = [
  { symbol: "JOUR", name: "Medill School of Journalism" },
  { symbol: "KGSM", name: "J L Kellogg  School Management" },
  { symbol: "MEAS", name: "McCmick Schl of Engg & App Sci" },
  { symbol: "MUSIC", name: "Bienen School of Music" },
  { symbol: "SESP", name: "School of Educ & Social Policy" },
  { symbol: "SPCH", name: "School of Communication" },
  { symbol: "TGS", name: "The Graduate School" },
  { symbol: "UC", name: "School of Professional Studies" },
  { symbol: "WCAS", name: "Weinberg College of Arts & Sci" },
];

export function getSchools() {
  return schools.filter((school) => school);
}
