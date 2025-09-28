import fetch from "node-fetch";

export async function handler(event, context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Netlify!", data }),
  };
}