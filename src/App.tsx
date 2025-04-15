import { Outlet, useLocation, useNavigate } from 'react-router';
import { useAuthStore } from './auth/auth.store';
import { useShallow } from 'zustand/react/shallow';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
  IxAvatar,
  IxDropdownItem,
  IxContent,
} from '@siemens/ix-react';

import './index.css';

function App() {
  const isValid = useAuthStore(useShallow((state) => state.isValid()));
  const { pathname } = useLocation();
  const navigate = useNavigate();
  if (!isValid) {
    console.log('token not valid -> login');
    //return <Navigate to={'/login'} />;
  }

  return (
    <IxApplication>
      <IxApplicationHeader name="Malocher">
        {/**<div className="placeholder-logo" slot="logo"></div>**/}
        <IxAvatar username="Your user" extra="Administrator">
          <IxDropdownItem icon="log-out" label="Logout" />
        </IxAvatar>
      </IxApplicationHeader>
      <IxMenu enableToggleTheme>
        <IxMenuItem
          onClick={() => navigate('/overview')}
          active={pathname.startsWith('/overview')}
          tab-icon="home"
        >
          Overview
        </IxMenuItem>
        <IxMenuItem
          onClick={() => navigate('/times')}
          active={pathname.startsWith('/times')}
          tab-icon="project"
        >
          Times
        </IxMenuItem>
      </IxMenu>
      <IxContent>
        <Outlet />
      </IxContent>
    </IxApplication>
  );
}

export default App;
