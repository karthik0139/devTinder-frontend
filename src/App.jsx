import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Body} from './components/Body';
import {Login} from './components/Login';
import { Profile } from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./appStore/store/appStore";
import { Feed } from "./components/Feed";



function App() {
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter>
    <Routes basename="/">
    <Route path="/" element={<Body/>}>
        <Route path="/" element={<Feed/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
    </Route>
     
    </Routes>
    </BrowserRouter>
    </Provider>
  
    </>
  );
}

export default App;
