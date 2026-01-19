import Link from "next/link";

export default function LegoPersonCard({ person }) {
  return (
    <div className="card bg-base-200 shadow-xl h-full hover:scale-[1.02] transition">
      {/* Image wrapper (fixed size) */}
      <figure className="h-56 bg-base-300 flex items-center justify-center overflow-hidden">
        <img
          src={person.imageUrl}
          alt={person.name}
          className="h-full w-full object-contain p-4"
        />
      </figure>

      {/* Card body */}
      <div className="card-body flex flex-col">
        <h2 className="card-title text-lg">{person.name}</h2>

        <span className="badge badge-primary w-fit">{person.role}</span>

        <p className="text-sm text-base-content/70 line-clamp-3 mt-2">
          {person.description}
        </p>

        {/* Spacer keeps buttons aligned */}
        <div className="flex-grow" />

        <div className="card-actions justify-between items-center mt-4">
          <Link
            href={`/products/${person.id}`}
            className="btn btn-sm btn-outline"
          >
            View Details
          </Link>

          <button className="btn btn-sm btn-primary">Add to Collection</button>
        </div>
      </div>
    </div>
  );
}
