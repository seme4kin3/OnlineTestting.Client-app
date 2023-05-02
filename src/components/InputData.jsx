import { TextField } from '@mui/material';

const style = {
  color: '#f78c28',
  '& label.Mui-focused': {
    color: '#f78c28',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#f78c28',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: '#f78c28',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#f78c28',
    },
  },
};
const InputData = ({ changeProp, id, nameInput, data, name, questId }) => {
  return (
    <TextField
      name={name}
      value={data}
      onChange={(e) => changeProp(e, id, questId)}
      label={nameInput}
      size="small"
      sx={style}></TextField>
  );
};

export default InputData;
