import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Main() {
    const [num, setNum] = useState(0);
    const [idx, setIdx] = useState(0);
    const SL = useRef(null);
    const 슬라이드 = [
        { h3: 'slide01', p: 'content01' },
        { h3: 'slide02', p: 'content02' },
        { h3: 'slide03', p: 'content03' },
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
                <BsArrowLeft onClick={() => SL.current.slickPrev()} />
                {/* SL = {current: slider} ---> SL.current = slider */}
                <BsArrowRight onClick={() => SL.current.slickNext()} />
            </div>
            


<>

<section class="mainContent">
           <h2 class="find_institute">학원바로가기</h2>
            <div class="inner brand_item_box">
                <div class="brand_item itm01">
                    <div class="cap">
                        <span class="brand_logo">
                             
                        </span>
                        <dl class="brand_info">
                            <span class="period">
                             <span class="term">1학기 봄</span>
                              <span class="iblock">23.02.27</span>    
                              <span class="iblock">~23.05.24</span>    
                            </span>
                            <dt>언어, 사고, 예술의 결합으로 창의사고력 개발</dt>
                           <dd class="des">언어, 사고의 유기적인 결합으로 창의사고력 쑥쑥! Creative Learning의 NO.1 에이프릴어학원</dd>
                       </dl>

                    </div>
                    <div class="brand_imgbox">
                        
                    </div>
                </div>
                <div class="brand_item itm02">
                    <div class="cap">
                        <span class="brand_logo">
                              
                        </span>
                        <dl class="brand_info">
                            <span class="period">
                             <span class="term">1학기 봄</span>
                              <span class="iblock">23.02.27</span>    
                              <span class="iblock">~23.05.24</span>    
                            </span>
                            <dt>언어, 사고, 예술의 결합으로 창의사고력 개발</dt>
                           <dd class="des">언어, 사고의 유기적인 결합으로 창의사고력 쑥쑥! Creative Learning의 NO.1 에이프릴어학원</dd>
                       </dl>

                    </div>
                    <div class="brand_imgbox">
                      
                    </div>
                </div>
                <div class="brand_item itm03">
                    <div class="cap">
                        <span class="brand_logo">
                              
                        </span>
                        <dl class="brand_info">
                            <span class="period">
                             <span class="term">1학기 봄</span>
                              <span class="iblock">23.02.27</span>    
                              <span class="iblock">~23.05.24</span>    
                            </span>
                            <dt>언어, 사고, 예술의 결합으로 창의사고력 개발</dt>
                           <dd class="des">언어, 사고의 유기적인 결합으로 창의사고력 쑥쑥! Creative Learning의 NO.1 에이프릴어학원</dd>
                       </dl>

                    </div>
                    <div class="brand_imgbox">
                     
                    </div>
                </div>









            </div>
        </section>


        <section class="mainBanner">
            <div class="inner">

                <div class="left">
                    
                </div>
                <div class="right">
                    <div class="text">
                        <h2 class="title">크레버스 소식</h2>
                        <a href=""><span>더보기</span></a>
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
                <a href=""></a> 
                </figure>
         </div>
          <div class="sns_right">
               <figure>
               <h2 class="title">톡톡에듀</h2>
               <a href=""></a> 
                </figure>
            </div>
           </div>
        </section>


</>









        </main>
    )
}

export default Main;