import React from "react";
import Courses from "../Courses/Courses";
import Search from "../../../components/Search/Search";
import Banner from "../../../components/Home/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-container space-y-20 mt-20">
        <Search />
        <Courses />
      </div>
    </div>
  );
};

export default Home;
