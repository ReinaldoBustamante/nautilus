export const Spinner = () => {
    return <div className="flex flex-col items-center gap-2 ">
        <div className="w-8 h-8 border-4 border-[#16B3DE] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-400">Buscando disponibilidad...</p>
    </div>
}