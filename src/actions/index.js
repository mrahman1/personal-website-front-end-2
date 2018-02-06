import { adapter } from "../services";
import { auth, database, storage } from '../services/firebase';

import {
  GET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  CREATE_NEW_PROJECT,
  SET_IMAGE
} from "./types";

export const getCurrentUser = () => {
  return dispatch => {
    adapter.auth
      .getCurrentUser()
      .then(user => dispatch({ type: GET_CURRENT_USER, user }));
  };
};

export function updateCurrentUser(about) {
  return dispatch => {
    adapter.auth
      .updateCurrentUser(about)
      .then(user => dispatch({ type: UPDATE_CURRENT_USER, user }));
  };
}

export function createNewProject(project) {
  return dispatch => {
    adapter.auth
      .createNewProject(project)
      .then(user => dispatch({ type: GET_CURRENT_USER, user }));
  };
}
//
export function uploadImage(image){
  return dispatch => {
    let storageRef = storage.ref(image.name);
    storageRef.put(image)
      .then(snapshot => dispatch({type: SET_IMAGE, image: snapshot.downloadURL}))
  }
}


// export function createImage(image) {
//   return dispatch => {
//       storage.child(`test`).put(image[0]).then((snapshot) => {
//         database.ref('image').child(user.uid).set({
//           picture: snapshot.metadata.downloadURLs[0]
//         });
//       });
//     }
//   });
// }
