import React, {  useState } from 'react'

const Currency = () => {
   
	 
     const [ setName] = useState('');
  	
    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>$Dollor</option>
                        <option value="Dollor" name="dollor"> $Dollor</option>
						<option value="Pound" name="pound"> £Pound</option>
						<option value="Euro" name="euro"> Euro</option>
						<option value="Ruppee" name="ruppee"> Ruppee</option>
                  </select>
				</div>
             </div>

        </div>
    );
};
export default Currency;