import {PATH} from "./types";

export const RoutePath: Record<PATH, string> = {
  [PATH.MAIN]: '/',
  [PATH.QUIZ]: '/quiz/:id',
  [PATH.EMAIL]: '/email',
  [PATH.GREETING]: '/greeting',
  [PATH.ERROR]: '*',
};
