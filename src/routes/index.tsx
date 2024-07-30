import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Editor from '../pages/editor';

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
		],
	},
]);

export default router;
