import React from "react";
import LanguagesData from "data/Languages";

export default () => (
  <section className="languages">
    <h1>Languages</h1>
    <table>
      {LanguagesData.map(ld => (
        <tr>
          <td>
            <span className="h2">{ld.name}</span>
          </td>
          <td>
            <span className="lang-desc">{ld.level}</span>
          </td>
        </tr>
      ))}
    </table>
  </section>
);
