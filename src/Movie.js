import React, {Component} from 'react';
import UserList from './UserList.js';

class Movie extends Component{
	render(){
    	return(
        	<div>
              <h2>{this.props.movie.name}</h2>
              <UserList userIds={this.props.likedBy} users={this.props.users}/>
      		</div>
        )
    }
}

export default Movie;