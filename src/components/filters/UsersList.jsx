import React from "react";
import UserItem from "./UserItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "../../sass/swiper.scss";

SwiperCore.use([Navigation, Pagination]);

const UsersList = ({ users, isLoading }) => {
  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide className="swiper" key={`slide-${i}`}>
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </SwiperSlide>
    );
  }

  return (
    <div className="users-list">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          <Swiper
            tag="section"
            id="main"
            wrapperTag="ul"
            navigation
            pagination
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides}
          </Swiper>
        </React.Fragment>
      )}
    </div>
  );
};

export default UsersList;
