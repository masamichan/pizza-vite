import Header from './Header';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid-row-3 grid h-[500px]  grid-cols-2 bg-red-500">
      {isLoading && <Loader />}

      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
