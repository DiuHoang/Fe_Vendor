import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    {/* <h2 style={{color:'red'}}>QUEEN PARTY</h2> */}
                    <span className="font-weight-bold mb-2">QUEEN PARTY</span>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu" />
                    </button>
                    <div className="search-field d-none d-md-block">
                        <form className="d-flex align-items-center h-100" action="#">
                            <div className="input-group">
                            <div className="input-group-prepend bg-transparent">
                                <i className="input-group-text border-0 mdi mdi-magnify" />
                            </div>
                            <input type="text" className="form-control bg-transparent border-0" placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i className="mdi mdi-email-outline" />
                                <span className="count-symbol bg-warning" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                <h6 className="p-3 mb-0">Tin nh???n</h6>
                                <div className="dropdown-divider" />
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="assets/images/faces/face4.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                                            <p className="text-gray mb-0"> 1 Minutes ago </p>
                                        </div>
                                    </a>
                                <div className="dropdown-divider" />
                                <h6 className="p-3 mb-0 text-center">4 new messages</h6>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <i className="mdi mdi-bell-outline" />
                                <span className="count-symbol bg-danger" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <h6 className="p-3 mb-0">Th??ng b??o m???i</h6>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="mdi mdi-calendar" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                                        <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                                    </div>
                                </a>
                                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                            </div>
                        </li>
                        <li className="nav-item nav-profile dropdown">
                            <Link to="/" className="nav-link">
                                <i className="mdi mdi-logout mr-2 text-primary" />
                            </Link>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu" />
                    </button>
                </div>
            </nav>

        );
    }
}

export default Header;