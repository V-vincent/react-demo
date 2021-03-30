import React from 'react';
import WithTooltip from './withTooltip'

const ItemC = (props) => {
  return (
    <div className="container">
      {/* <WithTooltip render={({showToolTip, content}) => (
        <div>
          <button className="btn btn-danger" type="btn">Tooltip C</button>
          {showToolTip && (
            <span className="badge badge-pill badge-primary ml-2">
              {content}
            </span>
          )}
        </div>
      )} /> */}
      <WithTooltip>
        {({ showToolTip, content }) => (
          <div>
            <button className="btn btn-danger" type="btn">Tooltip C</button>
            {showToolTip && (
              <span className="badge badge-pill badge-primary ml-2">
                {content}
              </span>
            )}
          </div>
        )}
      </WithTooltip>
    </div>
  );
}

export default ItemC;