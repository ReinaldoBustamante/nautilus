import { FiPhone, FiUser } from "react-icons/fi"
import { FormSectionTitle } from "./FormSectionTitle"
import { Input } from "../ui/Input"
import { PiIdentificationCardLight } from "react-icons/pi"
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineLocationOn } from "react-icons/md"
import { TextArea } from "../ui/TextArea"
import { IoChatboxOutline } from "react-icons/io5"
import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { AppointmentSchemaType } from "../../schemas/appointment.schemas"

interface FormPatientProps {
    register: UseFormRegister<AppointmentSchemaType>,
    errors: FieldErrors<AppointmentSchemaType>
}

export const FormPatient = ({ register, errors }: FormPatientProps) => {
    return <div className="bg-white p-4 pt-8 pb-8 rounded-md flex flex-col gap-6 border border-gray-300">
        <FormSectionTitle title="Datos personales" description="informacion para contactarte" step={3} />
        <div className="flex flex-col gap-3">
            <Input id="name" placeholder="Nombre" icon={FiUser} {...register("name")} error={errors.name?.message} />
            <Input id="rut" placeholder="Rut" icon={PiIdentificationCardLight} {...register("rut")} error={errors.rut?.message} />
            <Input id="email" placeholder="Correo" icon={HiOutlineMail} {...register("email")} error={errors.email?.message} />
            <Input id="phonenumber" placeholder="Telefono" icon={FiPhone} {...register("phoneNumber")} error={errors.phoneNumber?.message} />
            <Input id="address" placeholder="Direccion" icon={MdOutlineLocationOn} {...register("address")} error={errors.address?.message} />
            <TextArea id="comment" placeholder="Motivo (opcional)" icon={IoChatboxOutline} {...register("comment")} />
        </div>
    </div>
}