import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronLeft, BsChevronRight, BsPlusLg, BsSearch } from "react-icons/bs";



function Main() {
    const [num, setNum] = useState(0);
    const [idx, setIdx] = useState(0);
    const SL = useRef(null);
    const 슬라이드 = [
        { h3: 'slide01', p: 'content01' },
        { h3: 'slide02', p: 'content02' },
        { h3: 'slide03', p: 'content03' },
        { h3: 'slide04', p: 'content04' },
    ];
    const setting = {
        arrows: false,
        afterChange: idx => setNum(idx)
    }
    return (
        <main>
            <Slider
                className="slide"
                {...setting}
                ref={SL}
            >
                {
                    슬라이드.map((it, idx) => {
                        return (
                            <li className={`itm0${idx + 1}`}>
                            </li>
                        )
                    }
                    )
                }
            </Slider>
            <div className="num">
                <strong>{num > 8 ? '' : 0}{num + 1}</strong> / <span>{num > 8 ? '' : 0}{슬라이드.length}</span>
            </div>
            <div className="arrow">
                <BsChevronLeft className="arrow_left" onClick={() => SL.current.slickPrev()} />
                {/* SL = {current: slider} ---> SL.current = slider */}
                <BsChevronRight className="arrow_right" onClick={() => SL.current.slickNext()} />
            </div>


            <>

                <section class="mainContent">
                    <div class="select_branch">
                        <h2 class="find_institute">학원바로가기 <BsSearch className="search" /> </h2>
                        <span>
                            <select>
                                <option>브랜드 선택</option>
                                <option>두번째 선택항목</option>
                                <option>세번째 선택항목</option>
                            </select>
                        </span>
                        <span>
                            <select>
                                <option>지역 선택</option>
                                <option>두번째 선택항목</option>
                                <option>세번째 선택항목</option>
                            </select>
                        </span>
                        <span>
                            <select>
                                <option>학원 선택</option>
                                <option>두번째 선택항목</option>
                                <option>세번째 선택항목</option>
                            </select>
                        </span>

                    </div>


                    <div class="inner brand_item_box">
                        <div class="brand_item itm01">
                            <div class="cap">
                                <span class="brand_logo">
                                    <img src={process.env.PUBLIC_URL + '/assets/banner_logo01.png'}
                                        alt="" />
                                </span>
                                <dl class="brand_info">
                                    <span class="period">
                                        <span class="term">1학기 봄</span>
                                        <span class="iblock">  23.02.27</span>
                                        <span class="iblock"> ~ 23.05.24</span>
                                    </span>
                                    <dt>언어, 사고, 예술의<br /> 결합으로 창의사고력 개발</dt>
                                    <dd class="des">언어, 사고의 유기적인 결합으로 창의사고력 쑥쑥! Creative Learning의 NO.1 에이프릴어학원</dd>
                                </dl>

                            </div>
                            <div class="brand_imgbox">
                                <img src={process.env.PUBLIC_URL + '/assets/april_img.png'}
                                    alt="" />
                            </div>
                        </div>
                        <div class="brand_item itm02">
                            <div class="cap">
                                <span class="brand_logo">
                                    <img src={process.env.PUBLIC_URL + '/assets/banner_logo02.png'}
                                        alt="" />
                                </span>
                                <dl class="brand_info">
                                    <span class="period">
                                        <span class="term">수시 모집</span>
                                    </span>
                                    <dt>버추얼 컴퓨팅 사고력 <br /> 코드얼라이브</dt>
                                    <dd class="des">유니티와 공동 개발한 메타버스 코딩 플랫폼에서 배우는 파이썬 버추얼 클래스</dd>
                                </dl>

                            </div>
                            <div class="brand_imgbox">
                                <img src={process.env.PUBLIC_URL + '/assets/banner01_img.png'}
                                    alt="" />
                            </div>
                        </div>
                        <div class="brand_item itm03">
                            <div class="cap">
                                <span class="brand_logo">
                                    <img src={process.env.PUBLIC_URL + '/assets/banner_img03.png'}
                                        alt="" />
                                </span>
                                <dl class="brand_info">
                                    <span class="period">
                                        <span class="term">수시 모집</span>
                                    </span>
                                    <dt>지식을 연결하고 융합하는  새로운 경험</dt>
                                    <dd class="des">사고력과 다중 지능을 종합적으로 진단하고 크레버스를 경험할 수 있는 체험 공간</dd>
                                </dl>

                            </div>
                            <div class="brand_imgbox">
                                <img src={process.env.PUBLIC_URL + '/assets/banner03.png'}
                                    alt="" />
                            </div>
                        </div>









                    </div>
                </section>


                <section class="mainBanner">
                    <div class="inner">

                        <div class="left">
                            <img src={process.env.PUBLIC_URL + '/assets/mid_banner_left.png'}
                                alt="" />
                        </div>
                        <div class="right">
                            <div class="text">
                                <h2 class="title">크레버스 소식</h2>
                                <a href=""><span><BsPlusLg /></span></a>
                            </div>

                            <ul class="news_list">
                                <li><span class="subj">청담어학원 2월 27일(월) 봄학기 개강</span>
                                    <span class="date">2023.02.03</span></li>
                                <li><span class="subj">April어학원 2월 27일(월) 봄학기 개강</span>
                                    <span class="date">2023.02.01</span></li>
                                <li><span class="subj">CMS 영재교육센터 3월 2일(목) 봄학기 개강</span>
                                    <span class="date">2023.02.01</span></li>
                            </ul>

                        </div>
                    </div>
                </section>


                <section class="mainChannel">
                    <div class="inner">
                        <div class="sns_left">
                            <figure>
                                <h2 class="title">크레버스 스토리</h2>
                                <a href=""><img src={process.env.PUBLIC_URL + '/assets/sns01.jpg'}
                                    alt="" /></a>
                            </figure>
                        </div>
                        <div class="sns_right">
                            <figure>
                                <h2 class="title">톡톡에듀</h2>
                                <a href=""><img src={process.env.PUBLIC_URL + '/assets/sns02.jpg'}
                                    alt="" /></a>
                            </figure>
                        </div>
                    </div>
                </section>


            </>









        </main>
    )
}

export default Main;