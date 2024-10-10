import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./modal.css";
import LongCard from "../longcard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius:"5px",
//   border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-box"
          >
            <h4 >Order Summary</h4>

            <div className="modal-content-container">
              <div style={{ width: "50%" }}>
                <p className="modal-content-label">User Name</p>
                <p className="modal-content-value">Rakesh</p>
              </div>
              <div style={{ width: "50%" }}>
                <p className="modal-content-label">Receipent Name</p>
                <p className="modal-content-value">Raj</p>
              </div>
              <div style={{ width: "50%" }}>
                <p className="modal-content-label">User Name</p>
                <p className="modal-content-value">Rakesh</p>
              </div>
              <div style={{ width: "50%" }}>
                <p className="modal-content-label">Receipent Name</p>
                <p className="modal-content-value">Raj</p>
              </div>
              <div style={{ width: "50%" }}>
                <p className="modal-content-label">User Name</p>
                <p className="modal-content-value">Rakesh</p>
              </div>
              <div style={{ width: "50%" }}>
                <p className="modal-content-label">User Name</p>
                <p className="modal-content-value">Rakesh</p>
              </div>
            </div>
          </div>
          
          <div
            className="modal-box"
          >
            <h4>Payment Summary</h4>

            <div>
              <div className="modal-content-container">
                <p className="modal-content-label">Cost</p>
                <p className="modal-content-pvalue">$200</p>
              </div>
              <div className="modal-content-container">
                <p className="modal-content-label">GST</p>
                <p className="modal-content-pvalue">1%</p>
              </div>
              <hr></hr>
              <div className="modal-content-container">
                <p className="modal-content-label">Total</p>
                <p className="modal-content-pvalue" style={{color:"black"}}>$220</p>
              </div>
            </div>
          </div>
            <div className="modal-content-container" style={{justifyContent:"center",gap:"5px",flexWrap:"nowrap"}}>

          <button className="discard-btn">Discard</button>
          <button className="checkout-btm">Checkout</button>
            </div>
        </Box>
      </Modal>
      <LongCard/>
    </div>
  );
}
