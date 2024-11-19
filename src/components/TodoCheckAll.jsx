import React from "react";
import PropTypes from "prop-types";
TodoCheckAll.propTypes = {
  checkAll: PropTypes.func.isRequired,
};
function TodoCheckAll(props) {
  return (
    <div className="button" onClick={props.checkAll}>
      Check All
    </div>
  );
}

export default TodoCheckAll;
