import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdDangerous } from "react-icons/md";
import "./toastcomp.css";
const ToastComp = ({id, type, value,style ,handleRemove}) => {
    const [visible, setVisible] = useState(true);

  let toastIcons = {
    sucess: <FaCheck />,
    info: <IoIosInformationCircleOutline />,
    error: <MdDangerous />,
  };

  useEffect(() => {
    let timer;
      timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    handleRemove(id);
  };

  console.log("visible",visible);

  return (
    <>
     
     {visible && (
        <div className={`toastcontainer ${type}`} style={style}>
          {toastIcons[type]}
          {value}
          <button onClick={handleClose}>X</button>
        </div>
      )}
      
    </>
  );
};

export default ToastComp;
