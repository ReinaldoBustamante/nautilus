import type { IconType } from "react-icons"


interface TextAreaProps {
    id: string
    placeholder: string
    icon: IconType
}

export const TextArea = ({ id, placeholder, icon: Icon, ...props }: TextAreaProps) => {
    return <div className="relative">
        <Icon className="absolute left-3 top-3.5 text-gray-400" size={20} />
        <textarea {...props} placeholder={placeholder} className="w-full p-3 pl-10 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500" />
    </div>
}