import React, { useState } from 'react';
import imgLogo from './img/logo.png';
import imgNews1 from './img/news1.png';
import imgNews2 from './img/news2.jpg';
import imgNews3 from './img/news3.png';

const HomePage = () => {
  const [przywitanie, setPrzywitanie] = useState([
    {
      content: 'Witaj na Stronie Wędkarskiej: Odkrywaj, Łów, Dziel Się Pasją!',
      logo: imgLogo,
    },
  ]);

  const [news, setNews] = useState([
    {
      title: 'Nowa Polityka Ochrony Rybostanu w Polsce: PZW Wprowadza Ścisłe Limity Połowów na Wielkich Jeziorach',
      content: 'Polski Związek Wędkarski (PZW) ogłosił nową politykę ochrony rybostanu, która ma na celu zapewnienie zrównoważonego gospodarowania populacją ryb na wielkich jeziorach. Zgodnie z nowymi przepisami, wprowadzono ścisłe limity połowów dla popularnych gatunków ryb, takich jak szczupak, sandacz i sum. Decyzja ta ma na celu ochronę zasobów rybnych oraz zachowanie równowagi ekosystemów wodnych. Wędkarze zostali poinformowani, że przestrzeganie nowych limitów będzie ściśle monitorowane, a naruszenie ich może skutkować sankcjami.',
      photo: imgNews1,
    },
    {
      title: 'Wędkarstwo Staje Się Coraz Popularniejszym Hobby Wśród Młodych Polaków',
      content: 'Wędkarstwo Staje Się Coraz Popularniejszym Hobby Wśród Młodych Polaków',
      content: 'Wędkarstwo staje się coraz bardziej popularnym hobby wśród młodych Polaków, zauważają eksperci branżowi. Coraz więcej osób w wieku od 18 do 30 lat odkrywa radość spędzania czasu na łowieniu ryb, zarówno dla relaksu, jak i jako sposób na aktywność na świeżym powietrzu. Wzrost zainteresowania tym sportem przypisuje się również kampaniom promocyjnym zachęcającym do zdrowego stylu życia oraz rosnącej świadomości ekologicznej. Liczba młodych członków PZW wzrosła o 20% w porównaniu z poprzednim rokiem, co świadczy o rosnącej popularności wędkarstwa wśród tej grupy wiekowej.',
      photo: imgNews2,
    },
    {
      title: 'Innowacyjna Technologia Pomaga Wędkarzom w Śledzeniu Aktywności Ryb na Dnie Jeziora',
      content: 'Wędkarze w Polsce korzystają z nowej innowacyjnej technologii, aby zwiększyć swoje szanse na udane połowy. Specjalne sonary umożliwiające śledzenie aktywności ryb na dnie jeziora stały się niezastąpionym narzędziem dla pasjonatów tego sportu. Dzięki zaawansowanym funkcjom, wędkarze mogą precyzyjnie określić lokalizację ryb, ich ruchy i preferowane głębokości. To pozwala im dostosować swoje metody połowowe, zwiększając efektywność i poprawiając doznania podczas wędkowania. Takie technologiczne udogodnienia zyskują coraz większą popularność wśród wędkarzy, którzy szukają nowych sposobów na poprawę swoich wyników w łowieniu ryb.',
      photo: imgNews3,
    },
  ]);

  const [comments, setComments] = useState([]);
  const [login, setLogin] = useState({ username: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = loggedIn ? login.username : e.target.name.value;
    const opinion = e.target.opinion.value;
    const newComment = { name, opinion };
    setComments([...comments, newComment]);
    e.target.name.value = '';
    e.target.opinion.value = '';
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (login.username === 'Wojtek' && login.password === 'Karp69') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <div className="home-page">
      <div className='przywitanie'>
        {przywitanie.map((item, index) => (
          <div key={index}>
            {item.content}
            <img src={item.logo} alt="Logo" />
          </div>
        ))}
      </div>

      <div className="login-section">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
        {loggedIn && <p>You are logged in!</p>}
      </div>

      <h1>Latest News</h1>

      <div className="news-section">
        <ul className="news-list">
          {news.map((newsItem) => (
            <li key={newsItem.title} className="news-item">
              <img src={newsItem.photo} alt={newsItem.title} />
              <div className="news-content">
                <h2>{newsItem.title}</h2>
                <p>{newsItem.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="comments-section">
        <h2 className="comments-header">Comments:</h2>
        <form onSubmit={handleSubmit} className="comments-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={loggedIn ? login.username : ''} readOnly={loggedIn} required={!loggedIn} />
          <br />
          <label htmlFor="opinion">Opinion:</label>
          <textarea id="opinion" name="opinion" required />
          <br />
          <button type="submit">Submit</button>
        </form>
        <div className="comments-list">
          <h1>comments:</h1>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment.name}: {comment.opinion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
