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
                            <Button variant='outline' className="rounded-xl"><GithubIcon size={20}/></Button>
                        </li>
                        <li>
                            <Button variant='outline' className="rounded-xl"><LinkedinIcon size={20}/></Button>
                        </li>
                    </ul>
                </nav>
            </Section>
        </header>
    )
}