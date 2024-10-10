import React from 'react'

import pawprint from '../Components/images/pawprint.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


function Firstpage() {
    return (
        <div className='first'>

            <div className="navbar">
                <span style={{ fontSize: '14px' }} className="navbar-brand">  91+98735463728</span>
                <a style={{ color: 'white', fontSize: '14px' }} className="navbar-brand" href="#">support@pawsindia.com</a>
                <span style={{ fontSize: '13px', letterSpacing: '0.1em' }} className="navbar-brand mb-0 fw-bold ">As Seen On Sharktank. Use Code: SHARK10</span>
                <a style={{ color: 'white', fontSize: '13px', letterSpacing: '0.1em' }} className="navbar-brand fw-bold " href="#">We are Barking Discounts! Use code SUPERSAVER</a>
            </div>

            
                <nav class="navbar navbar-light bg-light">

                    <div className="pawimg">
                        <img src={pawprint} alt="Paw" />
                    </div>
                    <form class="d-flex">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search" />

                        <button class="btn btn-outline-dark" type="submit"><SearchIcon /></button>
                    </form>
                    <button class="btn btn-outline-dark" type="submit"><ShoppingCartIcon /> </button>
                    <button class="btn btn-dark" type="submit"><FavoriteBorderIcon /></button>

                    <button class="btn btn-dark" type="submit"><PermIdentityIcon /></button>

                </nav>
                <hr/>
           


            <nav class="navbar navv3 navbar-expand-lg navbar-light bg-light mb-5">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">DOG</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">CAT</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">COMBO PACKS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">CUSTOMIZE NAME TAGS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">BLOG</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">NAME ABOUT BREEDS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">SHOP BY BRAND</a>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Firstpage
