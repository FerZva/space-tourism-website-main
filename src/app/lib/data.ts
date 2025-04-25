import { CrewMember, Destination, Technology } from "@/app/lib/types";

export const destinations: Destination[] = [
  {
    name: "MOON",
    description:
      "See our planet as you&apos;ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you&apos;re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
    imageUrl: "/image-moon.png",
  },
  {
    name: "MARS",
    description:
      "Don&apos;t forget to pack your hiking boots. You&apos;ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It&apos;s two and a half times the height of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
    imageUrl: "/image-mars.png",
  },
  {
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover&apos;s dream. With an icy surface, it&apos;s perfect for a bit of ice skating, curling, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
    imageUrl: "/image-europa.png",
  },
  {
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you&apos;ll also have front-row seats for the rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
    imageUrl: "/image-titan.png",
  },
];

export const crewMembers: CrewMember[] = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imageUrl: "/image-douglas-hurley.png",
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imageUrl: "/image-mark-shuttleworth.png",
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    imageUrl: "/image-victor-glover.png",
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    imageUrl: "/image-anousheh-ansari.png",
  },
];

export const technology: Technology[] = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    images: {
      portrait: "/image-launch-vehicle-portrait.jpg",
      landscape: "/image-launch-vehicle-landscape.jpg",
    },
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    images: {
      portrait: "/image-spaceport-portrait.jpg",
      landscape: "/image-spaceport-landscape.png",
    },
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses aerodynamic drag and parachutes to land gently in an ocean or on land. This technology has been proven time and again on missions where the capsule is returned to Earth and safely recovered.",
    images: {
      portrait: "/image-space-capsule-portrait.jpg",
      landscape: "/image-space-capsule-landscape.jpg",
    },
  },
];
