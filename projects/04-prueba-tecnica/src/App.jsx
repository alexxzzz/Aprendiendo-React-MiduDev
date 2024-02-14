import "./app.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";


export function App() {
  const { fact, refreshRandomFact } = useCatFact();
  const { imageURL } = useCatImage({ fact });

  // para recargar al darle al boton
  const handleClick = async () => {
    refreshRandomFact();
  };

  return (
    <main>
      <h1>App</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>} {/* renderizado condicional */}
      {imageURL && (
        <img
          src={imageURL}
          alt={`Image extracted using the first word of ${fact}`}
        />
      )}
    </main>
  );
}
