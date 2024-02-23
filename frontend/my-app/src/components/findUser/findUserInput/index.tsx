import React, { useState } from "react";
import { useQuery } from "react-query";
import { findUserQuery } from "../../../helper";

import { setFind } from "../../../store/slice/searchSlice";
import { useAppDispatch } from "../../../store/hooks";

export default function FindUserInput () {

    const dispatch = useAppDispatch();
    const [user, setUser] = useState('');

    // const {data: post, error, isLoading } = useQuery("findUser", findUserQuery);

    return (
        <div>
            <label>
                Find User on GitHub
                <input value={user} onChange={e => setUser(e.target.value)} />
            </label>
            <button onClick={() => dispatch(setFind(user))}>
                Search
            </button>
        </div>
    )
}