import { Link } from "react-router-dom";
import { BsHouseDoorFill, BsFillPersonFill } from "react-icons/bs";

function TopBanner() {
    return (
        <div class="TopBanner">
            <>
                <div class="inner">
                    <div class="top_left">
                        <ul>
                            <li><a href=""><BsHouseDoorFill /> HOME</a></li>
                            <li><a href="">COMPANY</a></li>
                        </ul>
                    </div>

                    <div class="top_right">
                        <ul>
                            <li><a href="">로그인</a></li>
                            <li><a href="">회원가입</a></li>
                        </ul>
                    </div>
                </div>
            </>


        </div>
    )
}

export default TopBanner;