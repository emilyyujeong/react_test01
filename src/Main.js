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
                <strong>{num > 9 ? '' : 0}{num + 1}</strong> / <span>{num > 9 ? '' : 0}{슬라이드.length}</span>
            </div>
            <div className="arrow">
                <BsChevronLeft className="arrow_left" onClick={() => SL.current.slickPrev()} />
                {/* SL = {current: slider} ---> SL.current = slider */}
                <BsChevronRight className="arrow_right" onClick={() => SL.current.slickNext()} />
            </div>


            <>


                <section className="mainNotice" >
                    <div className="inner" >

                        <div className="news_list left " >
                            <h3>개강소식</h3>
                            <li><span>April어학원 2월 27일(월) 봄학기 개강</span></li>
                            <li><span>CMS 영재교육센터 3월 2일(목) 봄학기 개강</span></li>
                            <a href="" className="view_more">바로가기</a>
                        </div >
                        <div className="news_list center">
                            <h3>공지사항</h3>
                            <li><span>시스템 점검 예정 안내 - 크레버스 패밀리사이트</span></li>
                            <li><span>CMS 영재교육센터 i-Learning 2.0</span></li>
                            <a href="" className="view_more">바로가기</a>
                        </div>
                        <div className="news_list right">
                            <h3>뉴스</h3>
                            <li><span>[CMS영재관] 2022 KJMO 한국주니어수학 올림피아드 만점자 8명 중 6명!</span></li>
                            <li><span>April어학원 ‘대한민국 하이스트 브랜드’ 10년 연속 1위 선정</span></li>
                            <a href="" className="view_more">바로가기</a>
                        </div >

                    </div >
                </section >


                <section className="mainBanner" >
                    <div className="inner" >
                        <h2>21세기 인재를 키우는 <strong>언어 · 수리 사고력 학습</strong></h2>
                        <ul className="categories">
                            <ul>
                                <li className="flip">
                                    <div className="card card01">
                                        <div className="clickF"></div>
                                        <a href="" className="clickB"></a>
                                    </div>
                                </li>
                                <li className="flip">
                                    <div className="card card02">
                                        <div className="clickF"></div>
                                        <a href="" className="clickB"></a>
                                    </div>
                                </li>
                                <li className="flip">
                                    <div className="card card03">
                                        <div className="clickF"></div>
                                        <a href="" className="clickB"></a>
                                    </div>
                                </li>
                                <li className="flip">
                                    <div className="card card04">
                                        <div className="clickF"></div>
                                        <a href="" className="clickB"></a>
                                    </div>
                                </li>
                            </ul>

                        </ul>
                    </div >
                </section >



                <section className="mainEvent" >
                    <div className="inner" >

                        <div className="event_list left">
                            <div className="event_lr">
                                <h3>META-learning Story</h3>
                                <h3 className="strong">메타 페스타! 당첨자 발표</h3>
                                <p className="date">발표일 ㅣ  03월 14일</p>
                            </div>
                            <div className="event_ll">
                                <img src={process.env.PUBLIC_URL + '/assets/event-slide2.png'} alt="" />
                            </div>

                        </div>
                        <div className="event_list right">
                            <div className="event_rr">
                                <h3 className="strong">크레버스 가맹 안내</h3>
                                <p>크레버스는21세기가 요청하는 사회· 문화적 가치를 발굴하고, 가치를 구현하기 위한 역량들로 융합인재 양성의 길을 열어갑니다. 크레버스와 함께할 가맹점을 모집합니다.</p>
                                <a href="" className="view_more">바로가기</a>
                            </div>
                            <div className="event_rl">
                                <img src={process.env.PUBLIC_URL + '/assets/event-visual.png'} alt="" />
                            </div>
                        </div >

                    </div >
                </section >



                <section className="mainContent">
                    <div className="select_branch">
                        <div className="find_img">
                            <img src={process.env.PUBLIC_URL + '/assets/find-img.png'} alt="" />
                        </div>
                        <h2 className="find_institute">크레버스 학원을 찾고 계신가요? 가까운 학원을 찾아보세요.</h2>
                        <span>
                            <select>
                                <option>브랜드 선택</option>
                                <option>청담어학원</option>
                                <option>April어학원</option>
                                <option>아이가르텐</option>
                                <option>CMS 영재교육센터</option>
                            </select>
                        </span>
                        <span>
                            <select>
                                <option>지역 선택</option>
                                <option>강원</option>
                                <option>경기</option>
                                <option>광주/전남</option>
                                <option>부산/경남</option>
                                <option>서울</option>
                                <option>전주/전북</option>
                                <option>제주</option>
                            </select>
                        </span>
                        <span>
                            <select>
                                <option>학원 선택</option>
                            </select>
                        </span>

                    </div>


                    <div className="inner brand_item_box" >
                        <div className="brand_item itm01" >
                            <div className="cap" >
                                <span className="brand_logo" >
                                    <img src={process.env.PUBLIC_URL + '/assets/banner_logo01.png'}
                                        alt="" />
                                </span >
                                <dl className="brand_info" >
                                    <span className="period" >
                                        <span className="term" > 1학기 봄</span >
                                        <span className="iblock" > 23.02.27</span >
                                        <span className="iblock" > ~23.05.24</span >
                                    </span >
                                    <dt>언어, 사고, 예술의<br /> 결합으로 창의사고력 개발</dt>
                                    <dd className="des" > 언어, 사고의 유기적인 결합으로 창의사고력 쑥쑥! Creative Learning의 NO.1 에이프릴어학원</dd >
                                </dl >

                            </div >
                            <div className="brand_imgbox" >
                                <img src={process.env.PUBLIC_URL + '/assets/april_img.png'}
                                    alt="" />
                            </div >
                        </div >
                        <div className="brand_item itm02" >
                            <div className="cap" >
                                <span className="brand_logo" >
                                    <img src={process.env.PUBLIC_URL + '/assets/banner_logo02.png'}
                                        alt="" />
                                </span >
                                <dl className="brand_info" >
                                    <span className="period" >
                                        <span className="term" > 수시 모집</span >
                                    </span >
                                    <dt>버추얼 컴퓨팅 사고력 <br /> 코드얼라이브</dt>
                                    <dd className="des" > 유니티와 공동 개발한 메타버스 코딩 플랫폼에서 배우는 파이썬 버추얼 클래스</dd >
                                </dl >

                            </div >
                            <div className="brand_imgbox" >
                                <img src={process.env.PUBLIC_URL + '/assets/banner01_img.png'}
                                    alt="" />
                            </div >
                        </div >
                        <div className="brand_item itm03" >
                            <div className="cap" >
                                <span className="brand_logo" >
                                    <img src={process.env.PUBLIC_URL + '/assets/banner_img03.png'}
                                        alt="" />
                                </span >
                                <dl className="brand_info" >
                                    <span className="period" >
                                        <span className="term" > 수시 모집</span >
                                    </span >
                                    <dt>지식을 연결하고 융합하는  새로운 경험</dt>
                                    <dd className="des" > 사고력과 다중 지능을 종합적으로 진단하고 크레버스를 경험할 수 있는 체험 공간</dd >
                                </dl >

                            </div >
                            <div className="brand_imgbox" >
                                <img src={process.env.PUBLIC_URL + '/assets/banner03.png'}
                                    alt="" />
                            </div >
                        </div >









                    </div >
                </section >


                <section className="mainChannel" >
                    <div className="inner" >
                        <div className="sns_left">
                            <figure>
                                <h2 className="title">크레버스 스토리</h2>
                                <a href=""><img src={process.env.PUBLIC_URL + '/assets/sns01.jpg'}
                                    alt="" /></a>
                            </figure>
                        </div >

                        <div className="sns_right" >
                            <figure>
                                <h2 className="title">톡톡에듀</h2>
                                <a href=""><img src={process.env.PUBLIC_URL + '/assets/sns02.jpg'}
                                    alt="" /></a>
                            </figure >
                        </div >
                    </div >
                </section >


            </>









        </main >
    )
}

export default Main;