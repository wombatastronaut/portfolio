import React, { useState, useEffect } from 'react'

import Gallery from './shared/Gallery'

const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchProjects()
    }, [])


    const fetchProjects = () => {
        const result = [
            {
                index: 0,
                title: 'Project 1',
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/400/300/',
                link: 'https://unsplash.com'
            },
            {
                index: 1,
                title: 'Project 2',
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/400/300/',
                link: 'https://unsplash.com'
            },
            {
                index: 2,
                title: 'Project 3',
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/400/300/',
                link: 'https://unsplash.com'
            },
            {
                index: 3,
                title: 'Project 4',
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/400/300/',
                link: 'https://unsplash.com'
            },
            {
                index: 4,
                title: 'Project 5',
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/400/300/',
                link: 'https://unsplash.com'
            },
        ]

        setProjects(result)
    }

    return (
        <section id="portfolio" className="portfolio py-5 px-10">
            <div className="container mx-auto">
                <h2 className="text-center mb-10 text-white font-medium">Portfolio</h2>

                <Gallery images={projects} columns="4" gap="8" />
            </div>
        </section>
    )
}

export default Portfolio