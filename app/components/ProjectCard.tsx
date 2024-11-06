"use client";
import { Card } from "@/components/ui/card";
import GithubIcon from "@/app/components/Icons/GithubIcon";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/components/Animations/variant";

export default function ProjectCard(props: { title: string, stack: string, description: string, imgUrl: string, gitUrl: string }) {
    const [hasAnimated, setHasAnimated] = useState(false);

    return (
        <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            animate={hasAnimated ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            onAnimationComplete={() => setHasAnimated(true)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="col-span-2"
        >
            <Card className="h-full flex flex-col p-4">
                <img
                    alt={props.title}
                    src={props.imgUrl}
                    className="w-full h-52 object-cover rounded-md mb-4"
                />
                <div className="flex flex-col">
                    <div className="flex w-full items-center">
                        <h3 className="font-bold text-lg">{props.title}</h3>
                        <span className="flex-grow h-[1px] mx-2 bg-gray-600" />
                        <a href={props.gitUrl}>
                            <GithubIcon size={20} />
                        </a>
                    </div>
                    <p className="text-primary mb-1 text-sm font-semibold">{props.stack}</p>
                    <p className="text-muted-foreground text-sm">{props.description}</p>
                </div>
            </Card>
        </motion.div>
    );
}
