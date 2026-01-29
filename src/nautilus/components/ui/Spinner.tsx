export const Spinner = () => {
    return <div className="flex flex-col items-center gap-2 md:gap-4 ">
        <div className="w-8 h-8 md:w-16 md:h-16 border-4 md:border-8 border-[#16B3DE] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm md:text-xl text-gray-400">Buscando disponibilidad...</p>
    </div>
}