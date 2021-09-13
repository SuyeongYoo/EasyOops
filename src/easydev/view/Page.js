/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : browsers header title area
 **/
import React, { forwardRef } from 'react';

const Page = forwardRef((props, ref) => {

    return (
        <div
            ref={ref}
            {...props}
        >
            <title>Easy Devops</title>
            {props.children}
        </div>
    );
});

export default Page;
