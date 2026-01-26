
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
        <div className={`flex items-center gap-3 p-3 border-l-4 rounded-md ${styles.bg} ${styles.border} ${styles.text}`}>
            <PiWarningCircle size={24} />
            <p className="font-semibold">{message}</p>
        </div>
    );
}
