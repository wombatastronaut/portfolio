import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div className="container mx-auto flex justify-center items-center">
                <p className="text-white">© { currentYear } <span>Ronniel</span>. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer