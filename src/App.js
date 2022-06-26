import './App.scss';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './HOC/PrivateRoute';
import HomePage from './Pages/HomePage/HomePage';
import SigninPage from './Pages/SigninPage/SigninPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import { useSelector, useDispatch } from "react-redux";
function App() {
  let auth = useSelector((state) => state.user);
  return (
    <div className="App">
      <Routes>
        <Route exact element={<PrivateRoute />}>
          <Route path="/" exact element={<HomePage />} />
        </Route>
        <Route path="/signin" exact element={<SigninPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
      </Routes>
    </div >
  );
}

export default App;
