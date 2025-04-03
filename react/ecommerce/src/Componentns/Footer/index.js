import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";





const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt /></span>
                        <span className="ms-2">Everyday fresh products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery /></span>
                        <span className="ms-2">Free delivery for order over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbRosetteDiscount /></span>
                        <span className="ms-2">Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiBadgeDollar /></span>
                        <span className="ms-2">Best price on the market</span>
                    </div>
                </div>

                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>FRUIT & VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>BREAKFAST & DAIRY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>MEAT & SEAFOOD</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>BEVERAGES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>BREADS & BAKERY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex mb-0">
                    <p className="mb-0">Copyright 2024. All rights reserved</p>
                    <ul className="list list-inline ms-auto">
                        <li className="list-inline-item"><Link to="#"><FaFacebookF /></Link></li>
                        <li className="list-inline-item"><Link to="#"><FaXTwitter /></Link></li>
                        <li className="list-inline-item"><Link to="#"><FaInstagram /></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;