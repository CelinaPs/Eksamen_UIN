import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const fetchEvent = async () => {
    const API_KEY = "5OYpmz3EGOfKvtU8vlLA3cC6ASbAeGgE"; //API-key
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${API_KEY}`
    );
    const data = await response.json(); //Henter on konverterer JSON data fra TIcketmaster API
    setEvent(data); //Lagrer data i event variabel
  };

  useEffect(() => {
    fetchEvent(); //Kjører når komponenten vises
  }, [id]);

  if (!event) return <p>Fant ikke eventet eller laster fortsatt...</p>; //Viser melding mens vi venter på "event"

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.dates?.start?.localDate}</p>
      {event.images?.[0]?.url && (
        <img src={event.images[0].url} alt={event.name} width="300" />
      )}
      <p>{event.info || "Ingen ytterligere informasjon tilgjengelig."}</p>
      <p>
        <strong>Sted:</strong>{" "}
        {event._embedded?.venues?.[0]?.name || "Ukjent"}
      </p>
    </div>
  );
}
