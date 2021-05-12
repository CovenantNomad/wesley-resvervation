import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import close from '../assets/images/cross.svg'

const Modal = ({ isOpen, closeModal, submitData }) => {
  const history = useHistory()

  const onSumbitServer = () => {
    console.log(submitData)
    history.push({
      pathname: "/result", 
    })
  }

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalWrapper>
        <ModalHeader>
          <h1>신청내용확인</h1>
          <img src={close} alt="icon close" onClick={() => closeModal()}/>
        </ModalHeader>
        <ModalContent>
          <div>교회 : {submitData.church}</div>
          <div>이름 : {submitData.name}</div>
          <div>직분 : {submitData.position}</div>
          <div>입력하신 정보가 맞으시면 제출을 눌러주세요.</div>
        </ModalContent>
        <ModalFooter>
          <button className="cancel" onClick={() => closeModal()}>취소</button>
          <button className="confirm" onClick={() => onSumbitServer()}>제출</button>
        </ModalFooter>
      </ModalWrapper>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalWrapper = styled.div`
  background: lightyellow;
  padding: 2.4rem 2.4rem 3.2rem;
  border-radius: 8px;
  margin: 0 2.4rem;
  max-width: 480px;
  width: 100%;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;
const ModalContent = styled.div`
  margin: 3.2rem 0;
  font-size: 1.6rem;
  line-height: 1.2;
  
  div:last-child {
    margin-top: 2rem;
  }
`;
const ModalFooter = styled.div`
  display: flex;

  button {
    flex: 1;
    border-radius: 4px;
    padding: 1.2rem;
    color: #fff;
    font-weight: bold;
    border: none;
    outline: none;

    &:not(:last-child) {
      margin-right: 8px;
    }

    &.cancel {
      background: gray;
    }
    &.confirm {
      background: red;
    }
  }
`;


export default Modal;