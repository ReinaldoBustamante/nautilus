interface SectionTitleProps {
    title: string,
    description: string
}

export const SectionTitle = ({ title, description }: SectionTitleProps) => {
    return <div className="flex flex-col gap-2 md:items-center md:gap-8">
        <h2 className="text-2xl md:text-6xl font-bold text-[#172A45]">{title}</h2>
        <p className="text-xl md:text-center text-gray-600 md:text-3xl max-w-6xl mx-auto leading-relaxed">{description}</p>
    </div>
}