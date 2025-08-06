import React from "react";
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <>
      <h3>Hello! Main Page.</h3>
      <ul>
        {/* anchor태그 만들어주는 Link to 커스텀 태그 */}
        <Link to="/product/1/peach?code=test1">
          <li>1st product</li>
        </Link>
        <Link to="/product/2/apple?code=test2">
          <li>2nd product</li>
        </Link>
          <li><a href="/product/3/banana?code=test3">3rd product</a></li>
      </ul>
    </>
  );
}

export default Main;