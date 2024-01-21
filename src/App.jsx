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
      <div className="d-flex align-items-center min-h-100vh">
        <div className="container text-center">
          <h1>IMC </h1>
          <form onSubmit={handleImc}>
            <div>
              <label>
                Talla (m)
                <input
                  type="text"
                  value={Talla}
                  className="form-control"
                  onChange={(event) => {
                    setTalla(event.target.value);
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Peso (kg)
                <input
                  type="text"
                  value={Peso}
                  className="form-control"
                  onChange={(event) => setPeso(event.target.value)}
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Calcular
            </button>
          </form>
          <h3>{Imc}</h3>
        </div>
      </div>
    </>
  );
};
