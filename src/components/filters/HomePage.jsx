import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";
import Header from "./Header";
import axios from "axios";

const HomePage = () => {
  const [Sliders, setSliders] = useState([]);
  const [search,setSearch] = useState([]);
  const [value,setValue] = useState('');
  const [order,setSortOrder] = useState()
  const handleSearch = (event) => {
    setSearch (Sliders.filter((item) => item.submit.full_name.toLowerCase().includes(event.target.value.toLowerCase())
     ||
      item.submit.position.toLowerCase().includes(event.target.value.toLowerCase())
     ||
     item.submit.company_name.toLowerCase().includes(event.target.value.toLowerCase())
      ));
    setValue (event.target.value)
  }
  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    const order = sortOrder.value;
    if (order == "asc") {
      setSliders(
        Sliders.slice().sort((firstUser, secondUser) => {
          if (firstUser.submit.full_name < secondUser.submit.full_name) return -1;
          if (firstUser.submit.full_name > secondUser.submit.full_name) return 1;
          return 0;
        })
      );
    } else if (order == "desc") {
      setSliders(
        Sliders.slice().sort((firstUser, secondUser) => {
          if (firstUser.submit.full_name < secondUser.submit.full_name) return 1;
          if (firstUser.submit.full_name > secondUser.submit.full_name) return -1;
          return 0;
        })
      );
    }
    else{
      setSliders(Sliders)
    }
  }

  function getSliders() {
    axios.get("https://creative.kg/api/members/").then((res) => {
      setSliders(res.data.results);
    });
  }
  useEffect(() => {
    getSliders();
    

  }, []);


  // ===================SORT FUNCTION======================
  

  return (
    <React.Fragment>
      <div className="Membership_header">
      <Header handleSort={handleSort} handleSearch={handleSearch} />
      
      </div>
      <div style={{display : value === ''|| null ? 'block' : 'none' }}>
      <UsersList slides={Sliders}/>
      </div>
      <div style={{display : value === ''|| null ? 'none' : 'block' }} >
      <UsersList slides={search}/>
      </div>
    </React.Fragment>
  );
};



export default HomePage;
