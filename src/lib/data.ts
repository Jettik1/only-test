import { TimelineProps, TimeSegment } from "./types";

export const segments: TimeSegment[] = [
  {
    id: "1",
    number: 1,
    title: "Кино",
    yearFrom: 1970,
    yearTo: 1979,
    events: [
      { title: "Title 1", description: "Description 1" },
      { title: "Title 1.2", description: "Description 1.2" },
      { title: "Title 1", description: "Description 1" },
      { title: "Title 1.2", description: "Description 1.2" },
    ],
  },
  {
    id: "2",
    number: 2,
    title: "Кино",
    yearFrom: 1980,
    yearTo: 1988,
    events: [
      { title: "Title 2", description: "Description 2" },
      { title: "Title 2.2", description: "Description 2.2" },
      { title: "Title 2.3", description: "Description 2.3" },
      { title: "Title 2,4", description: "Description 2,4" },
      { title: "Title 2.5", description: "Description 2.5" },
    ],
  },
  {
    id: "3",
    number: 3,
    title: "Литература",
    yearFrom: 1989,
    yearTo: 1999,
    events: [
      { title: "Title 3", description: "Description 3" },
      { title: "Title 3.2", description: "Description 3.2" },
    ],
  },
  {
    id: "4",
    number: 4,
    title: " ",
    yearFrom: 2000,
    yearTo: 2007,
    events: [{ title: "Title 4", description: "Description 4" }],
  },
  {
    id: "5",
    number: 5,
    title: "Спорт",
    yearFrom: 2007,
    yearTo: 2014,
    events: [
      { title: "Title 5", description: "Description 5" },
      { title: "Title 5.2", description: "Description 5.2" },
      { title: "Title 5", description: "Description 5" },
      { title: "Title 5.2", description: "Description 5.2" },
    ],
  },
  {
    id: "6",
    number: 6,
    title: "Наука",
    yearFrom: 2015,
    yearTo: 2022,
    events: [
      {
        title: "2015",
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        title: "2016",
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        title: "2017",
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        title: "2016",
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
    ],
  },
];
