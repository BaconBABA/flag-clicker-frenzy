
export type Continent = {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
};

const continents: Continent[] = [
  {
    id: "africa",
    name: "Africa",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop",
    description: "Test your knowledge of the 54 African nations",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "asia",
    name: "Asia",
    image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=800&auto=format&fit=crop",
    description: "Identify flags from the largest continent",
    color: "from-red-500 to-pink-500",
  },
  {
    id: "europe",
    name: "Europe",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop",
    description: "Challenge yourself with European flags",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "north-america",
    name: "North America",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop",
    description: "From Canada to Panama - test your knowledge",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "oceania",
    name: "Oceania",
    image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=800&auto=format&fit=crop",
    description: "Island nations of the Pacific",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "south-america",
    name: "South America",
    image: "https://images.unsplash.com/photo-1619546952812-520e98064a52?q=80&w=800&auto=format&fit=crop",
    description: "Recognize the flags of this diverse continent",
    color: "from-purple-500 to-violet-500",
  },
];

export default continents;
