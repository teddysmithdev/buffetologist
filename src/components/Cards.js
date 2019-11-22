import React from 'react'


const Cards = () => {
    return (
            <div class="card" style={{"width": "18rem"}}>
                <img src="https://www.freshbooks.com/wp-content/uploads/2019/03/image1.jpg" class="card-img-top" alt="buffeologist"></img>
                    <div class="card-body">
                        <h5 class="card-title">Beginner Mode</h5>
                            <p class="card-text">Learn the basic fundamentals of income, balance, and cash-flow</p>
                        <a href="/" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
    )
}

export default Cards;
