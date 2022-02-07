import * as React from 'react';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';

const MyButton = styled(Button)({
  backgroundColor: "96BB36",
  border: 0,
  borderRadius: 3,
  color: '#96BB36',
  height: 44,
  width: 130,
  padding: '0 30px',
});

export default function StyledComponents() {
  return <MyButton></MyButton>;
}