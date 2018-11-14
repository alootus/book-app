import React from 'react';


export class Searchform extends React.Component {
  render() {
    return (

        <div className="tg-searchbox">
			<form className="tg-formtheme tg-formsearch">
			    <fieldset>
					<input type="text" name="search" className="typeahead form-control" placeholder="Search by title, author, keyword, ISBN..."/>
					<button type="submit"><i className="icon-magnifier"></i></button>
				</fieldset>
			    <a href="javascript:void(0);">+  Advanced Search</a>
			</form>
		</div>
    );
  }
}

export default Searchform;