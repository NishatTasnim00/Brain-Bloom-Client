import { useQuery } from '@tanstack/react-query';
import  { useContext, useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';



const useGetUser = () => {
	const navigate = useNavigate();

	const { user, loading, setLoading, logOut } = useContext(AuthContext);
	const [role, setRole] = useState('');
	const axiosSecure = useAxiosSecure();

	const { data: userData = [], refetch } = useQuery({
		queryKey: ['userData', user?.email],
		enabled: !loading,
		queryFn: async () => {
			if (!user){
				return []
			}
			const result = await axiosSecure.get(`/users/${user?.email}`);
			setRole(result?.data?.role);
			return result.data;
		},
	});


	// useEffect(() => {
	// 	if (!loading && userData.length === 0) {
		
	// 	}
	// }, [loading, userData]);

	return { role, userData, refetch };
};

export default useGetUser;
