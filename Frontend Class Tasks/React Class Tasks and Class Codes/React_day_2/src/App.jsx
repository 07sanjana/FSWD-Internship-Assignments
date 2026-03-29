/*
What happens when data changes in React?
How does react know to update those changes?
How do we run code after rendering components?

Lists & Keys
apps:
product list, users list, notifications, messages
-> we render the list using map()
-> but react needs something special called keys

why keys?
1. identify which item changed
2. improve performance
3. avoid unnecesary re-rendering

keys must be unique, stable and preferably from database(like id)
*/

import React from "react";

/*
function App() {
  const students = [
    { id: 1, name: "Sanjana", course: "React" },
    { id: 2, name: "Sam", course: "Taxation" },
    { id: 3, name: "Cyan", course: "Javascript" },
    { id: 4, name: "Sophie", course: "Python" },
    { id: 5, name: "Alex", course: "Data Science" }
  ];
  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}
*/

/*
import Counter from "./Counter";

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}
*/

/*
import LifeCycleDemo from "./LifeCyicleDemo";

function App() {
    return (
        <div>
            <LifeCycleDemo />
        </div>
    );
}
*/

import ProductCart from "./Product_Cart";

function App() {
  return (
    <div>
      <ProductCart />
    </div>
  );
}
export default App;
