
export type Country = {
  id: string;
  name: string;
  continent: string;
  flag: string;
  capital: string;
};

// Sample data - in a full implementation this would include all countries
const countries: Country[] = [
  // Africa
  {
    id: "egypt",
    name: "Egypt",
    continent: "africa",
    flag: "https://flagcdn.com/w320/eg.png",
    capital: "Cairo",
  },
  {
    id: "south-africa",
    name: "South Africa",
    continent: "africa",
    flag: "https://flagcdn.com/w320/za.png",
    capital: "Pretoria",
  },
  {
    id: "nigeria",
    name: "Nigeria",
    continent: "africa",
    flag: "https://flagcdn.com/w320/ng.png",
    capital: "Abuja",
  },
  {
    id: "kenya",
    name: "Kenya",
    continent: "africa",
    flag: "https://flagcdn.com/w320/ke.png",
    capital: "Nairobi",
  },
  {
    id: "morocco",
    name: "Morocco",
    continent: "africa",
    flag: "https://flagcdn.com/w320/ma.png",
    capital: "Rabat",
  },
  
  // Asia
  {
    id: "japan",
    name: "Japan",
    continent: "asia",
    flag: "https://flagcdn.com/w320/jp.png",
    capital: "Tokyo",
  },
  {
    id: "china",
    name: "China",
    continent: "asia",
    flag: "https://flagcdn.com/w320/cn.png",
    capital: "Beijing",
  },
  {
    id: "india",
    name: "India",
    continent: "asia",
    flag: "https://flagcdn.com/w320/in.png",
    capital: "New Delhi",
  },
  {
    id: "south-korea",
    name: "South Korea",
    continent: "asia",
    flag: "https://flagcdn.com/w320/kr.png",
    capital: "Seoul",
  },
  {
    id: "thailand",
    name: "Thailand",
    continent: "asia",
    flag: "https://flagcdn.com/w320/th.png",
    capital: "Bangkok",
  },
  
  // Europe
  {
    id: "france",
    name: "France",
    continent: "europe",
    flag: "https://flagcdn.com/w320/fr.png",
    capital: "Paris",
  },
  {
    id: "germany",
    name: "Germany",
    continent: "europe",
    flag: "https://flagcdn.com/w320/de.png",
    capital: "Berlin",
  },
  {
    id: "italy",
    name: "Italy",
    continent: "europe",
    flag: "https://flagcdn.com/w320/it.png",
    capital: "Rome",
  },
  {
    id: "spain",
    name: "Spain",
    continent: "europe",
    flag: "https://flagcdn.com/w320/es.png",
    capital: "Madrid",
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    continent: "europe",
    flag: "https://flagcdn.com/w320/gb.png",
    capital: "London",
  },
  
  // North America
  {
    id: "united-states",
    name: "United States",
    continent: "north-america",
    flag: "https://flagcdn.com/w320/us.png",
    capital: "Washington D.C.",
  },
  {
    id: "canada",
    name: "Canada",
    continent: "north-america",
    flag: "https://flagcdn.com/w320/ca.png",
    capital: "Ottawa",
  },
  {
    id: "mexico",
    name: "Mexico",
    continent: "north-america",
    flag: "https://flagcdn.com/w320/mx.png",
    capital: "Mexico City",
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    continent: "north-america",
    flag: "https://flagcdn.com/w320/cr.png",
    capital: "San José",
  },
  {
    id: "jamaica",
    name: "Jamaica",
    continent: "north-america",
    flag: "https://flagcdn.com/w320/jm.png",
    capital: "Kingston",
  },
  
  // Oceania
  {
    id: "australia",
    name: "Australia",
    continent: "oceania",
    flag: "https://flagcdn.com/w320/au.png",
    capital: "Canberra",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    continent: "oceania",
    flag: "https://flagcdn.com/w320/nz.png",
    capital: "Wellington",
  },
  {
    id: "fiji",
    name: "Fiji",
    continent: "oceania",
    flag: "https://flagcdn.com/w320/fj.png",
    capital: "Suva",
  },
  {
    id: "papua-new-guinea",
    name: "Papua New Guinea",
    continent: "oceania",
    flag: "https://flagcdn.com/w320/pg.png",
    capital: "Port Moresby",
  },
  {
    id: "samoa",
    name: "Samoa",
    continent: "oceania",
    flag: "https://flagcdn.com/w320/ws.png",
    capital: "Apia",
  },
  
  // South America
  {
    id: "brazil",
    name: "Brazil",
    continent: "south-america",
    flag: "https://flagcdn.com/w320/br.png",
    capital: "Brasília",
  },
  {
    id: "argentina",
    name: "Argentina",
    continent: "south-america",
    flag: "https://flagcdn.com/w320/ar.png",
    capital: "Buenos Aires",
  },
  {
    id: "colombia",
    name: "Colombia",
    continent: "south-america",
    flag: "https://flagcdn.com/w320/co.png",
    capital: "Bogotá",
  },
  {
    id: "peru",
    name: "Peru",
    continent: "south-america",
    flag: "https://flagcdn.com/w320/pe.png",
    capital: "Lima",
  },
  {
    id: "chile",
    name: "Chile",
    continent: "south-america",
    flag: "https://flagcdn.com/w320/cl.png",
    capital: "Santiago",
  },
];

export default countries;
