import React from "react";
import './findCard.css';

export const FindCard = (props: any) => {
    console.log(props)
    return(
        <div className="container">
            <div className="image-container">
                <img style={{
                    borderRadius: "100%", 
                    boxShadow: "3px 3px 11px gray", 
                    maxHeight: "150px", 
                    maxWidth: "300px",
                    zIndex: "2",
                    flex: "1",
                }} src={props.user['avatar_url']} alt="image not found" />
            </div>
            <div className="separator">
            </div>
            <div className="user-container"> 
                <div className="user-basic">
                    <text className="user-label">
                        alias
                    </text>
                    <text className="user-value">
                        {props.user['login']}
                    </text>
                    <text className="user-label">
                        name
                    </text>
                    <text className="user-value">
                        {props.user['name']}
                    </text>
                </div>
                <div className="section">
                    <text className="section-label">
                        followers
                    </text>
                    <text className="section-value">
                        {props.user['followers']}
                    </text>

                    <text className="section-label">
                        id
                    </text>
                    <text className="section-value">
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

infoSection]}>
        <View style={[styles.seccionTitle]}>
*/ 