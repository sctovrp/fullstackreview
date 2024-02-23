import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { findUserQuery } from "../../../helper";
// import { useDispatch, useSelector } from "react-redux";
import { setFind } from "../../../store/slice/searchSlice";
import { useAppSelector } from "../../../store/hooks";
import { FindCard } from "../../cards/findCard";

export default function FindUserList () {
    const find = useAppSelector(state => state.query.find);
    const [user, setUser] = useState(null);

    const {data: post, error, isLoading } = useQuery(['username', find], async () => findUserQuery(find),{
        keepPreviousData: true,
        onSuccess(data) {
            if (data){
                // console.log(data)
                setUser(data);
            } else {
                setUser(null);
            }
        },
    })
    
    useEffect(() => {
        setUser(post)
    }, [find])


    return (
        <div>
            <h3>user finded: {find}</h3>
            {user ? (
                <FindCard user={user} />
            ): (
                <h4>not info retrieved</h4> 
            )}
            
        </div>
    )
}