import tripguide from "../assets/tripguide.png";
import jobit from "../assets/jobit.png";
import carrent from "../assets/carrent.png";

export const navLinks = [
  {
    id: "about",
    title: "Sobre nós",
  },
  {
    id: "services",
    title: "Serviços",
  },
  {
    id: "team",
    title: "Time",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
  },
];

export const team = [
  {
    name: "Fernanda",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Roberto",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Sara",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Thomas",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];
