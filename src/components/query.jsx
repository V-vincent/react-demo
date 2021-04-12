import React from "react";
import queryString from 'query-string';

const Query = ({ location }) => {
  const parsed = queryString.parse(location.search)
  return (
    <>
      <h3>Query</h3>
      <h4>id: {parsed.id}</h4>
      <h4>name: {parsed.name}</h4>
    </>
  );
};

export default Query;
