import React from 'react';


const DropDown = ({options}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(null);

    const renderOptions = options.map((option) => {
        return <div key={option.value}>{option.value}</div>
    })
    return (
        <>
        <div> 선택하기 </div>
            {renderOptions}
        </>
    );
};

export default DropDown;