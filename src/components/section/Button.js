import React from "react";
import Button from "../styled/Button";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineBell } from "react-icons/hi2";
import Common from "../styled/Common";


const ButtonSection = () => {

    return (
        <>
            <h1 style={{marginLeft:'10px'}}>Button</h1>
            <Common>
                <Button.Primary
                    size="large"
                    bordered
                    icon={<IoIosArrowForward />}
                    onClick={() => window.alert("버튼을 만들어보세요")}>
                    Large Primary Button
                </Button.Primary>
                <Button.Primary
                    size='medium'>
                    Medium
                </Button.Primary>
                <Button.Primary
                    size='small'>
                    Small
                </Button.Primary>
            </Common>


            <Common>
                <Button.Negative
                    size="large"
                    bordered
                    icon={<HiOutlineBell />}
                    onClick={() => window.alert("버튼을 만들어보세요")}>
                    Large Primary Button
                </Button.Negative>
                <Button.Negative
                    size='medium'>
                    Medium
                </Button.Negative>
                <Button.Negative
                    size='small'>
                    Small
                </Button.Negative>

            </Common>
        </>
    )




}

export default ButtonSection;