const buildings = {
  "1": {
    name: "1801 Hinman Ave",
    lat: 42.0491174,
    lon: -87.6759464,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.049%2C-87.675%2C17&lookupid=70",
  },
  "2": {
    name: "1808 Chicago Ave (SOCIOL)",
    lat: 42.0495785,
    lon: -87.6780466,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.678%2C17&lookupid=202",
  },
  "3": {
    name: "1809 Chicago (Hardy House)",
    lat: 42.0495756,
    lon: -87.6780088,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.677%2C17&lookupid=650",
  },
  "4": {
    name: "1810 Hinman Ave (ANTHRO)",
    lat: 42.0496147,
    lon: -87.6760988,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.049%2C-87.677%2C17&lookupid=71",
  },
  "5": {
    name: "1812 Chicago Ave (SOCIOL)",
    lat: 42.0501012,
    lon: -87.6781381,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.678%2C17&lookupid=43",
  },
  "6": {
    name: "1812 Hinman Ave",
    lat: 42.0496163,
    lon: -87.676098,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.677%2C17&lookupid=205",
  },
  "7": {
    name: "1813 Hinman Ave (ULP)",
    lat: 42.0493843,
    lon: -87.6757547,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.049%2C-87.676%2C17&lookupid=72",
  },
  "8": {
    name: "1815 Chicago Ave (COMM_ST)",
    lat: 42.0496722,
    lon: -87.6779614,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.677%2C17&lookupid=44",
  },
  "9": {
    name: "1819 Hinman Ave",
    lat: 42.0491994,
    lon: -87.6762616,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.676%2C17&lookupid=68",
  },
  "10": {
    name: "1834 Chicago Ave",
    lat: 42.0507322,
    lon: -87.677709,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.678%2C17&lookupid=180",
  },
  "11": {
    name: "1902 Sheridan Rd (Buffett CICS)",
    lat: 42.0521503,
    lon: -87.6772589,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.678%2C17&lookupid=121",
  },
  "12": {
    name: "1936 Sheridan Rd",
    lat: 42.053386,
    lon: -87.677518,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.053%2C-87.678%2C17&lookupid=158",
  },
  "13": {
    name: "2006 Sheridan Rd",
    lat: 42.0544003,
    lon: -87.6772131,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.054%2C-87.678%2C17&lookupid=160",
  },
  "14": {
    name: "2010 Sheridan Rd (INTL_ST)",
    lat: 42.0544092,
    lon: -87.677213,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.054%2C-87.678%2C17&lookupid=160",
  },
  "15": {
    name: "2016 Sheridan Rd (LING)",
    lat: 42.0544227,
    lon: -87.6772127,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.054%2C-87.678%2C17&lookupid=162",
  },
  "16": {
    name: "210 S Clark St (LOOP)",
    lat: 41.878994,
    lon: -87.631182,
    nu_maps_link: "",
  },
  "17": {
    name: "2122 Sheridan Rd",
    lat: 42.0570147,
    lon: -87.6778646,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.057%2C-87.678%2C17&lookupid=193",
  },
  "18": {
    name: "405 Church Mansion",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.047%2C-87.676%2C17&lookupid=45",
  },
  "19": {
    name: "515 Clark (ENVR_SCI)",
    lat: 42.0492452,
    lon: -87.6772872,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.049%2C-87.677%2C17&lookupid=48",
  },
  "20": {
    name: "555 Clark St",
    lat: 42.0495022,
    lon: -87.6775847,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.677%2C17&lookupid=49",
  },
  "21": {
    name: "616 Noyes St (ISP)",
    lat: 42.0580641,
    lon: -87.6781764,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.058%2C-87.678%2C17&lookupid=94",
  },
  "22": {
    name: "617 Library Pl (IPR)",
    lat: 42.055366,
    lon: -87.67817,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.055%2C-87.678%2C17&lookupid=292",
  },
  "23": {
    name: "618 Garrett Pl (CIC)",
    lat: 42.055905,
    lon: -87.678198,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.056%2C-87.678%2C17&lookupid=66",
  },
  "24": {
    name: "619 Emerson Rd",
    lat: 42.052162,
    lon: -87.678405,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.678%2C17&lookupid=300",
  },
  "25": {
    name: "620 Library Pl (AFST)",
    lat: 42.054996,
    lon: -87.6779449,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.055%2C-87.678%2C17&lookupid=74",
  },
  "26": {
    name: "625 Haven",
    lat: 42.057609,
    lon: -87.678392,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.058%2C-87.678%2C17&lookupid=206",
  },
  "27": {
    name: "627 Dartmouth Pl",
    lat: 42.0596908,
    lon: -87.6785277,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.06%2C-87.679%2C17&lookupid=53",
  },
  "28": {
    name: "629 Colfax St",
    lat: 42.06083,
    lon: -87.678574,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.061%2C-87.679%2C17&lookupid=203",
  },
  "29": {
    name: "640 Lincoln St",
    lat: 42.0611133,
    lon: -87.6792203,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.061%2C-87.679%2C17&lookupid=651",
  },
  "30": {
    name: "645 N Michigan Ave",
    lat: 41.893799,
    lon: -87.623793,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.894%2C-87.624%2C17&lookupid=11",
  },
  "31": {
    name: "675 N St Clair",
    lat: 41.894511,
    lon: -87.622345,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.895%2C-87.623%2C17&lookupid=371",
  },
  "32": {
    name: "676 N St Clair",
    lat: 41.894579,
    lon: -87.623181,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.895%2C-87.623%2C17&lookupid=28",
  },
  "33": {
    name: "680 N Lake Shore Drive",
    lat: 41.894819,
    lon: -87.616084,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.895%2C-87.617%2C17&lookupid=8",
  },
  "34": {
    name: "Abbott Hall",
    lat: 41.89528,
    lon: -87.6167,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.895%2C-87.617%2C17&lookupid=9",
  },
  "35": {
    name: "Alice S Millar Chapel",
    lat: 42.050472,
    lon: -87.677078,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.677%2C17&lookupid=118",
  },
  "36": {
    name: "Allen Center",
    lat: 42.0564431,
    lon: -87.673108,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.056%2C-87.673%2C17&lookupid=89",
  },
  "37": {
    name: "Allison Res Community",
    lat: 42.050541,
    lon: -87.678423,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.678%2C17&lookupid=41",
  },
  "38": {
    name: "Andersen Hall",
    lat: 42.054045,
    lon: -87.6763988,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.054%2C-87.676%2C17&lookupid=127",
  },
  "39": {
    name: "Annenberg Hall",
    lat: 42.0560662,
    lon: -87.6745112,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.056%2C-87.674%2C17&lookupid=86",
  },
  "40": {
    name: "Annie May Swift Hall",
    lat: 42.052342,
    lon: -87.6750474,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.675%2C17&lookupid=122",
  },
  "41": {
    name: "Ayers Res College",
    lat: 42.060416,
    lon: -87.675129,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.06%2C-87.675%2C17&lookupid=144",
  },
  "42": {
    name: "Basic Industry Research",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.684%2C17&lookupid=82",
  },
  "43": {
    name: "Bensenville Location",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "44": {
    name: "Block Museum",
    lat: 42.0523923,
    lon: -87.6727367,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.673%2C17&lookupid=106",
  },
  "45": {
    name: "Botanic Garden (Glencoe, IL)",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "46": { name: "Carnegie Mellon", lat: null, lon: null, nu_maps_link: "" },
  "47": {
    name: "Chambers Hall",
    lat: 42.0536445,
    lon: -87.6777222,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.054%2C-87.678%2C14&lookupid=65",
  },
  "48": {
    name: "Communications Res College",
    lat: 42.050849,
    lon: -87.675035,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.675%2C17&lookupid=115",
  },
  "49": {
    name: "Computer Science Building",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.058%2C-87.676%2C17&lookupid=132",
  },
  "50": {
    name: "Cook Hall",
    lat: 42.057785,
    lon: -87.674154,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.058%2C-87.674%2C17&lookupid=90",
  },
  "51": {
    name: "Cresap Laboratory",
    lat: 42.0547145,
    lon: -87.6749376,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.055%2C-87.675%2C17&lookupid=128",
  },
  "52": {
    name: "Crowe Hall",
    lat: 42.0513866,
    lon: -87.6753649,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.675%2C17&lookupid=634",
  },
  "53": {
    name: "Cutting Hall - McCormick",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C17&lookupid=211",
  },
  "54": {
    name: "Dearborn Observatory",
    lat: 42.0566553,
    lon: -87.6750743,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.057%2C-87.675%2C17&lookupid=131",
  },
  "55": { name: "Edgewater Bureau", lat: null, lon: null, nu_maps_link: "" },
  "56": {
    name: "EducationCity Student Cntr BOX",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "57": {
    name: "Elder Hall",
    lat: 42.060917,
    lon: -87.677809,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.061%2C-87.678%2C17&lookupid=153",
  },
  "58": {
    name: "Family Institute",
    lat: 42.0544357,
    lon: -87.6780389,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.055%2C-87.678%2C17&lookupid=195",
  },
  "59": {
    name: "Field Museum",
    lat: 41.866158,
    lon: -87.61697,
    nu_maps_link: "",
  },
  "60": {
    name: "Fisk Hall",
    lat: 42.0506766,
    lon: -87.6741502,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C14&lookupid=113",
  },
  "61": {
    name: "Ford Engineering and Design Center",
    lat: 42.0569238,
    lon: -87.6765436,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.057%2C-87.677%2C14&lookupid=214",
  },
  "62": {
    name: "Frances Searle",
    lat: 42.0586351,
    lon: -87.6737228,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.059%2C-87.674%2C14&lookupid=92",
  },
  "63": {
    name: "Galter Health Sciences Library",
    lat: 41.896486,
    lon: -87.619963,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.896%2C-87.619%2C16&lookupid=1",
  },
  "64": {
    name: "Garrett-Evangelical Seminary",
    lat: 42.0560686,
    lon: -87.6755502,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.056%2C-87.675%2C16&lookupid=191",
  },
  "65": {
    name: "Getz Hall - McCormick",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C17&lookupid=211",
  },
  "66": {
    name: "GP ROOM TO BE ASSIGNED",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "67": {
    name: "Hardin Hall - Rebecca Crown",
    lat: 42.050386,
    lon: -87.679566,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.68%2C17&lookupid=47",
  },
  "68": {
    name: "Harris Hall",
    lat: 42.0512831,
    lon: -87.6762908,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.676%2C17&lookupid=119",
  },
  "69": {
    name: "Helmerich Auditorium",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.675%2C17&lookupid=122",
  },
  "70": {
    name: "Henry Crown Sports Pavilion",
    lat: 42.0594411,
    lon: -87.6727806,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.06%2C-87.673%2C17&lookupid=93",
  },
  "71": {
    name: "Women's Residential College (Hobart)",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.679%2C17&lookupid=58",
  },
  "72": {
    name: "Hoffman Hall - McCormick",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C17&lookupid=211",
  },
  "73": {
    name: "Hogan Hall",
    lat: 42.0573558,
    lon: -87.6741496,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.057%2C-87.674%2C17&lookupid=88",
  },
  "74": {
    name: "Humanities Inst Seminar Rm",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.675%2C17&lookupid=116",
  },
  "75": {
    name: "International Studies Res College",
    lat: 42.0509963,
    lon: -87.6757985,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.676%2C17&lookupid=117",
  },
  "76": {
    name: "Jacobs Center",
    lat: 42.0540623,
    lon: -87.6766228,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.054%2C-87.676%2C17&lookupid=126",
  },
  "77": {
    name: "Kresge Centennial Hall",
    lat: 42.0516769,
    lon: -87.6750968,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.675%2C17&lookupid=116",
  },
  "78": {
    name: "Leverone Hall",
    lat: 42.0537599,
    lon: -87.6760697,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.054%2C-87.676%2C17&lookupid=126",
  },
  "79": {
    name: "Levy Mayer Hall",
    lat: 41.896593,
    lon: -87.618084,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.897%2C-87.618%2C17&lookupid=3",
  },
  "80": {
    name: "Locy Hall",
    lat: 42.0510134,
    lon: -87.673832,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C17&lookupid=114",
  },
  "81": {
    name: "Louis Hall",
    lat: 42.0519889,
    lon: -87.6729263,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.673%2C17&lookupid=107",
  },
  "82": {
    name: "Lowden Hall",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.897%2C-87.618%2C17&lookupid=3",
  },
  "83": {
    name: "Lunt Hall",
    lat: 42.0547974,
    lon: -87.6763192,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.055%2C-87.676%2C17&lookupid=130",
  },
  "84": {
    name: "Lurie Research Center",
    lat: 41.895477,
    lon: -87.619795,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.895%2C-87.62%2C17&lookupid=33",
  },
  "85": {
    name: "Lutkin Hall",
    lat: 42.0510673,
    lon: -87.6801759,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.68%2C17&lookupid=179",
  },
  "86": {
    name: "MacChesney Hall - McCormick",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C17&lookupid=211",
  },
  "87": {
    name: "McCormick Tribune",
    lat: 42.0513688,
    lon: -87.6742258,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C17&lookupid=211",
  },
  "88": {
    name: "McGaw Pavilion",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.067%2C-87.692%2C17&lookupid=38",
  },
  "89": {
    name: "Meets@Feinberg Schl Medicine",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.896%2C-87.621%2C17&lookupid=1",
  },
  "90": {
    name: "Millar Choir Rehearsal Room",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.677%2C17&lookupid=118",
  },
  "91": {
    name: "Missing Class Info/Don't Assig",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "92": {
    name: "Morton Medical Rsc Bldg",
    lat: 41.896176,
    lon: -87.619653,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.896%2C-87.62%2C17&lookupid=18",
  },
  "93": {
    name: "Mudd Library",
    lat: 42.0581052,
    lon: -87.6744124,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.058%2C-87.674%2C17&lookupid=91",
  },
  "94": {
    name: "Music Administration Building",
    lat: 42.0505822,
    lon: -87.6805191,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.681%2C17&lookupid=55",
  },
  "95": {
    name: "NON-COMPLIANT TIME/ASSIGN LATE",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "96": {
    name: "Norris Center",
    lat: 42.0533327,
    lon: -87.6727446,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.053%2C-87.673%2C17&lookupid=110",
  },
  "97": {
    name: "Online Distance Learning",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "98": {
    name: "Pancoe Life Sciences",
    lat: 42.0572012,
    lon: -87.6735413,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.057%2C-87.674%2C17&lookupid=212",
  },
  "99": {
    name: "Parkes Hall",
    lat: 42.050067,
    lon: -87.6772496,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.05%2C-87.677%2C17&lookupid=182",
  },
  "100": {
    name: "Pick-Staiger",
    lat: 42.052654,
    lon: -87.672215,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.053%2C-87.672%2C17&lookupid=108",
  },
  "101": {
    name: "PROJ_MGMT Conf Room TCHA132",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "102": {
    name: "Qatar Studio Building",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "103": {
    name: "Regenstein Hall of Music",
    lat: 42.052161,
    lon: -87.671392,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.671%2C17&lookupid=105",
  },
  "104": {
    name: "Rehab Inst of Chicago",
    lat: 41.895434,
    lon: -87.618336,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.895%2C-87.618%2C17&lookupid=24",
  },
  "105": { name: "Rogers Park Bureau", lat: null, lon: null, nu_maps_link: "" },
  "106": {
    name: "Rubloff Building",
    lat: 41.896246,
    lon: -87.617373,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.896%2C-87.617%2C17&lookupid=10",
  },
  "107": {
    name: "Ryan Hall",
    lat: 42.0568405,
    lon: -87.6744776,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.057%2C-87.675%2C17&lookupid=213",
  },
  "108": {
    name: "Schaumburg Location",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "109": {
    name: "Scott Hall",
    lat: 42.0515519,
    lon: -87.6775975,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.678%2C17&lookupid=165",
  },
  "110": {
    name: "Searle Medical Research Building",
    lat: 41.896088,
    lon: -87.619355,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.896%2C-87.619%2C17&lookupid=19",
  },
  "111": {
    name: "Sidley Hall - McCormick",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C17&lookupid=211",
  },
  "112": {
    name: "Slivka Res College",
    lat: 42.060467,
    lon: -87.675723,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.061%2C-87.676%2C17&lookupid=410",
  },
  "113": {
    name: "Smith Hall - McCormick",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C17&lookupid=211",
  },
  "114": {
    name: "Statistics",
    lat: 42.054145,
    lon: -87.6776425,
    nu_maps_link: "",
  },
  "115": {
    name: "Strawn Hall - McCormick",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.051%2C-87.674%2C17&lookupid=211",
  },
  "116": {
    name: "Swift Hall",
    lat: 42.0549797,
    lon: -87.6749489,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.055%2C-87.675%2C17&lookupid=129",
  },
  "117": {
    name: "Tarry Building",
    lat: 41.8964482,
    lon: -87.6200246,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.896%2C-87.62%2C17&lookupid=17",
  },
  "118": { name: "TBA", lat: null, lon: null, nu_maps_link: "" },
  "119": {
    name: "Technological Institute",
    lat: 42.057788,
    lon: -87.675893,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.058%2C-87.676%2C17&lookupid=132",
  },
  "120": {
    name: "Theatre & Interpretation Center",
    lat: 42.052258,
    lon: -87.673245,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.673%2C17&lookupid=109",
  },
  "121": {
    name: "Undergraduate Leadership",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "122": {
    name: "University Hall",
    lat: 42.0518779,
    lon: -87.6759506,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.052%2C-87.676%2C17&lookupid=120",
  },
  "123": {
    name: "University Library",
    lat: 42.0530533,
    lon: -87.674799,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=42.053%2C-87.674%2C17&lookupid=123",
  },
  "124": {
    name: "View Class Details for Room",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "125": {
    name: "Ward Building",
    lat: 41.896542,
    lon: -87.619692,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.896%2C-87.62%2C17&lookupid=1",
  },
  "126": {
    name: "Washington, DC Bureau",
    lat: null,
    lon: null,
    nu_maps_link: "",
  },
  "127": {
    name: "Wieboldt Hall",
    lat: 41.896395,
    lon: -87.618844,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.896%2C-87.619%2C17&lookupid=2",
  },
  "128": {
    name: "633 N St Clair",
    lat: null,
    lon: null,
    nu_maps_link:
      "http://maps.northwestern.edu/#latlngz=41.894%2C-87.622%2C17&lookupid=302",
  },
  "129": { name: "2311 Campus Dr", lat: null, lon: null, nu_maps_link: "" },
  "130": { name: "1813 Hinman", lat: null, lon: null, nu_maps_link: null },
  "132": {
    name: "Law Faculty Commons",
    lat: null,
    lon: null,
    nu_maps_link: null,
  },
  "133": {
    name: "1936 Sheridan Rd (Transportation Center)",
    lat: null,
    lon: null,
    nu_maps_link: null,
  },
  "134": {
    name: "Paris, France Bureau",
    lat: null,
    lon: null,
    nu_maps_link: null,
  },
  "135": { name: "620 Lincoln St", lat: null, lon: null, nu_maps_link: null },
};

export function getBuildings() {
  return buildings.filter((building) => building);
}

export function getBuilding(buildingId) {
  return buildings[buildingId];
}
