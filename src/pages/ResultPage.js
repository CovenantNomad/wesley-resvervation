import React from 'react';
import { useForm } from "react-hook-form";

import styled from 'styled-components';
import Dropdown from '../components/Dropdown';
import { Section } from '../styles/styles'

const ResultPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = (data) => {
    console.log(data)

  }
  const invalidSelect = (date) => date !== '성회날짜 선택하기';

  return (
    <ResultContainer>
      <Title>신청해주셔서 감사합니다</Title>
      <Subtitle>신청 하신 결과는 아래에서 확인해주세요</Subtitle>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <DropdwownContainer>
          <Dropdown {...register('date', { required: "select one option", validate:invalidSelect})}/>
          {errors.date && <div style={{color: 'red', marginTop: 5, fontSize: '1.4rem'}}>성회일자를 선택해주세요</div>}
        </DropdwownContainer>
        
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
        <ButtonContainer>
          <button type="submit" disabled={isSubmitting}>결과확인</button>
        </ButtonContainer>
      </FormContainer>
    </ResultContainer>
  );
}

const ResultContainer = styled(Section)`
  padding: 3rem;
  overflow: hidden;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: blue;
  padding: 2.4rem 0;
`;

const Subtitle = styled.h3`
  font-size: 1.6rem;
`;

const DropdwownContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

export default ResultPage;