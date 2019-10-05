import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class Movie extends Component {
    render() {
        let rent = () => {
            
            this.props.rent(this.props.movie.id, this.props.user)
        }

        let unrent = () => {
            this.props.unrent(this.props.movie.id, this.props.user)
            
        }
        return (

            <div class="movie">
               {!this.props.movie.isRented ? <div><Link to={`movies/${this.props.movie.id}`}><img class="movIcon"src={this.props.movie.img}/></Link>  <span class="butt" onClick={rent}><FontAwesomeIcon icon={faPlus} /></span></div>:
                <div><Link to={`movies/${this.props.movie.id}`}><img class="movIcon" src={this.props.movie.img}/></Link> <span class="butt" onClick={unrent}  ><FontAwesomeIcon  icon={faTimes} /></span></div>}

            </div>
        )
    }
}
export default Movie;