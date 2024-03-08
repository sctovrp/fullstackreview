import React from "react";
import './noFindCard.css';
import { FiXCircle } from "react-icons/fi";

export const NoFindCard = (props: any) => {
    console.log(props)
    return(
        <div className="container">
            <div className="section">
                <FiXCircle className="icon"/>
                <text className="title">
                    Opps! Info not available
                </text>
            </div>
        </div>
    )
}