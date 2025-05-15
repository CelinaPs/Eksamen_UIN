import { useState } from "react";

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);

  const buttonClick = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value.trim();
    if (username !== "") {
      setLoggedIn(true);
    }
  };

  return (
    <section className="loggin">
      <h1>{loggedIn ? "Min side" : "Logg inn"}</h1>

      {!loggedIn && (
        <form onSubmit={buttonClick}>
          <label>Brukernavn: </label>
          <input type="text" name="username" />
          <button type="submit">Logg inn</button>
        </form>
      )}
    </section>
  );
}
