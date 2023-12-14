import AddUser from "../containers/addUser/AddUser";
import EditUser from "../containers/editUser/EditUser";
import ShowUser from "../containers/showUser/ShowUser";
import {
  EDIT_USER_PATH,
  HOME_PATH,
  SHOW_USER_PATH,
} from "../utils/constants/constants";

const routerPath = [
  {
    routerId: 1,
    path: HOME_PATH,
    element: <AddUser />,
    exact: true,
  },
  {
    routerId: 2,
    path: SHOW_USER_PATH,
    element: <ShowUser />,
    exact: true,
  },
  {
    routerId: 3,
    path: EDIT_USER_PATH,
    element: <EditUser />,
    exact: true,
  },
];

export default routerPath;
