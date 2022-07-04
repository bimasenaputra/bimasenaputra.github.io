import type { NextApiRequest, NextApiResponse } from 'next'
import { Project } from '../../lib/projects'
import { getProjects } from '../../lib/projects'

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
	const projectData = getProjects()
	res.status(200).json(projectData);
}