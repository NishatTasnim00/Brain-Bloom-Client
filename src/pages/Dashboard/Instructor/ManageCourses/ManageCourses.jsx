import { useContext, useEffect, useState } from "react";
import ManageCoursesCard from "./ManageCoursesCard";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useGetUser from "../../../../hooks/useGetUser";
import Title from "../../../../components/Title/Title";
import toast from "react-hot-toast";

const ManageCourses = () => {

  const { user, loading, setLoading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { userdata } = useGetUser();
  const [myCourses, setMyCourses] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/courses/${user.email}`)
      .then((data) => setMyCourses(data.data));
  }, [axiosSecure, loading, myCourses]);

  const handleUpdateStatus = (_id, status) => {
  
    axiosSecure
      .patch(`/course/${_id}`, { status: status })
      .then((response) => {
        console.log(response);
        if (response?.data?.modifiedCount > 0) {
       
        }
      })
      .catch((error) => {
        console.error("Error updating class:", error);
      });
  };


  const handledelete = (_id) => {
  
    axiosSecure
      .delete(`/deleteCourse/${_id}`)
      .then((response) => {
        console.log(response);
        if (response?.data?.modifiedCount > 0) {
       toast.success("Deleted Successfully!")
        }
      })
      .catch((error) => {
        console.error("Error updating class:", error);
      });
  };

  return (
    <div className="">
      <Title heading={"All Courses at a glance"}></Title>
      <div className="w-10/12 space-y-8 mx-auto">
        {myCourses.map((singleCourse) => (
          <ManageCoursesCard
            handleUpdateStatus={handleUpdateStatus}
            handledelete={handledelete}
            key={singleCourse._id}
            singleCourse={singleCourse}

          ></ManageCoursesCard>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
