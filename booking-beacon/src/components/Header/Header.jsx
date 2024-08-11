import { Link } from "react-router-dom";
import { CategoryWrapper, CommonHeader, UserWrapper } from "./HeaderStyle";
import iconImg from "../../assets/icon/favicon.png";
import "./Header.css";

function Header({ isLogin, setIsLogin, userName, setUserName }) {
  const onclickLogoutButton = () => {
    setIsLogin(false);
    setUserName("");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <CommonHeader>
      <Link to={"/"}>
        <img className={"header-logo-img"} src={iconImg} alt="" />
      </Link>
      <CategoryWrapper>
        <p>뮤지컬</p>
        <p>콘서트</p>
        <p>연극</p>
      </CategoryWrapper>
      <UserWrapper>
        <div style={{ display: isLogin == false ? "flex" : "none" }}>
          <Link to={"/login"}>로그인</Link>
          <Link to={"/signup"}>회원가입</Link>
        </div>
        <div style={{ display: isLogin == true ? "flex" : "none" }}>
          <p>{userName + "님 "}</p>
          <p onClick={onclickLogoutButton}>로그아웃</p>
        </div>
      </UserWrapper>
    </CommonHeader>
  );
}

export default Header;
