import React, {useState} from 'react';
import { IconCheckbox} from "react-icon-checkbox";

function CheckboxIcon() {
    const [state, setState] = useState(false);

    const onCheckboxClicked = () => {
        setState(!state);
    }

    return (
        <IconCheckbox checked={state} 
                      checkedIcon={<i class="fa fa-heart" aria-hidden="true" style={{fontSize:"30px", color:"orange"}}></i>} 
                      uncheckedIcon={<i class="fa fa-heart-o" aria-hidden="true" style={{fontSize:"30px", color:"orange"}}></i>} 
                      onClick={onCheckboxClicked} />
      );
}

export default CheckboxIcon;