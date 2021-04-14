import { API } from "./backend";

export const saveNote = (note) => {
  return fetch(`${API}/note/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(note),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
};

export const getAllNotes = () => {
  return fetch(`${API}/notes/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
};
