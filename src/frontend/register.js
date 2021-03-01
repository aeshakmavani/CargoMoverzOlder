// import { ReactComponent } from '*.svg';
import React from 'react';
import Header from './header';
import Footer from './footer';


class register extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div class="breadcrumb-wrap">
                    <div class="container-fluid">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Register</li>
                        </ul>
                    </div>
                </div>

                <div class="login">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="register-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>First Name</label>
                                            <input class="form-control" type="text" placeholder="First Name" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>Last Name"</label>
                                            <input class="form-control" type="text" placeholder="Last Name" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>E-mail</label>
                                            <input class="form-control" type="text" placeholder="E-mail" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>Mobile No</label>
                                            <input class="form-control" type="text" placeholder="Mobile No" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>Password</label>
                                            <input class="form-control" type="text" placeholder="Password" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>Retype Password</label>
                                            <input class="form-control" type="text" placeholder="Password" />
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
export default register;