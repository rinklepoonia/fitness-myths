import React from 'react'
import AuthorImg from '../assets/images/png/author-image.png'
import InstaImg from '../assets/images/svg/insta-img.svg'

function Author() {
    return (
        <div className='py_lg_115_312 py_30'>
            <div className="custam_container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img className='w-100 max_w_539' src={AuthorImg} alt="AuthorImg" />
                    </div>
                    <div className="col-lg-6 pt-lg-0 pt-4 d-flex flex-column justify-content-lg-end  align-items-lg-end">
                        <div>
                            <h4 className='ff_eurostile fw-bold text_30xl lh_md_37 lh_25 color_white mb_14'>About The <span className='color_yellow'>Author</span></h4>
                            <p className='ff_manrope fw-normal text_18md lh_md_28 lh_23 color_white max_w_520 mb_10'>Francesco is a Pro fitness coach currently working as head of Sport Science for Toronto FC Academy. He is a registered nutritionist, certified strength and conditioning specialist, holds a Master’s in exercise science and is a national level soccer coach.</p>
                            <p className='ff_manrope fw-normal text_18md lh_md_28 lh_23 color_white max_w_520 mb_10'>He has been a personal performance coach to a 1000+ elite level footballers ranging from youth internationals all the way to top level pro’s</p>
                            <p className='ff_manrope fw-normal text_18md lh_md_28 lh_23 color_white max_w_520 mb_30'>Francesco believes every footballer should have access to a rock-solid S&C program alongside a quality nutrition plan to improve the chances of crushing their genetic athletic potential and becoming the best version of themselves.</p>
                            <div className='d-flex align-items-center gap_md_17 gap_10 mb_10'>
                                <a href="https://www.instagram.com/" target='_blank'><img src={InstaImg} alt="InstaImg" /></a>
                                <p className='ff_eurostile fw-bold text_26lg lh_33 color_white mb-0'>Hypervive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Author