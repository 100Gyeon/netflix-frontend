import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WatchingContent from './WatchingContent';

const UserPick = () => {
  const [current, setCurrent] = useState('sad');
  const [prev, setPrev] = useState(null);

  const handleClick = (e) => {
    setCurrent(e.target.id);
  };

  useEffect(() => {
    if (current !== null) {
      const currentBtn = document.getElementById(current);
      currentBtn.style.color = '#d32f27';
    }
    if (prev !== null) {
      const prevBtn = document.getElementById(prev);
      prevBtn.style.color = '#ffffff';
    }
    setPrev(current);
  }, [current]);

  return (
    <StyledUserPick>
      <div>
        <WatchingContent />
      </div>
      <div>
        <Link to="/sub">내가 찜한 콘텐츠</Link>
        <StyledBox>
          <StyledBtnWrapper>
            <button onClick={handleClick} id="test">
              #시험 끝나면 볼 영화
            </button>
            <button onClick={handleClick} id="sad">
              #슬픈 영화
            </button>
            <button onClick={handleClick} id="series">
              #슬기로운 시리즈
            </button>
            <button onClick={handleClick} id="peace">
              #마음의 평화
            </button>
            <button onClick={handleClick} id="horror">
              #무서운거
            </button>
            <button onClick={handleClick} id="food">
              #음식
            </button>
          </StyledBtnWrapper>
        </StyledBox>
        {/* 임시 */}
        {/* <Content /> */}
      </div>
    </StyledUserPick>
  );
};

export default UserPick;

const StyledUserPick = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  top: 50.8rem;

  @media ${({ theme }) => theme.device.tablet} {
    position: relative;
    top: 8.5rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    top: 23.5rem;
  }

  & > div {
    margin-bottom: 3rem;
    & > h2 {
      margin-bottom: 0.8rem;
    }
    & > a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;

const StyledBox = styled.div`
  overflow-x: auto;
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  margin-top: 0.8rem;
  & > button {
    background: transparent;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 0;
    margin-right: 1.5rem;
    margin-bottom: 0.8rem;
  }
  & > button.clicked {
    color: #d32f27;
  }
`;
