import React from "react";
import PropTypes from "prop-types";
TodoFilters.propTypes = {
  filters: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
function TodoFilters(props) {
  return (
    <div>
      <button
        className={`button filter-button ${
          props.filter === "all" ? "filter-button-active" : ""
        }`}
        onClick={() => {
          props.filters("all");
          props.setFilter("all");
        }}
      >
        All
      </button>
      <button
        className={`button filter-button ${
          props.filter === "active" ? "filter-button-active" : ""
        }`}
        onClick={() => {
          props.filters("active");
          props.setFilter("active");
        }}
      >
        Active
      </button>
      <button
        className={`button filter-button ${
          props.filter === "completed" ? "filter-button-active" : ""
        }`}
        onClick={() => {
          props.filters("completed");
          props.setFilter("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;
