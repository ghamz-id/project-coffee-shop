import { Link } from "react-router-dom";

export default function Form_Data() {
	return (
		<>
			<div className="mt-16 h-screen w-full flex flex-col justify-center items-center">
				<form
					action=""
					className="flex flex-col gap-2 p-5 border w-1/2 rounded-lg bg-slate-100"
				>
					<Link
						to={"/products"}
						className="btn btn-sm btn-circle btn-ghost absolute right-[26%] top-[35%]"
					>
						✕
					</Link>
					<h1 className="font-bold mb-4 tracking-tigh text-xl text-center border-b p-3 w-1/2 m-auto">
						Input New Products
					</h1>
					<label className="input input-bordered flex items-center gap-2">
						Title
						<input type="text" className="grow" placeholder="- title" />
					</label>
					<label className="input input-bordered flex items-center gap-2">
						Description
						<input type="text" className="grow" placeholder="- description" />
					</label>
					<label className="input input-bordered flex items-center gap-2">
						Image
						<input type="text" className="grow" placeholder="- image URL" />
					</label>
					<div className="flex justify-between gap-2">
						<label className="input input-bordered flex items-center gap-2 w-full">
							Price
							<input type="number" className="grow" placeholder="- price" />
						</label>
						<select className="select select-bordered w-full max-w-xs">
							<option value={""}>Category</option>
							<option>Iced</option>
							<option>Hot</option>
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
