import React from 'react';


const DropDown = ({options}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(null);
    console.log(selectedOption);
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(prevState => !prevState);
    }
    const handleClick = () => {
        setIsOpen(prevState => !prevState);
        console.log(isOpen);
    }

    const renderOptions = options.map((option) => (
        <div key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
        </div>
    ));

    return (
        <>
            <div onClick={handleClick}>
                {!selectedOption ? '선택 하기' : selectedOption.label}
            </div>
            {isOpen && <div>{renderOptions}</div>}
        </>
    );

};

export default DropDown;