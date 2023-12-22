import Header from './Header';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div>
        <main className="overflow-scroll">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
