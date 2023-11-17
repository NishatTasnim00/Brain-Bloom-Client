
import img from '../../loading.json';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useGetUser from "../hooks/useGetUser";
import { useLocation } from "react-router-dom";

const InstructorRoute = ({ children }) => {
	const { role } = useGetUser();
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return (
			<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center min-h-[calc(vh-632px)] py-14">
				<Lottie className="h-96" animationData={img} loop={true} />
			</div>
		);
	}
	if (user && role === 'instructor') {

		return children;
	} else {
		return ;
	}
};

export default InstructorRoute;
