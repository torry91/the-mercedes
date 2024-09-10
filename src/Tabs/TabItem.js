import React from 'react';

const TabItem = ({tab,onClick}) => {
    return (
    <button className='btns' onClick={onClick}>
    {tab}
</button>
    );
};
export default TabItem;
