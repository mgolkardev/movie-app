import React from "react";
import style from "./home.style.module.scss";
import { Link } from "shared/components";

export const metadata = {
  title: "Movie App",
};

const HomePage = () => {
  return (
    <div className={style.home}>
      خوش آمدید!
      <Link href="/movies" className={style.moviesLink}>مشاهده فیلم ها</Link>
    </div>
  );
};

export default HomePage;
