import React, {Component} from 'react'

class UserList extends Component{
  render(){
  	let userIds;
      if(this.props.userIds){
      	userIds = this.props.userIds;
      } else {
      	return(<p>None of the current users liked this movie</p>);
      }
	return(
      	<div>
          <p>Liked By:</p>
          <ul>
              {userIds.map(userId =>(
                  <li key={userId}>{this.props.users[userId].name}</li>
              ))}
          </ul>
		</div>
    )
  }
}

export default UserList;