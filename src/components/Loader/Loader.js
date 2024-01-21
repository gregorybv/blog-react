import {loader} from '../../utils/images';
import "./Loader.scss";
import {memo} from "react";

export const Loader = memo(() => {
    return (
        <div className='loader flex align-center justify-center my-5'>
            <img src={loader} alt=""/>
        </div>
    )
});
