import React, { useState, useEffect } from 'react'

import ExperienceItem from './experience/ExperienceItem'

const Experience = () => {
    const [experiences, setExperiences] = useState([])
    const [educations, setEducations] = useState([])

    useEffect(() => {
       fetchExperiences()
       fetchEducations()
    }, [])

    const fetchExperiences = () => {
        const result = [
            {
                position: 'Sofware Engineer',
                company: 'Zeald',
                period: 'June 2019 - Present',
                responsibilities: [
                    'Develop new features and fix issues to Zeald\'s e-commerce platform(Perl based)',
                    'Build custom features for different clients using Zeald\'s e-commerce platform(Perl based)',
                    'Assist teammates\' about development issues and contribute in improving the team\'s development process'
                ]
            },
            {
                position: 'Full Stack Developer',
                company: 'Fligno',
                period: ' May 2018 - June 2019',
                responsibilities: [
                    'Develop and maintain SaaS applications using Laravel, VueJS and ReactJS',
                    'Setup web server for Laravel projects using AWS, Apache/Nginx',
                    'Train team about technologies/practices that will help improve the development process'
                ]        
            },
            {
                position: 'Full Stack Developer',
                company: 'Syntactics',
                period: 'May 2015 - May 2018',
                responsibilities: [
                    'Develop and maintain SaaS applications using Laravel, CodeIgniter and VueJS',
                    'Develop and maintain sites using Wordpress',
                    'Implement payment gateways like Stripe, Braintree, Fastspring, and Paypal using PHP'
                ]        
            }
        ]

        setExperiences(result)
    }

    const fetchEducations = () => {
        const result = [
            {
                course: 'Bachelor of Science in Information Technology',
                school: 'University of Science and Technology of Southern Philippines',
                period: '2011 - 2015',
                description: 'Studied about software, hardware and networking.'
            }
        ]

        setEducations(result)
    }

    return (
        <section id="experience-and-education" className="experience-and-education py-5 px-10">
            <div className="container mx-auto grid grid-cols-2 gap-20">
                <div id="education" className="education">
                    <h2 className="text-center mb-10 text-white font-medium">Education</h2>

                    {educations.map((education) => (
                        <ExperienceItem type="education" details={education} />
                    ))}
                </div>
                
                <div id="experience" className="experience">
                    <h2 className="text-center mb-10 text-white font-medium">Experience</h2>
                    {experiences.map((experience) => (
                        <ExperienceItem type="experience" details={experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience