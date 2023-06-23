import React from 'react';

const  SecondComponent = (props) => {
    const valueFromChild = "Blabla"
    return (
        <div>
            <h1>SecondComponent</h1>
            <hr />
            <div>
                <button onClick={props.valueFromPrent}>BtnFromParent</button>
            </div>
            <div>
                <button onClick={() => props.ValueFromChild(valueFromChild)}>BtnFromParentWithValue</button>
            </div>
        </div>
    );
}
 
export default SecondComponent;