import React, { createContext, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";




const SelectContext = createContext({});


const SelectRoot = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('1');
    const [options, setOptions] = useState([]);

    return (
        <SelectContext.Provider
            value={{
                isOpen, selected, options,
                setIsOpen, setSelected, setOptions,
            }}>
            <div style={{ position: "relative" }}>{children}</div>
        </SelectContext.Provider>
    )
}

const SelectTrigger = ({ children, ...rest }) => {
    const { setIsOpen, options, selected } = useContext(SelectContext);
    const [value] = options.filter((option) => option.value === selected);

    return (
        <button style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            marginRight: "10px",
        }} {...rest}
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen((pre) => !pre)}>

            <div>{value?.label}</div>
            <div>▼</div>

        </button>
    )
}

const SelectPortal = ({ children }) => {
    const portalTarget = document.getElementById('portal-target');

    if (!portalTarget) return null;

    return ReactDOM.createPortal(children, portalTarget);
}


const OptionList = ({ children, ...rest }) => {
    const { isOpen, setOptions } = useContext(SelectContext);

    useEffect(() => {
        setOptions(
            React.Children.toArray(children)
                .map((child) => child.props)
                .map(({ value, children: label }) => ({
                    value,
                    label,
                }))
        );
    }, []);

    return isOpen ? <div {...rest}>{children}</div> : <></>;

}

const OptionSelect = ({ children, value, ...rest }) => {
    const { setSelected } = useContext(SelectContext);
    return (
        <div {...rest} onMouseDown={(e) => setSelected(value)}>
            {children}
        </div>
    );
};


export { SelectRoot, SelectTrigger, OptionList, OptionSelect, SelectPortal };


export const Container = styled.div`
border: 3px solid #ddd;
height: 200px;
overflow: hidden;
position: relative;
margin-top: 50px;
`;

export const SelectList = styled(OptionList)`
border: 1px solid #eee;
border-radius: 10px;
z-index: 2;
background-color: #fff;
width: 300px;
position: absolute;
top: 50px;
`;

export const OverSelectList = styled(OptionList)`
border: 1px solid #eee;
border-radius: 10px;
z-index: 2;
background-color: #fff;
width: 300px;
position: absolute;
top: 650px;
`;

export const SelectOption = styled(OptionSelect)`
font-size: 12px;
display: flex;
align-items: center;
padding-left: 12px;
height: 40px;

    &:hover {
        background-color: #eee;
    }

    &:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    &:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`;

export const Trigger = styled(SelectTrigger)`
border: 1px solid #ddd;
height: 40px;
width: 300px;
background-color: #fff;
border-radius: 10px;
`;