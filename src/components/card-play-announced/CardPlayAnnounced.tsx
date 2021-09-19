import { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ButtonIconInternal from './images/arrow-internal.svg';
import CoverPlaceholder from './images/cover_placeholder.jpg';

import styles from './CardPlayAnnounced.module.css';

interface ICardPlayAnnouncedProps {
  festival: boolean;
  date?: string;
  time: string;
  location?: string;
  title: string;
  synopsis?: string;
  creditsTypeOne: string;
  creditsNameOne: string;
  creditsTypeTwo: string;
  creditsNameTwo: string;
  buttonName?: string;
}

export const CardPlayAnnounced: FC<ICardPlayAnnouncedProps> = (props) => {
  const {
    festival,
    date,
    time,
    location,
    title,
    synopsis,
    creditsTypeOne,
    creditsNameOne,
    creditsTypeTwo,
    creditsNameTwo,
    buttonName,
    ...restCardPlayAnnouncedProps
  } = props;

  return festival !== true ? (
    <li
      className={cn(styles.cardEvents)}
      {...restCardPlayAnnouncedProps}
    >
      <div className={cn(styles.coverEvents)}>
        <Image className={cn(styles.coverEvents)} src={CoverPlaceholder}></Image>
      </div>
      <div className={cn(styles.infoEvents)}>
        <div className={cn(styles.dateInfo)}>
          <p className={cn(styles.bodyText, styles.date)}>{date || '15 сентября'}</p>
          <p className={cn(styles.bodyText, styles.timeEvents)}>{time || '11:00'}</p>
        </div>
        <div className={cn(styles.h5,styles.title)}>{title || 'Вот Иф'}</div>
        <div className={cn(styles.credits)}>
          <p className={cn(styles.smalltext,styles.creditsEntry)}>{creditsTypeOne} {creditsNameOne}</p>
          <p className={cn(styles.smalltext, styles.creditsEntry)}>{creditsTypeTwo} {creditsNameTwo}</p>
        </div>
        <p className={cn(styles.caption, styles.description)}>читка проекта Любимовка.Ещё</p>

        {/*нужно добавить логику, если приходит две кнопки, рисуем две кнопки*/}
        <Link href=''>
          <button className={cn(styles.button)}>
            <ButtonIconInternal className={cn(styles.buttonIcon)} alt="Иконка перехода на другую страницу сайта"/>
            <p className={cn(styles.buttonName, styles.smalltext)}>{buttonName.toUpperCase() || 'РЕГИСТРАЦИЯ'}</p>
          </button>
        </Link>
      </div>
    </li>
  ) : (
    <li
      className={cn(styles.cardFestival)}
      {...restCardPlayAnnouncedProps}
    >
      <div className={cn(styles.coverFestival)}>
        <Image className={cn(styles.coverFestival)} src={CoverPlaceholder}></Image>
      </div>
      <div className={cn(styles.infoFestival)}>
        {/*реализовать логику применения разного стиля текста для мобильной и дестокпной версий*/}
        <p className={cn(styles.h6, styles.timeFestival)}>{time || '13:00'}</p>
        <p className={cn(styles.smalltext, styles.location)}>{location || 'Центр Мейерхольда'}</p>
      </div>
      <div className={cn(styles.infoPlay)}>
        <div className={cn(styles.h6,styles.titleFestival)}>{title || 'Камино Норте'}</div>
        <p className={cn(styles.smalltext, styles.synopsis)}>{synopsis || 'Синопсис пьесы'}</p>
      </div>
      <div className={cn(styles.creditsFestival)}>
        <p className={cn(styles.smalltext,styles.creditsEntry)}>{creditsTypeOne} {creditsNameOne}</p>
        <p className={cn(styles.smalltext, styles.creditsEntry)}>{creditsTypeTwo} {creditsNameTwo}</p>
      </div>
      {/*нужно добавить логику, что убираем кнопку, если ничего не приходит*/}
      <Link href=''>
        <button className={cn(styles.button, styles.buttonFestival)}>
          <ButtonIconInternal className={cn(styles.buttonIcon)} alt="Иконка перехода на другую страницу сайта"/>
          <p className={cn(styles.buttonName, styles.smalltext)}>{buttonName.toUpperCase() || 'РЕГИСТРАЦИЯ'}</p>
        </button>
      </Link>
    </li>
  );
};
