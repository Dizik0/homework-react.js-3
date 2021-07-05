import { Component } from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.scss";
export class ContactList extends Component {
  render() {
    return (
      <ul className={style.list}>
        {this.props.filterTodos.map(({ name, number, id }) => (
          <li key={this.props.uuidv4()} className={style.listItem}>
            <p className={style.name}>{name}</p>
            <span className={style.number}>{number}</span>
            <button
              className={style.button}
              type="button"
              onClick={() => this.props.deleteTodo(id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filterTodos: PropTypes.array,
  uuidv4: PropTypes.func,
  deleteTodo: PropTypes.func,
};
