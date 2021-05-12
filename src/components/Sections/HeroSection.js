import React from 'react';

import CountDown from '../CountDown'

import styled from 'styled-components';
import { Section } from '../../styles/styles'
import { FiClock } from "react-icons/fi";
import bgImage from '../../assets/images/bgImage1.jpeg'
import youtube from '../../assets/images/youtube.png'

import thumbnail1 from '../../assets/images/thumbnail3.jpeg'
import thumbnail2 from '../../assets/images/thumbnail4.jpeg'


import { LinkedButton } from '../LinkedButton';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroFirstWrapper>
        <HeroBackgroundContainer>
          <img src={bgImage} alt="" />
        </HeroBackgroundContainer>
        <HeroContentContainer>
          <div className="label">2021 비전교회 지원기금 마련을 위한</div>
          <p className="title">283주년 웨슬리회심기념</p>
          <p className="title">온라인연합성회</p>
          <p className="date">5월 24일(월) / 25일(화) 저녁 7:30</p>
          <div className="linkToYoutube">
            온라인성회 참석하기
            <a href="https://www.youtube.com/channel/UCvHCNiOmbjO2UwlP7mdui2w/featured" target="_blank" rel="noreferrer">
              <img src={youtube} alt="youtube link" />
            </a>
          </div>
        </HeroContentContainer>
      </HeroFirstWrapper>
      <HeroSecondWrapper>
        <MessageContainer>
          <p>대면예배는 정원(120명)이 제한되어 있습니다. 참석을 원하시면 아래에서 신청해 주세요.</p>
        </MessageContainer>
        <h2 className="secondTitle">연합성회 대면예배 신청</h2>
        <TicketList>
          <TicketItem>
            <TicketItemContainer>
              <TicketThumbnailContainer bgImg={thumbnail1}>
                <p className="session">첫째날</p>
                <p className="day">5월 24일</p>
                <p className="time">19:30</p>
                <p className="speaker">이광호 감독</p>
              </TicketThumbnailContainer>
              <TicketContentContainer>
                <ContentLeftWrapper>
                  <div className="openingDate">
                    <FiClock /><strong className="boldTime">19:00</strong> | 5.20 오픈예정
                  </div>
                  <div className="countdownwContainer" >
                    <CountDown date={new Date(2021, 4, 11, 3, 0)} />
                  </div>
                  <AttandanceContainer>
                    <p className="attendance"> 100 / 120 명 </p>
                  </AttandanceContainer>
                </ContentLeftWrapper>                
                <ContentRightWrapper>
                  <BtnContainer>
                    <LinkedButton
                      to="register?session=firstday"
                    >
                      예배신청하기
                    </LinkedButton>
                  </BtnContainer>
                </ContentRightWrapper>
              </TicketContentContainer>
            </TicketItemContainer>
          </TicketItem>
          <TicketItem>
            <TicketItemContainer>
              <TicketThumbnailContainer bgImg={thumbnail2}>
                <p className="session">둘째날</p>
                <p className="day">5월 25일</p>
                <p className="time">19:30</p>
                <p className="speaker">서길원 목사</p>
              </TicketThumbnailContainer>
              <TicketContentContainer>
                <ContentLeftWrapper>
                  <div className="openingDate">
                    <FiClock /><strong className="boldTime">20:00</strong> | 5.20 오픈예정
                  </div>
                  <div className="countdownwContainer" >
                    <CountDown date={new Date(2021, 4, 11, 3, 0)} />
                  </div>
                  <AttandanceContainer>
                    <p className="attendance"> 100 / 120 명 </p>
                  </AttandanceContainer>
                </ContentLeftWrapper>                
                <ContentRightWrapper>
                  <BtnContainer>
                    <LinkedButton
                      to="register?session=secondday"
                    >
                      예배신청하기
                    </LinkedButton>
                  </BtnContainer>
                </ContentRightWrapper>
              </TicketContentContainer>
            </TicketItemContainer>
          </TicketItem>
        </TicketList>
      </HeroSecondWrapper>
    </HeroContainer>
  );
}

const HeroContainer = styled(Section)`
  justify-content: flex-start;
`;

const HeroFirstWrapper = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
`;

const HeroBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(0,0,0,0.03);
    background-color: rgba(0,0,0,0.03);
    z-index: 1;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContentContainer= styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .label {
    width: 230px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.02);
    display: flex;
    justify-content: center;
    padding: 0.5rem 0.7rem;
    margin-bottom: 13px;
    font-size: 1.4rem;
    background : rgba(0,0,0,0.2);
  }
  .title {
    color: #1e1e23;
    letter-spacing: -0.3px;
    font-size: 3rem;
  }
  .date {
    margin-top: 15px;
    color: rgba(30, 30, 35, 0.7);
    font-size: 1.8rem;
  }

  .linkToYoutube {
    color: rgba(30, 30, 35, 0.7);
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    padding: 1.6rem 0;

    a {
      padding-left: 0.7rem;

      img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
`;

const HeroSecondWrapper = styled.div`
  padding: 0 1rem;
  width: 100%;
  min-height: 25vh;

  .secondTitle {
    font-size: 2.2rem;
    font-weight: 600;
    padding-bottom: 1.6rem;
    background: #fff;
  }
`;

const MessageContainer = styled.div`
  font-size: 1.8rem;
  padding-top: 1.3rem;
  padding-bottom: 2.8rem;
  color: rgba(30, 30, 35, 0.7);
  text-align: center;
`;

const TicketList = styled.ul`
  list-style: none;
  background: #fff;

  @media screen and (min-width: 740px) {
    display: flex;

  }
`;

const TicketItem = styled.li`
  margin-bottom: 2rem;

  @media screen and (min-width: 740px) {
    width: 50%;
  }

`;

const TicketItemContainer = styled.div`
  height: 18rem;
  display: flex;
`;

const TicketThumbnailContainer = styled.div`
  min-width: 12rem;
  height: 100%;
  border: 1px solid rgba(0,0,0,0.03);
  background-color: rgba(0,0,0,0.03);
  border-radius: 10px;
  color: #fff;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(0,0,0,0.07);
    background-color: rgba(0,0,0,0.07);
    z-index: 1;
    pointer-events: none;
  }

  .session {
    font-size: 1.6rem;
    font-weight: bold;
    padding-bottom: 1rem;
    letter-spacing: 0.1rem;
    z-index: 2;
  }
  .day, 
  .time {
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: -0.1rem;
    z-index: 2;
  }
  .speaker {
    font-size: 1.6rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    z-index: 2;
  }
`;

const TicketContentContainer = styled.div`
  min-width: 20rem;
  width: 35rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;

  .openingDate {
    min-height: 20%;
    color: #1e1e23;
    font-size: 1.6rem;
    display: flex;
    align-items: center;

    .boldTime {
      padding: 0 0.5rem;
    }
  }
  .countdownwContainer{
    margin: 1rem 0;
  }
`;

const AttandanceContainer = styled.div`
  width: 100%;
  min-height: 20%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  .attendance {
    font-size: 1.6rem;
  }
`;

const ContentLeftWrapper = styled.div`
  margin-bottom: 1rem;
`;

const ContentRightWrapper = styled.div`
  width: 100%;
`;

const BtnContainer = styled.div`
  min-height: 20%;
`;

export default HeroSection;