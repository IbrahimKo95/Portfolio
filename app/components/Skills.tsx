import Section from "@/app/components/Section";
import ReactIcon from "@/app/components/Icons/ReactIcon";
import NextIcon from "@/app/components/Icons/NextIcon";
import TailwindIcon from "@/app/components/Icons/TailwindIcon";
import JavascriptIcon from "@/app/components/Icons/JavascriptIcon";
import PhpIcon from "@/app/components/Icons/PhpIcon";
import LaravelIcon from "@/app/components/Icons/LaravelIcon";


export default function Skills() {
    return (
        <Section className="mt-32">
            <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold font-mono tracking-tight first:mt-0 mb-10 text-center">
                Compétences
            </h2>
            <div className="grid grid-cols-3 max-md:grid-cols-2 gap-x-2 gap-y-2">
                <div
                    className="gap-y-1 flex items-center justify-center h-48 flex-col bg-transparent shadow-none hover:border-2 hover:ring-4 ring-secondary border-primary rounded-lg transition duration-700 ease-in-out">
                    <ReactIcon size={32}/>
                    <p className="font-bold">React</p>
                </div>
                <div
                    className="gap-y-1 flex items-center justify-center h-48 flex-col bg-transparent shadow-none hover:border-2 hover:ring-4 ring-secondary border-primary rounded-lg transition duration-700 ease-in-out">
                    <NextIcon size={32}/>
                    <p className="font-bold">Next.js</p>
                </div>
                <div
                    className="gap-y-1 flex items-center justify-center h-48 flex-col bg-transparent shadow-none hover:border-2 hover:ring-4 ring-secondary border-primary rounded-lg transition duration-700 ease-in-out">
                    <TailwindIcon size={32}/>
                    <p className="font-bold">TailwindCSS</p>
                </div>
                <div
                    className="gap-y-1 flex items-center justify-center h-48 flex-col bg-transparent shadow-none hover:border-2 hover:ring-4 ring-secondary border-primary rounded-lg transition duration-700 ease-in-out">
                    <JavascriptIcon size={32}/>
                    <p className="font-bold">JavaScript</p>
                </div>
                <div
                    className="gap-y-1 flex items-center justify-center h-48 flex-col bg-transparent shadow-none hover:border-2 hover:ring-4 ring-secondary border-primary rounded-lg transition duration-700 ease-in-out">
                    <PhpIcon size={32}/>
                    <p className="font-bold">PHP</p>
                </div>
                <div
                    className="gap-y-1 flex items-center justify-center h-48 flex-col bg-transparent shadow-none hover:border-2 hover:ring-4 ring-secondary border-primary rounded-lg transition duration-700 ease-in-out">
                    <LaravelIcon size={32} />
                    <p className="font-bold">Laravel</p>
                </div>


            </div>
        </Section>
    )
}