"use client";

import React from "react";
import "./Login.css";

const Login = ({openLogin, setOpenLogin}: any) => {
  return (
    <>
      <div className="background-modal" onClick={() => setOpenLogin(!openLogin)}></div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Iniciar Sesión</h2>
            <span className="close" onClick={() => setOpenLogin(!openLogin)}>&times;</span>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Ususario</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" className="form-control" required />
              </div>
              <div className="button-container">
                <button type="submit" className="button_action">
                  Iniciar Sesión
                </button>
              </div>
              <div className="extras">
                <p className="other_options">¿Olvidaste tu contraseña?</p>
                <span>-- o --</span>
                <p className="other_options">
                  O <span>crea una cuenta gratis.</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
