import { createStore } from 'redux';

const initialState = { addedimagefiles:[],addedvideofiles:[],file:""};

const fileReducer = (state = initialState, action) => {
  if (action.type === 'addfile') {
    return {
      addedimagefiles: state.addedimagefiles.concat(action.imagefiles),
      addedvideofiles: state.addedvideofiles.concat(action.videofiles),
      file :action.file
    };
  }
  return state;
};

const store = createStore(fileReducer);

export default store;