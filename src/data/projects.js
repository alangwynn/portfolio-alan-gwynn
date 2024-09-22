import uenoImage from '../assets/projects/ueno-bank.png';
import fundappImage from '../assets/projects/fundapp.png';
import vaquitaImage from '../assets/projects/vaquita.png';
import pneumoniaImage from '../assets/projects/pneumonia.png';

export const projects = [
    {
        id: 1,
        srcImage: uenoImage,
        title: 'Ueno Bank',
        alt: 'Project Ueno Bank',
        description: 'This application is from the number one bank in our country and has all the functionalities that a bank has. The idea of ​​this application is to digitalize all the processes that it has and carry out everything in the mobile application, giving the client the convenience of managing their credit card payments, checking their transactions, paying bills, managing their loans, all in the mobile application.',
        techStack: 'Flutter | NodeJS - ExpressJS',
        linkGithub: null,
        linkDemo: 'https://play.google.com/store/apps/details?id=py.com.elcomercio.retailbanking&hl=es_PY',
    },
    {
        id: 2,
        srcImage: fundappImage,
        title: 'Fundapp',
        alt: 'Project Fundapp',
        description: 'It is a mobile application that records all vaccinations that a veterinarian has performed on cows and pigs over a period of time. Geographic data is stored to identify the vaccination site, the type of cow/pig, among others. This application is used by the state and serves to identify whether the meat of these animals from all over the country is exportable.',
        techStack: 'Flutter | Angular +14 | Java - Spring Boot | PostgreSQL | Docker',
        linkGithub: null,
        linkDemo: 'https://play.google.com/store/apps/details?id=org.fundassa.fundapp&hl=es_PY',
    },
    {
        id: 3,
        srcImage: vaquitaImage,
        title: 'Vaquita',
        alt: 'Project Vaquita',
        description: 'It is a mobile app that is a wallet, it helps you manage your money, review your transactions and make bill payments.',
        techStack: 'Flutter | Angular +12 | NodeJS - NestJS | PostgreSQL',
        linkGithub: null,
        linkDemo: 'https://play.google.com/store/apps/details?id=py.com.mutech.vaquita&hl=es_PY',
    },
    {
        id: 4,
        srcImage: pneumoniaImage,
        title: 'Pneumonia Detection',
        alt: 'Project Pneumonia Detection',
        description: 'It is a mobile application that allows the doctor to scan a chest x-ray and then get the result regardless of whether the patient has pneumonia or not. This project is my thesis, it also has a backend in Flask that processes all the data about the chest x-ray and returns the data to the frontend.',
        techStack: 'Flutter | Angular +14 | Python - Flask | PostgreSQL | CNN AI',
        linkGithub: 'https://github.com/alangwynn/pneumonia-detection/tree/master',
        linkDemo: null,
    },
]