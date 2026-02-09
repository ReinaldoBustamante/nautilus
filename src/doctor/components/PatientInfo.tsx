import type { IconType } from "react-icons"

interface PatientInfoProps {
    icon: IconType,
    value: string
}

export const PatientInfo = ({ icon: Icon, value }: PatientInfoProps) => {
    return <div className="flex gap-2 items-center">
        <i><Icon className="md:size-6" /></i>
        <p className="text-lg break-all">{value}</p>
    </div>
}