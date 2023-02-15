import { Routes, Route } from 'react-router-dom';
import { Home, IssueDetail } from '../pages';

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route element={<IssueDetail />} path= '/issue/:number' />
    </Routes>
  );
};
