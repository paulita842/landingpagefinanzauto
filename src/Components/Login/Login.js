import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-[80%] max-w-4xl">
        <div className="w-1/2 hidden md:block">
          <img
            src="/thpubInt_700X400_11575.png"
            alt="peajecolombia"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-black text-center mb-4">
            Iniciar sesión
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Bienvenido, digita tus credenciales para acceder a la plataforma.
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-gray-700 font-semibold">Usuario</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring focus:ring-[#216e6a] focus:outline-none"
                placeholder="Ingresa tu usuario"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Contraseña</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring focus:ring-[#216e6a] focus:outline-none"
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#216e6a] text-white py-2 rounded-lg hover:bg-[#1a5a57] transition duration-300"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
