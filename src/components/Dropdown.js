import React from 'react';

import styled from 'styled-components';
import arrowExpand from '../assets/images/arrow-expand.png'

const Dropdown = React.forwardRef(({ onChange, onBlur, name }, ref) => {
  return (
    <DropdownWrapper>
      <label>신청일자</label>
      <DropdownMain ref={ref} onChange={onChange} onBlur={onBlur} name={name}>
        <option>성회날짜 선택하기</option>
        <option value="firstday">첫째날 (5월24일)</option>
        <option value="secondday">둘째날 (5월25일)</option>
      </DropdownMain>
    </DropdownWrapper>
  );
})

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-flex;

  label {
    width: 120px;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 8px;
    height: 13px;
    background: url(${arrowExpand}) no-repeat 50% 0;
    background-size: 100%;
    transform: translateY(-50%);
  }
`;

const DropdownMain = styled.select`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0 18px 0 0;
  outline: 0;
  border: 0;
  letter-spacing: -0.5px;
  text-align: left;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-appearance: none;

`;

export default Dropdown;