import React from 'react'
import WrappingLetters from 'wrapping-letters-react'
import { useParams } from 'react-router-dom'


import { ProjectsElementList } from '../../contexts/projectsContexts'

export function ProjectPage() {
    //get information from the path of the url and put it in the variable
    const { id } = useParams()
    //get the information from the context
    const project = ProjectsElementList().find(project => project.Id === id)

    return (
        <div className="container project">
            <header className="project__header">
                <h1 className="project__title">{project.Title}</h1>
                <p className="project__description">{project.Description}</p>
            </header>
        </div>
    )
}
