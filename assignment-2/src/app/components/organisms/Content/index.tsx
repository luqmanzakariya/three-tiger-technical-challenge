'use client';
import { useState, useEffect } from 'react';
import FilterMolecules from '../../molecules/Filter';
import Card from '../../molecules/Card';

interface ItemProps {
  id: number;
  task: string;
  category: string;
  createdAt: string;
  completed: boolean;
}

const Content = () => {
  const [todos, setTodo] = useState<ItemProps[]>([]);
  const [filteredTodo, setFilteredTodo] = useState<ItemProps[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    if (filter !== 'all') {
      const filteredData = todos.filter((val) => val.category.includes(filter));
      setFilteredTodo(filteredData);
    } else {
      setFilteredTodo(todos);
    }
  }, [filter, todos]);

  useEffect(() => {
    fetch('/api/todos')
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a: ItemProps, b: ItemProps) => {
          return (
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
          );
        });
        const finishedData = sortedData.sort(
          (a: ItemProps, b: ItemProps) =>
            Number(a.completed) - Number(b.completed)
        );
        setTodo(finishedData);
        setFilteredTodo(finishedData);
      });
  }, []);

  const onChangeCompleted = (id: number, value: boolean) => {
    const updateData = todos.map((val) =>
      val.id === id ? { ...val, completed: value } : val
    );
    const sortedData = updateData.sort((a: ItemProps, b: ItemProps) => {
      return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    });
    const finishedData = sortedData.sort(
      (a: ItemProps, b: ItemProps) => Number(a.completed) - Number(b.completed)
    );
    setTodo(finishedData);
    setFilteredTodo(finishedData);
  };

  return (
    <div className='content'>
      <div className='m-auto max-w-[538px]'>
        <FilterMolecules filter={filter} setFilter={setFilter} />
        <div className='content-list'>
          {filteredTodo?.length > 0 &&
            filteredTodo.map(({ id, task, category, createdAt, completed }) => (
              <Card
                key={id}
                id={id}
                title={task}
                category={category}
                createdAt={createdAt}
                completed={completed}
                onChange={onChangeCompleted}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
