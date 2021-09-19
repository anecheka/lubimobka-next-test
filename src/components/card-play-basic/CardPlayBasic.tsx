import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import ButtonIconExternal from './images/arrow-external.svg';
import ButtonIconDownload from './images/arrow-download.svg';

import styles from './CardPlayBasic.module.css';

interface ICardPlayBasicProps {
  title: string;
  authorFirstName: string;
  authorLastName: string;
  city: string;
  year: string;
  callToActionView: string;
  callToActionDownload: string;
}

export const CardPlayBasic: FC<ICardPlayBasicProps> = (props) => {
  const {
    title,
    authorFirstName,
    authorLastName,
    callToActionView,
    callToActionDownload,
    city,
    year,
    ...restCardPlayBasicProps
  } = props;

  return (
    <li
      className={cn(styles.card)}
      {...restCardPlayBasicProps}
    >
      <div className={cn(styles.container)}>
        <p className={cn(styles.h7, styles.title)}>{title || 'Сентябрь'}</p>
        <div className={cn(styles.buttonContainer)}>
          <Link href=''>
            <button className={cn(styles.button)}>
              <p className={cn(styles.buttonName, styles.smalltext)}>{callToActionView.toUpperCase() || 'CМОТРЕТЬ ЧИТКУ'}</p>
              <ButtonIconExternal className={cn(styles.buttonIcon)} alt="Иконка перехода на внешний источник"/>
            </button>
          </Link>
          <Link href=''>
            <button className={cn(styles.button)}>
              <p className={cn(styles.buttonName, styles.smalltext)}>{callToActionDownload.toUpperCase() || 'СКАЧАТЬ ПЬЕСУ'}</p>
              <ButtonIconDownload className={cn(styles.buttonIcon)} alt="Иконка скачивания"/>
            </button>
          </Link>
        </div>
      </div>
      <div className={cn(styles.info)}>
        <div className={cn(styles.author)}>
          <div className={cn(styles.h7)}>{authorFirstName || 'Иван'}</div>
          <div className={cn(styles.h7)}>{authorLastName || 'Иванов'}</div>
        </div>
        <div className={cn(styles.smalltext, styles.city)}>{city || 'Москва'}</div>
        <div className={cn(styles.smalltext, styles.year)}>{year || '2021'}</div>
      </div>
    </li>
  );
};
