import React, { useState, Component, setDate } from "react";
import logo from "../../assets/logo_ubacaa.png";
import axios, { Axios } from "axios";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [validation, setValidation] = useState([]);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_pass: "",
    nama: "",
    tgl_lahir: "",
    jenis_kelamin: "",
  });

  function registration(e) {
    e.preventDefault();
    if (data.password === data.confirm_pass) {
      // delete data.confirm_pass;
      setLoader(true)
      axios
        .post(`https://admin.u-baca.my.id/api/auth/register`, data)
        .then((res) => {
          setLoader(false)
          console.log(res);
          setData({
            email: "",
            password: "",
            confirm_pass: "",
            nama: "",
            tgl_lahir: "",
            jenis_kelamin: "",
          });
          alert("Register Berhasil");
          navigate("/sign-in");
        })
        .catch((e) => {
          setLoader(false)
          console.log(e);
          setValidation(e.response.data);
        });
      } else {
        alert("Password tidak sesuai");
      }
  }

  return (
    <>{
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
        <div className="row d-flex pt-4 justify-content-center">
          <div className="col-9">
            <form className="formlogin Buat Akun" method="post" onSubmit={registration}>
              <h3 className="mb-2">Buat Akun</h3>
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  type="email"
                  className="mail text-black mb-2"
                  placeholder="Email"
                  value={data.email}
                />
                  {validation.email && (<span class="alert alert-danger p-1">{validation.email[0]}</span>)}
              </div>
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                  type="password"
                  className="password text-black mb-2"
                  placeholder="Password"
                  value={data.password}
                />
                {validation.password && (<span class="alert alert-danger p-1">{validation.password[0]}</span>)}
              </div>
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setData({ ...data, confirm_pass: e.target.value });
                  }}
                  type="password"
                  className="password text-black mb-2"
                  placeholder="Konfimasi Password"
                  value={data.confirm_pass}
                />
              </div>
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setData({ ...data, nama: e.target.value });
                  }}
                  type="nama lengkap"
                  className="user text-black mb-2"
                  placeholder="Nama Lengkap"
                  value={data.nama}
                />
                {validation.nama && (<span class="alert alert-danger p-1">{validation.nama[0]}</span>)}
              </div>
              <div className="mb-2">
                <input
                  onChange={(e) => {
                    setData({ ...data, tgl_lahir: e.target.value });
                  }}
                  type="date"
                  className="date text-black mb-2"
                  placeholder="Tanggal Lahir"
                  value={data.tgl_lahir}
                />
                {validation.tgl_lahir && (<span class="alert alert-danger p-1">{validation.tgl_lahir[0]}</span>)}
              </div>
              <div className="gender jenis kelamin text-black mb-2">
              <div className="mb-1">
                <input
                  onChange={(e) => {
                    setData({ ...data, jenis_kelamin: e.target.value });
                  }}
                  id="laki"
                  type="radio"
                  value="laki-laki"
                  checked={data.jenis_kelamin === "laki-laki"}
                />
                <label className="ms-1" for="laki"> Laki-laki </label>
              </div>
              <div className="mb-1">
                <input
                  onChange={(e) => {
                    setData({ ...data, jenis_kelamin: e.target.value });
                  }}
                  type="radio"
                  value="perempuan"
                  id="perempuan"
                  checked={data.jenis_kelamin === "perempuan"}
                />
                <label className="ms-1" for="perempuan"> Perempuan </label>
                {validation.jenis_kelamin && (<span class="alert alert-danger p-1">{validation.jenis_kelamin[0]}</span>)}
              </div>
              </div>
              <div className="d-flex justify-content-end align-items-center mb-4">
                <h6 className="forgot-password pt-2 pe-4">
                  Sudah ada akun?{" "}
                  <Link to="/sign-in" id="link">
                    Log in
                  </Link>
                </h6>
                <button type="submit" className="btn btn-success px-4">
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
