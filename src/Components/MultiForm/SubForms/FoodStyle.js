import React, { useRef } from "react";
import "./SubForm.css";

const FoodStyle = (props) => {
  const preventFunc = (e) => {
    e.preventDefault();

    const styleData = {
      foodStyle: [],
    };

    allCheckBoxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.foodStyle.push(checkbox.value);
      }
    });

    props.modifyIndex(4, styleData);
  };

  const allCheckBoxes = useRef([]);

  const addCheck = (el) => {
    if (el && !allCheckBoxes.current.includes(el)) {
      allCheckBoxes.current.push(el);
    }
  };

  const handleReturn = () => {
    props.modifyIndex(2);
  };

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>Quelles sont tes cuisines préférées</p>
      <span>Choix multiples</span>

      <label htmlFor="italian">Italienne</label>
      <input ref={addCheck} type="checkbox" id="italian" value="italian" />

      <label htmlFor="japanese">Japonaise</label>
      <input ref={addCheck} type="checkbox" id="japanese" value="japanese" />

      <label htmlFor="indian">Indienne</label>
      <input ref={addCheck} type="checkbox" id="indian" value="indian" />

      <label htmlFor="thaï">Thaïlandaise</label>
      <input ref={addCheck} type="checkbox" id="thaï" value="thaï" />

      <label htmlFor="french">Française</label>
      <input ref={addCheck} type="checkbox" id="french" value="french" />

      <label htmlFor="chinese">Chinoise</label>
      <input ref={addCheck} type="checkbox" id="chinese" value="chinese" />

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          Précédent
        </button>
        <button>Valider</button>
      </div>
    </form>
  );
};

export default FoodStyle;
