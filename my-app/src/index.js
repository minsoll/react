import ReactDOM from "react-dom/client";

import "./index.css"; //css 파일을 js파일로 변한
import App from "./App"; // ./로 시작하는 상대경로

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); //jsx구문 root인 id를 가진 요소 자리에 렌더링할 컴토넌트
