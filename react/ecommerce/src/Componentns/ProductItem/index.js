
import { TfiFullscreen } from "react-icons/tfi";
import { Button } from "@mui/material"
import Rating from '@mui/material/Rating';
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

const ProductItem = () => {

    const context = useContext(MyContext)


    const viewProductDetails = (id) => {
        context.setisOpenProductModal(true);
    }


    return (
        <>
            <div className="item productItem">
                <div className="imgWrapper">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />
                    <span className="badge text-bg-primary">28%</span>
                    <div className="actions">
                        <Button onClick={() => viewProductDetails()}><TfiFullscreen /></Button>
                        <Button><IoMdHeartEmpty size={20} /></Button>
                    </div>
                </div>
                <div className="info">
                    <h4>All Natural Italian-Style Chicken Meatballs</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} precision={0.5} readOnly size="small" />
                    <div className="d-flex">
                        <span className="oldPrice">$20.00</span>
                        <span className="netPrice text-danger ms-2">$14.00</span>
                    </div>
                </div>
            </div>



            {/* {<ProductModal />} */}
        </>
    )
}

export default ProductItem;