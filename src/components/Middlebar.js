import React from 'react';
import Searchform from './Searchform';
import Wishlist from './Wishlist';
import ProductCart from './Cart';

export class Middlebar extends React.Component {
  render() {
    return (
       	<div className="tg-middlecontainer">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<strong className="tg-logo"><a href="index.html"><img src="images/logo.png" alt="company name here"/></a></strong>
						<div className="tg-wishlistandcart">
							<Wishlist></Wishlist>
							<ProductCart></ProductCart>
						</div>
						<Searchform></Searchform>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Middlebar;