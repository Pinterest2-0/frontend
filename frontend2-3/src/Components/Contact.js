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
              <img className='contactImage'src='https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?b=1&k=6&m=1271752802&s=170667a&w=0&h=-KKfo7gAMrKoH7QUvPGiBA4h1OfcEGhHpcEH7DTzP7U='alt=''></img>

                <TextDiv>
                    <h3 className='title'>PinteReach</h3>
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