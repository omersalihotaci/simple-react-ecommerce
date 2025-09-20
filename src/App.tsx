import { ToastContainer } from "react-toastify";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading"
import BasketDetails from "./components/BasketDetails";




function App() {
   
    return (
        <div>
           
            <BasketDetails/>
        <RouterConfig />
            <ToastContainer autoClose={2500} />
            <Loading />
        </div>
    );
}

export default App;
