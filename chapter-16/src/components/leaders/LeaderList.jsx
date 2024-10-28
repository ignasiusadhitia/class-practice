import LeaderCard from "./LeaderCard";
import PropTypes from "prop-types";

const LeaderList = ({ items }) => {
  return (
    <div className="leaders-section">
      {items.map((item, index) => (
        <LeaderCard item={item} key={index} />
      ))}
    </div>
  );
};

LeaderList.propTypes = {
  items: PropTypes.array,
};

export default LeaderList;
