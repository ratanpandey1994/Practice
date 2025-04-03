import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';
import { Settings } from '@mui/icons-material';
import Slider from 'react-slick';
import { useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

const ProductModal = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

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

    return (
        <>
            <Dialog open={true} className='productModal' onClose={() => props.closeProductModal()}>
                <Button className='close' onClick={() => props.closeProductModal()}><IoMdClose /></Button>
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
                        <div className='productZoom'>
                            <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                                <div className='item'>
                                    <InnerImageZoom zoomType='hover' zoomScale={1} src='https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg' />
                                </div>
                            </Slider>
                        </div>
                        <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                            <div className='item'>
                                <InnerImageZoom zoomType='hover' src='https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg' className='w-100' onClick={() => goto(index)} />
                            </div>
                        </Slider>
                    </div>
                    <div className='col-md-5'>

                    </div>
                </div>
            </Dialog>

        </>
    )
}

export default ProductModal;