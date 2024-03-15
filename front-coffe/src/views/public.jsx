import { useEffect, useState } from "react";
import Card from "../components/card";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL } from "../../constants";

export default function Public() {
	const [data, setData] = useState([]);
	const Fetch = async (e) => {
		try {
			const { data } = await axios({
				method: "get",
				url: BASE_URL + "/pub-product",
			});
			setData(data);
		} catch (error) {
			Swal.fire({
				title: error.response.data.msg,
				icon: "error",
			});
		}
	};
	useEffect(() => {
		Fetch();
	}, []);

	const Payment = async () => {
		try {
			const { data } = await axios({
				method: "post",
				url: BASE_URL + "/payment",
			});

			window.snap.pay(data.token, {
				onSuccess: function (result) {
					/* You may add your own implementation here */
					alert("payment success!");
					console.log(result);
				},
			});
		} catch (error) {
			Swal.fire({
				title: error.response.data.msg,
				icon: "error",
			});
		}
	};

	return (
		<>
			<div className="h-screen mt-20 grid grid-cols-5 gap-2 mx-24">
				{data.map((el) => (
					<Card el={el} Payment={Payment} key={el.id} />
				))}
			</div>
		</>
	);
}
