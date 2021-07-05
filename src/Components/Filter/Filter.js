import { Component } from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.scss";
export class Filter extends Component {
  state = {
    filter: "",
  };

  render() {
    return (
      <input
        className={style.lable}
        type="text"
        onChange={this.props.filterContact}
        value={this.props.filter}
      />
    );
  }
}

Filter.propTypes = {
  filterContact: PropTypes.func,
  filter: PropTypes.string,
};
