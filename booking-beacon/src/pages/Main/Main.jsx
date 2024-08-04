import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to={"/login"}>로그인</Link>
      <p></p>
      <Link to={"/signup"}>회원가입</Link>
    </div>
  );
}

export default Main;
