const fetch = jest.fn(()=>{
  return new Promise((resolve)=>{
      const randomBoolean = Math.random() < 0.5; 
      if(randomBoolean){
        resolve({ status: 450, statusText: 'OK'})
      }else{
        reject();
      }

  })
});
module.exports = fetch;