
import { Hero } from "../../components/Hero"
import { Benefits } from "../../components/Benefits"
import { Instructions } from "../../components/Instructions"
import { Services } from "../../components/Services"
import { Contact } from "../../components/Contact"

export const HomePage = () => {
    return <div className="flex flex-col gap-24 md:gap-32">
        <section><Hero /></section>
        <section><Benefits /></section>
        <section><Instructions /></section>
        <section><Services /></section>
        <section><Contact /></section>
    </div>
}