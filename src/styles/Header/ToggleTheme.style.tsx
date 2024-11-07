import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Label = styled.label`
  display: inline-block;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  appearance: none;
`;

const Span = styled.span<{theme: string}>`
  display: block;
  position: relative;
  font-size: 18px;
  padding: 8px;
  padding-left: 74px;
  &::before {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 36px;
    border-radius: 18px;
    background-color: ${({ theme }) => (theme === "dark" ? "red" : "white")};
    transition: background-color 0.3s;
  }
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: black;
    left: 3px;
    top: 3px;
    transition: transform 0.3s;
  }
  ${Input}:checked + &::before {
    background-color: red;
  }
  ${Input}:checked + &::after {
    transform: translateX(24px);
  }
`
export {Container, Label, Input, Span}