import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <div className="container-fluid clearfix">
                <div className="page-header">
                     <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © QueenParty 2021</span>
                     <div class="template-demo">
                      <button type="button" class="btn btn-social-icon btn-outline-facebook"><i class="mdi mdi-facebook"></i></button>
                      <button type="button" class="btn btn-social-icon btn-outline-youtube"><i class="mdi mdi-youtube"></i></button>
                      <button type="button" class="btn btn-social-icon btn-outline-dribbble"><i class="mdi mdi-dribbble"></i></button>
                      <button type="button" class="btn btn-social-icon btn-outline-linkedin"><i class="mdi mdi-linkedin"></i></button>
                      <button type="button" class="btn btn-social-icon btn-outline-google"><i class="mdi mdi-google-plus"></i></button>
                    </div>
                </div>    
            </div>
        </footer>
        );
    }
}

export default Footer;