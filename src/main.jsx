import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      translation: {
        greeting: 'Hola, me llamo',
        name: 'Santiago Ferreira',
        profession: 'y soy Desarrollador Web.',
        home: 'INICIO',
        about: 'ACERCA DE MÍ',
        projects: 'PROYECTOS',
        contact: 'CONTACTO',
        aboutDescription: {
          first: 'Me llamo Santiago y soy de Argentina. Estudie electromecánica durante la secundaria y, una vez terminada, inicie mi carrera en IT. Disfruto de solucionar hasta el más simple de los errores.',
          second: 'Durante la carrera de Desarrollo, ayude a mis compañeros en la etapa de javascript. Me encanta aprender nuevas tecnologias y compartirlas.',
          third: 'Otra de mis pasiones son la música y los videojuegos. Actualmente proyecto mi camino para poder mezclar los 3 mundos: programación, música y videojuegos.'
        },
        downloadCV: 'Descargar CV',
        selectProject: 'Seleccione un Proyecto para visualizar los Detalles',
        year: 'Año',
        tags: 'Etiquetas',
        deploy: 'Ver Proyecto',
        code: 'Codigo Fuente',
        projectDescriptions: {
          'Setsu URL Shortener': 'Proyecto personal basado en slug de pheralB, solo que utilizando Supabase para manejar la base de datos y OAuth de Github para la autenticación. Puedes crear, editar o eliminar los links que quieras cuando quieras.',
          'Nocaut': 'Primer proyecto final que terminé para el curso de desarrollo Full-Stack de Coderhouse a finales de junio 2022. Es una página web con 5 htmls, un formulario de contacto, donde use SASS para compilar mi CSS y Bootstrap para lograr el navbar. También considerado mi primer proyecto.',
          'Space Invaders based game': 'Segundo proyecto final que terminé para el curso de desarrollo Full-Stack de Coderhouse a finales de septiembre 2022. Este proyecto es una interpretación mía de Space Invaders echa en Javascript puro, donde utilizo manipulación de DOM, clases, operadores lógicos, ciclos for, y también particlesJS para lograr el fondo.',
          'React.js Ecommerce': 'Tercer proyecto final que terminé para el curso de desarrollo Full-Stack de Coderhouse a finales de noviembre 2022. Frontend diseñado en React.js para un ecommerce, con base de datos montada en Firebase, utilice Sweet Alert 2 y Material UI para llegar al resultado final.',
          'Express.js Ecommerce Backend': 'Último proyecto final que terminé para el curso de desarrollo Full-Stack de Coderhouse en agosto 2023. API Rest realizada para un ECommerce con Express.js, donde hago uso de Passport, Mongoose, Handlebars para el server side rendering, Bcrypt, Faker, Stripe para la pasarela de pago y Swagger para documentar mi API.',
          'Todo Next Crud Typescript': 'Proyecto independiente realizado en octubre 2023, donde utilice Next.js 13 y Typescript. Opte por tailwind para diseñar los estilos del proyecto y prisma ORM con SQLite para manejar la base de datos, donde tengo mi logica de CRUD.'
        },
        formName: 'Nombre',
        formEmail: 'Correo electrónico',
        formWebsite: 'Sitio web',
        formMessage: 'Mensaje',
        alertError: 'Se produjo un error al procesar la solicitud',
        swalButton: 'Aceptar',
        swalText: '¡La solicitud se ha completado correctamente!',
        swalTitle: 'Éxito',
        spanish: 'Español',
        english: 'Inglés',
      },
    },
    en: {
      translation: {
        greeting: 'Hello, my name is',
        name: 'Santiago Ferreira',
        profession: 'and I am a Web Developer.',
        home: 'HOME',
        about: 'ABOUT ME',
        projects: 'PROJECTS',
        contact: 'CONTACT',
        aboutDescription:
        {
          first: "My name is Santiago and I'm from Argentina. I studied electromechanics during high school and, once finished, I started my career in IT. I enjoy solving even the simplest of errors.",
          second: "During my Development degree, I assisted my peers in the JavaScript stage. I love learning new technologies and sharing them.",
          third: "Another of my passions are music and video games. Currently, I am mapping out my path to blend all three worlds: programming, music, and video games.",
        },
        downloadCV: 'Download CV',
        selectProject: 'Select a Project to View Details',
        year: 'Year',
        tags: 'Tags',
        deploy: 'View Project',
        code: 'Source Code',
        'projectDescriptions': {
          'Setsu URL Shortener': `Personal project based on pheralB's slug, but using Supabase to handle the database and GitHub OAuth for authentication. You can create, edit, or delete links as you wish, anytime.`,
          'Nocaut': 'First final project I completed for the Coderhouse Full-Stack development course in late June 2022. It is a website with 5 HTML pages, a contact form, where I used SASS to compile my CSS and Bootstrap to achieve the navbar. Also considered my first project.',
          'Space Invaders based game': 'Second final project I completed for the Coderhouse Full-Stack development course in late September 2022. This project is my interpretation of Space Invaders made in pure Javascript, where I use DOM manipulation, classes, logical operators, FOR loops, and also particlesJS to achieve the background.',
          'React.js Ecommerce': 'Third final project I completed for the Coderhouse Full-Stack development course in late November 2022. Frontend designed in React.js for an ecommerce, with a database hosted on Firebase, I used Sweet Alert 2 and Material UI to achieve the final result.',
          'Express.js Ecommerce Backend': 'Last final project I completed for the Coderhouse Full-Stack development course in August 2023. Rest API made for an ECommerce with Express.js, where I use Passport, Mongoose, Handlebars for server-side rendering, Bcrypt, Faker, Stripe for payment gateway, and Swagger to document my API.',
          'Todo Next Crud Typescript': 'Independent project carried out in October 2023, where I used Next.js 13 and Typescript. I opted for Tailwind to design the project styles and Prisma ORM with SQLite to handle the database, where I have my CRUD logic.'
        },
        formName: 'Name',
        formEmail: 'E-Mail',
        formWebsite: 'Website',
        formMessage: 'Message',
        alertError: 'An error occurred while processing the request',
        swalButton: 'Accept',
        swalText: 'The request has been completed successfully!',
        swalTitle: 'Success',
        spanish: 'Spanish',
        english: 'English',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
