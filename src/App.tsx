import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./Redux/Reducers/rootReducer";
import { addDispatch, deleteDispatch } from "./Redux/Actions/ProductAction";
import { AppDispatch } from "./Redux/store";

function App() {
  const count = useSelector((state: RootState) => state.product.count);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    dispatch(addDispatch(20));
  };

  const handleDel = () => {
    dispatch(deleteDispatch(10));
  };

  return (
    <div className="App">
      <p>{count}</p>
      <div>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleDel}>DELETE</button>
      </div>
    </div>
  );
}

export default App;
