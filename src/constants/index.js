import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Desarrollador de React Native",
    icon: mobile,
  },
  {
    title: "Desarrollador de Backend",
    icon: backend,
  },
  {
    title: "Creador de Contenido",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desarrollador React.js",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Marzo 2020 - Abril 2021",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaboración con equipos interfuncionales, incluyendo diseñadores, gestores de productos y otros desarrolladores, para crear productos de alta calidad.",
      "Implementación de diseño adaptable y garantía de compatibilidad entre navegadores.",
      "Participación en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
    ],
  },
  {
    title: "Desarrollador React Native",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Enero 2021 - Febrero 2022",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaboración con equipos interfuncionales, incluyendo diseñadores, gestores de productos y otros desarrolladores, para crear productos de alta calidad.",
      "Implementación de diseño adaptable y garantía de compatibilidad entre navegadores.",
      "Participación en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
    ],
  },
  {
    title: "Desarrollador Web",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Enero 2022 - Enero 2023",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaboración con equipos interfuncionales, incluyendo diseñadores, gestores de productos y otros desarrolladores, para crear productos de alta calidad.",
      "Implementación de diseño adaptable y garantía de compatibilidad entre navegadores.",
      "Participación en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
    ],
  },
  {
    title: "Desarrollador Full Stack",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Enero 2023 - Actualidad",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaboración con equipos interfuncionales, incluyendo diseñadores, gestores de productos y otros desarrolladores, para crear productos de alta calidad.",
      "Implementación de diseño adaptable y garantía de compatibilidad entre navegadores.",
      "Participación en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Pensé que era imposible crear un sitio web tan hermoso como nuestro producto, pero Brucce me demostró lo contrario.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nunca he conocido a un desarrollador web que realmente se preocupe por el éxito de sus clientes como lo hace Brucce.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Después de que Brucce optimizó nuestro sitio web, nuestro tráfico aumentó en un 50%. ¡No podemos agradecerles lo suficiente!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Renta de carros",
    description:
      "Plataforma basada en web que permite a los usuarios buscar, reservar y gestionar alquileres de automóviles de varios proveedores, proporcionando una solución conveniente y eficiente para las necesidades de transporte.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trabajo IT",
    description:
      "Aplicación web que permite a los usuarios buscar ofertas de trabajo, ver rangos salariales estimados para posiciones y localizar trabajos disponibles según su ubicación actual.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Guia de viaje",
    description:
      "Una plataforma integral de reserva de viajes que permite a los usuarios reservar vuelos, hoteles y autos de alquiler, y ofrece recomendaciones seleccionadas para destinos populares.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
