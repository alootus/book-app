import React, { Component } from 'react';

import {
	Link
} from 'react-router-dom';

export class Loginpage extends React.Component {
  render() {
    return (
        <div className="fullpage">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="login-register-form">
                                <div className="form-holder">
                                    <div className="form-row form-head">
                                        <div className="col-xs-6">
                                            <strong className="tg-logo"><Link to="/"><img src="images/logo.png" alt="company name here"/></Link></strong>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="form-title"><img src="images/lock.svg" alt=""/>Client Area</div>
                                        </div>
                                    </div>
                                    <div className="form-row form-links">
                                        <div className="col-xs-12">
                                            <Link to="/signin" className="link-to active">Login</Link> or <Link to="/signup" className="link-to">Register</Link>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-row">
                                            <div className="col-xs-12">
                                                <label>Username</label>
                                                <input type="text" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-xs-12">
                                                <label>Password</label>
                                                <input type="password" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-xs-6">
                                                <a href="#" className="forget-link">Forget your password?</a>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="submit-holder">
                                                    <button type="submit"><Link to='/user'>Login</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default Loginpage;