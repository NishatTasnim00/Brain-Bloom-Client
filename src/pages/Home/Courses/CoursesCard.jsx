import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useGetUser from "../../../hooks/useGetUser";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";




const CoursesCard = ({ singleCourse, handleEnroled, handleFav }) => {
  const navigate = useNavigate();
  const { userData } = useGetUser();
  const { _id, image, course_name, instructor, rating } =
    singleCourse;
  // console.log(singleCourse._id)
  const handleNotUser = () => {
    toast.error("Login Please.");
    navigate("/login");
  };

  const isFav = !! userData?.favCourses?.find((fav) => fav === _id);

  console.log(isFav);

  return (
    <div className={`card  h-[500px]  shadow-lg rounded-lg`}>
      <figure className="h-[700px] w-full">
        <img
          src={image}
          alt="course"
          className="rounded-lg h- w-full object-contain"
        />
      </figure>
      <div className="flex flex-col text-left px-10 mb-10 space-y-1">
        <h2 className="text-tag">
          <span className="">Course :</span> {course_name}
        </h2>
        <h2 className="text-tag">
          <span>Instructor : </span>
          {instructor?.name}
        </h2>
        <div className="flex justify-between">
        <div className="">
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(rating) || 0}
            readOnly
          >
          {rating}
          </Rating>
        </div>
          <span>
            {" "}
            {isFav ? (
              <AiFillHeart
                onClick={() => {
                  userData ? handleFav(userData._id, _id) : handleNotUser();
                }}
                size={28}
                className="hover:scale-110 duration-300 hover:cursor-pointer text-red-500"
              />
            ) : (
              <AiOutlineHeart
                onClick={() => {
                  userData ? handleFav(userData._id, _id) : handleNotUser();
                }}
                size={28}
                className="hover:scale-110 duration-300 hover:text-gray-400 hover:cursor-pointer"
              />
            )}
          </span>
        </div>

        <div className="w-full flex justify-between gap-10 mt-7">
          <button
            onClick={() => {
              userData ? handleEnroled(userData._id, _id) : handleNotUser();
            }}
            className="btn w-1/2 rounded-lg  border-none bg-gray-950 text-white"
          >
            Enroll Now
          </button>
          <button className="btn w-1/2 rounded-lg  border-none bg-gray-950 text-white">
            <Link to={`/course/${_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
