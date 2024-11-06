"use client";
import {Card} from "@/components/ui/card";
import {motion} from "framer-motion";
import {fadeIn} from "@/app/components/Animations/variant";
import {useState} from "react";

export default function ExperienceCard(props: {date: string, company: string, title: string, description: string, iconUrl: string}) {
    const [hasAnimated, setHasAnimated] = useState(false);
    return (
        <motion.div
            variants={fadeIn('up', 0)}
            initial="hidden"
            animate={hasAnimated ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            onAnimationComplete={() => setHasAnimated(true)}>
            <Card
                className="flex p-4 items-center gap-x-3 ">
                <div className="flex flex-col">
                    <p className="text-muted-foreground text-sm">{props.date}</p>
                    <h3 className="text-lg font-semibold">{props.title} à <span className="text-primary font-semibold">{props.company}</span></h3>
                    <p className="text-muted-foreground text-sm">{props.description}</p>
                </div>
            </Card>
        </motion.div>


    )
}