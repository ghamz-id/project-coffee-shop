import { useEffect, useState } from "react";
import Card from "../components/card";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL } from "../../constants";

export default function Home_Page() {
	const [data, setData] = useState([]);
	const Fetch = async (e) => {
		try {
			const { data } = await axios({
				method: "get",
				url: BASE_URL + "/products",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("access_token"),
				},
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

	const Payment = () => {
		window.snap.pay("TRANSACTION_TOKEN_HERE", {
			onSuccess: function (result) {
				/* You may add your own implementation here */
				alert("payment success!");
				console.log(result);
			},
			onPending: function (result) {
				/* You may add your own implementation here */
				alert("wating your payment!");
				console.log(result);
			},
			onError: function (result) {
				/* You may add your own implementation here */
				alert("payment failed!");
				console.log(result);
			},
			onClose: function () {
				/* You may add your own implementation here */
				alert("you closed the popup without finishing the payment");
			},
		});
	};

	return (
		<>
			<div className="h-screen mt-20 grid grid-cols-4 gap-2 mx-24">
				{data.map((el) => (
					<Card el={el} Payment={Payment} key={el.id} />
				))}
			</div>
		</>
	);
}
