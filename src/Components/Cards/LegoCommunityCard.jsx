const LegoCommunityCard = ({ item }) => {
  return (
    <div className="card w-72 bg-base-100 shadow-lg hover:scale-105 transition-all">
      <figure className="h-44 overflow-hidden rounded-t-lg">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h3 className="card-title text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-500">by {item.author}</p>
        <p className="text-sm mt-2">{item.description}</p>
      </div>
    </div>
  );
};

export default LegoCommunityCard;
