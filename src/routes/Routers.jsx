import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home/Home';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
import Player from '../pages/Player/Player';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Layout/Dashboard/Dashboard';
import Welcome from '../pages/Dashboard/Welcome/Welcome';
import InstructorRoute from './InstructorRoute';
import AddCourse from '../pages/Dashboard/Instructor/AddCourse';
import SignUp from '../pages/SignUp/SignUp';
import ManageCourses from '../pages/Dashboard/Instructor/ManageCourses/ManageCourses';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,

		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/course/:id',
				element: <CourseDetails></CourseDetails>,
			},
          
			{
				path: '/player',
				element: <Player />
			}
			
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/dashboard',
				element: <Welcome></Welcome>,
			},
			{
				path: '/dashboard/addCourse',
				element: (
					<InstructorRoute>
						<AddCourse></AddCourse>
					</InstructorRoute>
				),
			},
			{
				path: '/dashboard/manageCourses',
				element: (
					<InstructorRoute>
						<ManageCourses></ManageCourses>
					</InstructorRoute>
				),
			},
			
		],
	},
	{
		path: '/login',
		element: <Login></Login>,
	},
	{
		path: '/signUp',
		element: <SignUp></SignUp>,
	},
	
]);
