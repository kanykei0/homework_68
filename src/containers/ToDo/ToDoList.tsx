import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { deleteTask, fetchTasks, toggleTaskStatus } from "./ToDoThunks";
import ButtonSpinner from "../Spinner/BtnSpinner";

const ToDoList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.tasks.isLoading);

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

  const onDeleteTask = async (id: string) => {
    await dispatch(deleteTask(id));
    await dispatch(fetchTasks());
  };

  return (
    <>
      <div>
        {tasks ? (
          Object.keys(tasks).map((key) => (
            <div key={key} className="card shadow mt-3 p-3">
              <div className="card-body d-flex">
                <input
                  className="form-check-input mt-2 me-4"
                  type="checkbox"
                  checked={tasks[key].status}
                  name="status"
                  onChange={() => checkboxChange(key)}
                />
                <h4>{tasks[key].task}</h4>
                <button
                  onClick={() => onDeleteTask(key)}
                  className="btn btn-danger ms-auto"
                >
                  {isLoading ? <ButtonSpinner /> : "delete"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center mt-5">Empty</h2>
        )}
      </div>
    </>
  );
};

export default ToDoList;
