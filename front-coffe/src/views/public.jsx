import { useEffect, useState } from "react";
import Card from "../components/card";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useNavigate, useParams } from "react-router-dom";

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

	const { id } = useParams();
	const Payment = async () => {
		try {
			const { data } = await axios({
				method: "post",
				url: BASE_URL + `/products/payment/${id}`,
			});
			console.log(data);
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

	const navigate = useNavigate();
	useEffect(() => {
		if (id) {
			Payment();
			navigate("/home");
		}
	}, [id]);

	return (
		<>
			<div className="mt-20 grid gap-4 justify-center sm:grid-cols-2 sm:mx-10 lg:grid-cols-3 lg:mx-24 xl:grid-cols-4 xl:mx-48">
				{data.map((el) => (
					<Card el={el} Payment={Payment} key={el.id} />
				))}
			</div>
		</>
	);
}
