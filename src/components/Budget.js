
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,remaining } = useContext(AppContext);
    const [cost, setCost] = useState('');
	
	   const submitEvent = () => {

            if(cost > budget) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }
			
			 if(cost < budget) {
                alert("you cannot reduce the buget value lower than the spending");
                setCost("");
                return;
            }
     
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: $</span>
			  <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setCost(event.target.value)}
						onClick={submitEvent}>
                        </input>
        </div>
    );
};
export default Budget;