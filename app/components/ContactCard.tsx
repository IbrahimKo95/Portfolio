import { Card } from "@/components/ui/card";
import GithubIcon from "@/app/components/Icons/GithubIcon";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ContactCard(props: { link: string; icon: ReactNode; text: string }) {
    return (
        <motion.a
            href={props.link}
            className="group"
            initial="hidden"
            whileHover="show"
            variants={{
                hidden: { opacity: 1 },
                hover: { opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <Card className="p-4 flex flex-row gap-x-4 items-center">
                    {props.icon}
                    <motion.p
                        className="font-bold text-lg"
                        variants={{
                            hidden: { opacity: 0, display: "none", x: -10 },
                            show: { opacity: 1, display: "inline-block", x: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {props.text}
                    </motion.p>
                </Card>
            </motion.div>
        </motion.a>
    );
}
