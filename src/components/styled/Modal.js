import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";



const ModalContext = createContext({});


const RootModal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    )
};


const ModalPortal = ({ children }) => {
    const portalTarget = document.getElementById("portal-target");

    if (!portalTarget) {
        return null;
    }

    return ReactDOM.createPortal(children, portalTarget);
};


const ModalTrigger = ({children, asChild, ...rest}) => {
    const { setIsOpen } = useContext(ModalContext); // 모달 상태를 가져옵니다.

    // asChild prop이 true이면 div 엘리먼트를 반환하고, 아니면 button 엘리먼트를 반환합니다.
    return asChild ? (
        <div onClick={() => {
            // console.log('Opening modal');
            setIsOpen((prev) => !prev)}} {...rest}>
            {children}
        </div>
    ) : (
        <button onClick={() => {
            // console.log('Opening modal');
            setIsOpen((prev) => !prev)}} {...rest}>
            {children}
        </button>
    );
};


const ModalContent = ({children, ...rest}) => {
    const {isOpen} = useContext(ModalContext);

    if(isOpen) {
        return <StyledContent {...rest}>{children}</StyledContent>;
    } else {
        return <></>;
    }
};




const ModalOverlay = ({ onClose }) => {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    
    if(isOpen) {
        return <StyledOverlay onClick={() => (onClose ? setIsOpen(false) : null)} />;
    } else {
        return <></>;
    }
};


const ModalClose = ({children, asChild, ...rest}) => {
    const {setIsOpen} = useContext(ModalContext);

    if(asChild) {
        return <div onClick={() => setIsOpen(false)} {...rest}>{children}</div>;
    } else {
        return <button onClick={() => setIsOpen(false)} {...rest}>{children}</button>;
    }
}




const Root = RootModal;
const Trigger = ModalTrigger;
const Portal = ModalPortal;
const Overlay = ModalOverlay;
const Close = ModalClose;
const Content = ModalContent;

export { Root, Trigger, Portal, Overlay, Close };


const StyledContent = styled.div`
position: absolute;
`

const StyledOverlay = styled.div`
width: 100%;
height: 100vh;
inset: 0;
position: fixed;
opacity: 80%;
background-color: #ddd;
`;

export const BigModal = styled(Content)`
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
border-radius: 12px;
box-sizing: border-box;
padding: 24px;
background-color: #fff;
width: 500px;
height: 300px;
`;

export const ModalButtons = styled.div`
position: absolute;
bottom: 12px;
right: 12px;
display: flex;
gap: 5px;
`;

export const ModalButton = styled.div`
position: absolute;
top: 12px;
right: 12px;
`;

export const ModalCloseButton = styled.button`
border: 1px solid #ddd;
width: 40px;
height: 40px;
border-radius: 100%;
cursor: pointer;
:hover {
    border: 1px solid #333;
}
`;

export const MiniModal = styled(Content)`
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
border-radius: 12px;
box-sizing: border-box;
padding: 24px;
background-color: #fff;
width: 300px;
height: 200px;
`;
