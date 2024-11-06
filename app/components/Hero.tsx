"use client";
import Section from "@/app/components/Section";
import {motion} from "framer-motion";
import {draw, fadeIn} from "@/app/components/Animations/variant";
import {useState} from "react";


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
                <div className="flex-[2] max-w-lg">
                    <h2 className="text-5xl text-primary font-mono">Ibrahim Konaté</h2>
                    <h3 className="text-3xl font-mono mb-5">Développeur Full Stack</h3>
                    <p className={"font-sans"}>
                        Passionné par le développement web, j’adore créer des solutions modernes et efficaces, du front
                        interactif au back solide. <br/>Chaque projet, c’est l’occasion de découvrir, tester des idées,
                        et peaufiner mes compétences pour offrir des expériences qui font la différence pour les
                        utilisateurs.
                    </p>
                </div>
                <div className="hidden flex-1 gap-y-40 max-md:ml-0 ml-52">
                    <motion.div
                        className="box bg-primary w-40 h-40 max-md:w-20 max-md:h-20 flex items-center justify-center"
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}

                    >
                        <motion.div
                            className="box bg-secondary w-20 h-20 max-md:w-10 max-md:h-10"
                            animate={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 180, 180, 0],
                                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        />
                    </motion.div>
                </div>
            </Section>
        </motion.div>

    )
}