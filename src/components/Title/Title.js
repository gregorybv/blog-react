import "./Title.scss";
import {memo} from "react";

export const Title = memo(({title, color}) => {
    return (
        <div className='section-title'>
            <h3 style={{color: `${color}`}}>{title}</h3>
            <div className='horz-line' style={{background: `${color}`}}></div>
            <p style={{color: `${color}`}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore</p>
        </div>
    )
});
