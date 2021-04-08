import React from 'react';

import image from '../../icons/delete.png';
import image2 from '../../icons/edit.png';

const VegetableData = (props) => {

    const { name, price } = props.vegetableData;
    // console.log(props.vegetableData.name);

    

    return (
        <div className="container">
            <table style={{ margin: '50px' }}>
                <tbody>
                    <tr >
                        <td style={{ padding: ' 10px 50px' }}><p>{name}</p></td>
                        <td style={{ padding: ' 10px 50px' }}><p>1 kg </p></td>
                        <td style={{ padding: ' 10px 50px' }}><p>$ {price}</p></td>
                        <td style={{ padding: ' 10px 50px' }}><p><img  style={{ height: '20px', padding: ' 1px ' }} src={image} alt="" /><img style={{height: '20px', padding: ' 1px '}} src={image2} alt="" /></p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default VegetableData;