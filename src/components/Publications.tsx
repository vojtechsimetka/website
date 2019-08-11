import React from "react";
import Publication from "components/Publication";
import { articles, publications } from "data/Publications";

export default () => (
  <section className="publications">
    <h1>Articles & Publications</h1>
    <h2>Blog Posts</h2>
    <Publication data={articles} />
    <h2>Theses</h2>
    <Publication data={publications} />
  </section>
);
