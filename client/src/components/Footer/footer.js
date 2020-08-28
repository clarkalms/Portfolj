import React, { Component } from 'react';
import "./footer.css";

class footer extends Component {
    render() {
        return (
            <footer className="footer">
                <hr className="separator"></hr>
                <div className="container">
                    <div className="row footer__line-center">
                        <div className="footer__section">
                            <ul className="nav-list justify-content-center" role="menubar">
                                <li className="nav-item copyright" role="none">
                                    <span>&copy; alexander clark alms 2020</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default footer;
