const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  deliveryTime,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>Rating: {avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestrauntCard;
