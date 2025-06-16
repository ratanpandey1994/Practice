import Sidebar from "../../Componentns/Sidebar";
import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";


const Listing = () => {
    return (
        <>
            <section className="product_Listing_page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />

                        <div className="content_right">
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg' className='w-100 borderRadius8' alt='banner' />

                            <div className="showBy mt-3 mb-3">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;