import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

export function addArticle(payload) {//This is an action creator
  return { type: ADD_ARTICLE, payload }//This is an action (are plain objects)
};

export function foundBadWord() {
  return { type: FOUND_BAD_WORD, err: 'Some bad words have found.' }
};

export function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      return { type: "DATA_LOADED", payload: json };
    });
}