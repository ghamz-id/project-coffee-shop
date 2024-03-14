import { useState } from "react";
import Card from "../components/card";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";

export default function Home_Page() {
	const [data, setData] = useState();
	const Fetch = async (e) => {
		try {
			const { data } = await axios({
				method: "get",
				url: BASE_URL + "/pub-product",
			});
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		Fetch();
	}, []);

	return <Card />;
}
