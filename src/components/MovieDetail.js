import React, { Component } from 'react';
class MovieDetail
 extends Component {
    render() {
        let movie = this.props.users[this.props.match.params.user].movies.find(m => m.id == this.props.match.params.id)
        return (
            <div>
               <div id="blank"></div><
            div class="detailCont">
            <img class="movDImg" src={movie.img}/> 
            <div class="movDName">{movie.title} ({movie.year})</div>
            
            <div class="movDPrice">Price: $25</div>
            <div class="movDInfo">{movie.descrShort}</div>
        </div>   
            </div>
      )
    }
}
export default MovieDetail
;