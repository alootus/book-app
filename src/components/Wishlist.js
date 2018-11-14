import React from 'react';





export class Wishlist extends React.Component {
  render() {
    return (

        <div className="dropdown tg-themedropdown tg-wishlistdropdown">
			<a href="javascript:void(0);" id="tg-wishlisst" className="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    <span className="tg-themebadge">3</span>
				<i className="icon-heart"></i>
				<span>Wishlist</span>
			</a>
			<div className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-wishlisst">
				<div className="tg-description"><p>No products were added to the wishlist!</p></div>
			</div>
		</div>

    );
  }
}

export default Wishlist;