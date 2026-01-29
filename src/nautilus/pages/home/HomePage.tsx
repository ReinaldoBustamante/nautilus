
import { Hero } from "../../components/home-sections/Hero"
import { Benefits } from "../../components/home-sections/Benefits"

import { Services } from "../../components/home-sections/Services"
import { Contact } from "../../components/home-sections/Contact"
import { Instructions } from "../../components/home-sections/Instructions"

export const HomePage = () => {
    return <div className="flex flex-col">
        <section><Hero /></section>
        <div className="px-4 mt-12 flex flex-col gap-16 md:gap-32 md:pl-20 md:pr-20 md:mt-24">
            <section><Benefits /></section>
            <section><Instructions /></section>
            <section><Services /></section>
            <section><Contact /></section>
        </div>
    </div>
}