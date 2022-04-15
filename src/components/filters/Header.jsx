import React from "react";
import { FormattedMessage } from 'react-intl';
import Filters from "./Filters";



const Header = ({ handleSearch, handleSort, sortOrder }) => {
  return (
    
    <div>
      <div className="Membership_Members"><h2><FormattedMessage id="MembersAssociation"/></h2></div>
      <div className="header__search">
        <input
          type="search"
          placeholder='Article name or keywords...'
          onChange={handleSearch}
          className='header__search'
        />
        <Filters handleSort={handleSort} />
      </div>
    </div>
  );
};

export default Header;
