import { createStore} from 'redux';
import rootred from "./redux/reducers/main";


const stores = createStore(rootred);

export default stores;  