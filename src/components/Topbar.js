import React from 'react';
import Loginbtn from './Loginbtn';
import Userdetails from './Userdetails';


export class Topbar extends React.Component {
  render() {
    return (
        <div className="tg-topbar">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<ul className="tg-addnav">
							<li>
								<a href="javascript:void(0);">
									<i className="icon-envelope"></i>
									<em>Contact</em>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<i className="icon-question-circle"></i>
									<em>Help</em>
								</a>
							</li>
						</ul>
						<div className="dropdown tg-themedropdown tg-currencydropdown">
							<a href="javascript:void(0);" id="tg-currenty" className="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i className="icon-earth"></i>
								<span>Language</span>
							</a>
							<ul className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-currenty">
								<li>
									<a href="javascript:void(0);">
										<i>EN</i>
										<span>English</span>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);">
										<i>EST</i>
										<span>Estonian</span>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);">
										<i>RUS</i>
										<span>Russian</span>
									</a>
								</li>
							</ul>
						</div>
							<Loginbtn/>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Topbar;