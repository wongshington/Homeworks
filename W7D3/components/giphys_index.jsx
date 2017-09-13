import React from 'react';

import GiphysIndexItem from './giphys_index_item';
//this is to have access to each individual one, so on this index page we can push out all them broken up into their own html element i guess
//in the GiphysIndexItem file we see that we've placed each giphy in it's own <li> element before it even comes here
  //how come we still need to wrap it in this <<GiphysIndexItem thing?

function GiphysIndex ({ giphys }) {

  return (
    <ul>
      { giphys.map(giphy => <GiphysIndexItem key = {giphy.id} giphy = {giphy} />) }
    </ul>
  );
}

export default GiphysIndex;
