import React, { createContext, useContext } from 'react';

// 1. Context 생성
// const UserContext = React.createContext({ name: 'kim', role: '프로그래머' });

              // 1-1. 또는 비어있는 userContext 생성
              const UserContext = React.createContext();

// 2. 부모 컴포넌트 (값 제공)
export const Parent = () => {

              // 2-1. userContext에 넣어줄 값 생성
              const user = {name: "scott", role: "admin"}

              // 3-1. 생성한 userContext의 provider 값을 user로 지정
              return (
                <UserContext.Provider value={user}>
                  <Child />
                </UserContext.Provider>
              );

  // return (
  //  <Child />
  // );

};

// 3. 자식 컴포넌트 (값 소비)
const Child = () => {

  const user = useContext(UserContext);

  return (
    <p>안녕하세요, {user.name}님!역할: {user.role}</p>
  );

};