import React, { useState } from "react";
import image2 from "../../images/read-books.png";
import logo from "../../assets/logo_ubacaa.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function masuk(e) {
    e.preventDefault();
    setLoader(true)
    axios
      .post(`https://admin.u-baca.my.id/api/auth/login`,data)
      .then((res) => {
        setLoader(false)
        let result = null;
        result = res.data

        if (result.success) {
          setData({
            email: "",
            password: "",
          });
          localStorage.setItem("profil", JSON.stringify(result.data));
          localStorage.setItem("token", result.token);
          navigate("/");
        } else {
          alert("Email atau Password anda salah");
        }
      })
      .catch((e) => {
        setLoader(false)
        alert("Email atau Password anda salah");
      });
  }

  return (
    <>
    {
      loader?(
        <div class="position-fixed bg-dark w-100 h-100 bg-opacity-25">
            <div class="position-relative position-absolute top-50 start-50 translate-middle">
              <div class="spinner-border text-primary"  role="status"></div>
            </div>
        </div>
      ) :(<div></div>)
      }
      <div className="container kotak">
        <div className="row">
          <div className="col-12 ps-1 pt-2">
            <Link to="/">
              <img src={logo} width="200" />
            </Link>
          </div>
        </div>

        <div className="row d-flex pt-5 justify-content-center">
          <div className="col-5 pt-5">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <form className="formlogin" method="post" onSubmit={masuk}>
                  <h3 className="mb-2">Log In</h3>
                  <h6 className="mb-4 text-dark">
                    Belum ada akun?{" "}
                    <Link to="/sign-up" id="link">
                      Daftar
                    </Link>
                  </h6>
                  <div className="mb-4">
                    <input
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
                      type="text"
                      className="mail Input text-black"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      onChange={(e) => {
                        setData({ ...data, password: e.target.value });
                      }}
                      type="password"
                      className="password text-black"
                      placeholder="Password"
                    />
                  </div>

                  <div className="d-flex justify-content-end">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-success px-4">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-7 pt-2 login-kanan" style={{ overflow: "hidden" }}>
            <img src={image2} className="login-kanan" width="auto" height="auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
