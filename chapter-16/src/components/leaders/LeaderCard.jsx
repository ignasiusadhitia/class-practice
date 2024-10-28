import PropTypes from "prop-types";

const LeaderCard = ({ item }) => {
  const { imgUrl, name, role } = item;
  return (
    <div>
      <img src={imgUrl} alt={`${name}-${role}`} className="card-image" />
      <h4 className="card-name">{name}</h4>
      <p className="card-role">{role}</p>
    </div>
  );
};

LeaderCard.propTypes = {
  item: PropTypes.object,
};

export default LeaderCard;
