export default function Card({ el, Payment }) {
	return (
		<div className="card w-50 bg-base-100 shadow-xl">
			<figure>
				<img src={el.image} alt="image" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{el.title}
					<div className="badge badge-secondary">{el.Category.name}</div>
				</h2>
				<p>{el.description}</p>
				<div className="card-actions justify-end">
					<div onClick={Payment} className="btn btn-outline btn-success btn-sm">
						buy
					</div>
				</div>
			</div>
		</div>
	);
}
