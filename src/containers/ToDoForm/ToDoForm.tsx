import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useState } from "react";
import { createNewTask, fetchTasks } from "../ToDo/ToDoThunks";
import ButtonSpinner from "../Spinner/BtnSpinner";

const ToDoForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const [task, setTask] = useState<string>("");

  const isLoading = useSelector((state: RootState) => state.tasks.isLoading);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      task: task,
      status: false,
    };

    await dispatch(createNewTask(newTask));
    await dispatch(fetchTasks());
    setTask("");
  };

  return (
    <form className="d-flex align-items-center mt-5" onSubmit={onFormSubmit}>
      <div className="mb-3 col-5">
        <label htmlFor="task" className="form-label h2 mb-4">
          Add new task
        </label>
        <input
          type="text"
          className="form-control"
          id="task"
          name="task"
          value={task}
          onChange={onChange}
          required
        />
      </div>
      <button className="btn btn-success mt-5 ms-3">
        {isLoading ? <ButtonSpinner /> : "add"}
      </button>
    </form>
  );
};

export default ToDoForm;
