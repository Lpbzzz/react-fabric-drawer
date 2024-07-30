import { Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>{location.pathname}</h1>
			<Button
				onClick={() => {
					navigate('/');
				}}
			>
				go home
			</Button>
			<Button
				onClick={() => {
					navigate('/editor');
				}}
			>
				go editor
			</Button>

			<Button
				onClick={() => {
					navigate('/chart');
				}}
			>
				go chart
			</Button>
			{<Outlet />}
		</div>
	);
};

export default Home;
