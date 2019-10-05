import React, { Component } from 'react';
import Movie from './Movie'
import Rented from './Rented'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Catalog extends Component {
    constructor(){
        super()
        this.state={
            value: "",
        }
    }

    search =(event)=>{this.setState({
        value: event.target.value
      })
        
    }

    matches =()=>{
        
        let movies = this.props.users[this.props.match.params.user].movies.filter(m=> m.title.toLowerCase().includes(this.state.value.toLowerCase()));

        return movies
    }
    
      
    render() {


        let movies = this.matches()
        let user= this.props.match.params.user
        
        return (
            <div id="catalog">
                <div id="blank"></div>
                <input type="text" placeholder="Search" value={this.state.value} onChange={this.search}/>
                <FontAwesomeIcon  class="searchIcon" icon={faSearch}/>
                <div class="hr"></div>
               
            <div >

                {this.props.users[user].rentedMovies > 0 ? <Rented user={user} unrent={this.props.unrent} movies={movies}/> : null}
            </div>
            <div class="catInfo"><div class='category'>All Movies</div><div class="credit">Credit: ${this.props.users[this.props.match.params.user].budget}</div></div>
            
                <div class="movcont">
                {movies.map(m => <Movie unrent={this.props.unrent} user={user} rent={this.props.rent} movie={m}/>)}

                </div>
            </div>
        )
    }
}
export default Catalog;