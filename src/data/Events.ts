import ELocations from "models/Locations";
import Event, { EEventType, ETalkType, compare } from "models/Event";

export default [
  new Event(
    "NON central CONF",
    EEventType.CONFERENCE,
    new Date("2020-06-22"),
    new Date("2020-06-24"),
    "Leon",
    ELocations.SPAIN,
    "https://www.noncentralconf.com/",
    [{ title: "To be announced", type: ETalkType.PRESENTATION }]
  ),
  new Event(
    "laBITconf",
    EEventType.CONFERENCE,
    new Date("2019-12-12"),
    new Date("2019-12-13"),
    "Montevideo",
    ELocations.URUGUAY,
    "https://www.labitconf.com/",
    [
      {
        title: "To be announced",
        type: ETalkType.PANEL
      }
    ]
  ),
  new Event(
    "Devcon5",
    EEventType.CONFERENCE,
    new Date("2019-10-08"),
    new Date("2019-10-11"),
    "Osaka",
    ELocations.JAPAN,
    "https://devcon5.ethereum.org/index.html",
    null
  ),
  new Event(
    "Crypto Fest",
    EEventType.CONFERENCE,
    new Date("2019-09-07"),
    new Date("2019-09-07"),
    "Cape Town",
    ELocations.SOUTH_AFRICA,
    "https://cryptofest.co.za/",
    [{ title: "To be announced", type: ETalkType.PANEL }]
  ),
  new Event(
    "Decentralised Storage Summit",
    EEventType.CONFERENCE,
    new Date("2019-08-23"),
    new Date("2019-08-23"),
    "Berlin",
    ELocations.GERMANY,
    "https://www.eventbrite.com/e/decentralised-storage-summit-tickets-62719912948",
    null
  ),
  new Event(
    "WEB3 Summit 2019",
    EEventType.CONFERENCE,
    new Date("2019-08-19"),
    new Date("2019-08-21"),
    "Berlin",
    ELocations.GERMANY,
    "https://web3summit.com/",
    null
  ),
  new Event(
    "Blockchance",
    EEventType.CONFERENCE,
    new Date("2019-08-16"),
    new Date("2019-08-17"),
    "Hamburg",
    ELocations.GERMANY,
    "https://www.blockchance.eu",
    null
  ),
  new Event(
    "BIP001",
    EEventType.CONFERENCE,
    new Date("2019-07-05"),
    new Date("2019-07-05"),
    "Odesa",
    ELocations.UKRAINE,
    "http://bip001.com/",
    [{ title: "Lightning Network", type: ETalkType.PANEL }]
  ),
  new Event(
    "IPFS Camp",
    EEventType.CONFERENCE,
    new Date("2019-06-27"),
    new Date("2019-06-30"),
    "Barcelona",
    ELocations.SPAIN,
    "https://camp.ipfs.io/",
    null
  ),
  new Event(
    "NON central CONF",
    EEventType.CONFERENCE,
    new Date("2019-06-22"),
    new Date("2019-06-24"),
    "Leon",
    ELocations.SPAIN,
    "https://www.noncentralconf.com/",
    [
      {
        title: "Humanitarian Applications of Decentralised Storage",
        type: ETalkType.PRESENTATION,
        presentation:
          "https://docs.google.com/presentation/d/1jWCTP7e5WvBu788JDzPx-zkQhqUL0-XEFkxB5wfaQ0A/edit?usp=sharing"
      }
    ]
  ),
  new Event(
    "UNCHAIN Convention 2019",
    EEventType.CONFERENCE,
    new Date("2019-06-14"),
    new Date("2019-06-15"),
    "Berlin",
    ELocations.GERMANY,
    "https://www.unchain-convention.com/",
    [
      {
        title: "From RSK to the Internet of Value",
        type: ETalkType.PRESENTATION,
        video: "https://youtu.be/LwVgnPIWPkM?t=612"
      },
      {
        title: "Blockchain for Humanity",
        type: ETalkType.PRESENTATION,
        presentation:
          "https://docs.google.com/presentation/d/1cNUXadMeZnGgYLViMQ1EjWNn04PgLRTJ6KP0KLiNKDw/edit?usp=sharing"
      }
    ]
  ),
  new Event(
    "Blockchain Talks: Blockchain for Humanity",
    EEventType.CONFERENCE,
    new Date("2019-06-03"),
    new Date("2019-06-03"),
    "Amsterdam",
    ELocations.NETHERLANDS,
    "https://blockchaintalks.io/events/17/",
    [
      {
        title: "Block to block towards 2030",
        type: ETalkType.PANEL
      }
    ]
  ),
  new Event(
    "Swarm Orange Summit Madrid",
    EEventType.CONFERENCE,
    new Date("2019-05-23"),
    new Date("2019-05-25"),
    "Madrid",
    ELocations.SPAIN,
    "https://summit.ethswarm.org/",
    null
  ),
  new Event(
    "Coalitions 4 GOOD: BC4G Crypto Valley and Blockchain for Humanity",
    EEventType.CONFERENCE,
    new Date("2019-04-03"),
    new Date("2019-04-03"),
    "Geneva",
    ELocations.SWITZERLAND,
    "https://www.meetup.com/Blockchain4Humanity-Geneva/events/259532524/",
    [
      {
        title: "Panel Discussion: Mass adoption: reality or myth?",
        type: ETalkType.PANEL
      }
    ]
  ),
  new Event(
    "Social Innovation: International Development and Blockchain",
    EEventType.CONFERENCE,
    new Date("2019-03-29"),
    new Date("2019-03-29"),
    "Montreal",
    ELocations.CANADA,
    "http://blockchainmcgill.com/socialinnovation/#",
    [
      {
        title: "Lessons learned from building Giveth DApp",
        type: ETalkType.PRESENTATION
      }
    ]
  ),
  new Event(
    "ETHDenver",
    EEventType.HACKATHON,
    new Date("2019-02-15"),
    new Date("2019-02-17"),
    "Denver",
    ELocations.UNITED_STATES,
    "https://www.ethdenver.com/",
    [{ type: ETalkType.JUDGE }]
  ),
  new Event(
    "laBITconf",
    EEventType.CONFERENCE,
    new Date("2018-12-05"),
    new Date("2018-12-08"),
    "Santiago",
    ELocations.CHILE,
    "https://www.labitconf.com/",
    [
      {
        title: "Blockchain for Humanity Awards 2018",
        type: ETalkType.PRESENTATION,
        video: "https://www.youtube.com/watch?v=rusDrIErdkc",
        presentation:
          "https://drive.google.com/open?id=1VLrZoUuQJBA4f_FGkS95_abqghx4_ypZ"
      }
    ]
  ),
  new Event(
    "Revision Summit",
    EEventType.CONFERENCE,
    new Date("2018-11-19"),
    new Date("2018-11-20"),
    "Berlin",
    ELocations.GERMANY,
    "https://revisionsummit2018.sched.com/",
    [
      {
        title:
          "Digital innovation and DLT4Good: Opportunities and challenges for civil society",
        type: ETalkType.PANEL
      }
    ]
  ),
  new Event(
    "Devcon4",
    EEventType.CONFERENCE,
    new Date("2018-10-30"),
    new Date("2018-11-02"),
    "Prague",
    ELocations.CZECH_REPUBLIC,
    "https://devcon4.ethereum.org/index.html",
    null
  ),
  new Event(
    "#cryptolife",
    EEventType.HACKATHON,
    new Date("2018-10-26"),
    new Date("2018-10-29"),
    "Prague",
    ELocations.CZECH_REPUBLIC,
    "https://hackathon.status.im/",
    [{ type: ETalkType.JUDGE }]
  ),
  new Event(
    "DApps Adoption",
    EEventType.CONFERENCE,
    new Date("2018-06-30"),
    new Date("2018-06-30"),
    "Prague",
    ELocations.CZECH_REPUBLIC,
    "https://us.eventbu.com/prague/dapp-dapps-adoption-paralelni-polis/11712130",
    [
      {
        title: "Giveth and Scaling Challenges",
        type: ETalkType.PRESENTATION,
        video: "https://youtu.be/Fe135LnFQaE",
        presentation:
          "https://drive.google.com/open?id=1qaKszbvuXwK3aXGVvswaeKiNc2xNvdcP"
      }
    ]
  ),
  new Event(
    "EDCON",
    EEventType.CONFERENCE,
    new Date("2018-05-03"),
    new Date("2018-05-05"),
    "Toronto",
    ELocations.CANADA,
    "http://2018.edcon.io/",
    [
      {
        title: "Giveth DApp",
        type: ETalkType.DEMO,
        video: "https://youtu.be/NJ9StJThxZY?t=20891"
      }
    ]
  ),
  new Event(
    "NON central CONF",
    EEventType.CONFERENCE,
    new Date("2018-06-22"),
    new Date("2018-06-24"),
    "Leon",
    ELocations.SPAIN,
    "https://www.noncentralconf.com/",
    [
      { title: "Giveth DApp", type: ETalkType.PRESENTATION },
      { title: "Humanitarian use of Blockchain", type: ETalkType.PANEL }
    ]
  ),
  new Event(
    "Ethereum Community Conference",
    EEventType.CONFERENCE,
    new Date("2018-03-08"),
    new Date("2018-03-10"),
    "Paris",
    ELocations.FRANCE,
    "https://ethcc.io/ethcc-2018/",
    null
  ),
  new Event(
    "ScalingNOW!",
    EEventType.CONFERENCE,
    new Date("2018-03-05"),
    new Date("2018-03-06"),
    "Barcelona",
    ELocations.SPAIN,
    "https://scalingnow.giveth.io/",
    null
  ),
  new Event(
    "Future Club: Blockchain for fundraising",
    EEventType.CONFERENCE,
    new Date("2018-01-17"),
    new Date("2018-01-17"),
    "London",
    ELocations.UNITED_KINGDOM,
    "https://www.eventbrite.co.uk/e/future-club-blockchain-for-fundraising-tickets-41073247188?aff=efbneb#",
    [{ title: "Blockchain for fundraising", type: ETalkType.PANEL }]
  ),
  new Event(
    "laBITconf",
    EEventType.CONFERENCE,
    new Date("2017-12-10"),
    new Date("2017-12-10"),
    "Bogota",
    ELocations.COLOMBIA,
    "https://www.labitconf.com/",
    null
  ),
  new Event(
    "Humanitarian Blockchain Summit",
    EEventType.CONFERENCE,
    new Date("2017-11-10"),
    new Date("2017-11-10"),
    "New York City",
    ELocations.UNITED_STATES,
    "www.fordham.edu/blockchainsummit",
    [
      {
        title: "Startups and Blockchain for Purpose",
        type: ETalkType.PANEL,
        video:
          "https://www.youtube.com/watch?v=Pwn3tEh_BU8&feature=youtu.be&t=2h56m15s"
      }
    ]
  ),
  new Event(
    "Blockchain for United Nations",
    EEventType.CONFERENCE,
    new Date("2017-11-09"),
    new Date("2017-11-09"),
    "New York City",
    ELocations.UNITED_STATES,
    "https://unite.un.org/techevents/humanitarian-blockchain",
    [
      {
        title: "Humanitarian Use of Blockchain",
        type: ETalkType.PRESENTATION,
        presentation:
          "https://unite.un.org/sites/unite.un.org/files/giveth_vojtech_grace.pdf"
      }
    ]
  ),
  new Event(
    "Devcon3",
    EEventType.CONFERENCE,
    new Date("2017-11-01"),
    new Date("2017-11-04"),
    "Cancun",
    ELocations.MEXICO,
    "https://blog.ethereum.org/2017/11/16/devcon3/",
    null
  )
].sort(compare);
