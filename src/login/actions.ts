import { ACTION_TYPES } from "./constants";

const ROOT_URL = "https://secret-hamlet-03431.herokuapp.com";

export async function loginUser(dispatch: any, loginPayload: any) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: ACTION_TYPES.REQUEST_LOGIN });
    let response = await fetch(`${ROOT_URL}/login`, requestOptions);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    return;
  } catch (error) {
    dispatch({ type: ACTION_TYPES.LOGIN_ERROR, error: error });
    console.log(error);
  }
}

export async function logout(dispatch: any) {
  dispatch({ type: ACTION_TYPES.LOGOUT });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
