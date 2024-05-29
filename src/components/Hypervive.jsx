import React from 'react'
import tikTok from '../assets/images/svg/tik-tok.svg'
import Instaimg from '../assets/images/svg/footer-svg.svg'

function Hypervive() {
    return (
        <div className='pt_lg_70 pt_25'>
            <div className="custam_container">
                <div className='d-flex flex-column align-items-center'>
                    <h6 className='ff_eurostile fw-bold text_26lg lh_33 color_white mb-lg-3 mb-2'>Hypervive</h6>
                    <p className='ff_manrope fw-normal text_14xs lh_23 color_darkWhite opactiy_70 mb-md-4 mb-2'>Connect with us on social media</p>
                    <div className='d-flex gap_10 mb-md-4 mb-3'>
                        <img src={tikTok} alt="tikTok" />
                        <img src={Instaimg} alt="Instaimg" />
                    </div>
                </div>
            </div>
            <div className='footer_border'></div>
            <p className='ff_manrope fw-normal text_14xs lh_23 color_darkWhite opactiy_70 mb-0 py_10 text-center'>Copyright © 2024 HyperVive | All Rights Reserved.</p>
        </div>
    )
}

export default Hypervive