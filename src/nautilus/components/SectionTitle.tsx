interface SectionTitleProps {
    title: string,
    description: string
}

export const SectionTitle = ({ title, description }: SectionTitleProps) => {
    return <div className="flex flex-col gap-2 md:text-center md:w-240 self-center md:gap-8">
        <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
        <p className="text-[18px] md:text-2xl text-gray-500">{description}</p>
    </div>
}