import React from 'react'

const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/400/300/',
        },
        {
            title: 'Project 2',
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/400/300/',
        },
        {
            title: 'Project 3',
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/400/300/',
        },
    ]

    return (
        <section id="portfolio" className="portfolio py-5 px-10">
            <div className="container mx-auto">
                <h2 className="text-center mb-10 text-white font-medium">Portfolio</h2>
                <div className="grid grid-cols-4 gap-10">
                    {projects.map((project) => (
                        <div>
                            <img className="mb-3" src={project.thumbnail} alt="" />
                            <span className="text-white">{project.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio