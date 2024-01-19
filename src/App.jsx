import { useState } from "react";

export const CalculateImc = () => {
  const [Talla, setTalla] = useState("");

  const [Peso, setPeso] = useState("");

  const [Imc, setImc] = useState("");

  const handleImc = (event) => {
    event.preventDefault();
    let PotenciaTalla = +Talla * +Talla;
    setImc((+Peso / PotenciaTalla).toFixed(1));
  };

  return (
    <>
      <h1>IMC </h1>
      <form onSubmit={handleImc}>
        <label>
          Talla (m)
          <input
            type="text"
            value={Talla}
            onChange={(event) => {
              setTalla(event.target.value);
            }}
          />
        </label>

        <label>
          Peso (kg)
          <input
            type="text"
            value={Peso}
            onChange={(event) => setPeso(event.target.value)}
          />
        </label>
        <button type="submit">Calcular</button>
      </form>
      <h3>{Imc}</h3>
    </>
  );
};
