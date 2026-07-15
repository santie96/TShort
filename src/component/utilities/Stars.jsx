import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Stars({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {stars}
    </div>
  );
}

export default Stars;