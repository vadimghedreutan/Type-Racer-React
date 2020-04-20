import React from 'react';


const imageSvg = require('../icons/icons.svg');

const Icon = ({name}) => (
  <use xlinkHref={`${imageSvg}#${name}`}></use>
);

export default Icon;