import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();
  const [events, setEvents] = useState([]);
  const [wishlist, setWishlist] = useState([]); // Ønskelisten for eventer

  const categoryKeywords = {
    musikk: "music",
    sport: "sports",
    teater: "theatre",
  };

  const fetchEventsByCategory = async () => {
    const API_KEY = "5OYpmz3EGOfKvtU8vlLA3cC6ASbAeGgE";
    const keyword = categoryKeywords[slug] || slug;

    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&countryCode=NO&size=20&apikey=${API_KEY}`
    );

    const data = await response.json();
    setEvents(data._embedded?.events || []);
  };

  // Legger til eller fjerner eventet fra ønskelisten 
  const handleToggleWishlist = (event) => {
    setWishlist((prevWishlist) => {
      // Hvis eventet allerede er i ønskelisten, fjern det
      if (prevWishlist.some((e) => e.id === event.id)) {
        return prevWishlist.filter((e) => e.id !== event.id);
      }
      // Hvis eventet ikke er i ønskelisten, legg det til
      return [...prevWishlist, event];
    });
  };

  // Kjører når komponenten renderes
  useEffect(() => {
    fetchEventsByCategory();
  }, [slug]);

  return (
    <section className="category-section">
      <h1>Attraksjoner i {slug}</h1>
      <ul className="event-grid">
        {events.map((event) => (
          <li key={event.id} className="event-card">
            {event.images?.[0]?.url && (
              <img src={event.images[0].url} alt={event.name} width="200" />
            )}
            <h3>{event.name}</h3> {/* Viser navn på event */}
              {/*Sette icon under bilde kilde: https://legacy.reactjs.org/docs/handling-events.html */}
            <button onClick={() => handleToggleWishlist(event)}>
              {wishlist.some((e) => e.id === event.id) ? (
                <i className="fa-solid fa-heart"></i> 
              ) : (
                <i className="fa-regular fa-heart"></i>  //endrer ikon når den trykkes på
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
