import React from 'react';
import {Link} from 'react-router-dom';
import {authUser} from '../../ducks/reducer'
import { connect } from 'react-redux';

function Nav (){
    let {username, profilePicture} = authUser;
    return (
        <div>
            <h1>Nav</h1>
            <img src={profilePicture} alt='' />
            <p>{username}</p>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/post/:postid'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}

function mapStateToProps(state){
    return {
        username: state.username,
        profilePicture: state.profilePicture
    }
}


export default connect(mapStateToProps)(Nav)