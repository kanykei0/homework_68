const ToDoForm = () => {
  return (
    <form className="d-flex align-items-center">
      <div className="mb-3 col-5">
        <label htmlFor="task" className="form-label">
          Add new task
        </label>
        <input type="text" className="form-control" id="task" name="task" />
      </div>
      <button className="btn btn-success mt-3 ms-3">add</button>
    </form>
  );
};

export default ToDoForm;
