import React from "react";
import styled, { css } from "styled-components";


const BasicButton = ({ children, ...restProps }) => {
    return (
        <StyledButton {...restProps}>
            {children}
        </StyledButton>
    );
};

////////////////////////////////////////////////////////////////////////


const PrimaryButton = (props) => {
    return (
        <BasicButton
            {...props}
            background='rgb(85, 239, 196)'
            color="black"
            active="#00b894"
        />
    );
};


const NegativeButton = (props) => {
    return (
        <BasicButton
            {...props}
            background="rgb(250, 177, 160)"
            color="red"
            active="rgb(225, 112, 85)"
        />
    );
};


///////////////////////////////////////////////////////////////

const Primary = PrimaryButton;
const Negative = NegativeButton;

const Button = { Negative, Primary };

export default Button;


///////////////////////////////////////////////////////////////////

const StyledButton = styled.button`
    
    cursor: pointer;
    border: none;
    border-radius: 10px;

    background-color: ${({ background }) => background};
    color: ${({ color }) => color};
    font-weight: ${({ fontWeight }) => fontWeight};

    ${({ size }) => {
        switch (size) {
            case "large":
                return css`
                    height: 50px;
                    width: 200px;
                    `;
            case "medium":
                return css`
                    height: 45px;
                    width: 130px;
                    `;
            case "small":
                return css`
                    height: 40px;
                    width: 100px;
                    `;
            default:
                return css`
                    height: 45px;
                    width: 130px;
                    `;
        }
    }}


    &:active {
        background-color: ${({ active }) => active};
    }


    ${({ bordered, background }) => {
        if (bordered) {
            return css`
                border: 3px solid ${background};
                background-color: #fff;
                font-weight: bold;

                &:active {
                    background-color: rgb(238, 238, 238);
                }
                `;
        }
    }}
`;

