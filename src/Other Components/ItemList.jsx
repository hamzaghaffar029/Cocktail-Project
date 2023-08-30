import React from 'react';
import '../Css/ItemList.scss';
import SingleItem from './SingleItem';
import { useGlobalContext } from '../Context';
import LoadingComponent from './Loading';

const ItemList = () => {
  const { isLoading, cocktails } = useGlobalContext();
  if (isLoading) {
    return (
      <div className="loading">
        <LoadingComponent />
      </div>
    );
  }
  if (cocktails.length < 1) {
    return <h1 className="loading">No such Cocktails!!</h1>;
  }
  return (
    <section className="item-list">
      <div className="item-list-container">
        {cocktails.map((item) => {
          return <SingleItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ItemList;
