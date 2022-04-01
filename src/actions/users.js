import axios from "axios";

// export const loadUsers = () => {
//   return async (dispatch) => {
//     try {
//       const users = await axios.get("./users.json");
//       return dispatch(setUsers(users.data));
//     } catch (error) {
//       console.log("error:", error);
//     }
//   };
// };

// export const setUsers = (users) => ({
//   type: "SET_USERS",
//   users,
// });

export const loadUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get(`https://creative.kg/api/members/`);
      return dispatch(setUsers(users.data.results));

    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});