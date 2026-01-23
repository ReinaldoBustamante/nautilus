
export const BookAppointmentPage = () => {

    const services = [
        {
            id: 1,
            name: "Limpieza de oidos",
            description: "Destapado de cerumen en oidos",
            price: 30000
        },
        {
            id: 2,
            name: "Calibracion de audifonos",
            description: "Se realizara una calibracion en los audifonos para que escuche mejor",
            price: 20000
        }
    ]
    return <div className="flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl">Selecciona un servicio</h1>
                <p className="text-gray-500 text-[18px]">Elige un tipo de atencion medica que necesites</p>
            </div>
            <div className="flex flex-col gap-4">
                {
                    services.map(service => {
                        return <div key={service.id} className="w-full border border-gray-300 p-4 flex flex-col rounded-md">
                            <h2 className="text-xl">{service.name}</h2>
                            <p className="text-gray-500" >{service.description}</p>
                            <span>{service.price}</span>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}