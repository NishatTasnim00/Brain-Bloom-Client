import React, { useState } from "react";
import CoursesCard from "../../pages/Home/Courses/CoursesCard";

// Assuming filterCourses function is defined here

const CourseFilter = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [minRating, setMinRating] = useState(0);

  // Assuming courses is an array containing the dataset

  function filterCourses(
    searchTerm,
    selectedCategory,
    selectedInstructor,
    minRating
  ) {
    return courses?.filter((course) => {
      const nameMatch = course.course_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const categoryMatch =
        !selectedCategory || course.category === selectedCategory;
      const instructorMatch =
        !selectedInstructor || course.instructor.name === selectedInstructor;
      const ratingMatch = course.rating > 0 && course.rating >= minRating;

      return nameMatch && categoryMatch && instructorMatch && ratingMatch;
    });
  }

  const filteredCourses = filterCourses(
    searchTerm,
    selectedCategory,
    selectedInstructor,
    minRating
  );

  return (
    <div className="container mx-auto my-8 p-4">
     

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full mb-4 p-2 border rounded-lg border-gray-300"
      >
        <option value="">All Categories</option>
        {courses?.map((course) => (
    <option key={course?._id} value={course?.category}>
      {course?.category}
    </option>
  ))}      </select>

      {/* Instructor Filter */}
      <select
  value={selectedInstructor}
  onChange={(e) => setSelectedInstructor(e.target.value)}
  className="w-full mb-4 p-2 border rounded-lg border-gray-300"
>
  <option value="">All Instructors</option>
  {courses?.map((course) => (
    <option key={course?.instructor?.name} value={course?.instructor?.name}>
      {course?.instructor?.name}
    </option>
  ))}
</select>


      {/* Minimum Rating Filter */}
      <input
        type="number"
        placeholder="Minimum Rating"
        value={minRating}
        onChange={(e) => setMinRating(parseFloat(e.target.value))}
        className="w-full mb-4 p-2 border rounded-lg  border-gray-300"
      />

      {/* Display Filtered Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses?.map((course) => (
          <CoursesCard key={course?._id} singleCourse={filterCourses} />
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;
