import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="title1">
          <div className="logo">
            <a href="index.html"><img id="titleLogo" src="image/logo.PNG" alt=""/></a>
          </div>
          <nav className="nav-list">
            <ul className="list">
              <li className="list-item"><a href="intro.html" className="list-item-link">Introduction</a></li>
              <li className="list-item sub"><a href="myWork.html" className="list-item-link">My Works</a>

            </li></ul>
          </nav>
      </div>

      <article className="article">
        <div className="me">
          <div className="pra">I came from Taichung, and I am preferred to be a designer.<br />
            Whether is working for the Internet, or for the products.<br />
            In my plan, I will like to take my four years to learn some skills,<br />
            and let myself try everything, so I can understand what is<br />
            going to be my career in the future.</div>
        </div>
          <h4 className="word">NAME: Beca Sun<br />BIRTH: 16/06/2001/<br />COLLEAGE: NTUE/<br />DEPARTMENT: Art and Design</h4>

      </article>
    </div>
    </div>


  );
}

export default App;
