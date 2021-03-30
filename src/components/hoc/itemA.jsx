import React from 'react';
import withTooltip from './withTooltip'

const ItemA = (props) => {
  return ( 
    <div className="container">
      <button className="btn btn-primary" type="btn">Tooltip A</button>
      {props.action.showToolTip && (
        <span className="badge badge-pill badge-primary ml-2">
          {props.action.content}
        </span>
      )}
    </div>
   );
}
 
export default withTooltip(ItemA);