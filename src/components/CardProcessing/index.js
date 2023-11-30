import React from 'react';
import ReactLoading from 'react-loading';
 
const CardProcessing = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'25%'} width={'25%'} />
);
 
export default CardProcessing;