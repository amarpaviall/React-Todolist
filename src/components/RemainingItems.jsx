import React from "react";
import PropTypes from "prop-types";
RemainingItems.propTypes = {
  remainingItems: PropTypes.number.isRequired,
};

function RemainingItems(props) {
  return <span>{props.remainingItems} items remaining</span>;
}

export default RemainingItems;
