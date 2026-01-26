
interface FormSectionTitleProps {
    title: string,
    description: string,
    step: number
}

export const FormSectionTitle = ({ title, description, step }: FormSectionTitleProps) => {
    return <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
            <span className="p-4 bg-[#16B3DE] rounded-[50%] w-4 h-4 flex items-center justify-center text-white font-semibold">{step}</span>
            <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <p className="text-gray-500 text-[18px] ">{description}</p>
    </div>
}