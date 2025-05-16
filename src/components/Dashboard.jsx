import { useState } from "react";

export default function Dashboard() {
  const [loggedIn, isLoggedIn] = useState(false);

  const buttonClick = (event) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event hjuelpet litt med funksjonen.
    event.preventDefault(); //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault hjelpet med event.preventDefault()
    const username = event.target.elements.username.value.trim();
    if (username !== "") {
      isLoggedIn(true);
    }
  };

  return (
    <section className="loggin">
      <h1>{loggedIn ? "Min side" : "Logg inn"}</h1>

      {!loggedIn && (
        <form onSubmit={buttonClick}>
          {" "}
          {/*https://www.w3schools.com/jsref/event_onsubmit.asp hjelpet med onsubmit. */}
          <label>Brukernavn: </label>
          <input type="text" name="username" />
          <button type="submit">Logg inn</button>
        </form>
      )}
    </section>
  );
}
