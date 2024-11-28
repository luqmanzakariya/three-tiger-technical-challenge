"use client";
import { useState, useEffect } from "react";
import FilterMolecules from "../../molecules/Filter";
import Card from "../../molecules/Card";

interface ItemProps {
  id: number;
  task: string;
  category: string;
  createdAt: string;
}

const Content = () => {
  const [todos, setTodo] = useState<ItemProps []>([]);
  const [filteredTodo, setFilteredTodo] = useState<ItemProps []>([])
  const [filter, setFilter] = useState<string>("all");
  
  useEffect(() => {
    if (filter !== 'all'){
      const filteredData = todos.filter(val => val.category.includes(filter));
      setFilteredTodo(filteredData)
    } else {
      setFilteredTodo(todos)
    }
  },[filter, todos])


  useEffect(() => {
    fetch('/api/todos')
    .then((response) => response.json())
    .then((data) => {
      setTodo(data)
      setFilteredTodo(data)
    })
  }, []);

  return (
    <div className="content">
      <div className="max-w-[538px] m-auto">
        <FilterMolecules filter={filter} setFilter={setFilter} />
        <div className="content-list">
          {filteredTodo?.length > 0 && filteredTodo.map(({ id, task, category, createdAt }) => (
            <Card key={id} title={task} category={category} createdAt={createdAt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
