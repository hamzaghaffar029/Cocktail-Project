import React from 'react';
import '../Css/ItemList.scss';

import { Link } from 'react-router-dom';
const SingleItem = ({ id, img, title, glass, type }) => {
  return (
    <div className="single-item">
      <img src={img} alt={title} />
      <div className="footer">
        <h1>{title}</h1>
        <h3>{glass}</h3>
        <h5>{type}</h5>
        <Link to={`/item-details/${id}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default SingleItem;
