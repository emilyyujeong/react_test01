
import './text.css';

function Footer() {
    return (
        <footer className="Footer">
          <div>

          <div class="top">
                <div class="inner">
                    <ul class="left">
                        <li><a href="">회사소개</a></li>
                        <li><a href="">인재채용</a></li>
                        <li><a href="">이용약관</a></li>
                        <li class="bold"><a href="">개인정보 처리방침</a></li>
                        <li><a href="">개인정보처리방침</a></li>
                        <li class="mc"><a href="" >통합고객지원센터</a></li>
                    </ul>
                    <ul class="right">
                        <li><a href=""><i class="xi-naver"></i></a></li>
                        <li><a href=""><i class="xi-facebook"></i></a></li>
                        <li><a href=""><i class="xi-instagram"></i></a></li>
                        <li><a href=""><i class="xi-youtube-play"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="bottom">
                <div class="inner">
                    <address class="left">
                        주소 : 서울특별시 강남구 테헤란로 521, 21층(삼성동, 파르나스타워) COPYRIGHT &copy; CREVERSE INC. ALL RIGHTS RESERVED.
                    </address>
                    <div class="right">
                        <form action="">
                            <select id="f_link">
                                <option value="">Family Site</option>
                                <option value="">브랜드 채널</option>
                                <option value="">제휴 프로그램</option>
                                <option value="">러닝 솔루션</option>
                                <option value="">교재 쇼핑몰</option>
                                <option value="">강사 채용</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>

          </div>
        </footer>
    )
}

export default Footer;