import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import styled from 'styled-components';
import { Section } from '../styles/styles'

import Modal from '../components/Modal';


const RegisterPage = ({ location }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const [ submitCount, setSubmitCount ] = useState(0)
  const [ isOpen, setIsOpen ] = useState(false);
  const session = location.search.split("=")[1]
  const [ submitData, setSumbitData ] = useState("")

  const onSubmit = (data) => {
    const submitData = {
      ...data,
      session: session
    }
    setSumbitData(submitData)
    setSubmitCount(submitCount + 1)
    setIsOpen(true);
  }

  const closeModal = () => {
    setSubmitCount(submitCount - 1)
    setIsOpen(false)
  }

  return (
    <RegisterContainer>
      <InfoContainer>
        <p className="infoTitle">{session === 'firstday'? '첫째날' : '둘째날'}</p>
        <p>2021년 5월 {session === 'firstday'? '24일' : '25일'} 오후 7:30</p>
        <p>화양교회</p>
      </InfoContainer>
      <FormTitle>성회신청 양식</FormTitle>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <label htmlFor="church" className="label-church">교회</label>
          <input 
            type="text" 
            name="church" 
            autoComplete="off" 
            className="input-church" 
            {...register('church', { required: true })}
          />
          {errors.church && <div style={{color: 'red', marginTop: 5, marginLeft: 5, fontSize: '1.4rem'}}>교회명을 입력해주세요</div>}
        </InputContainer>
        <InputContainer>
          <label htmlFor="church" className="label-name">이름</label>
          <input 
            type="text" 
            name="name" 
            autoComplete="off" 
            className="input-name"
            {...register('name', { required: true })}
          />
          {errors.name && <div style={{color: 'red', marginTop: 5, marginLeft: 5, fontSize: '1.4rem'}}>이름을 입력해주세요</div>}
        </InputContainer>
        <InputContainer>
          <label htmlFor="church" className="label-name">직분</label>
          <input 
           type="text" 
           name="position" 
           autoComplete="off" 
           className="input-position"
           placeholder="장로/권사/집사/성도/청년/학생"
           {...register('position', { required: true })}
          />
          {errors.position && <div style={{color: 'red', marginTop: 5, marginLeft: 5, fontSize: '1.4rem'}}>직분을 입력해주세요</div>}
        </InputContainer>
        <ButtonContainer>
          <button type="submit" disabled={isSubmitting || submitCount >= 1}>신청하기</button>
        </ButtonContainer>
      </FormContainer>
      <Modal isOpen={isOpen} closeModal={closeModal} submitData={submitData}/>  
    </RegisterContainer>
  );
}

const RegisterContainer = styled(Section)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem;
  overflow: hidden;
  position: relative;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 2rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: lighter;
  background: rgb(101, 177, 177);
  line-height: 1.6;

  .infoTitle {
    font-size: 2.4rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding-bottom: 3rem;
  }
`;

const FormTitle = styled.p`
  color: #1e1e23;
  letter-spacing: -0.3px;
  font-size: 2.2rem;
  margin: 3rem 0;
`;

const FormContainer = styled.form`
  display: block;
  width: 100%;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  label {
    font-size: 1.6rem;
    padding: 0 0 0.3rem;
  }
  input {
    padding : 1.5rem 0.75rem;
    font-size: 1.6rem;
    border: 2px solid rgb(101, 177, 177);
    border-radius: 4px;
    outline: none
  }
`;

const ButtonContainer = styled.div`
  margin-top: 4rem;

  button {
    width: 100%;
    padding: 1.6rem 2rem;
    background: rgb(101, 177, 177);
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1.8rem;
  }
`;



export default RegisterPage;