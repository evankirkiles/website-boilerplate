import { combineReducers } from 'redux';
import themeReducer from '../features/theme/themeSlice';
import navigationReducer from '../features/navigation/navigationSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  navigation: navigationReducer
});

export default rootReducer;