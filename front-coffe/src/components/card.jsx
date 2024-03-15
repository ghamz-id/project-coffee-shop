import { Link } from "react-router-dom";

export default function Card({ el, Payment }) {
	return (
		<div className="card w-64 bg-base-100 shadow-xl">
			<figure>
				<img src={el.image} alt="image" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{el.title}
					<div className="badge badge-secondary">{el.Category.name}</div>
				</h2>
				<p>{el.description}</p>
				<p>
					{new Intl.NumberFormat("id-ID", {
						style: "currency",
						currency: "IDR",
					}).format(el.price)}
				</p>
				<div className="card-actions justify-end">
					<Link
						to={`/home/${el.id}`}
						className="btn btn-outline btn-success btn-sm"
					>
						buy
					</Link>
				</div>
			</div>
		</div>
	);
}
