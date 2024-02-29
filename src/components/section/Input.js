import React, { useState } from "react";
import Input from "../styled/Input";
import Button from "../styled/Button";
import Common from "../styled/Common";
import styled from "styled-components";

const MarginDiv = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    `;


const InputSection = () => {

    const [input, setInput] = useState({
        name: "",
        price: "",
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(!input.name.trim() || !input.price.trim()) {
            window.alert('이름과 가격을 모두 입력하세요!');
        } else {
            window.alert(`{ 이름: ${input.name}, 가격: ${Number(input.price).toLocaleString()} }`);
        }
            
    };

    return (
        <>
            <h1 style={{ marginLeft: '10px' }}>Input</h1>
            <form onSubmit={onSubmitHandler}>
                <Common>
                    <MarginDiv>
                        <label>이름</label>
                        <Input.Name
                            getValues={(v) => setInput((prev) => ({ ...prev, name: v }))}
                        />
                    </MarginDiv>
                    
                    <MarginDiv>
                        <label>가격</label>
                        <Input.Price
                            getValues={(v) => setInput((prev) => ({ ...prev, price: v.original }))}
                        />
                    </MarginDiv>

                    <Button.Primary size="small">저장</Button.Primary>
                </Common>
            </form>
        </>
    )




}

export default InputSection;