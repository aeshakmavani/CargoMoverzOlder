// import { ReactComponent } from '*.svg';
import React from 'react';
import Header from './header';
import Footer from './footer';

class login extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div class="breadcrumb-wrap">
                    <div class="container-fluid">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Login</li>
                        </ul>
                    </div>
                </div>

                <div class="login">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="login-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>E-mail / Username</label>
                                            <input class="form-control" type="text" placeholder="E-mail / Username" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>Password</label>
                                            <input class="form-control" type="text" placeholder="Password" />
                                        </div>
                                        <div class="col-md-12">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="newaccount" />
                                                <label class="custom-control-label" for="newaccount">Keep me signed in</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="btn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default login;