import React from 'react'

const Hero = () => {
    return (
        <div>
            <div class="jumbotron">
                <h1 class="display-4">Invest Like Warren Buffet!</h1>
                    <p class="lead">Learn the exact tactics used to analyze income, balance, and cash-flow!</p>
                    {/* <hr class="my-4"> */}
                    <p>Based-off "Warren Buffet and The Interpretation of Financial Statements" by Mary Buffet & David Clark</p>
                    <p class="lead">
                    <a class="btn btn-primary btn-lg" href="/search" role="button">Click to Begin!</a>
                </p>
            </div>
        </div>
    )
}

export default Hero;