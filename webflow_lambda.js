console.log("Start AWS practice");

//----------- First lambda action ever ---------------------//
const form = document.querySelector('#formData');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const response = await fetch('https://eu-north-1.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-north-1:984112902435:function:helloWorld/invocations', {
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


//arn:aws:lambda:eu-north-1:984112902435:function:helloWorld 