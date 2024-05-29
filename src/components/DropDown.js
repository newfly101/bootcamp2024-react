import React from 'react';


const DropDown = ({options}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleSelect = (e) => {
        console.log(e);
    }
    const handleClick = (e) => {
        console.log(e);
    }

    const renderOptions = options.map((option) => {
        return <div key={option.value}>{option.value}</div>
    })
    return (
        <>
        <div> {!selectedOption ? '선택 하기' : selectedOption}</div>
            {isOpen && <>renderOptions</>}
        </>
    );
};

export default DropDown;