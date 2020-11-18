export const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
export async function request(apiSection, postId, options) {
  const response = await fetch(BASE_URL, options);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const serverData = await response.json();

  return serverData;
}

export const postRequest = (title, body) => fetch(BASE_URL, {
  method: 'POST',
  body: JSON.stringify({
    title,
    body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const putRequest = (body, id) => fetch(`${BASE_URL}/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    body,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const deleteRequest = id => fetch(`${BASE_URL}/${id}`, {
  method: 'DELETE',
});
