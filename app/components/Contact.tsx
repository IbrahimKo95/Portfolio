"use client"
import Section from "@/app/components/Section";
import GithubIcon from "@/app/components/Icons/GithubIcon";
import LinkedinIcon from "@/app/components/Icons/LinkedinIcon";
import {LucideMail, PhoneCallIcon} from "lucide-react";
import ContactCard from "@/app/components/ContactCard";

export default function Contact() {
    return (
        <Section className="mt-32">
            <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold font-mono tracking-tight first:mt-0 mb-10 text-center">
                Me contacter
            </h2>
            <div className="flex flex-row justify-center gap-x-5">
                <ContactCard link={"https://github.com/IbrahimKo95"} icon={<GithubIcon size={45}/>} text={"IbrahimKo95"}/>
                <ContactCard link={"https://www.linkedin.com/in/ibrahim-konat%C3%A9-22620b262/"} icon={<LinkedinIcon size={45}/>} text={"In/IbrahimKo95"}/>
                <ContactCard link={"mailto:ibrahkonate95@gmail.com"} icon={<LucideMail size={45}/>} text={"Ibrahkonate95@gmail.com"}/>
                <ContactCard link={"tel:0782190748"} icon={<PhoneCallIcon size={45}/>} text={"07 82 19 07 48"}/>
            </div>

        </Section>
    )
}