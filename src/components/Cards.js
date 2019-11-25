import React from 'react'
import { Link } from 'react-router-dom'


const Cards = (props) => {
    return (
            <div class="card" style={{"width": "18rem"}}>
                <img src={props.image} class="card-img-top" alt="buffeologist"></img>                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">Learn how Warren reads an income statement</p>
                        <Link to={`/${props.url}`} class="btn btn-primary">Go somewhere</Link>
                    </div>
            </div>
    )
}

export default Cards;
