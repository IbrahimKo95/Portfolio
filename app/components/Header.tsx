import Section from "@/app/components/Section";
import {Button} from "@/components/ui/button";
import GithubIcon from "@/app/components/Icons/GithubIcon";
import LinkedinIcon from "@/app/components/Icons/LinkedinIcon";



export default function header() {
    return (
        <header className="">
            <Section className="flex items-baseline py-10 justify-between">
                <h1 className="text-xl text-primary font-sans font-bold">@IbrahimKo</h1>
                <nav>
                    <ul className="flex flex-row gap-x-2">
                        <li>
                            <a href="https://github.com/IbrahimKo95"><Button variant='outline' className="rounded-xl"><GithubIcon size={20}/></Button></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ibrahim-konat%C3%A9-22620b262/"><Button variant='outline' className="rounded-xl"><LinkedinIcon size={20}/></Button></a>
                        </li>
                    </ul>
                </nav>
            </Section>
        </header>
    )
}