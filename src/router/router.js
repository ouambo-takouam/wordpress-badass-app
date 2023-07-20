import { createBrowserRouter } from 'react-router-dom';
import { GalerieProduits } from '../pages/products/001-galerie-produits.component';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <p>Hello world</p>,
	},
	{
		path: '/001-galerie-produits',
		element: <GalerieProduits />,
	},
]);
