import React from "react";
import CertificatesDate from "data/Certificates";

export default () => (
  <section className="certificates">
    <h1>Certificates</h1>
    <ul className="list-unstyled certificates-list">
      {CertificatesDate.map((c, index) => (
        <li key={index}>
          <span className="time">{c.date.getFullYear()}</span>
          <span className="place separator">{c.title}</span>
        </li>
      ))}
    </ul>
  </section>
);
