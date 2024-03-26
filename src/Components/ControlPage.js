import React, { useState } from 'react';
import Navbar from './Navbar';

export default function ControlPage() {
  const [taskList, setTaskList] = useState([
    { id: 1, todoItem: 'Buy groceries for next week', status: 'In progress' },
    { id: 2, todoItem: 'Renew car insurance', status: 'In progress' },
    { id: 3, todoItem: 'Sign up for an online courses', status: 'In progress' },
  ]);

  const addTable = (e) => {
    e.preventDefault()
    const formInput = document.getElementById('form1');

    if (formInput.value.trim() !== '') {
      const newTask = {
        id: taskList.length + 1,
        todoItem: formInput.value,
        status: 'In progress',
      };

      setTaskList((prevTaskList) => [...prevTaskList, newTask]);
      formInput.value = '';
    }
  };

  const deleteRow = (id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== id));
    alert("This Item will be deleted");
  };

  const finishTask = (id) => { 
    const finishedTask = taskList.find((task) => task.id === id)

    // Save finished task to local storage (you can modify this as needed)
    localStorage.setItem('finishedTasks', JSON.stringify(finishedTask));

    // Remove the finished task from the task list
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Navbar />
      <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">Manage Your Daily Tasks</h4>

                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={addTable}>
                    <div className="col-12">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form1"
                          className="form-control"
                          placeholder="Enter a task here"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-warning"
                      onSubmit= {(e) => {
                        e.preventDefault()
                        addTable()
                      }}
                      >
                        Add New Task
                      </button>
                    </div>
                  </form>

                  <table className="table mb-4" id="myTable">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                        <th scope="col">Approved</th>
                      </tr>
                    </thead>
                    <tbody>
                      {taskList.map((task) => (
                        <tr key={task.id}>
                          <th scope="row">{task.id}</th>
                          <td>{task.todoItem}</td>
                          <td>{task.status}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => deleteRow(task.id)
                              }
                            >
                              Delete
                            </button>
                            <button
                              type="button"
                              className="btn btn-success ms-1"
                              onClick={() => finishTask(task.id)
                              
                              }
                            >
                              Finished
                            </button>
                            <form>
                              <input type="checkbox" checked="true" />
                            </form>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



