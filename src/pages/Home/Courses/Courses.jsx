import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import Title from '../../../components/Title/Title';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loader from '../../../components/Loader';
import CoursesCard from './CoursesCard';
import CourseFilter from '../../../components/CourseFilter/CourseFilter';
import { AuthContext } from '../../../Provider/AuthProvider';
import useGetUser from '../../../hooks/useGetUser';
import { useNavigate } from 'react-router-dom';
import { data } from 'autoprefixer';

const Courses = () => {
	const[loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const axiosSecure = useAxiosSecure();
	const { user  } = useContext(AuthContext);
	const { userData } = useGetUser();
const[courses, setCourses] = useState([])

useEffect(()=>{
	axiosSecure.get(`/courses`)
.then(data=>{
	setCourses(data.data)
})
},[axiosSecure, loading])




	 const handleEnroled = async (userId, courseId) => {
		setLoading(true)
			const updateDoc = {
				userId: userId,
				courseId: courseId,
			};
			console.log(updateDoc);

			await axiosSecure
				.post(`${import.meta.env.VITE_API_URL}/enrolled`, updateDoc)
				.then((result) => {
					console.log(result)
					if(result.data.modifiedCount>0){
						setLoading(false)
						toast.success('Enrolled successfully');
				
					}else{
						toast.error(result?.data?.message);
					}
					console.log(result);
					// toast.success(result?.data?.message);
				})
				.catch((error) => {
					console.log(error);
					// toast.error(error?.response?.data?.message);
				});
		};

		const handleFav = async (userId, courseId) => {
			setLoading(true)
			const updateDoc = {
				userId: userId,
				courseId: courseId,
			};
	
			await axiosSecure
				.patch(`${import.meta.env.VITE_API_URL}/fav`, updateDoc)
				.then((result) => {
					
					console.log(result.data)
					if(result.data.modifiedCount>0){
						setLoading(false)
						toast.success('Added in Favorite List');
						
					}else{
						toast.error(result?.data?.message);
						setLoading(false)
					}
					console.log(result);
					// toast.success(result?.data?.message);
				})
				.catch((error) => {
					console.log(error);
					// toast.error(error?.response?.data?.message);
				});
		};
		
		
	if (loading) {
		return <Loader></Loader>;
	}
	return (
		<div className="my-container">
            {/* <CourseFilter courses={courses} key={courses._id}></CourseFilter> */}
			<Title heading={'Courses List'}></Title>
			<div className="container-grid">
				{courses?.map((singleCourse) => (
					<CoursesCard
					handleEnroled={handleEnroled}
					handleFav={handleFav}
						key={singleCourse._id}
						singleCourse={singleCourse}

					></CoursesCard>
				))}
			</div>
		</div>
	);
};

export default Courses;
