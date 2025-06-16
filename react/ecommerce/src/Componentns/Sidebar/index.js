import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import addsImage from '../../assets/images/image-cat.jpg'

const Sidebar = () => {
    const [value, setvalue] = useState([100, 6000]);
    return (
        <>
            <div className="sidebar">
                <div className="container">
                    <div className="filterBox">
                        <h6>PRODUCT CATEGORIES</h6>
                        <div className='scroll'>
                            <ul>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Men" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Women" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Beauty" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Watches" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Gift" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Women" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Men" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Women" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Beauty" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Watches" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Gift" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Women" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="filterBox">
                        <h6>FILTER BY PRICE</h6>
                        <RangeSlider value={value} onInput={setvalue} min={100} max={6000} step={5} />
                        <div className='d-flex pt-2 pb-2 priceRange'>
                            <span>From: <strong className="text-dark">Rs: {value[0]} </strong></span>
                            <span className='ms-auto'>To: <strong className="text-dark">Rs: {value[1]} </strong></span>
                        </div>
                    </div>

                    <div className="filterBox">
                        <h6>PRODUCT Status</h6>
                        <div className='scroll'>
                            <ul>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="In Stock" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="On Sale" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="filterBox">
                        <h6>Brands</h6>
                        <div className='scroll'>
                            <ul>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Frito Lay" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox />} className='w-100' label="Nespresso" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link to="#"><img src={addsImage} className='w-100' alt="Banner" /></Link>

                </div>
            </div>
        </>
    )
}

export default Sidebar;