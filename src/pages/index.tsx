import { NextPage } from 'next';
import { CardPlayBasic } from 'components/card-play-basic';
import { CardPlayAnnounced } from 'components/card-play-announced';

const Home: NextPage = () => (
  // <h1>
  //   Hello, world!
  // </h1>
  <>
    <CardPlayBasic
      title="Конкретные разговоры пожилых супругов ни о чём"
      authorFirstName="Екатерина"
      authorLastName="Августеняк"
      city="Санкт-Петербург"
      year="2020"
      callToActionView="Cмотреть читку"
      callToActionDownload="Скачать пьесу"
    />
    <CardPlayAnnounced
      festival={false}
      date="15 сентября"
      time="11:00"
      title="Вот Иф"
      creditsTypeOne="Драматург:"
      creditsNameOne="Ольга Казакова"
      creditsTypeTwo="Режиссёр:"
      creditsNameTwo="Катя Ганюшина"
      buttonName="О спектакле"
    />
    <CardPlayAnnounced
      festival={true}
      time="13:00"
      location="Площадка «8/3»"
      title="Камино норте"
      synopsis="(Не)деликатная пьеса о психоневрологическом интернате"
      creditsTypeOne="Драматург:"
      creditsNameOne="Ольга Казакова"
      creditsTypeTwo="Режиссёр:"
      creditsNameTwo="Катя Ганюшина"
      buttonName="Регистрация"
    />
  </>
);

export default Home;
