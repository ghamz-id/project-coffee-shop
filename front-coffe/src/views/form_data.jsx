import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants";

export default function Form_Data() {
	const { id } = useParams();
	const [input, setInput] = useState({
		title: "",
		description: "",
		image: "",
		price: "",
		CategoryId: "",
	});

	const getInput = (e) => {
		const { name, value } = e.target;
		const newInput = {
			...input,
			[name]: value,
		};
		setInput(newInput);
	};

	const navigate = useNavigate();
	const Submit = async (e) => {
		e.preventDefault();
		const option = {
			method: "post",
			url: BASE_URL + "/products",
			data: input,
			headers: {
				Authorization: "Bearer " + localStorage.getItem("access_token"),
			},
		};
		if (id) {
			option.method = "put";
			option.url = BASE_URL + "/products/" + id;
		}

		try {
			const { data } = await axios(option);
			Swal.fire({
				title: data.msg,
				icon: "success",
			});
			navigate("/products");
		} catch (error) {
			Swal.fire({
				title: error.response.data.msg,
				icon: "error",
			});
		}
	};

	const Fetch = async () => {
		try {
			const { data } = await axios({
				method: "get",
				url: BASE_URL + `/products/${id}`,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("access_token"),
				},
			});
			setInput(data);
		} catch (error) {
			Swal.fire({
				title: error.response.data.msg,
				icon: "error",
			});
		}
	};
	useEffect(() => {
		if (id) Fetch();
	}, [id]);

	return (
		<>
			<div className="mt-16 h-screen w-full flex flex-col justify-center items-center">
				<form
					action=""
					className="flex flex-col gap-2 p-5 border w-1/2 rounded-lg bg-slate-100"
					onSubmit={Submit}
				>
					<Link
						to={"/products"}
						className="btn btn-sm btn-circle btn-ghost absolute right-[26%] top-[35%]"
					>
						✕
					</Link>
					<h1 className="font-bold mb-4 tracking-tigh text-xl text-center border-b p-3 w-1/2 m-auto">
						{id ? "Update Products" : "Input New Products"}
					</h1>
					<label className="input input-bordered flex items-center gap-2">
						Title
						<input
							type="text"
							className="grow"
							placeholder="- title"
							name="title"
							onChange={getInput}
							value={input.title}
						/>
					</label>
					<label className="input input-bordered flex items-center gap-2">
						Description
						<input
							type="text"
							className="grow"
							placeholder="- description"
							name="description"
							onChange={getInput}
							value={input.description}
						/>
					</label>
					<label className="input input-bordered flex items-center gap-2">
						Image
						<input
							type="text"
							className="grow"
							placeholder="- image URL"
							name="image"
							onChange={getInput}
							value={input.image}
						/>
					</label>
					<div className="flex justify-between gap-2">
						<label className="input input-bordered flex items-center gap-2 w-full">
							Price
							<input
								type="number"
								className="grow"
								placeholder="- price"
								name="price"
								onChange={getInput}
								value={input.price}
							/>
						</label>
						<select
							className="select select-bordered w-full max-w-xs"
							name="CategoryId"
							onChange={getInput}
							value={input.CategoryId}
						>
							<option value={""}>Category</option>
							<option value={"1"}>Iced</option>
							<option value={"2"}>Hot</option>
						</select>
					</div>
					<button type="Submit" className="btn btn-primary mt-4 w-1/2 m-auto">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
