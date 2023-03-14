import { Link } from "react-router-dom";

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
                            <li><a href="">브랜드소개</a></li>
                            <li><a href="">입학안내</a></li>
                            <li><a href="">채널 크레버스</a></li>
                            <li><a href="">이벤트</a></li>
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