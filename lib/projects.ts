export type Project = {
	id: number;
	type: string;
	name: string;
	company: string;
	duration: string;
	photo: string;
	alt: string;
	link: string;
	description: string;
	technologies: string[];
};

const projectData: Project[] = [
	{
		id: 1,
		type: "Website & Application",
		name: "Learning Environment",
		company: "Universitas Indonesia",
		duration: "3 months",
		photo: "/lean.png",
		alt: "Photo of Learning Environment Website",
		link: "https://pbp-tk-e04.herokuapp.com/",
		description: "A final project for Platform-based Programming course to build a learning management system website and android app \
					using Django Framework and Flutter that helps teachers and students to complete their school tasks. \
					In this project, i built the grade viewer dashboard where users can easily search any of their graded submissions.",
		technologies: ["Django", "Flutter"],
	},
	{
		id: 2,
		type: "Website",
		name: "Scheduler with Logistics Utility",
		company: "Universitas Indonesia",
		duration: "3 months",
		photo: "/slu.png",
		alt: "Photo of Scheduler with Logistics Utility Website",
		link: "https://b13-adpro-project.herokuapp.com/",
		description: "Originally a final project for Advanced Programming course to build a smart scheduler using Spring Boot \
					that allows users to organize their logistics activity. I led my team of four using scrum framework to build a site that \
					can predict and suggest the time and interval of any schedule where users must consider the travel time between places. \
					The project utilized Google Maps Distance Matrix API to help build the recommendation system.",
		technologies: ["Spring Boot", "PostgreSQL", "Google Maps API", "Firebase"],
	},
	{
		id: 3,
		type: "Website",
		name: "Snippetbox",
		company: "Side Project",
		duration: "1 month",
		photo: "/snippetbox.png",
		alt: "Photo of Snippetbox Website",
		link: "https://github.com/bimasenaputra/snippetbox",
		description: "A website where user can easily share their text note and set its expiracy. Using Go and MySQL, \
					i successfully built a paging mechanism and search engine to search and access \
					any 10,000+ shared text notes on the website in under 1 second.",
		technologies: ["Go", "MySQL"],
	},
];

export function getProjects() {
	return projectData;
}