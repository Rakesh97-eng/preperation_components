import { Card, CardContent, Chip } from "@mui/material";
import user from "../../assets/user.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PhoneLockedIcon from "@mui/icons-material/PhoneLocked";
import "./longcard.css";
const LongCard = () => {
  return (
    <>
      <Card sx={{ width: "35%", margin: "auto" }}>
        <CardContent
          style={{ display: "flex", gap: "5%", position: "relative",alignItems:"center" }}
        >
          <div style={{ width: "10%", height: "100px" }}>
            <img src={user} style={{ width: "100%", objectFit: "contain" }} />
          </div>
          <div style={{width: "90%"}}>
            <div style={{ display: "flex", justifyContent: "space-between"}}>
              <div
                style={{ fontSize: "22px", fontWeight: "550", color: "black" }}
              >
                User Name
              </div>

              <Chip style={{fontSize:"18px",fontWeight:"550",borderRadius:"5px"}} label="$50/mins" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "65%" }}>
                {/* <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                > */}
                  <div style={{ width: "50%",marginTop:"5px" }}>
                    <span className="label-content-icons">
                      <CalendarMonthIcon /> Date:
                    </span>
                    <span className="value-content">10 may</span>
                  </div>
                  <div style={{ width: "50%",marginTop:"5px" }}>
                    <span className="label-content-icons">
                      {" "}
                      <AccessAlarmIcon /> Time:
                    </span>
                    <span className="value-content">10:50 Am</span>
                  </div>
                  <div style={{ width: "50%",marginTop:"5px"}}>
                    <span className="label-content-icons">
                      <PhoneLockedIcon /> Duration:
                    </span>
                    <span className="value-content">50 mins</span>
                  </div>
                {/* </div> */}
              </div>
              <Chip
                className="status-chip"
                label="Pending"
                icon={<ThumbUpIcon />}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LongCard;
