import Section from "@/app/components/Section";
import {Card} from "@/components/ui/card";
import ExperienceCard from "@/app/components/ExperienceCard";
import experience from "../datas/experiences.json";
import formation from "../datas/formations.json";
import FormationCard from "@/app/components/FormationCard";

export default function Resume() {
    return (
        <Section className="mt-32">
            <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold font-mono tracking-tight first:mt-0 mb-10 text-center">
                Informations
            </h2>
            <div className="grid grid-cols-3 max-md:flex max-md:flex-col gap-4">
                <Card className="p-4 w-full h-full flex flex-col col-span-2">
                    <h3 className="font-mono font-bold text-xl">Experiences</h3>
                    <div className="flex flex-col gap-y-3 mt-2">
                        {experience.map((exp, index) => (
                            <ExperienceCard key={index} {...exp} />
                        ))}
                    </div>
                </Card>
                <Card className="p-3 w-full h-full flex flex-col col-span-1">
                    <h3 className="font-mono font-bold text-xl">Formations</h3>
                    <div className="flex flex-col gap-y-3 mt-2">
                        {formation.map((exp, index) => (
                            <FormationCard key={index} {...exp} />
                        ))}
                    </div>
                </Card>
            </div>

        </Section>

    )
}