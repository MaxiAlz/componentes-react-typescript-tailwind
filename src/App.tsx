import { Route, Routes } from 'react-router';
import {
  ButtonsView,
  FormsView,
  HomeView,
  SearchDecumentsView,
} from './modules';
import { AppDashboard } from './modules/dashboard/AppDashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/consultar-tramite' element={<SearchDecumentsView />} />
      <Route path='/dashboard' element={<AppDashboard />} />
      <Route path='/Forms' element={<FormsView />} />
      <Route path='/buttons' element={<ButtonsView />} />
    </Routes>
  );
}

export default App;
