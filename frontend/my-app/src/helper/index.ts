import axios from "axios";
import { useQuery } from "react-query";
import { URL_FIND } from "../constants";

export const findUserQuery = async (username: string) => {
  try {
    console.log(username)
    const queryAxios = await axios.get(URL_FIND + username);
    return queryAxios.data;
  } catch (e: any) {
    console.log(e);
  }
}
