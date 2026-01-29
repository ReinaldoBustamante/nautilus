
import { PiWarningCircle } from "react-icons/pi";

const VARIANTS = {
    error: {
        bg: "bg-red-100",
        border: "border-red-500",
        text: "text-red-800",
    },
    warning: {
        bg: "bg-orange-100",
        border: "border-orange-500",
        text: "text-orange-800",
    },
};

interface AlertProps {
    message: string,
    variant: 'error' | 'warning'
}

export const Alert = ({ message, variant }: AlertProps) => {
    const styles = VARIANTS[variant]

    return (
        <div className={`flex items-center gap-3 p-3 border-l-4 md:border-l-8 rounded-xl ${styles.bg} ${styles.border} ${styles.text} md:p-6`}>
            <PiWarningCircle className="md:size-10" />
            <p className="font-semibold md:text-xl">{message}</p>
        </div>
    );
}
