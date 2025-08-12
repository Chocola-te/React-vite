import React from "react";
import { Link, Outlet } from "react-router-dom";
import moment from 'moment';

const SiteLayout = () => {
  const date = new Date();
  const formattedDate = moment(date).format('MMM DD');

  return (
    <table
      style={{ width: 1200, marginLeft: "auto", marginRight: "auto" }}
      border={1}
    >
      <tr>
        <td>
          <h1>{formattedDate}</h1>
        </td>
      </tr>
      <tr>
        <td>
          <Link to="/">홈</Link>&nbsp;&nbsp;
          <Link to="/gallery.go">갤러리</Link>&nbsp;&nbsp;
          <Link to="/notice.go">공지사항</Link>
        </td>
      </tr>
      <tr>
        <td>
          {/* 매칭된 자식 라우드 렌더링 */}
          <Outlet />
        </td>
      </tr>
    </table>
  );
};

export default SiteLayout;