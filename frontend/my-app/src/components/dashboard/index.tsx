import React from "react";
import { findUserQuery } from "../../helper";
import { useQuery } from "react-query";
import FindUserInput from "../findUser/findUserInput";
import FindUserList from "../findUser/findUserList";

export default function Dashboard() {

  // const {data: post, error, isLoading } = useQuery("findUser", findUserQuery);

  // console.log(post)

  return (
    <div>
      <h1>Dashboard</h1>
      <FindUserInput></FindUserInput>
      <FindUserList></FindUserList>
    </div>
  )
}
