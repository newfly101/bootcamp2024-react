import React, {memo} from 'react';

const DummyText = (props) => {
    props.func();
    console.log("Child Component Rendered");
    return (
        <p>
            hello
        </p>
    );
};

export default memo(DummyText);