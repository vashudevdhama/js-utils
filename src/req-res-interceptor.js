// Intercept request and response

const myFetch = async (...args) => {
  const request = requestInterceptor(args);

  let response = await fetch(request);

  response = await responseInterceptor(response);
  return response;
};

const requestInterceptor = (args) => {
  console.log("Request intercepted");
  return args;
};
const responseInterceptor = async (response) => {
  console.log("Response intercepted");
  return response.json();
};

myFetch("https://jsonplaceholder.typicode.com/todos/1").then((json) => {
  console.log(json);
});