import React, { Component } from 'react';
import Movie from './Movie'
class Rented extends Component {
    render() {
        let movies = this.props.movies
        return (
            <div>
                <div class='category'>Rented Movies</div>
                <div class="movcont">
                

                {movies.map(m => m.isRented ? <Movie user={this.props.user} unrent={this.props.unrent} movie={m} /> : null)}

            </div>
            <div class="hr"></div>
            
            </div>
            
        )
    }
}
export default Rented;