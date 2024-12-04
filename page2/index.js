//import './index.css'         //these import create error that stops loading!
//import React from 'react';
//import ReactDOM from 'react-dom/client';

function ClassCard({ className, onDelete }) {
    return (
      <div className="card">
        <p className="courseName">{className}</p>
        <button onClick={() => onDelete(className)}>Delete</button>
      </div>
    );
  }
  
  function ClassList() {
    const initialClasses = ['MET CS601 - Web Appplication Development', 'MET CS602- Server-Side Web Development', 'MET CS625 - Business Data Communication and Networks', 'MET CS632 - IT Project Management'];
    const [classes, setClasses] = React.useState(initialClasses);
    const [newClass, setNewClass] = React.useState('');
  
    function handleInputChange(event) {
      setNewClass(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      if (newClass && !classes.includes(newClass)) {
        setClasses(classes.concat(newClass));
        setNewClass('');
      }
    }
  
    function handleDelete(className) {
      setClasses(classes.filter(c => c !== className));
    }
  
    return (
      <div className="container">
        {classes.map((className, index) => (
          <ClassCard key={index} className={className} onDelete={handleDelete} />
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newClass}
            onChange={handleInputChange}
            placeholder="Add a new class"
            />
          <button type="submit">Add Class</button>
        </form>
      </div>
    );
  }
  
  ReactDOM.render(<ClassList />, document.getElementById('app'));