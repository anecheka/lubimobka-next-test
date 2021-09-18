import { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ButtonIconInternal from './images/arrow-internal.svg';
import CoverPlaceholder from './images/cover_placeholder.jpg';

import styles from './CardPlayAnnounced.module.css';

interface ICardPlayAnnouncedProps {
  backgroundColor?: string;
  size?: 's' | 'm' | 'l';
  height?: number;
  width?: number;
  date: string;
  time: string;
  title: string;
  creditsTypeOne: string;
  creditsNameOne: string;
  creditsTypeTwo: string;
  creditsNameTwo: string;
  buttonName: string;
}

export const CardPlayAnnounced: FC<ICardPlayAnnouncedProps> = (props) => {
  const {
    date,
    time,
    title,
    creditsTypeOne,
    creditsNameOne,
    creditsTypeTwo,
    creditsNameTwo,
    buttonName,
    ...restCardPlayAnnouncedProps
  } = props;

  return (
    <li
      className={cn(styles.card)}
      {...restCardPlayAnnouncedProps}
    >
      <div className={cn(styles.cover)}>
        <Image className={cn(styles.cover)} src={CoverPlaceholder}></Image>
      </div>
      <div className={cn(styles.info)}>
        <div className={cn(styles.dateInfo)}>
          <p className={cn(styles.bodyText, styles.date)}>{date || '15 сентября'}</p>
          <p className={cn(styles.bodyText, styles.time)}>{time || '11:00'}</p>
        </div>
        <div className={cn(styles.h5,styles.title)}>{title || 'Вот Иф'}</div>
        <div className={cn(styles.credits)}>
          <p className={cn(styles.smalltext,styles.creditsEntry)}>{creditsTypeOne} {creditsNameOne}</p>
          <p className={cn(styles.smalltext, styles.creditsEntry)}>{creditsTypeTwo} {creditsNameTwo}</p>
        </div>
        <p className={cn(styles.caption, styles.description)}>читка проекта Любимовка.Ещё</p>
        <Link href=''>
          <button className={cn(styles.button)}>
            <ButtonIconInternal className={cn(styles.buttonIcon)} alt="Иконка перехода на другую страницу сайта"/>
            <p className={cn(styles.buttonName, styles.smalltext)}>{buttonName.toUpperCase() || 'РЕГИСТРАЦИЯ'}</p>
          </button>
        </Link>
      </div>
    </li>
  );
};
