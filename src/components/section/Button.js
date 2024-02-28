import React from "react";
import Button from "../styled/Button";


const ButtonSection = () => {

    return (
        <>
            <h1>Button</h1>

            <Button.Primary
            size="large"
            bordered
            onClick={() => window.alert("버튼을 만들어보세요")}>
                Large Primary Button
                </Button.Primary>

        </>
    )




}

export default ButtonSection;