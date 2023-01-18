import classes from "./Header.module.css";
import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>UB FOODS</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img  src={mealsImage} alt="Cooks" />
      </div>
    </>
  );
};

export default Header;
