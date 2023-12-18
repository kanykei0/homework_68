import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchTasks, toggleTaskStatus } from "./ToDoThunks";

const ToDoList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const checkboxChange = async (taskId: string) => {
    if (tasks) {
      await dispatch(
        toggleTaskStatus({ id: taskId, status: !tasks[taskId].status })
      );
      await dispatch(fetchTasks());
    }
  };

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
                name="status"
                onChange={() => checkboxChange(key)}
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
