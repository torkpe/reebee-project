import React from "react";
import { ShowDetails } from "../../interface/interface";
import styles from "./show.module.scss";
import { Link } from "react-router-dom";

export default function Show(props: ShowDetails) {
  return (
    <div className={styles.image}>
      <Link className={styles.show} to={`${props.id}`}>
        {/* <img src={} /> */}
      </Link>
    </div>
  );
}
