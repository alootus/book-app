import React from 'react';





export class SlideOne extends React.Component {
  render() {
    return (

        <div className="item" data-vide-bg="poster: images/slider/img-01.jpg" data-vide-options="position: 0% 50%">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
						<div className="tg-slidercontent">
							<figure className="tg-authorimg"><a href="javascript:void(0);"><img src="images/author/imag-01.jpg" alt="image description"/></a></figure>
							<h1>Jude Morphew</h1>
							<h2>Latest 2017 Release</h2>
							<div className="tg-description">
								<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore tolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisi ut aliquip commodo.</p>
							</div>
							<div className="tg-btns">
								<a className="tg-btn" href="javascript:void(0);">buy now</a>
								<a className="tg-btn" href="javascript:void(0);">read more</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

    );
  }
}

export default SlideOne;