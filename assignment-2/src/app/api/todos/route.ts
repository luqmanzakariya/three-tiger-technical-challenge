import getDataTodos from '../../service';

export async function GET() {
  try {
    const data = await getDataTodos();
    return Response.json(data);
  } catch (error) {
    console.log('errror', error);
  }
}
