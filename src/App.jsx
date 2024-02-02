
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
        <title>Portfolio de Santiago Ferreira, Desarrollador y Programador Web.</title>
        <meta
          name="description"
          content="Portfolio de Santiago Ferreira con sus proyectos echo en React.js con vite"
        />
        <meta name="keywords" content="React, Portfolio, web development, CSS, React Hooks" />
      </Helmet>
      <NavbarComponent />
      <SocialIconsComponent />
      <div className="fixed left-0 top-0 -z-10 h-full w-full mx-auto">
        <div className="relative h-full w-full bg-[#011126]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          </div>
        </div>
      </div>

      <main className='flex flex-col items-center space-y-24 px-4'>
        <div id="header" className='w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
          <HeaderComponent />
        </div>
        <div id="projects" className='w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
          <ProjectsComponent />
        </div>
        <div id="about" className='w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
          <AboutComponent />
        </div>
        <div id="contact" className='w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
          <ContactComponent />
        </div>
      </main>
      <footer>
        <p style={{ textAlign: 'center', padding: 0, fontStyle: 'italic' }}>&copy; Santiago Ferreira {new Date().getFullYear()}</p>
      </footer>
      <ToastContainer />

    </HelmetProvider >
  );
}

export default App;
