export default function Card({ el }) {
	return (
		<div className="card w-100 bg-base-100 shadow-xl">
			<figure>
				<img src={el.image} alt="image" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{el.title}
					<div className="badge badge-primary">{el.Category.name}</div>
				</h2>
				<p>{el.description}</p>
				<p>{el.price}</p>
			</div>
		</div>
	);
}
