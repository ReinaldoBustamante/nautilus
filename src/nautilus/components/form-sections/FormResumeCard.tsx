import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface FormResumeCardProps {
    icon: IconType,
    title: string,
    children: ReactNode
}

export const FormResumeCard = ({ icon: Icon, title, children }: FormResumeCardProps) => {
  return (
    <div className="flex gap-3 bg-[#F8FAFA] p-4 items-start rounded-md">
      <Icon size={24} className="mt-0.5 text-gray-400" />
      <div className="flex flex-col gap-1">
        <h4 className="text-[14px] text-[#627884] font-medium">{title}</h4>
        <div className="flex flex-col gap-1">
          {children}
        </div>
      </div>
    </div>
  );
};

