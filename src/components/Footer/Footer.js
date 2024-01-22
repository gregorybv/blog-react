import {memo} from "react";

export const Footer = memo(() => {
    return (
        <footer className='footer py-4 bg-purple'>
            <div className='container'>
                <div className='footer-content text-white text-center'>
                    <p className='copyright-text font-rubik fw-4 ls-1'>©2024 CopyRight Example. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
});
