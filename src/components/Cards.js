import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Feature Content - Network Scalability & Lan Redundancy!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Network Scalability'
              label='EIGRP'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Network – Design for Scalability'
              label='Efficiency'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='LAN Redundancy'
              label='Backup Plan'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='STP all that you need to know'
              label='EIGRP'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='PVST+ in a nutshell!'
              label='Protocols'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;