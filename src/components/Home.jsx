import "../Home.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const API_KEY = "5OYpmz3EGOfKvtU8vlLA3cC6ASbAeGgE";
  const FESTIVAL_IDS = [
    "K8vZ917_YJf", //NEON
    "K8vZ917oWOV", //Tons of Rock
    "K8vZ917K7fV", //Findings
    "K8vZ917bJC7", //Skeikampenfestivalen
  ];

  //Under her er ChatGPT. Kilder og prompt i Kilder
  const [festivals, setFestivals] = useState([]);
  const navigate = useNavigate();

  const fetchFestival = async (id) => {
    const url = `https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchAllFestivals = async () => {
      const results = await Promise.all(
        FESTIVAL_IDS.map((id) => fetchFestival(id))
      );
      setFestivals(results);
    };
    fetchAllFestivals();
  }, []);

  return (
    <div className="home-container">
      <h1>Festivaler 2025</h1>
      <div className="festival-list">
        {festivals.map((festival) => (
          <div
            key={festival.id}
            className="festival-card"
            onClick={() => navigate(`/event/${festival.id}`)}
          >
            <img
              src={festival.images?.[0]?.url}
              alt={festival.name}
              className="festival-image"
            />
            <h3>{festival.name}</h3>
            <button type="button">Les mer om {festival.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
