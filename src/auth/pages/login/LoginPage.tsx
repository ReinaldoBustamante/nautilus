export const LoginPage = () => {
    return <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium">Bienvenido de nuevo</h1>
            <p className="text-[18px] text-gray-500">Accede a tu portal para gestionar citas y pacientes</p>
        </div>
        <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="">Correo electronico</label>
                <input type="text" className="p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Contraseña</label>
                <input type="text" className="p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="w-full bg-[#10ACDB] p-3 rounded-md text-white">Iniciar Sesión</button>
        </form>
    </div>
}