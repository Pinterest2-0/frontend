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
        margin-top: 20px;
        @media screen and (max-width: 500px) {
            margin-top: 50px;
        }
    `
    const MyContainer = styled.div`
        display: flex;
        justify-content: center;
        padding-left: 150px;
        padding-right: 150px;
        
        @media screen and (max-width: 768px) {
            padding: 50px;
            flex-flow: column nowrap;
        }
    `
    return (
        <div className='landingContainer'>
            <TextDiv>
                <h1 className='title'>Introducing PinteReach</h1>
                <MyContainer>
                    <div className='landingText'>
                        <p className='text'>
                            <b>PinteReach</b> is research made easy. Save and organize your articles, categorize by topic, custom-rank the items in your archive. 
                            <br/><br/>
                            The modern research solution has arrived. <br/>Create your free account today.
                        </p>
                        <ButtonGroup>
                            <Link to='/signup'>
                                <Button>Signup</Button>
                            </Link>
                            <Link to='/login'>
                                <Button>Login</Button>
                            </Link>
                        </ButtonGroup>
                    </div>
                    <div className='landingPageImageContainer'>
                        <img src='https://images.unsplash.com/photo-1623039405147-547794f92e9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=906&q=80' alt=''></img>
                    </div>
                </MyContainer>
               
            </TextDiv>
        </div>
    )
}

export default landingPage;
