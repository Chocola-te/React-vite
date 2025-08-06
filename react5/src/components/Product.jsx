import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Product = (props) => {

  // URL path로 전달된 값 받기 (/:이름/...)
  const { productId, fruit } = useParams();

  // 쿼리 문자열로 전송된 파라미터 값 받기
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <h3>no.{ productId } Product Page code: {searchParams.get('code')}</h3>
      <h3>{fruit}</h3>
      <ul>
        <li>hash: {location.hash}</li>
        <li>pathname: {location.pathname}</li>                                                    
        <li>search: {location.search}</li>
        <li>state: {location.state}</li>
        <li>key: {location.key}</li>
      </ul>
    </>
  );
}

export default Product;