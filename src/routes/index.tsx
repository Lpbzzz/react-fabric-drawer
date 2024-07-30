import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Editor from '@/pages/editor';
import Chart from '@/pages/chart';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		id: 'home',
		children: [
			{
				path: 'editor',
				element: <Editor />,
				id: 'editor',
			},
			{
				path: 'chart',
				element: <Chart />,
				id: 'chart',
			},
		],
	},
]);

export default router;
