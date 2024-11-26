
    
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
  document.getElementById("invoice-date").innerText = date;
  document.getElementById("invoice-number").innerText = invoiceNumber;

  document.getElementById("invoice-agente").innerText = agente;
  document.getElementById("invoice-agencia").innerText = agencia;
  document.getElementById("invoice-contacto").innerText = contacto;

  
  document.getElementById("invoice-sender").innerText = sender;
  document.getElementById("invoice-direction").innerText = direction;
  document.getElementById("invoice-dip").innerText = dip;
  document.getElementById("invoice-telremitente").innerText = telremitente;
  document.getElementById("invoice-receiver").innerText = receiver;
  document.getElementById("invoice-amount").innerText = amount.toFixed(1);

  document.getElementById("invoice-receiver").innerText = receiver;
  document.getElementById("invoice-directionreceiver").innerText = directionreceiver;
  document.getElementById("invoice-telreceive").innerText = telreceive;


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

    
