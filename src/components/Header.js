import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src="bild"/>
                <h1>Projektportalen</h1>
                <p>Lorem ipsum osv. asdasdas as d asdlaskdlkcx lklkad</p>

                <form>
                    {/* <div className="tags">

                    </div> */}
                    <input type="text" placeholder="Sök här..."/>
                    <input type="submit"/>
                </form>
                <button>+</button>
            </div>
        );
    }
}

export default Header;