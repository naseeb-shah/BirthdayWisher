import React from 'react';
import { useState } from 'react';
const Wish = ({ name }) => {
  var sai=['deen','shah','deen']
  var count=0
  var [content,setcontent]= useState(sai[count]);
  setInterval(() => {
if(count<sai.length){
  setcontent(sai[count++])
}else{
  count=0
}
    
  }, 2000);

  return (
    <>
    <div className='wish-message'>
      HAPPY BIRTHDAY <span className='highlight'>{name.toUpperCase()}</span> !!!
    </div>
  <div className="s-heart">
  <div className='wish-message'>
      HAPPY BIRTHDAY <span className='highlight'>{name.toUpperCase()}</span> !!!
    </div>
    </div>

    </>
  );
};

export default Wish;
