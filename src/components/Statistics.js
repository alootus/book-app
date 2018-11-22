import React, { Component } from 'react';




export class Statistics extends React.Component {
  render() {
    return (
        <main id="tg-main" className="tg-main tg-haslayout">
            <section className="tg-haslayout">
				<div className="container">
					<div className="row">
						<div className="tg-allstatus">
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
								<div className="tg-parallax tg-bgbookwehave" data-z-index="2" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-01.jpg">
									<div className="tg-status">
										<div className="tg-statuscontent">
											<span className="tg-statusicon"><i className="icon-book"></i></span>
											<h2>Books we have<span>24,179,213</span></h2>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
								<div className="tg-parallax tg-bgtotalmembers" data-z-index="2" data-appear-bottom-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-02.jpg">
									<div className="tg-status">
										<div className="tg-statuscontent">
											<span className="tg-statusicon"><i className="icon-user"></i></span>
											<h2>Total members<span>15,179,213</span></h2>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
								<div className="tg-parallax tg-bghappyusers" data-z-index="2" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-03.jpg">
									<div className="tg-status">
										<div className="tg-statuscontent">
											<span className="tg-statusicon"><i className="icon-heart"></i></span>
											<h2>Happy users<span>1,267,539</span></h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>


    );
  }
}

export default Statistics;