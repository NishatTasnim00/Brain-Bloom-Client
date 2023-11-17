import React, { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { RiDeleteBinLine } from "react-icons/ri";



const ManageCoursesCard = ({ singleCourse, handleUpdateStatus, handledelete }) => {
    const { _id, image, course_name, instructor, rating, status } =
    singleCourse;

  return (
    <div className="card rounded-sm card-side shadow-xl w-full h-80">
      <figure className="w-4/12">
        <img className="h-full" src={image} alt="photo" />
      </figure>
      <div className="p-10 bg-accent bg-opacity-80 text-base-100 w-8/12 relative space-y-3">
      <div className="absolute right-5 top-5">
        <button onClick={()=>handledelete(_id)}><RiDeleteBinLine size={28} className="hover:text-red-400"/></button>
      </div>
        <h2 className="card-title capitalize">{course_name}</h2>
        <p className="capitalize">Conducted by : {instructor?.name}</p>
        <p>Contact : {instructor?.email}</p>
        <p>
          Current Status : <span className="capitalize">{status}</span>
        </p>
        <div className="">
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(rating) || 0}
            readOnly
          >
          {rating}
          </Rating>
        </div>
       

        <div className="card-actions justify-end mt-16">
          <button
            onClick={() => {
              handleUpdateStatus(_id, "approved");
            }}
            className="btn btn-primary w-3/12"
            disabled={status === "pending" ? false : true}
          >
            Approve
          </button>
          <button
            onClick={() => {
              handleUpdateStatus(_id, "denied");
            }}
            className="btn btn-primary w-3/12"
            disabled={status === "pending" ? false : true}
          >
            Deny
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ManageCoursesCard;
