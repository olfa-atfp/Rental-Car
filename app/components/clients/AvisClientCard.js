const AvisClientCard = ({ name, comment, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <p className="text-gray-700 mb-4">"{comment}"</p>
      <h3 className="font-bold text-lg">{name}</h3>
    </div>
  );
};

export default AvisClientCard;
