//toma el archivo del DOM
const input=document.getElementById("file-ip-1")
const preview = document.getElementById("file-ip-1-preview")

//funcion para poder realizar cambios al input
input.addEventListener("change", async (event) => {
	
	document.getElementById("demo").innerHTML = " ";

	const archivo = event.target.files[0];
	const arrayBuffer = await archivo.arrayBuffer()
	var src = URL.createObjectURL(event.target.files[0]);
	preview.src = src;
	preview.style.display = "block";

	//Consulta a la API de prediccion de de Custom Vision
	var myHeaders = new Headers();
	myHeaders.append("Prediction-Key", "89568e35e94d4afca78f4d233110c877");
	myHeaders.append("Content-Type", "application/json");

	var file = arrayBuffer;

	var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	body: file,
	redirect: 'follow'
	};

	fetch("https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/5958dd45-9962-46b9-96da-1975e6d72fa1/classify/iterations/Iteration8/image", requestOptions)
	.then(response => response.json())
	.then(result => {

		//realiza la busqueda de la mayor probabilidad
		maxValue = Math.max(...result.predictions.map(x=>x.probability));
		res=result.predictions.filter(x=>x.probability==maxValue)
		document.getElementById("demo").innerHTML = res[0]["tagName"];
		console.log(res[0]["tagName"])

		  //Muestreo de base de datos para traer información
			  
	})
	.catch(error => console.log('error', error));

});