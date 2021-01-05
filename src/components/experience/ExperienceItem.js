import React from 'react'

const Responsibilities = ({responsibilities}) => {
    if (!responsibilities) {
        return (null)
    }

    return (
        <ul className="list-disc">
            {responsibilities.map((responsibility, index) => (
                <li className="text-white" key={index}>{responsibility}</li>
            ))}
        </ul>
    )
}

const ExperienceItem = ({type, details}) => {
    const {position, company, period, responsibilities, course, school, description} = details

    return (
        <div className="experience-item">
            <span className="experience-item-arrow"></span>
            <h4>{type == 'education' ? course : position}</h4>
            <span className="experience-item-details">{type == 'education' ? school : company} / {period}</span>
            <Responsibilities responsibilities={responsibilities} />
            { description && <p>{description}</p>}
        </div>
    )
}

export default ExperienceItem