import Publication from "models/Publication";
import ELocation from "models/Locations";

export const articles = [
  new Publication(
    "RIF Storage: The First Chunks",
    "Have you ever wondered how decentralised storage works? In this article we are, on a very high level, explaining what happens when users try to upload their data to or download them from such solution.",
    new Date("2019-07-01"),
    [
      {
        language: "EN",
        url: "https://www.rifos.org/blog/rif-storage-the-first-chunks/"
      }
    ]
  ),
  new Publication(
    "RIF Storage: A Decentralized Storage Solution",
    "In this article we are exploring the motivation for using a decentralised storage and the vision of RIF Storage.",
    new Date("2019-05-03"),
    [
      {
        language: "EN",
        url:
          "https://www.rifos.org/blog/rif-storage-a-decentralized-storage-solution/"
      }
    ]
  ),
  new Publication(
    "Tackling Ethereum scalability issues",
    "Technical article describing the difficulties encountered when trying to launch DApp on the Ethereum blockchain and what are the possible solutions to this problem.",
    new Date("2018-01-23"),
    [
      {
        language: "EN",
        url:
          "https://medium.com/giveth/tackling-ethereum-scalability-issues-29bd700b5060"
      }
    ]
  )
];
export const publications = [
  new Publication(
    "3D Reconstruction of Historic Landmarks from Flickr Pictures",
    "The thesis describes an application which aims to reconstruct a 3D model given a set of 2D images also called bundle adjustment. The thesis discusses the 3D reconstruction pipeline and elaborates on each step. It also presents results of our implementation up to a pose estimation and sparse point cloud.",
    new Date("2015-09-01"),
    [{ language: "EN", url: "thesis/masters.pdf" }],
    "Brno",
    ELocation.CZECH_REPUBLIC
  ),
  new Publication(
    "Multi-Agent Strategy Game over Ants",
    "The thesis describes challenges in design and development of a multi-agent real-time strategy game. The resulting game implements, apart from features and game control which can be found in nowadays RTS games, three different levels of artificial intelligence in which each unit is an agent.",
    new Date("2013-06-01"),
    [{ language: "EN", url: "thesis/bachelors.pdf" }],
    "Brno",
    ELocation.CZECH_REPUBLIC
  ),
  new Publication(
    "Electro-Magnetically Tuneable Filter",
    "The objective of the essay was to design a simple filter based on properties of photonic structures tuneable by electromagnet. Compared to temperature-tuned filter, filter tuned by electric field has several advantages like speed of tuning or transmittance.",
    new Date("2007-03-01"),
    [
      { language: "EN", url: "thesis/filtr_en.pdf" },
      { language: "CZ", url: "thesis/filtr_cs.pdf" }
    ],
    "Opava",
    ELocation.CZECH_REPUBLIC
  )
];
