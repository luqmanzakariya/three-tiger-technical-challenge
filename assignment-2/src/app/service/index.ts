'use server';
const getDataTodos = async () => {
  const res = await fetch(`${process.env.API_URL}/todos2`, {
    method: 'get',
    headers: {
      'x-api-key': process.env.X_API_KEY as string,
    },
  });

  const data = await res.json();

  return data;
};

export default getDataTodos;
