const terms = [
  {
    id: 4840,
    name: "2021 Fall",
    start_date: "2021-09-21",
    end_date: "2021-12-04",
  },
  {
    id: 4830,
    name: "2021 Summer",
    start_date: "2021-06-21",
    end_date: "2021-08-28",
  },
  {
    id: 4820,
    name: "2021 Spring",
    start_date: "2021-03-30",
    end_date: "2021-06-12",
  },
  {
    id: 4810,
    name: "2021 Winter",
    start_date: "2021-01-11",
    end_date: "2021-03-20",
  },
  {
    id: 4800,
    name: "2020 Fall",
    start_date: "2020-09-16",
    end_date: "2020-12-08",
  },
  {
    id: 4790,
    name: "2020 Summer",
    start_date: "2020-06-22",
    end_date: "2020-08-30",
  },
  {
    id: 4780,
    name: "2020 Spring",
    start_date: "2020-04-06",
    end_date: "2020-06-13",
  },
  {
    id: 4770,
    name: "2020 Winter",
    start_date: "2020-01-06",
    end_date: "2020-03-21",
  },
  {
    id: 4760,
    name: "2019 Fall",
    start_date: "2019-09-24",
    end_date: "2019-12-14",
  },
  {
    id: 4750,
    name: "2019 Summer",
    start_date: "2019-06-24",
    end_date: "2019-09-01",
  },
  {
    id: 4740,
    name: "2019 Spring",
    start_date: "2019-04-01",
    end_date: "2019-06-15",
  },
  {
    id: 4730,
    name: "2019 Winter",
    start_date: "2019-01-07",
    end_date: "2019-03-23",
  },
  {
    id: 4720,
    name: "2018 Fall",
    start_date: "2018-09-27",
    end_date: "2018-12-15",
  },
  {
    id: 4710,
    name: "2018 Summer",
    start_date: "2018-06-25",
    end_date: "2018-09-02",
  },
  {
    id: 4700,
    name: "2018 Spring",
    start_date: "2018-04-03",
    end_date: "2018-06-16",
  },
  {
    id: 4690,
    name: "2018 Winter",
    start_date: "2018-01-08",
    end_date: "2018-03-24",
  },
  {
    id: 4680,
    name: "2017 Fall",
    start_date: "2017-09-19",
    end_date: "2017-12-09",
  },
  {
    id: 4670,
    name: "2017 Summer",
    start_date: "2017-06-19",
    end_date: "2017-08-27",
  },
  {
    id: 4660,
    name: "2017 Spring",
    start_date: "2017-03-27",
    end_date: "2017-06-10",
  },
  {
    id: 4650,
    name: "2017 Winter",
    start_date: "2017-01-03",
    end_date: "2017-03-18",
  },
  {
    id: 4640,
    name: "2016 Fall",
    start_date: "2016-09-20",
    end_date: "2016-12-10",
  },
  {
    id: 4630,
    name: "2016 Summer",
    start_date: "2016-06-20",
    end_date: "2016-08-28",
  },
  {
    id: 4620,
    name: "2016 Spring",
    start_date: "2016-03-29",
    end_date: "2016-06-11",
  },
  {
    id: 4610,
    name: "2016 Winter",
    start_date: "2016-01-04",
    end_date: "2016-03-19",
  },
  {
    id: 4600,
    name: "2015 Fall",
    start_date: "2015-09-21",
    end_date: "2015-12-12",
  },
  {
    id: 4590,
    name: "2015 Summer",
    start_date: "2015-06-22",
    end_date: "2015-08-28",
  },
  {
    id: 4580,
    name: "2015 Spring",
    start_date: "2015-03-30",
    end_date: "2015-06-12",
  },
  {
    id: 4570,
    name: "2015 Winter",
    start_date: "2015-01-05",
    end_date: "2015-03-20",
  },
  {
    id: 4560,
    name: "2014 Fall",
    start_date: "2014-09-23",
    end_date: "2014-12-12",
  },
  {
    id: 4550,
    name: "2014 Summer",
    start_date: "2014-06-23",
    end_date: "2014-08-29",
  },
  {
    id: 4540,
    name: "2014 Spring",
    start_date: "2014-03-31",
    end_date: "2014-06-13",
  },
  {
    id: 4530,
    name: "2014 Winter",
    start_date: "2014-01-06",
    end_date: "2014-03-21",
  },
  {
    id: 4520,
    name: "2013 Fall",
    start_date: "2013-09-24",
    end_date: "2013-12-13",
  },
  {
    id: 4510,
    name: "2013 Summer",
    start_date: "2013-06-24",
    end_date: "2013-08-31",
  },
  {
    id: 4500,
    name: "2013 Spring",
    start_date: "2013-04-02",
    end_date: "2013-06-14",
  },
  {
    id: 4490,
    name: "2013 Winter",
    start_date: "2013-01-07",
    end_date: "2013-03-22",
  },
  {
    id: 4480,
    name: "2012 Fall",
    start_date: "2012-09-27",
    end_date: "2012-12-14",
  },
  {
    id: 4470,
    name: "2012 Summer",
    start_date: "2012-06-18",
    end_date: "2012-08-24",
  },
  {
    id: 4460,
    name: "2012 Spring",
    start_date: "2012-03-26",
    end_date: "2012-06-08",
  },
  {
    id: 4450,
    name: "2012 Winter",
    start_date: "2012-01-03",
    end_date: "2012-03-16",
  },
  {
    id: 4440,
    name: "2011 Fall",
    start_date: "2011-09-20",
    end_date: "2011-12-09",
  },
  {
    id: 4430,
    name: "2011 Summer",
    start_date: "2011-06-20",
    end_date: "2011-08-26",
  },
  {
    id: 4420,
    name: "2011 Spring",
    start_date: "2011-03-28",
    end_date: "2011-06-10",
  },
  {
    id: 4410,
    name: "2011 Winter",
    start_date: "2011-01-03",
    end_date: "2011-03-18",
  },
  {
    id: 4400,
    name: "2010 Fall",
    start_date: "2010-09-21",
    end_date: "2010-12-10",
  },
  {
    id: 4390,
    name: "2010 Summer",
    start_date: "2010-06-21",
    end_date: "2010-08-27",
  },
  {
    id: 4380,
    name: "2010 Spring",
    start_date: "2010-03-29",
    end_date: "2010-06-11",
  },
  {
    id: 4370,
    name: "2010 Winter",
    start_date: "2010-01-04",
    end_date: "2010-03-19",
  },
  {
    id: 4360,
    name: "2009 Fall",
    start_date: "2009-09-22",
    end_date: "2009-12-11",
  },
  {
    id: 4350,
    name: "2009 Summer",
    start_date: "2009-06-22",
    end_date: "2009-08-28",
  },
  {
    id: 4340,
    name: "2009 Spring",
    start_date: "2009-03-30",
    end_date: "2009-06-12",
  },
  {
    id: 4330,
    name: "2009 Winter",
    start_date: "2009-01-05",
    end_date: "2009-03-20",
  },
  {
    id: 4320,
    name: "2008 Fall",
    start_date: "2008-09-23",
    end_date: "2008-12-12",
  },
  {
    id: 4310,
    name: "2008 Summer",
    start_date: "2008-06-23",
    end_date: "2008-08-29",
  },
  {
    id: 4300,
    name: "2008 Spring",
    start_date: "2008-03-31",
    end_date: "2008-06-13",
  },
  {
    id: 4290,
    name: "2008 Winter",
    start_date: "2008-01-07",
    end_date: "2008-03-21",
  },
  {
    id: 4280,
    name: "2007 Fall",
    start_date: "2007-09-25",
    end_date: "2007-12-14",
  },
  {
    id: 4270,
    name: "2007 Summer",
    start_date: "2007-06-18",
    end_date: "2007-08-24",
  },
  {
    id: 4260,
    name: "2007 Spring",
    start_date: "2007-03-26",
    end_date: "2007-06-08",
  },
  {
    id: 4250,
    name: "2007 Winter",
    start_date: "2007-01-03",
    end_date: "2007-03-16",
  },
  {
    id: 4240,
    name: "2006 Fall",
    start_date: "2006-09-19",
    end_date: "2006-12-08",
  },
  {
    id: 4230,
    name: "2006 Summer",
    start_date: "2006-06-19",
    end_date: "2006-08-25",
  },
  {
    id: 4220,
    name: "2006 Spring",
    start_date: "2006-03-27",
    end_date: "2006-06-09",
  },
  {
    id: 4210,
    name: "2006 Winter",
    start_date: "2006-01-03",
    end_date: "2006-03-17",
  },
  {
    id: 4200,
    name: "2005 Fall",
    start_date: "2005-09-20",
    end_date: "2005-12-09",
  },
  {
    id: 4190,
    name: "2005 Summer",
    start_date: "2005-06-20",
    end_date: "2005-08-26",
  },
  {
    id: 4180,
    name: "2005 Spring",
    start_date: "2005-03-29",
    end_date: "2005-06-10",
  },
  {
    id: 4170,
    name: "2005 Winter",
    start_date: "2005-01-03",
    end_date: "2005-03-18",
  },
  {
    id: 4160,
    name: "2004 Fall",
    start_date: "2004-09-22",
    end_date: "2004-12-10",
  },
];

export function getTerm(termId) {
  return terms.find((term) => term.id === termId);
}
