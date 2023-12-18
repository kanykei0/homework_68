import ToDoList from "./containers/ToDo/ToDoList";
import ToDoForm from "./containers/ToDoForm/ToDoForm";

function App() {
  return (
    <div className="container">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
