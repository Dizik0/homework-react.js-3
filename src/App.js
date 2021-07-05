import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddContact } from "./Components/AddContact";
import { Filter } from "./Components/Filter";
import { ContactList } from "./Components/ContactList";
import style from "./App.module.scss";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  componentDidUpdate() {
    localStorage.setItem("key-1", JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    this.setState({ contacts: JSON.parse(localStorage.getItem("key-1")) });
  }

  stateTransfer = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  filterContact = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== todoId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter;

    const filterTodos = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className={style.box}>
        <h1 className={style.title}>Phonebook</h1>
        <AddContact
          uuidv4={uuidv4}
          stateTransfer={this.stateTransfer}
          contacts={contacts}
        />
        <h2 className={style.title}>Contacts</h2>

        <Filter
          uuidv4={uuidv4}
          filterContact={this.filterContact}
          filter={filter}
        />
        <ContactList
          filterTodos={filterTodos}
          uuidv4={uuidv4}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
