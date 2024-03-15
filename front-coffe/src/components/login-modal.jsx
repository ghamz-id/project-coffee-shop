import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants";

export default function Form_Login() {
	const [input, setInput] = useState();
	const GetInput = (e) => {
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
		try {
			const { data } = await axios({
				method: "post",
				url: BASE_URL + "/login",
				data: input,
			});
			console.log(data);
			navigate("/products");
		} catch (error) {
			Swal.fire({
				title: error.response.data.msg,
				icon: "error",
			});
		}
	};

	return (
		<>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			<button
				className="btn btn-success btn-sm text-white"
				onClick={() => document.getElementById("my_modal_3").showModal()}
			>
				Login
			</button>
			<dialog id="my_modal_3" className="modal">
				<div className="modal-box">
					<form
						method="dialog"
						onSubmit={Submit}
						className="flex flex-col gap-2"
					>
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
						<h1 className="font-bold tracking-tigh text-xl mb-4">
							Log In/Register
						</h1>
						<label className="input input-bordered flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
								<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
							</svg>
							<input
								type="text"
								className="grow"
								placeholder="Email"
								name="email"
								onChange={GetInput}
							/>
						</label>
						<label className="input input-bordered flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path
									fillRule="evenodd"
									d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
									clipRule="evenodd"
								/>
							</svg>
							<input
								type="password"
								className="grow"
								placeholder="Password"
								name="password"
								onChange={GetInput}
							/>
						</label>
						<button type="Submit" className="btn btn-primary my-4 w-1/2 m-auto">
							Continue
						</button>
					</form>
					<p className="text-center font-bold">- OR -</p>

					{/* LOGIN BY GOOGLE */}

					{/* END GOOGLE */}
					<p className="text-center text-slate-400">
						By registering, you agree to our{" "}
						<Link to={"#"} className="text-blue-700">
							Terms & Conditions
						</Link>{" "}
						and that you have read our{" "}
						<Link to={"#"} className="text-blue-700">
							Privacy Notice
						</Link>
						.
					</p>
				</div>
			</dialog>
		</>
	);
}
