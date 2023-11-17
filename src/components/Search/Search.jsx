import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CoursesCard from "../../pages/Home/Courses/CoursesCard";

const Search = () => {
  const [searchText, setSearchText] = useState(null);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  console.log(courses);
  const axiosSecure = useAxiosSecure();
  const handleSearch = () => {
    axiosSecure
      .get(`${import.meta.env.VITE_API_URL}/courses/search/${searchText}`)
      .then((data) => {
        setCourses(data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="w-full flex justify-center mx-auto">
        <div className="relative">
          <div className="join">
            <input
              className="input input-bordered join-item"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Text"
            />
            <button
              className="btn join-item rounded-r-full primary-btn"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses?.map((course) => (
          <CoursesCard key={course?._id} singleCourse={course} />
        ))}
      </div>
    </>
  );
};

export default Search;
