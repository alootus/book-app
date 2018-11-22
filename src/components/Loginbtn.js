import React from 'react';

import {
	Link
} from 'react-router-dom';



export class Loginbtn extends React.Component {
  render() {
    return (

    <div className="tg-userlogin">
			<Link className="tg-btn" to="/signup">Sign Up</Link>
			<Link className="tg-btn" to="/signin">Sign In</Link>
		</div>

    );
  }
}

export default Loginbtn;