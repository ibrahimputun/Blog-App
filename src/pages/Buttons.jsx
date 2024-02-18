import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useSelector } from "react-redux";

export default function Buttons({ setPage }) {

  const { currentPage, totalPages } = useSelector((state) => state.blog);

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button 
      disabled={isPreviousDisabled} 
      onClick={() => setPage(currentPage - 1)
      }
      sx={{ backgroundColor: 'purple', color: 'white' }} // Arka plan ve yazı rengi ayarlandı
      >PREV</Button>
      <Button disabled={isNextDisabled} onClick={() => setPage(currentPage + 1)}
      sx={{ backgroundColor: 'purple', color: 'white' }} // Arka plan ve yazı rengi ayarlandı
      >
        NEXT</Button>
    </ButtonGroup>
  );
}

