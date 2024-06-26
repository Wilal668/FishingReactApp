import React, { useState } from 'react';

import imgKimJestem1 from './img/about-KimJestem1.jpg';
import imgKimJestem2 from './img/about-KimJestem2.jpg';
import imgKimJestem3 from './img/about-KimJestem3.jpg';

import imgCele1 from './img/about-Cele1.jpg';
import imgCele2 from './img/about-Cele2.jpg';
import imgCele3 from './img/about-Cele3.jpg';

import imgDruzyna1 from './img/about-Druzyna1.jpg';
import imgDruzyna2 from './img/about-Druzyna2.jpg';
import imgDruzyna3 from './img/about-Druzyna3.jpg';


const AboutPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = {
    kimJestem: {
      title: 'Kim jestem',
      description: 'Cześć, jestem Wojtek! Wędkarstwo to moja pasja, która towarzyszy mi od wielu lat. Specjalizuję się w dwóch technikach: wędkarstwie karpiowym i feederowym. Każdy wypad nad wodę to dla mnie nie tylko sposób na relaks, ale także okazja do doskonalenia swoich umiejętności i zdobywania nowych doświadczeń. Uwielbiam spędzać czas na świeżym powietrzu, obserwując naturę i ciesząc się spokojem, jaki daje wędkowanie. Na mojej stronie chcę dzielić się swoją wiedzą, przemyśleniami i historiami z wędkarskich wypraw. Znajdziesz tu porady, recenzje sprzętu, relacje z łowisk oraz wszystko, co może zainteresować każdego miłośnika wędkowania. Dołącz do mnie i odkryj razem ze mną piękno tego niezwykłego hobby! Zapraszam do kontaktu i wymiany doświadczeń – każda nowa przygoda nad wodą to kolejna fascynująca historia do opowiedzenia. Trafionych brań! Wojtek',
      images: [imgKimJestem1, imgKimJestem2, imgKimJestem3],
    },
    celeStrony: {
      title: 'Cele Strony',
      description: 'Oto cele mojej strony wędkarskiej: Chcę dostarczać wartościowe informacje na temat wędkarstwa karpiowego i feederowego, dzieląc się technikami, taktykami oraz poradami, które pomogą zarówno początkującym, jak i doświadczonym wędkarzom w doskonaleniu swoich umiejętności. Pragnę inspirować innych do odkrywania piękna wędkowania, dzieląc się relacjami z moich wypraw, historiami o złowionych rybach oraz pięknem natury, które towarzyszy każdemu wypadkowi nad wodę. Moim celem jest stworzenie miejsca, gdzie miłośnicy wędkowania mogą się spotykać, wymieniać doświadczeniami, zadawać pytania i wspólnie rozwijać swoją pasję. Chcę dostarczać rzetelne recenzje sprzętu wędkarskiego, testować nowości na rynku i dzielić się swoimi spostrzeżeniami, aby pomóc innym w wyborze odpowiednich narzędzi do wędkowania. Zależy mi na promowaniu zasad etycznego i zrównoważonego wędkowania, dbania o środowisko naturalne oraz respektowania przyrody, abyśmy mogli cieszyć się wędkarstwem przez wiele lat. Wędkarstwo to nie tylko technika, ale także sposób na relaks i czerpanie radości z życia. Chcę, aby moja strona była miejscem, gdzie każdy może znaleźć inspirację do odprężenia się i czerpania przyjemności z wędkarskich przygód',
      images: [imgCele1, imgCele2, imgCele3],
    },
    mojaDruzyna: {
      title: 'Moja Drużyna',
      description: 'Witamy na stronie naszej drużyny wędkarskiej! Jesteśmy zgraną ekipą pasjonatów wędkarstwa, składającą się z Aleksa, Wojtka i Seby. Każdy z nas wnosi do drużyny swoje unikalne doświadczenia i umiejętności, tworząc zgrany zespół, który wspólnie zdobywa nowe łowiska i doskonali techniki połowu. Aleks jest naszym specjalistą od wędkarstwa feederowego, zawsze gotowy do eksperymentowania z nowymi technikami i przynętami. Jego wiedza na temat sprzętu i strategii często okazuje się kluczowa podczas naszych wypraw. Wojtek, czyli ja, jestem zapalonym wędkarzem karpiowym, dla którego każda chwila nad wodą to okazja do nauki i relaksu. Uwielbiam dzielić się swoimi spostrzeżeniami i doświadczeniami, inspirując innych do odkrywania uroków wędkowania. Seba to nasz mistrz w odnajdywaniu najlepszych miejsc na łowienie. Jego intuicja i umiejętność obserwacji natury sprawiają, że zawsze znajdujemy idealne spoty, gdzie ryby biorą jak szalone. Jego pozytywna energia i determinacja napędzają nas do działania. Razem tworzymy zgraną drużynę, której celem jest nie tylko łowienie rekordowych ryb, ale także czerpanie radości z każdego wspólnie spędzonego dnia nad wodą. Nasza pasja do wędkowania łączy nas i motywuje do ciągłego doskonalenia swoich umiejętności oraz dzielenia się wiedzą i doświadczeniami z innymi wędkarzami. Zapraszamy do śledzenia naszych przygód i wspólnego odkrywania piękna wędkarskiego świata!',
      images: [imgDruzyna1, imgDruzyna2, imgDruzyna3],
    },
  };

  const handleImageClick = (section) => {
    setSelectedSection(section);
  };

  const handleCloseModal = () => {
    setSelectedSection(null);
  };

  return (
    <div className="about-page">
      <h1>About Our Fishing Website</h1>

      <div className="sections-container">
        {Object.keys(sections).map((key) => (
          <div key={key} className="section">
            <h2>{sections[key].title}</h2>
            <img
              src={sections[key].images[0]}
              alt={sections[key].title}
              className="about-page-image"
              onClick={() => handleImageClick(key)}
            />
          </div>
        ))}
      </div>

      {selectedSection && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{sections[selectedSection].title}</h2>
            <p>{sections[selectedSection].description}</p>
            <div className="additional-images">
              <img src={sections[selectedSection].images[1]} alt={`${sections[selectedSection].title} 2`} />
              <img src={sections[selectedSection].images[2]} alt={`${sections[selectedSection].title} 3`} />
            </div>
            <button className="close-button" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
