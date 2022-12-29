import React, { useEffect, useState, useRef } from "react";
import "antd/dist/antd.css";
import coint from "../assets/coint.PNG";
import UnlockCard from "./UnlockCard";
import axios from "axios";
import pria from "../assets/foto-profil-pria.png";
import wanita from "../assets/foto-profil.png";

function User() {
  const [profile, setProfile] = useState([]);
  const [bookData, setBookData] = useState([]);
  const token = localStorage.getItem("token");
  const [loader, setLoader] = useState(false);
  const [change, setChange] = useState(null);
  let imageUploader = useRef(null);
  let [selectedFile, setSelectedFile] = useState(null);
  let [sendImage, setSendImage] = useState(false);

  let uploadFile = async (event) => {
    event.preventDefault();
    setLoader(true);
    let formData = new FormData();
    formData.append("picture", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "https://admin.u-baca.my.id/api/user/change-profile-picture",
        data: formData,
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(response.data.message);
      console.log(response.data.message);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      alert(error.data.data.message);
    }
    setSendImage(false);
    change ? setChange(false) : setChange(true);
  };

  function handleImageUpload(event) {
    setSelectedFile(event.target.files[0]);
    setSendImage(true);
  }

  function profile_picture(param) {
    if (param.picture != null) {
      return param.picture;
    }
    if (param.jenis_kelamin == "perempuan") {
      return wanita;
    } else {
      return pria;
    }
  }

  useEffect(() => {
    axios
      .get("https://admin.u-baca.my.id/api/book/enroll-book/get-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBookData(res.data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://admin.u-baca.my.id/api/user/get-user-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res.data.data);
      });
  }, [change]);

  return (
    <div id="main">
      {loader ? (
        <div class="position-fixed bg-dark w-100 h-100 bg-opacity-25">
          <div class="position-relative position-absolute top-50 start-50 translate-middle">
            <div class="spinner-border text-primary" role="status"></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <h2 className="title"> My Account </h2>
      <center>
        <input
          type="file"
          accept="image/*"
          onChange={(event) => handleImageUpload(event)}
          ref={imageUploader}
          style={{
            display: "none",
            height: "60px",
            width: "60px",
          }}
        />
        <div
          style={{
            height: "120px",
            width: "120px",
            border: "1px dashed black",
            borderRadius: "50%",
          }}
        >
          <img
            src={profile_picture(profile)}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
          />
        </div>
        <p style={{ cursor: "pointer", width: "200px" }} onClick={() => imageUploader.current.click()}>
          {" "}
          Click to change avatar{" "}
        </p>
        {sendImage && (
          <button className="btn btn-primary btn-sm" onClick={(event) => uploadFile(event)}>
            Submit
          </button>
        )}
      </center>
      <h4 className="nama">{profile?.nama}</h4>

      <div id="point">
        <center>
          <h4 className="point-2">
            <img src={coint} width={35} alt="" /> {profile?.point}
          </h4>
        </center>
      </div>

      <h4 className="tukar">My Collection</h4>

      <div className="card-container">
        <UnlockCard book={bookData} />
        <br />
        <br />
      </div>
    </div>
  );
}

export default User;
