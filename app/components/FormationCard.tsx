"use client";
import {Card} from "@/components/ui/card";
import {motion} from "framer-motion";
import {fadeIn} from "@/app/components/Animations/variant";
import {useState} from "react";

export default function FormationCard(props: {date: string, school: string, title: string, iconUrl: string}) {
    const [hasAnimated, setHasAnimated] = useState(false);
    return (
        <motion.div
            variants={fadeIn('up', 0)}
            initial="hidden"
            animate={hasAnimated ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            onAnimationComplete={() => setHasAnimated(true)}

            className="flex p-4 gap-x-3">
            <div className="">
                <img src={props.iconUrl} alt={props.title} className="w-12 h-12 rounded-md " />
            </div>
            <div className="flex flex-col">
                <p className="text-muted-foreground text-sm">{props.date}</p>
                <h3 className="text text-sm font-semibold">{props.title}</h3>
                <p className="text-muted-foreground text-sm">{props.school}</p>
            </div>

        </motion.div>

    )
}