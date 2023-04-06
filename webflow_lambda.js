console.log("Start AWS practice");

//----------- First lambda action ever ---------------------//
const form = document.querySelector('#formData');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const response = await fetch('arn:aws:lambda:eu-north-1:984112902435:function:helloWorld', {
    method: 'POST',
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      price: formData.get('price')
    })
  });
  const responseBody = await response.json();
  const responseElement = document.querySelector('.response');
  responseElement.innerText = responseBody.message;
});
