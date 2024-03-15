import "./App.css";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import Home_Page from "./views/home_page";
import { Provider } from "react-redux";
import store from "./store";
import MainLayout from "./components/mainLayout";
import Product from "./views/product";
import Form_Data from "./views/form_data";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home_Page />,
			},
			{
				path: "/products",
				element: <Product />,
			},
			{
				path: "/form",
				element: <Form_Data />,
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
