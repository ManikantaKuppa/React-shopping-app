import {Outlet} from 'react-router-dom';
import NavBar from './NavBarPanel';
import { Provider } from 'react-redux';
import store from '../store/store';
export const RootLayout = () => {
  return (
    <div>
        <Provider store={store}>
          <NavBar />
          <Outlet />
        </Provider>
    </div>
  )
}

export default RootLayout;
