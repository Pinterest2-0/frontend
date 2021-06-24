import React from 'react';
import styled from 'styled-components';

const Contact = () => {
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

    const TextDiv = styled.div`
    margin-top: 100px;
    @media screen and (max-width: 500px) {
        margin-top: 50px;
    }
`
        return (
            <div className='contact-container'>
                <TextDiv>
                    <h3 className='title'>Pintereach</h3>
                    <p className='text'>
                        1234 Fantasy Ln<br/>
                        Ba Sing Se, CA 10001
                    </p>
                    <Button>Contact Us</Button>
                </TextDiv>
            </div>
        )
}

export default Contact;