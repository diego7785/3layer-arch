async function loadMyModule() {
  const fetch = await import('node-fetch');
  
  function getAllUsers(){
    fetch('http://localhost:5433/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return {
    getAllUsers: getAllUsers
  }
}

let funcs = loadMyModule();
console.log(funcs)

module.exports = {
  getAllUsers: funcs.getAllUsers
}


