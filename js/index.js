


function generateRandomInvoiceNumber() {
  return "GMT" + Math.floor(Math.random() * 10000000); // Genera un número aleatorio con prefijo "gmt"
}

function generateInvoice() {
  // Obtener los valores del formulario
  const agente = document.getElementById("agente").value;
  const agencia = document.getElementById("agencia").value;
  const contacto = document.getElementById("contacto").value;

  const date = document.getElementById("date").value;
  const sender = document.getElementById("sender").value;
  const direction = document.getElementById("direction").value;
  const dip = document.getElementById("dip").value;
  const telremitente = document.getElementById("telremitente").value;
  const amount = parseFloat(document.getElementById("amount").value);

  const receiver = document.getElementById("receiver").value;
  const directionreceiver = document.getElementById("directionreceiver").value;
  const telreceive = document.getElementById("telreceive").value;

  // Validar los campos del formulario
  if ( !date || !sender || !direction || isNaN(amount) || !receiver || isNaN(telremitente) || isNaN(amount ) || !directionreceiver  || !telreceive ) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  // Generar número de factura y calcular monto recibido
  const invoiceNumber = generateRandomInvoiceNumber();


  // Mostrar los datos en la factura
  document.querySelectorAll("#invoice-date").forEach(el => el.innerText = date);
  document.querySelectorAll("#invoice-number").forEach(el => el.innerText = invoiceNumber);

  document.querySelectorAll("#invoice-agente").forEach(el => el.innerText = agente);
  document.querySelectorAll("#invoice-agencia").forEach(el => el.innerText = agencia);
  document.querySelectorAll("#invoice-contacto").forEach(el => el.innerText = contacto);

  
  document.querySelectorAll("#invoice-sender").forEach(el => el.innerText = sender);
  document.querySelectorAll("#invoice-direction").forEach(el => el.innerText = direction);
  document.querySelectorAll("#invoice-dip").forEach(el => el.innerText = dip);
  document.querySelectorAll("#invoice-telremitente").forEach(el => el.innerText = telremitente);
  document.querySelectorAll("#invoice-amount").forEach(el => el.innerText = amount.toFixed(1));

  document.querySelectorAll("#invoice-receiver").forEach(el => el.innerText = receiver);
  document.querySelectorAll("#invoice-directionreceiver").forEach(el => el.innerText = directionreceiver);
  document.querySelectorAll("#invoice-telreceive").forEach(el => el.innerText = telreceive);


  // Mostrar la factura y ocultar el formulario
  document.querySelector(".form-container").style.display = "none";
  document.querySelector(".invoice-container").style.display = "block";
  document.querySelector(".imprimir").style.display = "block";
}

function printInvoice() {
  // Imprimir el contenido de la factura
  const invoice = document.getElementById("invoice").innerHTML;

  const originalContent = document.body.innerHTML;

  document.body.innerHTML = invoice;
  window.print();

  document.body.innerHTML = originalContent;
  location.reload(); // Recargar la página después de imprimir
}

    
