import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 18,
  p: 4,
};

const ModalWindow = ({ active, setActive }) => {
  return (
    <div>
      <Modal
        open={active}
        onClose={() => setActive(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <EmojiEmotionsTwoToneIcon color="success" sx={{ width: '15vh', height: '15vh' }} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Вы успешно создали тест!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Вы его можете найти во вкладке "Пройти тест"
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;
