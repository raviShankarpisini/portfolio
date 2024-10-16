import { PROJECTS } from "../constants";

import { motion } from "framer-motion";

const Projects = () => {
	return (
		<div className="pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl"
			>
				Projects
			</motion.h2>
			<div className="flex flex-row flex-wrap">
				{PROJECTS.map((project, index) => (
					<a key={index} href={project.url} target="_blank">
						<motion.img
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="mb-6 mr-6 rounded-3xl lg:w-80"
							src={project.image}
							alt={project.title}
							width={300}
							// height={200}
						/>
					</a>
				))}
			</div>
		</div>
	);
};

export default Projects;
