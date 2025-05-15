export default function Dashboard() {
  return (
    <div>
      <h1>Min side / Logg inn</h1>
      <form>
        <label>Brukernavn:</label>
        <input type="text" name="username" />
        <button type="submit">Logg inn</button>
      </form>
    </div>
  );
}
