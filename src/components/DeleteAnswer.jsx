import DeleteIcon from '@mui/icons-material/Delete';
const DeleteAnswer = ({ style, Delete, id }) => {
  const deleteAn = (index) => {
    Delete(index);
  };
  return (
    <button style={style} onClick={() => deleteAn(id)}>
      <DeleteIcon fontSize="medium" />
    </button>
  );
};

export default DeleteAnswer;
