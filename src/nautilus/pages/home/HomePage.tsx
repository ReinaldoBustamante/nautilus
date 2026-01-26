
import { Hero } from "../../components/home-sections/Hero"
import { Benefits } from "../../components/home-sections/Benefits"

import { Services } from "../../components/home-sections/Services"
import { Contact } from "../../components/home-sections/Contact"
import { Instructions } from "../../components/home-sections/Instructions"

export const HomePage = () => {
    return <div className="flex flex-col gap-24 md:gap-32">
        <section><Hero /></section>
        <section><Benefits /></section>
        <section><Instructions /></section>
        <section><Services /></section>
        <section><Contact /></section>
    </div>
}