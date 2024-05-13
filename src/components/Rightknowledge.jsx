import React from 'react'
import playImage from '../assets/images/svg/knowledge-img.svg'

function Rightknowledge() {
    return (
        <div className='knowledge_bg_img py_md_50 py_20'>
            <div className="custam_container">
                <div className="row">
                    <div className="col-lg-8 d-flex justify-content-center align-items-center">
                        <h4 className='ff_eurostile fw-bold text_30xl lh_md_49 lh_30 color_lightblack max_w_704 mb-0'>With The Right Knowledge Maintaining And Improving Your Fitness Becomes Effortless And Enjoyable. Stop Wasting Time You Don’t Have!</h4>
                    </div>
                    <div className="col-lg-4 position-relative d-flex justify-content-center">
                        <div className='position-absolute black_ellip d-lg-block d-none'></div>
                        <img className='w-100 max_w_310' src={playImage} alt="playImage" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Rightknowledge