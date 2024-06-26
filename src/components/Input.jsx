import React from 'react'
import laptopImg from '../assets/images/svg/input-section-img.svg'
import Pentagen2 from '../assets/images/svg/pentagen-img2.svg'

function Input() {
    return (
        <div className='pb_lg_168 pb_md_100 pb_30 pt-lg-0 pt-5 position-relative'>
            <div className='position-absolute pos_pentagen2 d-lg-block d-none'><img src={Pentagen2} alt="Pentagen2 " /></div>
            <div className="custam_container">
                <div className="row flex-lg-row flex-column-reverse justify-content-between input_row_gap">
                    <div className="col-lg-5 d-flex justify-content-center">
                        <img className='w-100 min_h_472 max_w_530' src={laptopImg} alt="laptopImg" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h3 className='ff_eurostile fw-bold text_30xl lh_md_37 lh_25 color_white max_w_522 mb_md_29 mb_10'>Let me know where <span className='color_yellow'>you want me to send it</span></h3>
                        <input type="text" placeholder='Name' className='ff_manrope fw-normal text_16sm lh_21 color_darkWhite opacity_56 input_modification mb_13' />
                        <input type="mail" placeholder='Email' className='ff_manrope fw-normal text_16sm lh_21 color_darkWhite opacity_56 input_modification mb-md-5 mb-3' />
                        <div className='outer_border max_w_181'><button className='ff_eurostile fw-bold text_16sm lh_16 color_black btn_property padding_16_15 max_w_167 text-nowrap margin_7'>Send It Here!</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input