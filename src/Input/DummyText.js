import React, {memo} from 'react';

const DummyText = (props) => {
    console.log("Child Component Rendered");
    return (
        <p>
            {props.text}
        </p>
    );
};

export default memo(DummyText);