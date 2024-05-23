import React, { useState } from 'react';

function FishingCalculator() {
  const [length, setLength] = useState(0);
  const [girth, setGirth] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = (event) => {
    event.preventDefault();
    const calculatedWeight = (length * girth * girth) / 800;
    setResult(`Szacowana waga ryby to: ${calculatedWeight.toFixed(2)} kg`);
  };

  return (
    <div className="fishing-calculator">
      <h1>Fishing Calculator</h1>
      

      
      <form>
        <label>
          Długość Ryby (cm):
          <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
        </label>
        <br />
        <label>
          Obwód Ryby (cm):
          <input type="number" value={girth} onChange={(e) => setGirth(e.target.value)} />
        </label>
        <br />
        <button type="submit" onClick={handleCalculate}>Calculate</button>
      </form>
      {result && <p>{result}</p>}

      <div className="description">
        <p>
          Aplikacja Fishing Calculator to narzędzie stworzone z myślą o wędkarzach, które pozwala na szybkie i łatwe oszacowanie wagi złowionej ryby na podstawie jej długości oraz obwodu. Dzięki intuicyjnemu interfejsowi użytkownika, wprowadzenie danych jest proste, a wynik obliczeń prezentowany jest w przejrzysty sposób.
        </p>
        <h2>Funkcje:</h2>
        <ul>
          <li><strong>Długość Ryby (cm):</strong> Pole do wprowadzenia długości ryby w centymetrach.</li>
          <li><strong>Obwód Ryby (cm):</strong> Pole do wprowadzenia obwodu ryby w centymetrach.</li>
          <li><strong>Przycisk Oblicz:</strong> Po kliknięciu tego przycisku, aplikacja oblicza szacowaną wagę ryby za pomocą wzoru: (długość * obwód^2) / 800.</li>
          <li><strong>Wynik:</strong> Wyświetla szacowaną wagę ryby w kilogramach z dokładnością do dwóch miejsc po przecinku.</li>
        </ul>
        <h2>Jak korzystać z aplikacji:</h2>
        <ol>
          <li>Wprowadź długość ryby w centymetrach w odpowiednie pole.</li>
          <li>Wprowadź obwód ryby w centymetrach w odpowiednie pole.</li>
          <li>Kliknij przycisk "Calculate", aby uzyskać szacowaną wagę ryby.</li>
          <li>Wynik zostanie wyświetlony poniżej formularza.</li>
        </ol>
        <p>
          Fishing Calculator to idealne rozwiązanie dla każdego wędkarza, który chce szybko i dokładnie określić wagę swojego połowu bez konieczności korzystania z dodatkowych narzędzi.
        </p>
      </div>

    </div>
  );
}

export default FishingCalculator;
