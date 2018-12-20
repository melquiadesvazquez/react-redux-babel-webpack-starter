import React, {Fragment} from 'react';

import * as types from '../types';

const items = [{type: types.ROCK, emoji: "🗿"},
               {type: types.PAPER, emoji: "📰"},
               {type: types.SCISSORS, emoji: "✂️"}];

const handleClick = event => {
  const target = event.target;
  const name = target.name;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  if (name) {
    const index = items.findIndex(item => item.type === value);
    const nextId = name+items[(index+1)%items.length].type;
    const nextItem = document.getElementById(nextId);
    nextItem.click();
  }
};

const Fighter = ({ name, value, onChange }) => (
  <span className="fighter" onChange={onChange} onClick={handleClick}>
    {
      items.map(item => (
        <Fragment key={name+item.type}>
          <input
            type="radio"
            name={name}
            id={name+item.type}
            value={item.type}
            defaultChecked={value === item.type}
            />
          <label htmlFor={name+item.type}>{item.emoji}</label>
        </Fragment>
      ))
    }
  </span>
);


export default Fighter;