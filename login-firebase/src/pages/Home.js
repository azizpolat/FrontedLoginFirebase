import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  if (user) {
    return (
      <div>
        <h1>HoşGeldiniz...!</h1>
      </div>
    );
  }
  return (
    <div>
      <Link to="/register">Kayıt Ol</Link>
      <Link to="/login">Giriş Yap</Link>
    </div>
  );
};

export default Home;
