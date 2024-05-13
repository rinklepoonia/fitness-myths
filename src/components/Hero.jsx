import React from 'react'
import heroImg from '../assets/images/svg/hero-image.svg'

const Hero = () => {
    return (
        <div>
            <div className='hero_bg'>
                <nav className='h_80'>
                    <div className='custam_container'>
                        <div className='d-flex justify-content-end h_80'>
                            <div className='d-flex justify-content-center outer_border max_w_167 w-100'><button className='ff_eurostile fw-bold text_14xs lh_14 color_black btn_property padding_13_8 max_w_153 margin_7 w-100 text-nowrap'>GET IN TOUCH</button></div>
                        </div>
                    </div>
                </nav>
                <div className="custam_container">
                    <div className="row pb_lg_96 pb_10">
                        <div className="col-lg-8 pt_lg_178 pt_40">
                            <h1 className='ff_eurostile fw-bold text_452xl lh_lg_59 lh_40 color_white max_w_640'>Get the EBook that reveals the <span className='color_yellow'>7 fitness myths</span> that are holding you back from experiencing top-level fitness </h1>
                        </div>
                        <div className="col-lg-4 pt_lg_109 pt_15 d-flex justify-content-center">
                            <img src={heroImg} alt="heroImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero