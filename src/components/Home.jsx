export default function Home() {

  const API_KEY = "5OYpmz3EGOfKvtU8vlLA3cC6ASbAeGgE";

  const FESTIVAL_IDS = [
    "K8vZ917_YJf", //NEON
    "K8vZ917oWOV", //Tons of Rock
    "K8vZ917K7fV", //Findings
    "K8vZ917bJC7", //Skeikampenfestivalen
  ];

  const fetchFestival = async (id) => {
    const url = `https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=${API_KEY}`;
  };
}
