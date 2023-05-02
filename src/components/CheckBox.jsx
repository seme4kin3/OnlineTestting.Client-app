import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckBox = ({ Change, id, questId }) => {
  const [check, setCheck] = useState(false);

  const handleChangeCheck = () => {
    setCheck(!check);
    Change(check, id, questId);
  };
  return (
    <Checkbox
      checked={check}
      onChange={handleChangeCheck}
      inputProps={{ 'aria-label': 'controlled' }}
      color="warning"
    />
  );
};

export default CheckBox;
