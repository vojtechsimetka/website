import Award from "models/Award";
import ELocation from "models/Locations";

export default [
  new Award(
    "Giveth DApp Winner of SuperDemo",
    new Date("2018-05-05"),
    "EDCON Toronto",
    ELocation.CANADA
  ),
  new Award(
    "Best Educational App",
    new Date("2014"),
    "CERN Webfest",
    ELocation.SWITZERLAND
  ),
  new Award(
    "Dean's award, Bachelors thesis",
    new Date("2013"),
    "Brno University of Technology",
    ELocation.CZECH_REPUBLIC
  ),
  new Award(
    "Honourable Mention",
    new Date("2008"),
    "First Step to Nobel Prize in Physics",
    ELocation.POLAND
  ),
  new Award(
    "Special Prize in Physics",
    new Date("2007"),
    "ICYS",
    ELocation.RUSIA
  )
];
