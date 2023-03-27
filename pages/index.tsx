export default function Home() {
  return (
    <>
      <div className="home">
        <h3>Integrating Instagram with Firebase</h3>
        <button type="button">Connect to your Instagram account</button>
      </div>
      <style jsx>
        {`
          .home {
            font-family: sans-serif;
          }
          .home h3 {
            text-align: center;
            margin: 40px auto;
          }
          button {
            display: flex;
            margin: auto;
            padding: 10px 20px;
          }
          button:hover {
            background-color: black;
            color: white;
          }
        `}
      </style>
    </>
  );
}
