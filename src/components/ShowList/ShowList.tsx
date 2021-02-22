import React from 'react';
import ShowImage from '../ShowImage/ShowImage';
import { ShowDetails } from '../../interface/interface';
import styles from './show-list.module.scss';

let indexCounter = 0;
export default function ShowList(props: {showlist: ShowDetails[]}) {
  return (
    <div className={styles.showsList}>
    {props.showlist.map((show: ShowDetails) => (
      <ShowImage
        key={indexCounter++}
        show={{
          link: show.image?.original,
          name: show.name,
          id: show.id,
        }}
      />
    ))}
  </div>
  )
}