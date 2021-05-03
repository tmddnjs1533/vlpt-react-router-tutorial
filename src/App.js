import { Switch, Route, Link } from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <>
        <ul>
            <li><Link to={"/"}>홈</Link></li>
            <li><Link to={"/about"}>소개</Link></li>
            <li><Link to={"/profiles"}>프로필 목록</Link></li>
            <li><Link to={"/history"}>history 예제</Link></li>
        </ul>
        <hr />
        <Switch>

          <Route exact={true} path={"/"} component={Home} />
          <Route exact={true} path={"/about"} component={About} />
          {/* <Route path={"/profiles/:username"} component={Profile} />  파라미터 */}
            <Route path={"/profiles"} component={Profiles} />
            <Route path={"/history"} component={HistorySample} />
            <Route
                render={({ location }) => (
                    <div>
                        <h2>이 페이지는 존재하지 않습니다.</h2>
                        <p>{location.pathname}</p>
                    </div>
                )}
                />
        </Switch>
    </>
  );
}





export default App;
