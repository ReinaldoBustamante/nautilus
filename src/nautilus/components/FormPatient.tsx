export const FormPatient = () => {
    return <div className="bg-white p-4 rounded-md flex flex-col gap-4 border border-gray-300">
        <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
                <span className="p-4 bg-[#16B3DE] rounded-[50%] w-4 h-4 flex items-center justify-center text-white font-semibold">3</span>
                <h2 className="text-2xl font-semibold">Datos personales</h2>
            </div>
            <p className="text-gray-500 text-[18px] ">Información para contactarte</p>
        </div>
        <div className="flex flex-col gap-3">
            <input type="text" placeholder="Ej: Reinaldo Bustamante" className="p-3 border-2 border-gray-200 rounded-md" />
            <input type="text" placeholder="Ej: 19555874-4" className="p-3 border-2 border-gray-200 rounded-md" />
            <input type="text" placeholder="Ej: reinaldo.bustmante026@gmail.com" className="p-3 border-2 border-gray-200 rounded-md" />
            <input type="text" placeholder="Ej: soto aguilar 230" className="p-3 border-2 border-gray-200 rounded-md" />
            <input type="text" placeholder="Ej: me duele el oido" className="p-3 border-2 border-gray-200 rounded-md" />
        </div>
    </div>
}