import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "../../components/CourseDetails/Videos";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const id = useParams();
  const axiosSecure = useAxiosSecure();

  console.log(id);
  useEffect(() => {
    axiosSecure.get(`/course/${id.id}`).then((data) => setCourse(data.data));
  }, []);
  console.log(course);


  // const { rating } = course;
  return (
    <div className="my-container mx-auto bg-white rounded-md overflow-hidden shadow-lg mb-4 lg:p-10 lg:flex justify-between">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{course?.course_name}</h2>
        <p className="text-gray-600 mb-4">
          {" "}
          <span className="text-xl font-semibold mb-2">Instructor:</span>{" "}
          {course?.instructor?.name}
        </p>

       {course?.syllabus &&
        ( <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Syllabus</h3>
        <ul className="list-disc list-inside">
          {course && course.syllabus ? (
            Object.entries(course.syllabus)?.map(([week, topic]) => (
              <li key={week}>{`${week}: ${topic}`}</li>
            ))
          ) : (
            <li>
              {console.error("Course or syllabus is undefined or null")}
            </li>
          )}
        </ul>
      </div>)
       }

        {
          course?.contents && (<div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Course Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {course?.course_content?.videos &&
              course?.course_content?.videos?.map((video, i) => (
                <Videos video={video} key={i} id={course?._id}></Videos>
              ))}
          </div>
        </div>)
        }

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Assignments</h3>
          <ul className="list-disc list-inside">
            {course?.course_content.assignments?.map((assignment, index) => (
              <li key={index}>
                {`${assignment.title}: Deadline - ${assignment?.deadline}`}
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(course?.rating) || 0}
            readOnly
          >
          {course?.rating}
          </Rating>
          <p className="text-xl font-semibold text-pink-400 mt-1">Rating: {course?.rating}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <figure className="h-96 w-96 rounded-lg">
          <img className="h-96 w-96 rounded-lg image-full" src={course?.image} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default CourseDetails;
