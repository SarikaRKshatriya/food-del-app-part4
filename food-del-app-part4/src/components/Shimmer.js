// const Shimmer = () => {
//   return <h1>Shimmer UI Loading.........</h1>;
// };

const Shimmer = () => {
  return <h1>Shimmer UI Loading.........</h1>;
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
