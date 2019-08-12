import styled from "styled-components";

const Button = styled.button`
  margin: 0 30px;
  width: 143px;
  height: 80px;
  font-family: Quicksand;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
  border: none;
  background-color: ${props => (props.reset ? "red" : "green")};
`;

export default Button;
