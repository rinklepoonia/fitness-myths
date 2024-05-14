import React from 'react'
import avoidLaptop from '../assets/images/svg/avoid-laptop-img.svg'

function Avoid() {
    return (
        <div className='avoid_bg_img avoid_img_box pt-5 position-relative'>
            <div className="custam_container">
                <div className='row row_gap_10'>
                    <div className='col-lg-6'>
                        <h5 className='ff_eurostile fw-bold text_452xl lh_lg_59 lh_40 color_lightblack max_w_520 mb_10'>7 Fitness Myths To Avoid</h5>
                        <p className='ff_manrope fw-normal text_18md lh_md_28 lh_23 color_lightblack mb_md_32 mb_20'>Grab your free copy now!</p>
                        <div className='avoid_outer_border fit_content'><button className='ff_eurostile fw-bold text_16sm lh_16 color_white btn_property bg-black mythsBtn_padding border_none margin_8_10'>Download For Free</button></div>
                    </div>
                    <div className="col-lg-6">
                        <div className='laptop_position'><img className='w-100 max_w_658' src={avoidLaptop} alt="avoidLaptop" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avoid