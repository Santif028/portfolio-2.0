
import './App.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from 'react-toastify';
import NavbarComponent from './components/Navbar/Navbar';
import SocialIconsComponent from './components/SocialIcons/SocialIcons';
import HeaderComponent from './components/Header/Header';
import AboutComponent from './components/About/About';
import ProjectsComponent from './components/Projects/Projects';
import ContactComponent from './components/Contact/Contact';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Mi Portfolio personal, echo en React.js con Create-React-App"
        />
        <meta name="keywords" content="React, Portfolio, web development, CSS, React Hooks" />
      </Helmet>
      <NavbarComponent />
      <SocialIconsComponent />
      <main>
        <div id="header">
          <HeaderComponent />
        </div>
        <div id="about">
          <AboutComponent />
        </div>
        <div id="projects">
          <ProjectsComponent />
        </div>
        <div id="contact">
          <ContactComponent />
        </div>
      </main>
      <footer style={{ backgroundColor: 'black' }}>
        <p style={{ textAlign: 'center', padding: 0, fontStyle: 'italic' }}>&copy; Santiago Ferreira {new Date().getFullYear()}</p>
      </footer>
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
