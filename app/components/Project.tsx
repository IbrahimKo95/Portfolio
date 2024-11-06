import Section from "@/app/components/Section";
import projects from "../datas/projects.json";
import ProjectCard from "@/app/components/ProjectCard";

export default function Project() {
    return (
        <Section className="mt-32">
            <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold font-mono tracking-tight first:mt-0 mb-10 text-center">
                Projets
            </h2>
            <div className="grid grid-cols-4 max-md:grid-cols-1 gap-x-5 gap-y-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </Section>
    )
}
