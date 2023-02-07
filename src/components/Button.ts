import styled from 'styled-components';

// interface ButtonProps {
//   chil
// }

export default styled.button`
  width: 100%;
  height: 52px;
  background: #5061FC;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  border-radius: 4px;
  border: none;
  color: #fff;
  transition: 0.2s ease-in;

  &:hover{
    background: #b3bbff
  }

  &[disabled] {
    background: #ccc;
    cursor: not-allowed;
  }
`;
