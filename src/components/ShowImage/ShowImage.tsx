import React from "react";
import styles from "./show-image.module.scss";
import { ShowImageDetails } from "../../interface/interface";
import { Link } from "react-router-dom";

export default function ShowImage(props: ShowImageDetails) {
  const { show } = props;
  return (
    <div className={styles.image}>
      <Link className={styles.showImage} to={`/shows/${show.id}`}>
        {show.link ? (
          <img src={show.link} alt={show.name} className={styles.showImage} />
        ) : (
          <h1 className={styles.name}>{show.name}</h1>
        )}
      </Link>
    </div>
  );
}
