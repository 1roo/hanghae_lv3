import React from "react";
import styled from "styled-components";


const Common = ({ children, ...restProps }) => {
    return <CommonStyle {...restProps}>{children}</CommonStyle>;
};


const CommonStyle = styled.div`
    display: flex;
    margin: 10px;
    `;


    
export default Common;