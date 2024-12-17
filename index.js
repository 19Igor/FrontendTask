document.getElementById('inputform').addEventListener('submit', function(event){
	event.preventDefault()

  const formData = new FormData(event.target);
  
  let xmlDoc = document.implementation.createDocument('', '', null);
  let root = xmlDoc.createElement('form');
  xmlDoc.appendChild(root);

  formData.forEach((value, key) => {
    let field = xmlDoc.createElement(key);
    field.textContent = value;
    root.appendChild(field);
  })

  let serializer = new XMLSerializer();
  let xmlString = serializer.serializeToString(xmlDoc);

  console.log(xmlString)

  document.getElementById("output-data").value = xmlString;

})
