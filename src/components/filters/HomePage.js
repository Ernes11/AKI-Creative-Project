import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { loadUsers } from "../../actions/users";
import UsersList from "./UsersList";
import Header from "./Header";
import Filters from "./Filters";
import "../../sass/homepage.scss";

const HomePage = (props) => {
  const [users, setUsers] = useState(props.users);
  const [sortOrder, setSortOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    props.dispatch(loadUsers());
    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  useEffect(() => {
    if (props.users.length > 0) {
      setUsers(props.users);
      setIsLoading(false);
    }
  }, [props.users]);

  // ==================SEARCH FUNCTION=========================

  function onSearchText(text, props) {
    let filtered;
    if (text) {
      filtered = props.users.filter(
        (user) =>
          user.name.toLowerCase().includes(text.toLowerCase()) ||
          user.position.toLowerCase().includes(text.toLowerCase()) ||
          user.title.toLowerCase().includes(text.toLowerCase())
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
  // =================SORT FUNCTION ====================
  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    if (sortOrder.value) {
      setUsers(_.orderBy(users, ["asc"], [sortOrder.value]));
    }
  }

  return (
    <React.Fragment>
      <div className="homepage">
        <h1 className="homepage-title"> Члены Ассоциации</h1>
      </div>
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
