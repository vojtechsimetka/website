import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTelegram,
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import ContactData from "data/Contact";

export default () => (
  <section className="contact">
    <h1>Contact</h1>
    <ul className="list-unstyled">
      {ContactData.emails &&
        ContactData.emails.map((e: string, i: number) => (
          <li className="email" key={e}>
            {i === 0 ? (
              <FontAwesomeIcon icon={faEnvelope} />
            ) : (
              <span style={{ marginLeft: "1.2em" }} />
            )}{" "}
            <a href={`mailto:${e}`}>{e}</a>
          </li>
        ))}
      {ContactData.telegram && (
        <li className="telegram">
          <FontAwesomeIcon icon={faTelegram} />{" "}
          <a href={`https://t.me/${ContactData.telegram}`} target="blank">
            t.me/{ContactData.telegram}
          </a>
        </li>
      )}
      {ContactData.github && (
        <li className="github">
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a href={`https://github.com/${ContactData.github}`} target="blank">
            gh/{ContactData.github}
          </a>
        </li>
      )}
      {ContactData.linkedin && (
        <li className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a
            href={`https://linkedin.com/in/${ContactData.linkedin}`}
            target="blank"
          >
            in/{ContactData.linkedin}
          </a>
        </li>
      )}
      {ContactData.facebook && (
        <li className="facebook">
          <FontAwesomeIcon icon={faFacebook} />{" "}
          <a
            href={`https://facebook.com/${ContactData.facebook}`}
            target="blank"
          >
            fb/{ContactData.facebook}
          </a>
        </li>
      )}
      {ContactData.instagram && (
        <li className="instagram">
          <FontAwesomeIcon icon={faInstagram} />{" "}
          <a
            href={`https://instagram.com/${ContactData.instagram}`}
            target="blank"
          >
            ig/{ContactData.instagram}
          </a>
        </li>
      )}
    </ul>
  </section>
);
