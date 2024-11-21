"use client";
import Section from "@/app/components/Section";
import {motion} from "framer-motion";
import {fadeIn} from "@/app/components/Animations/variant";
import {useState} from "react";
import {Button} from "@/components/ui/button";

export default function Hero() {
    const [hasAnimated, setHasAnimated] = useState(false);
    return (
        <motion.div
            variants={fadeIn('up', 0)}
            initial="hidden"
            animate={hasAnimated ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            onAnimationComplete={() => setHasAnimated(true)}
        >
            <Section className="flex max-md:flex-col items-center min-h-[60vh]">
                <div className="flex-[2] max-w-lg max-md:flex max-md:flex-col max-md:justify-center">
                    <h2 className="text-5xl text-primary font-mono">Ibrahim Konaté</h2>
                    <h3 className="text-3xl font-mono mb-5">Développeur Full Stack</h3>
                    <p className={"font-sans mb-5"}>
                        Passionné par le développement web, j’adore créer des solutions modernes et efficaces, du front
                        interactif au back solide. <br/>Chaque projet, c’est l’occasion de découvrir, tester des idées,
                        et peaufiner mes compétences pour offrir des expériences qui font la différence pour les
                        utilisateurs.
                    </p>
                    <Button asChild><a href="/files/Ibrahim Konate CV 2024.pdf">Télécharger mon CV</a></Button>
                </div>
                <div className="max-md:hidden flex-1 gap-y-40 max-md:ml-0 ml-16">
                </div>
            </Section>
        </motion.div>

    )
}