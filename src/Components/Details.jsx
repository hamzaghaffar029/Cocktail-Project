import React, { useEffect, useState } from 'react';
import '../Css/Details.scss';
import { Link, useParams } from 'react-router-dom';
import LoadingComponent from '../Other Components/Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const Details = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState({});
  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const {
            strAlcoholic: info,
            strDrink: name,
            strCategory: category,
            strGlass: glass,
            strDrinkThumb: img,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strInstructions: instructions,
          } = drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newDrink = {
            name,
            info,
            category,
            glass,
            img,
            instructions,
            ingredients,
          };
          setCocktail(newDrink);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
      setLoading(false);
    };
    fetchCocktail();
  }, [id]);
  const { img, name, info, category, glass, instructions, ingredients } =
    cocktail;
  if (loading) {
    return (
      <div className="loading">
        <LoadingComponent />
      </div>
    );
  }

  return (
    <section>
      <div className="details-container">
        <div className="header-detail">
          <Link to="/" className="btn">
            Back to home
          </Link>
          <h1 className="detail title">{name}</h1>
        </div>
        <div className="detail-items-container">
          <img src={img} alt="img" />
          <div className="properties">
            <div className="properties-name">
              <span>Name: </span> {name}
            </div>
            <div className="properties-name">
              <span>Catagory: </span> {category}
            </div>
            <div className="properties-name">
              <span>Info: </span>
              {info}
            </div>
            <div className="properties-name">
              <span>Glass: </span>
              {glass}
            </div>
            <div className="properties-name">
              <span>Ingredients: </span>
              {`${ingredients}`}
            </div>
            <div className="properties-name">
              <span>Instructions: </span>
              {instructions}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
