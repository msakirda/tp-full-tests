// src/App.tsx
import { useState } from 'react';
import { calculerHeure } from './ServiceTemps';

export default function App() {
  const [lune, setLune] = useState<number>(1);
  const [terre, setTerre] = useState<number>(1);
  const [soleil, setSoleil] = useState<number>(1);
  const [resultat, setResultat] = useState<string>('');

  const handleCalculClick = () => {
    const heure = calculerHeure(lune, terre, soleil).toString();
    setResultat(heure);
  };

  return (
    <div>
      <input type="number" value={lune} onChange={(e) => setLune(parseInt(e.target.value, 10))} />
      <input type="number" value={terre} onChange={(e) => setTerre(parseInt(e.target.value, 10))} />
      <input type="number" value={soleil} onChange={(e) => setSoleil(parseInt(e.target.value, 10))} />
      <button onClick={handleCalculClick}>Calculer</button>
      <div>Résultat : {resultat}</div>
    </div>
  );
}
