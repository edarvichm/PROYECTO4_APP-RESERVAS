// import React from 'react'

import { NavLink } from "react-router-dom";
import FormContact from "../components/FormContact";
// import rPage from "../pages/reservas";

const HomePage = () => {
  return (
    <>
      <div className="card mt-3">
        {/* <img src="..." className="card-img-top" alt="..." /> */}

        <div className="card-body">
          <h5 className="card-title">Menú a la Carta</h5>
          <p className="card-text">
          Elige una o mas opciones de nuestra carta.
          </p>
          <NavLink className="btn btn-primary" to="/Reservas">
                    Reservar
                  </NavLink>
        </div>
      </div>
      <div className="card mt-3">
        {/* <img src="..." className="card-img-top" alt="..." /> */}

        <div className="card-body">
          <h5 className="card-title">Menú de 3 Tiempos</h5>
          <p className="card-text">
          Elige una entrada, un plato de fondo y postres clásicos de Francia.
          </p>
          
          <NavLink className="btn btn-primary" to="/Reservas">
                    Reservar
                  </NavLink>
        </div>
      </div>
      <div className="card mt-3">
        {/* <img src="..." className="card-img-top" alt="..." /> */}

        <div className="card-body">
          <h5 className="card-title">Menú de 5 Tiempos</h5>
          <p className="card-text">
          Elige un picoteo, entrada, un plato de fondo y postres clásicos de Francia.
          </p>
          
          <NavLink className="btn btn-primary" to="/Reservas">
                    Reservar
                  </NavLink>
        </div>
      </div>
      <FormContact />
    </>
  );
};

export default HomePage;
