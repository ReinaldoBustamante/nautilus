import type { IconType } from "react-icons"


interface InputProps {
    id: string
    placeholder: string
    icon: IconType,
    error: string | undefined
}

export const Input = ({ id, placeholder, icon: Icon, error, ...props }: InputProps) => {
    return <div className="flex flex-col gap-1">
        <div className="relative">
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input {...props} id={id} type="text" placeholder={placeholder} className={`w-full p-3 pl-10 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 ${error ? "border-red-400" : ''}`} />
        </div>
        <p className="text-red-600">{error}</p>
    </div>
}