import React, { useState } from "react";
import styled, { css } from "styled-components";


const BasicInput = ({ value, ...restProps }) => {
    return (
        <StyledInput {...restProps} value={value} type="text" />
    );
};

const NameInput = ({ getValues }) => {
    const [value, setValue] = useState("");

    const onChageHandler = (e) => {
        const { value } = e.target;
        setValue(e.target.value);
        getValues(value);
    };

    return <BasicInput onChange={onChageHandler} value={value} />;
};


const PriceInput = ({ getValues }) => {
    const [value, setValue] = useState('0');

    const onChageHandler = (e) => {
        const inputValue = e.target.value;
        const regex = /\D/g;

        const original = inputValue.replaceAll(",", "");
        const modified = new Intl.NumberFormat().format(original);


        if (!regex.test(original)) {
            setValue(modified);

            if (getValues) {
                getValues({original, modified});
            }
        }
    };

    return <BasicInput onChange={onChageHandler} value={value} />;
};

const Price = PriceInput;
const Name = NameInput;

const Input = {Name, Price};

export default Input;


const StyledInput = styled.input`
                    border: 1px solid black;
                    height: 40px;
                    width: 200px;
                    border-radius: 10px;
                    padding: 0 10px;

                    &:focus-within {
                    box-shadow: 0 0 0 1px #000;
                    }
                    `;
