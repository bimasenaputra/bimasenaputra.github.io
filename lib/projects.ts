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
		duration: "2 months",
		photo: "/snippetbox.png",
		alt: "Photo of Snippetbox Website",
		link: "https://named-foundry-358214.as.r.appspot.com/",
		description: "Built a text sharing web app using Go and MySQL with search engine and paging functionality where users can search and \
		 			access any shared text.",
		technologies: ["Go", "MySQL", "GCP"],
	},
	{
		id: 4,
		type: "Website",
		name: "Blog",
		company: "Side Project",
		duration: "2 months",
		photo: "/blog.png",
		alt: "Photo of Blog Website",
		link: "https://fontstream.herokuapp.com/",
		description: "Developed a blog web app, allowing users to post a blog with text, image and styled text, using Laravel backend and Vue frontend.",
		technologies: ["Laravel", "Vue", "Docker"],
	},
	{
		id: 5,
		type: "Program",
		name: "Biomedical Search Engine",
		company: "Universitas Indonesia",
		duration: "3 months",
		photo: "/search.png",
		alt: "Photo of Biomedical Search Engine",
		link: "https://github.com/bimasenaputra/search-engine",
		description: "Built a search engine from scratch using Python programming language. \
		NF Corpus is used for this search engine, but the search engine can be used with any collections of documents. \
		The seach engine is built on the inverted index architecture with fetching and ranking on top of the inverted index. \
		This search engine will return the most relevant documents based on user query.",
		technologies: ["HF"],
	},
];

export function getProjects() {
	return projectData;
}