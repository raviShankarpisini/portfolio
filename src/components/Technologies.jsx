import React from "react";
import {
	FaHtml5,
	FaReact,
	FaCss3,
	FaBootstrap,
	FaNode,
	FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiTypescript, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiSqllite } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});
const Technologies = () => {
	return (
		<div className="pb-24">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				className="my-20 text-center text-4xl"
			>
				Technologies
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				className="flex flex-wrap items-center justify-center gap-4"
			>
				<motion.div
					initial="initial"
					animate="animate"
					variants={iconVariants(2.5)}
				>
					<FaReact className="text-7xl text-cyan-400" />
				</motion.div>
				<motion.div
					className="p-4"
					initial="initial"
					animate="animate"
					variants={iconVariants(3)}
				>
					<SiRedux className="text-7xl text-violet-700" />
				</motion.div>
				<motion.div
					className="p-4"
					initial="initial"
					animate="animate"
					variants={iconVariants(5)}
				>
					<IoLogoJavascript className="text-7xl text-yellow-400" />
				</motion.div>
				<motion.div
					className="p-4"
					initial="initial"
					animate="animate"
					variants={iconVariants(2)}
				>
					<FaHtml5 className="text-7xl text-orange-600" />
				</motion.div>
				<motion.div
					className="p-4"
					initial="initial"
					animate="animate"
					variants={iconVariants(6)}
				>
					<FaBootstrap className="text-7xl text-violet-700" />
				</motion.div>
				<motion.div
					className="p-4"
					initial="initial"
					animate="animate"
					variants={iconVariants(4)}
				>
					<FaGithub className="text-7xl" />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Technologies;
