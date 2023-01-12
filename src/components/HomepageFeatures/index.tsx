import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Decentralised",
    Svg: null,
    description: (
      <>
        Decentralisation is essential for healthy communities to prosper.
        Embrace is built using the latest decentralised technologies.
      </>
    ),
  },
  {
    title: "Community first",
    Svg: null,
    description: (
      <>
        Community comes first. Embrace is non-profit and built with the sole
        purpose of supporting communities.
      </>
    ),
  },
  {
    title: "Open",
    Svg: null,
    description: (
      <>
        Embrace is open source and open to contributions. We believe in the
        power of collaboration.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
