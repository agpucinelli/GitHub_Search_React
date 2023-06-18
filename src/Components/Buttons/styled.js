import styled from 'styled-components';

export const ButtonSt = styled.button `
    display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3e8e41;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.3);
  }
`;

export const ButtonDiv = styled.div `
    padding:10px;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const InputSt = styled.input `


width: 300px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f8f8f8;
  outline: none;
  border-color: #5c9eff;
  box-shadow: 0 0 5px #5c9eff;
  color: #999;

`
export const InputStDiv = styled.div`


display: flex;
    align-items: center;
    justify-content: center;
`