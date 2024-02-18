import nocaut from '../../images/nocaut.jpeg';
import nocautFull from '../../images/nocautfull.jpg';
import spaceInvaders from '../../images/spaceinvaders.jpg';
import spaceInvadersFull from '../../images/spaceinvadersfull.jpg';
import reactJs from '../../images/motorep.jpg';
import reactJsFull from '../../images/motorepfull.jpg';
import todoNext from '../../images/todonext.jpg';
import todoNextFull from '../../images/todonextfull.jpg';

const projectsData = [
    {
        id: 1,
        title: 'Nocaut',
        year: 2022,
        tags: ['HTML5', 'CSS3', 'SASS', 'Bootstrap'],
        githubLink: 'https://github.com/Santif028/Banda-Ferreira',
        deployLink: 'https://nocautferreira.000webhostapp.com/index.html',
        image: nocaut,
        imageFull: nocautFull,
    },
    {
        id: 2,
        title: 'Space Invaders based game',
        year: 2022,
        tags: ['Javascript', 'HTML5', 'CSS3'],
        githubLink: 'https://github.com/Santif028/33970Final-Ferreira',
        deployLink: 'https://santif028.github.io/33970Final-Ferreira/',
        image: spaceInvaders,
        imageFull: spaceInvadersFull,
    },
    {
        id: 3,
        title: 'React.js Ecommerce',
        year: 2022,
        tags: ['React.js', 'Node.js', 'Firebase'],
        githubLink: 'https://github.com/Santif028/PreEntrega1-Ferreira-34770',
        deployLink: 'https://motorep-ferreira.netlify.app',
        image: reactJs,
        imageFull: reactJsFull,
    },
    {
        id: 4,
        title: 'Todo Next Crud Typescript',
        year: 2023,
        tags: ['Next.js', 'Prisma', 'Typescript', 'SQLite', 'Tailwind'],
        githubLink: 'https://github.com/Santif028/Todo-Typescript',
        /* deployLink: 'No Disponible/Not Available', */
        image: todoNext,
        imageFull: todoNextFull,
    },

];

export default projectsData;