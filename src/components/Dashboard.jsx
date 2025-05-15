export default function Dashboard() {
  return (
    <section className="loggin">
      <h1>Logg inn</h1>
      <form>
        <label>Brukernavn: </label>
        <input type="text" name="username" />
        <button type="submit">Logg inn</button>
      </form>
    </section>
  );
}
