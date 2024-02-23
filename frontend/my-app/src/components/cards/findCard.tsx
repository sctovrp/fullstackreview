import React from "react";

export const FindCard = (props: any) => {
    console.log(props)
    return(
        <div>
            <h2>card component</h2>
            <div>
                <image />
            </div>
            <div>
                <text>{props.user['login']}</text>
                <h4>{props.user['name']}</h4>
            </div>
            <div>
                <div>
                    <text>
                        {props.user['followers']}
                    </text>
                </div>
                <div>
                    <text>
                        {props.user['id']}
                    </text>
                </div>
            </div>
        </div>
    )
}

/*
avatar_url
login
name
    followers
    score
id
*/