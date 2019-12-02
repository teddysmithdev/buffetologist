import React from 'react'
import "../css/banner.css"
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <header>
        <section id="banner">
            <div className="banner-box">
                <h1 id="banner-title">Learn to invest like the best</h1>
                <div className="banner-underline"></div>
                <h4 className="banner-subtitle">Analyze companies using fundamental analysis</h4>
                {/* <img src="hero.png" alt=""/> */}
                <button className="banner-button"><Link to='/'>Click to begin</Link></button>
            </div>
        </section>
        </header>
    )
}

export default Hero;