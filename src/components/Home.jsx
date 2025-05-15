import Api from "../Api";

export default function Home() {
  return (
    <>
      <section>
        <h1>Sommerens Festivaler!</h1>
        <Api />
      </section>
      <section>
        <h2>Hva skjer i verdens storbyer!</h2>
        <ul>
          {/*Her må vi legge inn button til byene ved bruk av dynamisk kode!!*/}
        </ul>
        <h2>Hva skjer i {/*Sette inn dynamisk kode */}</h2>
      </section>
    </>
  );
}
