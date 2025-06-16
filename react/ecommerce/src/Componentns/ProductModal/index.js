import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import { useContext, useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import QuantityBox from '../QuantityBox';
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';

const ProductModal = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    const context = useContext(MyContext)

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    }

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false
    }

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return (
        <>
            <Dialog open={true} className='productModal' onClose={() => context.setisOpenProductModal(false)}>
                <Button className='close' onClick={() => context.setisOpenProductModal(false)}><IoMdClose /></Button>
                <h4 className='mb-1 fw-bold'>Men Alias-N Regular Fit Spread Collar Shirt</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center me-4'>
                        <span>Brands:</span>
                        <span className="ms-2">Welch's</span>
                    </div>
                    <Rating name="read-only" value={5} readOnly precision={0.5} size="small" />
                </div>
                <hr />

                <div className='row mt-2 productDetailModal'>
                    <div className='col-md-5'>
                        <div className='productZoom position-relative'>
                            <div className="badge badge-primary">23%</div>
                            <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                                <div className='item'>
                                    <InnerImageZoom zoomType='hover' zoomScale={1} src='https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg' />
                                </div>
                            </Slider>
                        </div>

                        {/* <Slider {...settings} className="zoomSlider" ref={zoomSlider}>

                            <div className='item'>
                                <img src='https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg' className='w-100' onClick={() => goto(0)} />
                            </div>

                        </Slider> */}
                    </div>
                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg me-2'>$9.35</span>
                            <span className='netPrice text-danger lg'>$7.25</span>
                        </div>

                        <span className="badge bg-success">IN STOCK</span>
                        <p className='mt-3'>Rs: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac</p>

                        <div className='d-flex align-items-center'>
                            <QuantityBox />
                            <Button className='btn-blue btn-lg btn-big btn-round ms-3'>Add to Cart</Button>
                        </div>

                        <div className='d-flex align-items-center mt-4 actions'>
                            <Button variant="outlined" className='btn-round btn-small'><FaRegHeart />&nbsp; Add to Wishlist</Button>
                            <Button variant="outlined" className='btn-round btn-small'><MdCompareArrows />&nbsp; Compare</Button>
                        </div>

                    </div>
                </div>
            </Dialog>

        </>
    )
}

export default ProductModal;