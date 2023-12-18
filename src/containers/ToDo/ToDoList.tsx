import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchTasks } from "./ToDoThunks";

const ToDoList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <div>
        {tasks ? (
          Object.keys(tasks).map((key) => (
            <div key={key}>
              <h4>{tasks[key].task}</h4>
              <input
                className="form-check-input"
                type="checkbox"
                checked={tasks[key].status}
              />
            </div>
          ))
        ) : (
          <h1 className="text-center">Empty</h1>
        )}
      </div>
    </>
  );
};

export default ToDoList;
