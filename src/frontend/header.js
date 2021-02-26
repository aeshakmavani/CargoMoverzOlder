// import { ReactComponent } from '*.svg';
import React from 'react';
import Home from './home';
import Header from './header';
import Footer from './footer';
import Register from './register';

class header extends React.Component{
    render(){
        return(
            <div>
            <div class="top-bar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <i class="fa fa-envelope"></i>
                        support@email.com
                    </div>
                    <div class="col-sm-6">
                        <i class="fa fa-phone-alt"></i>
                        +012-345-6789
                    </div>
                </div>
            </div>
        </div>
       
        <div class="nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    
                        <div class="navbar-nav mr-auto">
                     
                            <a href="/" class="nav-item nav-link active">Home</a>
                            <a href="/productlist" class="nav-item nav-link">Products</a>
                            <a href="/productdetail" class="nav-item nav-link">Product Detail</a>
                            <a href="/cart" class="nav-item nav-link">Cart</a>
                            <a href="/checkout" class="nav-item nav-link">Checkout</a>
                            <a href="/account" class="nav-item nav-link">My Account</a>
                            <div class="nav-item dropdown">
                                <a href="/" class="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                                <div class="dropdown-menu">
                                    <a href="/wishlist" class="dropdown-item">Wishlist</a>
                                    <a href="/checkout" class="dropdown-item">Checkout</a>
                                    <a href="/contact" class="dropdown-item">Contact Us</a>
                                </div>
                            </div>
                        
                        </div>
                        <div class="navbar-nav ml-auto">
                            <div class="nav-item dropdown">
                       
                                <a href="/" class="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                                <div class="dropdown-menu">
                                    <a href="/login" class="dropdown-item">Login</a>
                                    <a href="/register" class="dropdown-item">Register</a>
                                </div>
                         
                            </div>
                        </div>
                    
                    </div>
                </nav>
            </div>
        </div>
       
        <div class="bottom-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <div class="logo">
                            <a href="/">
                                <img src="assets/img/logo.png" alt="Logo"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="search">
                            <input type="text" placeholder="Search"/>
                            <button><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="user">
                            <a href="/wishlist" class="btn wishlist">
                                <i class="fa fa-heart"></i>
                                <span>(0)</span>
                            </a>
                            <a href="/cart" class="btn cart">
                                <i class="fa fa-shopping-cart"></i>
                                <span>(0)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
        )
    }
}
export default header;