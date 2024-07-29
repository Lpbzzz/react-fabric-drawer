import { Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	console.log('location:', location);
	return (
		<div>
			<h1>go edit</h1>
			<Button
				onClick={() => {
					navigate('/editor');
				}}
			>
				go editor
			</Button>
			<Button
				onClick={() => {
					navigate('/');
				}}
			>
				go home
			</Button>
			{<Outlet />}
		</div>
	);
};

export default Home;
