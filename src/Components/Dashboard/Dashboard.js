import React from "react";

import { AiFillCar } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";

const Dashboard = () => {
  const placas = ["UUX 987", "UUX987", "UUX987"];

  return (
    <div className="bg-black min-h-screen text-white p-5">
      <nav className="flex justify-between items-center bg-gray-900 p-4 rounded-md">
        <div className="text-xl font-bold text-green-400">
          Simón{" "}
          <span className="bg-green-500 text-black px-2 rounded-md">Pay</span>
        </div>
        <div className="flex gap-4">
          <button className="bg-green-500 text-black px-4 py-2 rounded-md">
            Recargar saldo
          </button>
          <div className="w-10 h-10 bg-gray-800 rounded-full">
            <img
              src="/persona.png"
              alt="perfil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-800 p-4 rounded-md">
          <h2 className="text-lg font-bold">Tus vehículos</h2>
          <div className="mt-2">
            <div className="flex justify-between items-center bg-gray-700 p-2 rounded-md my-2">
              <span className="text-green-400">ABC 123 - ACTIVO</span>
              <input type="radio" className="form-radio text-green-400" />
            </div>
            <div className="flex justify-between items-center bg-gray-700 p-2 rounded-md my-2">
              <span className="text-green-400">GHI 789 - INACTIVO</span>
              <input type="radio" className="form-radio text-green-400" />
            </div>
            <div className="flex justify-between items-center bg-gray-700 p-2 rounded-md my-2">
              <span className="text-green-400">DEF 456 - INACTIVO</span>
              <input type="radio" className="form-radio text-green-400" />
            </div>
            <button className="w-full bg-green-500 text-black py-2 rounded-md mt-2">
              Agregar
            </button>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-md flex justify-center">
            <img src="/mazda.png" alt="Vehículo" className="rounded-md" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-800 p-4 rounded-md text-right">
              <h2 className="text-lg font-bold">Tu saldo disponible</h2>
              <p className="text-green-400 text-6xl font-bold mt-2">$50.000</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h2 className="text-lg font-bold">Movimientos del vehículo</h2>
              <div className="mt-2 bg-gray-700 p-2 rounded-md">
                Peaje - Exitosa - 12/11/2024
              </div>
              <div className="mt-2 bg-gray-700 p-2 rounded-md">
                Parqueadero - Exitosa - 11/11/2024
              </div>
              <div className="mt-2 bg-gray-700 p-2 rounded-md">
                Parqueadero - Exitosa - 11/11/2024
              </div>
              <div className="mt-2 bg-gray-700 p-2 rounded-md">
                Parqueadero - Exitosa - 12/12/2024
              </div>
              <div className="mt-2 bg-gray-700 p-2 rounded-md">
                Parqueadero - Exitosa - 12/12/2024
              </div>
              <div className="mt-2 bg-gray-700 p-2 rounded-md">
                Parqueadero - Exitosa - 12/12/2024
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 ">
        <div className="bg-gray-800 p-4 rounded-md mt-6  md:w-2/6">
          <h2 className="text-lg font-bold">Tu red Simón</h2>
          <div className="mt-4">
            {placas.map((placa, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-700 p-3 rounded-md mb-2"
              >
                <div className="flex items-center gap-3">
                  <AiFillCar className="text-gray-400 text-2xl" />
                  <div>
                    <p className="text-gray-400 text-sm">Placa</p>
                    <p className="text-white font-bold">{placa}</p>
                  </div>
                </div>
                <BsCashStack className="text-green-400 text-2xl" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-md mt-6 w-full md:w-2/6">
          <h2 className="text-lg font-bold">Calcula tu viaje</h2>
          <div className="flex gap-4 mt-2">
            <input
              type="text"
              placeholder="Inicio"
              className="w-1/2 p-2 rounded-md bg-gray-700"
            />
            <input
              type="text"
              placeholder="Destino"
              className="w-1/2 p-2 rounded-md bg-gray-700"
            />
          </div>
          <button className="w-full bg-green-500 text-black py-2 rounded-md mt-2">
            Calcular
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
