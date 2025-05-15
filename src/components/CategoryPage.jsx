import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

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
    setLoading(false);
  };

  const handleToggleWishlist = (event) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((e) => e.id === event.id)) {
        return prevWishlist.filter((e) => e.id !== event.id);
      }
      return [...prevWishlist, event];
    });
  };

  useEffect(() => {
    fetchEventsByCategory();
  }, [slug]);

  if (loading) return <p>Laster inn kategori...</p>;

  return (
    <section className="category-section">
      <h1>Attraksjoner i {slug}</h1>
      <ul className="event-grid">
        {events.map((event) => (
          <li key={event.id} className="event-card">
            {event.images?.[0]?.url && (
              <img src={event.images[0].url} alt={event.name} width="200" />
            )}
            <h3>{event.name}</h3>
            <button onClick={() => handleToggleWishlist(event)}>
              {wishlist.some((e) => e.id === event.id) ? (
                <i className="fa-solid fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
