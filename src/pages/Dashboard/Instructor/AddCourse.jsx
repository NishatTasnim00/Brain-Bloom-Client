import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useGetUser from "../../../hooks/useGetUser";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/Title/Title";

const AddCourse = () => {
  const { userData } = useGetUser();
  const [value, setValue] = useState("Upload Image:");
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  // console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (newData) => {
    // console.log(newCourse);

    // Image Upload
    const image = newData.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // console.log(newCourse.image[0].name);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    axios
      .post(url, formData)
      .then((imageData) => {
        console.log(imageData);
        if (imageData.data.success) {
          const imageUrl = imageData.data.data.url;
          const {
            course_name,
            category,
            rating,
            name,
            email,
            readingTitle,
            readingLink,
            assignmentTitle,
            assignmentDeadline,
          } = newData;
          const newCourse = {
            course_name,
            category,
            rating,
            status: "pending",
            instructor: {
              name: name,
              email: email,
            },

            course_content: {
              readings: [
                {
                  title: readingTitle,
                  url: readingLink,
                },
              ],
              assignments: [
                {
                  title: assignmentTitle,
                  deadline: assignmentDeadline,
                },
              ],
            },
          };
          console.log(imageUrl);
          console.log(newCourse);
          axiosSecure
            .post(`${import.meta.env.VITE_API_URL}/courses`, newCourse)
            .then((result) => {
              console.log(newCourse);
              if (result.data.insertedId) {
                Swal.fire({
                  title: "Welcome!",
                  text: "Course added successfully!",
                  icon: "success",
                  buttons: false,
                  className: "text-red-800",
                  closeModal: false,
                  timer: 1500,
                });
                navigate("/dashboard/myCourses");
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-full">
      <Title heading={"Launch a new course"}></Title>
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 mx-auto">
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="grid lg:grid-cols-2">
          <div className="w-full px-5">
            <label className="label">
              <span className="text-add-class">Course Name</span>
            </label>
            <input
              className="input add-class capitalize"
              {...register("course_name")}
              placeholder="Course Name"
              required
            />
          </div>
          <div className="w-full px-5">
            <label className="label">
              <span className="text-add-class">Category</span>
            </label>
            <input
              className="input add-class capitalize"
              {...register("category")}
              placeholder="Category"
              required
            />
          </div>

          <div className="w-full px-5 relative">
            <label className="label">
              <span className="text-add-class">Image</span>
            </label>
            <div className="input add-class relative ">
              <input
                className="opacity-100 top-2 absolute"
                {...register("image")}
                type="file"
                accept="image/*"
                placeholder="Image"
                required
              />
              <p className="pt-2 z-10 top-1 absolute bg-slate-100 p-[6px] left-0">
                {value}
              </p>
            </div>
          </div>
          <div className="w-full px-5">
            <label className="label">
              <span className="text-add-class">Rating</span>
            </label>
            <input
              className="input add-class"
              {...register("rating")}
              placeholder="Rating"
              type="number"
              min={0}
              max={5}
              required
            />
          </div>

          <div className="w-full px-5">
            <label className="label">
              <span className="text-add-class">Reading Title</span>
            </label>
            <input
              className="input add-class"
              {...register("readingTitle")}
              placeholder="Reading Title"
            />
          </div>
          <div className="w-full px-5">
            <label className="label">
              <span className="text-add-class">Reading Link</span>
            </label>
            <input
              className="input add-class"
              {...register("readingLink")}
              placeholder="Reading Link"
            />
          </div>

          <div className="w-full px-5">
            <label className="label">
              <span className="text-add-class">Assignment Title</span>
            </label>
            <input
              className="input add-class"
              {...register("assignmentTitle")}
              placeholder="Assignment Title"
            />
          </div>
          <div className="w-full px-5">
            <label className="label">
              <span className="text-add-class">Assignment Deadline</span>
            </label>
            <input
              className="input add-class"
              {...register("assignmentDeadline")}
              type="date"
            />
          </div>
        </div>

        <div className="w-full px-5" hidden>
          <label className="label">
            <span className="text-add-class">Status</span>
          </label>
          <input
            className="input add-class"
            {...register("status")}
            placeholder="Status"
            value="pending"
            required
          />
        </div>
        <div className="w-full px-5" hidden>
          <label className="label">
            <span className="text-add-class">Instructor Name</span>
          </label>
          <input
            className="input add-class"
            {...register("name")}
            // placeholder="Instructor Name"
            value={user.displayName}
            required
          />
        </div>
        <div className="w-full px-5" hidden>
          <label className="label">
            <span className="text-add-class">Email</span>
          </label>
          <input
            className="input add-class"
            {...register("email")}
            placeholder="Email"
            value={user.email}
            required
          />
        </div>

        <div className="w-full p-5 ">
          <button type="submit" className="btn btn-block btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
