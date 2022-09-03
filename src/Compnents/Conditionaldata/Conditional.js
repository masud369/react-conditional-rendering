import React from 'react';

const Conditional = (props) => {
const info = props.info;
let text;
if (info) {
     text = 'welcome, My friends';          
}else{
    text = "I don't know you, My friends!";
}
    return (
        <div>
             <h4>{text}</h4>
             {
                //for resturant(tarnary operator)
                info ? <p>Yea, resturant is open!</p>: <p>no, resturant is closed!</p>
             }
             {info && <p>Just checking out! if it true or not</p>}
        </div>
        

    );
};

export default Conditional;