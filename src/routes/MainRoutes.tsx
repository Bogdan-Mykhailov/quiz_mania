import {Navigate, Route, RouteProps, Routes} from 'react-router-dom';
import {FC} from 'react';
import {PATH} from './types';
import {Email, Greeting, NotFound, Quiz} from "../pages";
import {RoutePath} from "./RoutePath";

export const routeConfig: Record<PATH, RouteProps> = {
  [PATH.MAIN]: {
    path: RoutePath.main,
    element: <Navigate to={`${PATH.QUIZ}/1`} replace/>,
  },

  [PATH.QUIZ]: {
    path: RoutePath.quiz,
    element: <Quiz/>,
  },

  [PATH.EMAIL]: {
    path: RoutePath.email,
    element: <Email/>,
  },

  [PATH.GREETING]: {
    path: RoutePath.greeting,
    element: <Greeting/>,
  },

  [PATH.ERROR]: {
    path: RoutePath.error,
    element: <NotFound/>,
  },
};

export const MainRoutes: FC = () => (
  <Routes>
    {Object.values(routeConfig)
      .map(({path, element}) => (
        <Route
          path={path}
          key={path}
          element={element}
        />
      ))}
  </Routes>
);
