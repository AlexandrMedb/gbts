import React from 'react';


interface prop_i {
    name: string,
    avatarURLL: string
    favoriteItemsAmount?: number
}

export const User_c = (props: prop_i) => {
  const {name, avatarURLL, favoriteItemsAmount} = props;

  return (
    <div className="header-container">
      <img className="avatar" src={avatarURLL} alt="Wade Warren"/>
      <div className="info">
        <p className="name">{name}</p>
        <p className="fav">
          <i className="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>
                    ${favoriteItemsAmount||'ничего не'}
        </p>
      </div>
    </div>

  );
};
