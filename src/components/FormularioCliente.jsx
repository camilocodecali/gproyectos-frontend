import React from 'react'

const FormularioCliente = () => {
  return (
    <form 
        className="bg-white shadow py-10 px-5 w-full h-full rounded-lg"        
    >
        <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="nombre"
                >Razón social</label>
                <input
                    id="nombre"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Razón social de la empresa"
                />
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="nit"
                >Nit</label>
                <input
                    id="nit"
                    type="number"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Nit de la empresa"
                />
            </div>
        </div>
        <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="email"
                >Correo</label>
                <input
                    id="email"
                    type="email"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Ingrese el Email"
                />
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="telefono"
                >Teléfono</label>
                <input
                    id="telefono"
                    type="number"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Teléfono de la empresa"
                />
            </div>
        </div>
        <div className="mb-5 grid grid-cols-1 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="personaContacto"
                >Persona de contacto</label>
                <input
                    id="personaContacto"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Ingrese el nombre de la persona de contacto"
                />
            </div>
        </div>

        <div className="mb-5">
            <label
                className="text-gray-700  font-bold text-sm"
                htmlFor="notaCliente"
            >Nota de cliente</label>
            <textarea
                id="notaCliente"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Escribe una nota para el cliente"

            />
        </div>
        <div className="flex justify-end gap-4">
            <button className="border-gray-300 border-2 rounded-lg px-10 py-2">Cancelar</button>
            <input 
            type="submit"

            className="bg-principal hover:bg-principalHover px-10 py-2 capitalize font-bold text-white rounded-lg cursor-pointer transition-colors"
            />
        </div>


    </form>
  )
}

export default FormularioCliente
