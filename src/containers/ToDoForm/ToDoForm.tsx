import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useState } from "react";
import { createNewTask, fetchTasks } from "../ToDo/ToDoThunks";

const ToDoForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const [task, setTask] = useState<string>("");

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
    <form className="d-flex align-items-center" onSubmit={onFormSubmit}>
      <div className="mb-3 col-5">
        <label htmlFor="task" className="form-label">
          Add new task
        </label>
        <input
          type="text"
          className="form-control"
          id="task"
          name="task"
          value={task}
          onChange={onChange}
        />
      </div>
      <button className="btn btn-success mt-3 ms-3">add</button>
    </form>
  );
};

export default ToDoForm;
