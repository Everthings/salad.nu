const buildings = {
  "Fisk Hall 311": { lat: 42.050793, lon: -87.674174 },
  "Louis Hall 226": { lat: 42.051513, lon: -87.673291 },
  "McCormick Foundation Ctr 3107": { lat: 42.051381, lon: -87.674162 },
  "McCormick Foundation Ctr Forum": { lat: 42.051381, lon: -87.674162 },
  "McCormick Foundation Ctr 3127": { lat: 42.051381, lon: -87.674162 },
  "McCormick Foundation Ctr 3119": { lat: 42.051381, lon: -87.674162 },
  "Fisk Hall 308": { lat: 42.050793, lon: -87.674174 },
  "McCormick Foundation Ctr 2131": { lat: 42.051381, lon: -87.674162 },
  "Fisk Hall B11": { lat: 42.050793, lon: -87.674174 },
  "Fisk Hall 306": { lat: 42.050793, lon: -87.674174 },
  "Fisk Hall 111": { lat: 42.050793, lon: -87.674174 },
  "Fisk Hall 206": { lat: 42.050793, lon: -87.674174 },
  "Fisk Hall 307": { lat: 42.050793, lon: -87.674174 },
  "McCormick Foundation Ctr 2111": { lat: 42.051381, lon: -87.674162 },
  "Fisk Hall B4": { lat: 42.050793, lon: -87.674174 },
  "Washington, DC Bureau": null,
  "Kellogg Global Hub 2110": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub 2120": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub 2130": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "555 Clark B01": { lat: 42.049555, lon: -87.677517 },
  "Kellogg Econ Classroom 1410": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub L130": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub L120": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub L110": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub 1420": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub 1430": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub 1110": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub 1130": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Global Hub 1120": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Ford Eng Design Cntr SB335": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Technological Institute L441": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute A230": { lat: 42.057728, lon: -87.675869 },
  "Chambers Hall L11": { lat: 42.053635, lon: -87.677743 },
  "Ford Eng Design Cntr G-201": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Ford Eng Design Cntr G-205": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Ford Eng Design Cntr G-211": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Technological Institute C135": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute M228": { lat: 42.057728, lon: -87.675869 },
  "North Garage Krebs Room 1440": {
    lat: 42.05963149300605,
    lon: -87.6742308153558,
  },
  "North Garage Padula Room 1430": {
    lat: 42.05963149300605,
    lon: -87.6742308153558,
  },
  "Tech Institute C115 Bodeen Lab": { lat: 42.057788, lon: -87.675893 },
  "Ford Hive Rm 2350": { lat: 42.05702096786832, lon: -87.67673253677064 },
  "Annenberg Hall 347": { lat: 42.056058, lon: -87.674515 },
  "Frances Searle - School of Com": { lat: 42.0586351, lon: -87.6737228 },
  "Parkes Hall 214": { lat: 42.050263, lon: -87.676963 },
  "2315 Campus Dr Clinic 1620": {
    lat: 42.05922069424051,
    lon: -87.67456491973468,
  },
  "Frances Searle Building 3231": { lat: 42.0586351, lon: -87.6737228 },
  "2315 Campus Dr Clinic 1630": {
    lat: 42.05922069424051,
    lon: -87.67456491973468,
  },
  "CSD Sem Rm B302 - Frances Srle": { lat: 42.0586351, lon: -87.6737228 },
  "Frances Searle Building 3417": { lat: 42.0586351, lon: -87.6737228 },
  "Wirtz Center Ballroom": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Wirtz 230 Instruct Black Box 1": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz 201 Performnce Black Box": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz Center Cellar": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Annie May Swift Hall 103": { lat: 42.052311, lon: -87.675093 },
  "Wirtz 101 Performnce Black Box": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz Center BERGEN": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Wirtz Center STRUB": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Wirtz 235 Seminar Room 1": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Fisk Hall 115": { lat: 42.050793, lon: -87.674174 },
  "Wirtz 206 Computer Lab": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Wirtz 240 Seminar Room 2": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz Center WALLIS": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Wirtz Center SOUTH": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Wirtz 215 Instruct Black Box 3": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz 225 Instruct Black Box 2": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Abbott Hall Chicago rm 203": { lat: 41.89528, lon: -87.6167 },
  "Abbott Hall Chicago rm 206": { lat: 41.89528, lon: -87.6167 },
  "Abbott Hall Chicago 1228": { lat: 41.89528, lon: -87.6167 },
  "633 N St Clair, 20th Fl Mag Mi": null,
  "Crowe 5-138 Af Am Studies Sem": {
    lat: 42.051422529211436,
    lon: -87.67518303610152,
  },
  "Kresge 5531 Comp Lit. Sem. Rm.": { lat: 42.0516769, lon: -87.6750968 },
  "ANTHRO Sem Rm 104 - 1810 Hinmn": null,
  "Crowe Hall 1-140 Art T&P Room": {
    lat: 42.051422529211436,
    lon: -87.67518303610152,
  },
  "Kresge 1-345 Art Drawing Studi": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1335 Painting Studio": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1425 Sculpture Room": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1310 Photo Classroom": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1410 Art Flex/Seminar": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1540 Art T&P Presentati": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1330 Art Studio": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1319 Art Room": { lat: 42.0516769, lon: -87.6750968 },
  "Locy Hall 011": { lat: 42.051062, lon: -87.673933 },
  "University Hall 418": { lat: 42.051901, lon: -87.67596 },
  "Kresge 4354 Art Hist. Sem. Rm.": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 3354 German Seminar Rm.": { lat: 42.0516769, lon: -87.6750968 },
  "Technological Institute F285": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute F491": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute F389": { lat: 42.057728, lon: -87.675869 },
  "Kellogg Econ Classroom 3301": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "University Hall 018 English": { lat: 42.051901, lon: -87.67596 },
  "Harris Hall L40": { lat: 42.051269, lon: -87.676279 },
  "INTL_ST Sem Rm 201 - 2010 Sh": null,
  "Cresap Laboratory 101": { lat: 42.054702, lon: -87.67496 },
  "Hogan 2-112 Cell/Tissue Cultur": {
    lat: 42.057356277073595,
    lon: -87.6741509430629,
  },
  "Kresge 3438 Philosophy Sem. Rm": { lat: 42.0516769, lon: -87.6750968 },
};

export function getBuilding(buildingName) {
  return buildings[buildingName];
}
