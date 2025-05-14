import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();
  const [events, setEvents] = useState([]);

  const categoryKeywords = {
    musikk: "music",
    sport: "sports",
    teater: "theatre",
  };

  const fetchEventsByCategory = async () => {
    const API_KEY = "5OYpmz3EGOfKvtU8vlLA3cC6ASbAeGgE"; //API-key
    const keyword = categoryKeywords[slug] || slug; //Bruker Slug for å matche keyword of slug

    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&countryCode=NO&size=20&apikey=${API_KEY}`
    );

    const data = await response.json(); //Henter on konverterer JSON data fra TIcketmaster API
    setEvents(data._embedded?.events || []); //Henter data som array med events ||(eller) en tom liste hvis data er "undefined"
  };

  useEffect(() => {
    fetchEventsByCategory(); //Henter eventer basert på "category"
  }, [slug]);

  if (!events.length) return <p>Ingen arrangementer funnet for {slug}...</p>;

  return (
    <div>
      <h1>Arrangementer i {slug}</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>
              <h3>{event.name}</h3>
              <p>{event.dates.start.localDate}</p>
              {event.images?.[0]?.url && (
                <img src={event.images[0].url} alt={event.name} width="200" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
