const schools = [
  { symbol: "DOHA", name: "Northwestern in Qatar" },
  { symbol: "JOUR", name: "Medill School of Journalism" },
  { symbol: "KGSM", name: "J L Kellogg  School Management" },
  { symbol: "LAW", name: "Law School" },
  {
    symbol: "MEAS",
    name: "McCormick School of Engineering and Applied Science",
  },
  { symbol: "MUSIC", name: "Bienen School of Music" },
  { symbol: "NDGR", name: "Non-Degree Schools" },
  { symbol: "SESP", name: "School of Educ & Social Policy" },
  { symbol: "SPCH", name: "School of Communication" },
  { symbol: "TGS", name: "The Graduate School" },
  { symbol: "UC", name: "School of Professional Studies" },
  { symbol: "WCAS", name: "Weinberg College of Arts and Sciences" },
];

export function getSchools() {
  return schools.filter((school) => school);
}
