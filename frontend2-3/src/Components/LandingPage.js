import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const landingPage = () => {
    const Button = styled.button`
  background-color: #40826D;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #2b5749;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`
    const TextDiv = styled.div`
        margin-top: 100px;
        @media screen and (max-width: 500px) {
            margin-top: 50px;
        }
    `
    return (
        <div className='landing-container'>
            <TextDiv>
                <h3 className='title'>Introducing Pintereach</h3>
                <p className='text'>
                    Pintereach is research made easy. Save and organize your articles, categorize by topic, custom-rank the items in your archive. The research solution you've been waiting for has arrived.
                </p>
            
                <ButtonGroup>
                    <Link to='/signup'>
                        <Button>Signup</Button>
                    </Link>
                    <Link to='/login'>
                        <Button>Login</Button>
                    </Link>
                </ButtonGroup>
            </TextDiv>
        </div>
    )
}

export default landingPage;
