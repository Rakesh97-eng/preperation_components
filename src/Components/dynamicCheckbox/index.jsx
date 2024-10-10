import { useState } from "react";

const CheckboxComp = () => {
  const [allchecked, setAllChecked] = useState({
    react: false,
    css: false,
    html: false,
    javascript: false,
  });
  const [disablebutton,setDisablebutton] = useState(false)

  const updateCheckbox = () => {
    setDisablebutton(true)
    setAllChecked({
      ...allchecked,
      react: true,
      css: true,
      html: true,
      javascript: true,
    });
  };

  const handleCheckbox = (e) => {
    let { name } = e.target;
    let checkobj = {...allchecked,[name]:!allchecked[name]}
    Object.values(checkobj).filter((val)=>val === true).length == 4 ?setDisablebutton(true) :setDisablebutton(false)
    setAllChecked({ ...checkobj });

  };
  return (
    <>
      <div>
        <button disabled={disablebutton} onClick={updateCheckbox}>Select All</button>
      </div>
      <div>
        <input
          type="checkbox"
          id="react"
          checked={allchecked.react}
          name="react"
          onChange={(e) => handleCheckbox(e)}
        />{" "}
        <label htmlFor="react" name="react">
          React
        </label>
        <br></br>
        <input
          type="checkbox"
          checked={allchecked.css}
          onChange={(e) => handleCheckbox(e)}
          id="css"
          name="css"
        />{" "}
        <label htmlFor="css">Css</label>
        <br></br>
        <input
          type="checkbox"
          checked={allchecked.html}
          onChange={(e) => handleCheckbox(e)}
          id="html"
          name="html"
        />{" "}
        <label htmlFor="html">Html</label>
        <br></br>
        <input
          type="checkbox"
          checked={allchecked.javascript}
          onChange={(e) => handleCheckbox(e)}
          id="javascript"
          name="javascript"
        />{" "}
        <label htmlFor="javascript">Javascript</label>
        <br></br>
      </div>
    </>
  );
};
export default CheckboxComp;
