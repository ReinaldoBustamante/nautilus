import type { IconType } from "react-icons"


interface TextAreaProps {
    id: string
    placeholder: string
    icon: IconType
}

export const TextArea = ({ id, placeholder, icon: Icon, ...props }: TextAreaProps) => {
    return <div className="relative">
        <div className="flex flex-col gap-1">
            <div className="relative">
                <Icon className="absolute left-3 top-3.5 md:top-4.5  text-gray-400 size-6 md:size-8" />
                <textarea {...props} id={id} placeholder={placeholder} className={`md:text-xl w-full p-3 pl-10 md:p-5 md:pl-14 border-3 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 `} />
            </div>
        </div>

    </div>
}