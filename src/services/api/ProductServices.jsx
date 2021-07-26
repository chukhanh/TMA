import axios from 'axios';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


let requestOptions = {
  getRequest: {
    method: "GET",
    redirect: "follow",
  },

  deleteRequest: {
    method: 'DELETE',
    redirect: 'follow'
  },
}


let array = [];
export const getProduct = () => {
  fetch(`/api/v1/product`, requestOptions.getRequest)
    .then((response) => response.json())
    .then((result) => result.map(e => array.push(e)))
    .catch((error) => console.log("error", error));
  return array;
};

export const deleteProduct = (id) => {
  fetch(`/api/v1/product/${id}`, requestOptions.deleteRequest)
  .then(response => response.json)
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export const postProduct = async (createProduct) => {
  const res = await axios.post('/api/v1/product', createProduct);
  return res;
}



export const updateProduct = async (id, data)  => {
  console.log(id);
  console.log(data);
  const res = await axios.put(`/api/v1/product/${id}`, data);
  return res.data;
};


