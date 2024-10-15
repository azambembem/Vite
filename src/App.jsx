// MemoryRouter 왜 필요할까요?  URL 상태를 메모리에 저장하는 라우터입니다. 주로 테스트나 브라우저가
// 필요 없는 환경에서 라우팅을 처리할 때 사용됩니다.
import Navbar from "./navbar";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import History from "./pages/history";
import About from "./pages/about";
import Company from "./pages/about/company";
import Factory from "./pages/about/facture";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />} />
          <Route path="factory" element={<Factory />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
