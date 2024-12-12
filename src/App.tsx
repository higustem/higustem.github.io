import { Routes, Route, useNavigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { routes } from './routes';

export function App() {
  return (
    <MainLayout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </MainLayout>
  );
}

export default App;