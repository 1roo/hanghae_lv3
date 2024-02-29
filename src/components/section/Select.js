import React from "react";
import Common from "../styled/Common";
import { SelectRoot, SelectPortal, SelectOption, OverSelectList, SelectList, Trigger, Container } from '../styled/Select';


const SelectSection = () => {

    return (
        <Container>
            <h1 style={{ marginLeft: '10px' }}>Select</h1>
            <Common style={{display: "flex"}}>
                <SelectRoot>
                    <Trigger>트리거</Trigger>
                    <SelectPortal>
                        <OverSelectList>
                            <SelectOption value="1">리액트</SelectOption>
                            <SelectOption value="2">자바</SelectOption>
                            <SelectOption value="3">스프링</SelectOption>
                            <SelectOption value="4">리액트네이티브</SelectOption>
                        </OverSelectList>
                    </SelectPortal>
                </SelectRoot>
                <SelectRoot>
                    <Trigger></Trigger>
                    <SelectList>
                        <SelectOption value="1">리액트</SelectOption>
                        <SelectOption value="2">자바</SelectOption>
                        <SelectOption value="3">스프링</SelectOption>
                        <SelectOption value="4">리액트네이티브</SelectOption>
                    </SelectList>
                </SelectRoot>
            </Common>
        </Container>
    )


}


export default SelectSection;