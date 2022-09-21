import React from "react";
import './User.scss';
import {Link} from "react-router-dom";

function User({user}) {
  const {
    name: {
      first: name, last: lastname
    },
    email,
    location: {
      street: {
        number: streetNumber,
        name: streetName
      },
      country,
      city
    },
    picture: {
      medium: mediumPicture
    },
    id: {
      name: idName, value: id_value
    },
    registered: {
      date: registrationDate
    }
  } = user;


  const formatDate = (dateString, locale) => {
    const date = new Date(dateString);
    const dayName = date.toLocaleDateString(locale, {weekday: 'long'})
    const monthName = date.toLocaleDateString(locale, {month: 'long'})
    const day = date.getDay();
    const year = date.getFullYear();
    return `${dayName}, ${day} ${monthName} ${year}`;
  }

  return (
    <div className="user">
      <Link to='/:id'>

      <img src={mediumPicture} alt="" className="user__picture"/>

      </Link>
      <div className="user__data">

        {name && lastname ? (
            <div className="user__name">{name} {lastname}</div>
          ) :
          <div>No name provided.</div>}


        <div className="user__email">{email}</div>

        {country && city && streetName && streetNumber ? (
            /// zakladam że jak ktoś poda nr domu ale nie poda kraju, to nie ma sensu wyśweietlanie adresu :)
            <div className="user__address">
              <div className="user__country">{country}</div>
              <div className="user__detailed-address">{city}, {streetName} {streetNumber} </div>
            </div>
          ) :
          (<div className="user__address">No address data provided.</div>)}

        <div className="user__registration-info">
          <span>With us since</span>
          <span className="user__registration-date">{formatDate(registrationDate, 'en-US')}</span>
        </div>
      </div>
    </div>
  )
}

export default User;