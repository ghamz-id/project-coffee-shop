import "./App.css";
import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from "react-router-dom";
import Home_Page from "./views/home_page";
import { Provider } from "react-redux";
import store from "./store";
import MainLayout from "./components/mainLayout";
import Product from "./views/product";
import Form_Data from "./views/form_data";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		loader: () => {
			if (localStorage.access_token) {
				return null;
			}
			return redirect("/");
		},
		children: [
			{
				path: "/products",
				element: <Product />,
			},
			{
				path: "/products/:id",
				element: <Product />,
			},
			{
				path: "/form",
				element: <Form_Data />,
			},
		],
	},
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home_Page />,
				loader: () => {
					if (localStorage.access_token) {
						return redirect("/products");
					}
					return null;
				},
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
