import './reset.css';
import './text.css';
import { FiTwitter, FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

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
                            <li><a href=""><FiYoutube /> </a></li>
                            <li><a href=""><FiFacebook /></a></li>
                            <li><a href=""><FiInstagram /> </a></li>
                            <li><a href=""><FiTwitter /> </a></li>
                        </ul>
                    </div>
                </div>
                <div class="bottom">
                    <div class="inner">
                        <address class="left">
                            주소 : 서울특별시 강남구 테헤란로 521, 21층(삼성동, 파르나스타워)
                            <div className="copy">
                                COPYRIGHT &copy; CREVERSE INC. ALL RIGHTS RESERVED.
                            </div>
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