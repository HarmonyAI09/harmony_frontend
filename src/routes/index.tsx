import { RouteObject, useRoutes } from 'react-router-dom';

const routes: RouteObject[] = [];

export default function Routes() {
  return useRoutes(routes);
}
