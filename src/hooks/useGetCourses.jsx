import React, { useContext } from 'react';
import useGetUser from './useGetUser';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useGetCourses = () => {
	const axiosSecure = useAxiosSecure();
	const { user, loading } = useContext(AuthContext);
	const { userData } = useGetUser();
	const { data: courses = [], refetch } = useQuery({
		queryKey: ['courses', user?.email],
		enabled: !loading,
		queryFn: async () => { 
			if( !user ){ 
				return []
			}
			const result = await axiosSecure.get(`/courses`);
			return result.data;
		},
	});

	return [ courses, refetch ];
};

export default useGetCourses;