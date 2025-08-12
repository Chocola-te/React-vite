import "./App.css";
import Gallery from "./site/gallery/gallery";
import Home from "./site/home/home";
import Notice from "./site/notice/notice";
import SiteLayout from "./site/siteLayout.jsx";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        {/* 부모 라우트: 레이아웃(공통 UI) */}
        <Route element={<SiteLayout />}>
          {/* 자식 라우트 */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery.go" element={<Gallery />} />
          <Route path="/notice.go" element={<Notice />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;