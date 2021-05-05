const fetch = jest.fn(()=>{
  return new Promise((resolve)=>{
      resolve({ status: 450, statusText: 'OK'})
  })
});

module.exports = fetch;