import CardSlider from "../card/CardSlider";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FcNext, FcPrevious } from "react-icons/fc";
import axios from "axios";

function CardItem() {
  // const [Sliders, setSliders] = useState([]);
  // function getSliders() {
  //   axios.get('https://creative.kg/api/members/').then((res) => {
  //     setSliders(res.data.results);

  //   });
  // }
  // useEffect(() => {
  //   getSliders();
  // }, []);

  const [Sliders, setSliders] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  function getSliders() {
    axios.get("https://creative.kg/api/members/").then((res) => {
      setSliders(res.data.results);
      setPageCount(Math.ceil(res.data.results.length / perPage));
      setSliders(res.data.results.slice(offset, offset + perPage));
    });
  }
  useEffect(() => {
    getSliders();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(selectedPage * perPage);

    setOffset((selectedPage + 1) * perPage);
  };

  return (
    <div id="body">
      <CardSlider slides={Sliders} />
      <ReactPaginate
        previousLabel={<FcPrevious />}
        nextLabel={<FcNext />}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
export default CardItem;
