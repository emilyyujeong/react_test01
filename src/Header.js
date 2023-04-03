import { Link } from "react-router-dom";
import jQuery from "jquery";
import $ from "jquery";




$(function () {


    $('.m_open').on('click', function () {
        $('.Header').toggleClass('on');
        $('.m_btn').toggleClass('on');
    });

    $('.Header').on('scroll wheel touchmove', function () {
        if ($(this).hasClass('on')) {
            return false;
        }
    });


    $('.Header .search_toggle button').on('click', function () {
        $('.Header .search').toggleClass('on')
    })

});







function Header() {

    return (
        <header className="Header">
            <>
                <div className="inner">
                    <h1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + '/assets/logo.svg'}
                                alt="" />
                        </Link>
                    </h1>
                    <nav className="gnb">
                        <ul>
                            <li>
                                <a href="">브랜드소개</a>
                                <div className="menu_wrap">
                                    <ul className="submenu">
                                        <li><a href="">청담어학원</a></li>
                                        <li><a href="">April어학원</a></li>
                                        <li><a href="">CMS영재관</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="">입학안내</a>
                                <div className="menu_wrap">
                                    <ul className="submenu">
                                        <li><a href="">국내학원</a></li>
                                        <li><a href="">해외학원</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="">채널 크레버스</a>
                                <div className="menu_wrap">
                                    <ul className="submenu">
                                        <li><a href="">크레버스 소식</a></li>
                                        <li><a href="">크레버스 스토리</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="">스토리</a></li>
                            <li><a href="">톡톡에듀</a></li>
                        </ul>
                    </nav>

                    <div className="m_open">
                        <button className="m_btn">
                            <span>mobile open button</span>
                        </button>
                    </div>
                </div>
            </>
        </header>
    )
}

export default Header;