import React from 'react';

//why do we need to put baseCurr and rates inside curly braces too?
const selectCurrency = (baseCurrency, rates) => ({
  type: "SWITCH_CURRENCY",
  baseCurrency,
  rates
});



export default selectCurrency;
