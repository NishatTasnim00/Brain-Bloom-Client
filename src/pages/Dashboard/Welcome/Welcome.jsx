import React from 'react';
import  Lottie  from 'lottie-react';
import welcome from '../../../../welcomeAni.json'
import useGetUser from '../../../hooks/useGetUser';
import Title from '../../../components/Title/Title';

const Welcome = () => {
    const {userData} = useGetUser()
    return (
			<div className='container'>
				<Title heading={`Hello ! ${userData.name}`} subheading={'Welcome to Brain BlooM!'}></Title>

				<div>
					<Lottie className='h-64' animationData={welcome} loop={true} ></Lottie>
				</div>
			</div>
		);
};

export default Welcome;