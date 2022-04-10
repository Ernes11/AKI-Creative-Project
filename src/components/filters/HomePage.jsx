import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { loadUsers } from "../../actions/users";
import UsersList from "./UsersList";
import Header from "./Header";
import Filters from "./Filters";

const HomePage = (props) => {
  const [users, setUsers] = useState(props.users);
  const [sortOrder, setSortOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  // вызов api для получения списка пользователей
  useEffect(() => {
    setIsLoading(true);
    props.dispatch(loadUsers());

    // инициализация функции отбоя для поиска после того, как пользователь перестанет набирать текст каждые полсекунды
    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  useEffect(() => {
    if (props.users.length > 0) {
      setUsers(props.users);
      setIsLoading(false);
    }
  }, [props.users]);

  // =============================SEARCH FUNCTION===================================
  function onSearchText(text, props) {
    let filtered;
    if (text) {
      filtered = props.users.filter((user) =>
        user.submit.full_name.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      filtered = props.users;
    }
    setUsers(filtered);
    setSortOrder("");
  }

  function handleSearch(event) {
    inputRef.current(event.target.value, props);
  }

  // ===================SORT FUNCTION======================
  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    const order = sortOrder.value;
    if (order == "asc") {
      setUsers(
        users.slice().sort((firstUser, secondUser) => {
          if (firstUser.submit.full_name < secondUser.submit.full_name) return -1;
          if (firstUser.submit.full_name > secondUser.submit.full_name) return 1;
          return 0;
        })
      );
    } else if (order == "desc") {
      setUsers(
        users.slice().sort((firstUser, secondUser) => {
          if (firstUser.submit.full_name < secondUser.submit.full_name) return 1;
          if (firstUser.submit.full_name > secondUser.submit.full_name) return -1;
          return 0;
        })
      );
    }
  }

  return (
    <React.Fragment>
      <Header handleSearch={handleSearch} />
      <Filters handleSort={handleSort} sortOrder={sortOrder} />
      <UsersList users={users} isLoading={isLoading} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(HomePage);
