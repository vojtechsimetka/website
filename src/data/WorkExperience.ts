import Work from "models/Work";

export default [
  new Work(
    "RIF OS",
    "Product Owner",
    "Leading development of two decentralised blockchain services RIF Storage and RIF Communication.",
    [
      "Leading teams of developers & researchers",
      "Setting up development and deployment processes, reviewing PRs, managing Github",
      "Making sure the solution developed fulfils the needs of partners & end-users",
      "External and internal communication about the progress of the team",
      "Representing RIF & RSK in conferences"
    ],
    new Date("2019-04-01"),
    new Date("2020-08-01"),
    "Gibraltar",
    "GI",
    "https://www.rifos.org/"
  ),
  new Work(
    "Giveth",
    "Co-founder, Product Owner",
    "Leading development of the Giveth Decentralised Application which uses Ethereum blockchain to bring transparency and accountability to charitable giving.",
    [
      "Leading team of 3 developers and a number of contributors",
      "Setting up development and deployment processes, reviewing PRs, managing Github",
      "Keeping the organisation's budget, applying for grants and financing",
      "Representing Giveth in conferences"
    ],
    new Date("2017-10-01"),
    new Date("2018-12-01"),
    "World",
    "Earth",
    "https://www.giveth.io/"
  ),
  new Work(
    "CERN",
    "Software Developer",
    "Member of a configuration and layout section helping to create and maintain documentation in the form of pictures and drawings for all current machines.",
    [
      "Specifying, designing, developing and maintaining system for 360° panoramic images to reduce radiation exposure (Java, Spring, HTML, Javascript, Oracle DB)",
      "Capturing images in the supervised and controlled radiation areas, processing, stitching and uploading to a DB system (Lightroom, Photoshop, Kolor Autopano)",
      "Adapting system for production of layout drawings to needs of LHC, designing version control schema and providing support (VBA, Git)",
      "Generating LHC layout drawings (VBA, CATIA, SmarTeam, Oracle DB)",
      "Day-to-day support and cooperation with different sections in CERN"
    ],
    new Date("2015-10-01"),
    new Date("2017-09-01"),
    "Geneva",
    "CH",
    "https://home.cern/"
  ),
  new Work(
    "INGE",
    "IT Consultant",
    "External consultant inspecting the IT system and processes while obtaining a university degree.",
    [
      "Designing and creating interactive product catalogue for iPad (iBooks Author)",
      "Auditing IT systems and processes",
      "Analyzing needs and creating specification for new website",
      "Developing internal product database system (PHP, MySQL, JavaScript)",
      "Specifying, communicating and helping to delever a database system with DIAL GmbH"
    ],
    new Date("2012-07-01"),
    new Date("2015-09-01"),
    "Opava",
    "CZ",
    "https://inge.cz/en/"
  ),
  new Work(
    "CERN",
    "Summer Internship",
    "10 weeks of morning physics and computing lectures, afternoon work optimising the CMS experiment software and networking evenings with the brightest students from around the world.",
    [
      "Creating an automated system to profile DQM workflows. The profiling results were available in an automatically generated website (IgProf, Valgrind, Bash).",
      "Profiling and optimising the Data Quality Monitoring (DQM) Software of the CMS experiment (C++).",
      "Proposing a set of good practices to be followed by non-IT contributors."
    ],
    new Date("2014-06-01"),
    new Date("2014-08-01"),
    "Geneva",
    "CH",
    "https://home.cern/"
  )
];
