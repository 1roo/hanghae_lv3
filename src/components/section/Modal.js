import React from "react";
import { BigModal, ModalButtons, ModalButton, ModalCloseButton, MiniModal, Root, Trigger, Portal, Overlay, Close } from "../styled/Modal";
import Button from "../styled/Button";
import Common from "../styled/Common";


const ModalSection = () => {

    return (
        <>
            <h1 style={{ marginLeft: '10px' }}>Modal</h1>
            <Common>
                <Root>
                    <Trigger asChild>
                        <Button.Primary>open modal</Button.Primary>
                    </Trigger>
                    <Portal>
                        <Overlay />
                        <BigModal>
                            <div>
                                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
                            </div>
                            <ModalButtons>
                                <Close asChild>
                                    <Button.Negative>닫기</Button.Negative>
                                </Close>
                                <Button.Primary>확인</Button.Primary>
                            </ModalButtons>
                        </BigModal>
                    </Portal>
                </Root>


                <Root>
                    <Trigger asChild>
                        <Button.Negative size='large' bordered>open modal</Button.Negative>
                    </Trigger>
                    <Portal>
                        <Overlay onClose />
                        <MiniModal>
                            <div>
                                닫기 버튼 1개가 있고,<br />
                                외부 영역을 누르면 모달이 닫혀요.
                            </div>
                            <ModalButton>
                                <Close asChild>
                                    <ModalCloseButton>x</ModalCloseButton>
                                </Close>
                            </ModalButton>
                        </MiniModal>
                    </Portal>
                </Root >
            </Common>
        </>
    )




}

export default ModalSection;