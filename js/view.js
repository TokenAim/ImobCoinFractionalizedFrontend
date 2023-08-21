function getData() {
    const idInput = document.getElementById('idInput').value;

    if (!idInput) {
        alert('Please enter an ID');
        return;
    }

    const endpoint = `https://imobcoinfractionalized.onrender.com/v1/metadata/${idInput}`;
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.style.display = 'block';
    fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                loadingMessage.style.display = 'none';
                showData(data.metadata);
            } else {
                loadingMessage.style.display = 'none';
                alert('Data not found');
            }
        })
        .catch((error) => {
            loadingMessage.style.display = 'none';
            alert('An error occurred while fetching data');
            console.error(error);
        });
}

function showData(metadata) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = `
<h2>${metadata.nomeDaEmpresa}</h2>
<img src="${metadata.image}" alt="Building Image" width="220">
<p><strong>VGV:</strong> ${metadata.vgv}</p>
<p><strong>Imob ERC20 Fraction Name:</strong> ${metadata.imobFractionName}</p>
<p><strong>Imob ERC20 Fraction Symbol:</strong> ${metadata.imobFractionSymbol}</p>
<p><strong>Company Name:</strong> ${metadata.nomeDaEmpresa}</p>
<p><strong>CNPJ:</strong> ${metadata.cnpj}</p>
<p><strong>Address:</strong> ${metadata.endereco}</p>
<p><strong>Zoning:</strong> ${metadata.zoneamentoZC}</p>
<p><strong>Towers:</strong> ${metadata.torres}</p>
<p><strong>Floors:</strong> ${metadata.pisos}</p>
<p><strong>Area of Landing:</strong> ${metadata.areaDePouso}</p>
<p><strong>Donated Area:</strong> ${metadata.areaDoada}</p>
<p><strong>Remaining Area:</strong> ${metadata.areaRestante}</p>
<p><strong>Total Private Area:</strong> ${metadata.areaPrivadaTotal}</p>
<p><strong>Total Constructed Area:</strong> ${metadata.areaTotalConstruida}</p>
<p><strong>Computable Area:</strong> ${metadata.areaComputavel}</p>
<p><strong>Non-Computable Area:</strong> ${metadata.areaNaoComputavel}</p>
<p><strong>Maximum Allowed GC:</strong> ${metadata.gcMaximoPermitido}</p>
<p><strong>Architectural Firm:</strong> ${metadata.arquitetura}</p>
<p><strong>Usage:</strong> ${metadata.uso}</p>
<p><strong>Units:</strong> ${metadata.unidades}</p>
<p><strong>Parking Spaces:</strong> ${metadata.vagas}</p>
<p><strong>Studios of Typology:</strong> ${metadata.estudiosDeTipologia}</p>
<p><strong>Apartments of Type:</strong> ${metadata.tipologiaApartamentosTipo}</p>
<p><strong>Subsolos:</strong> ${metadata.subsolos}</p>
<p><strong>Áreas Comuns Descobertas:</strong> ${metadata.areasComunsDescobertas}</p>
<p><strong>Barriletes:</strong> ${metadata.barriletes}</p>
<p>
<strong>Environmental Commitment Document:</strong>
<a href="${metadata.termoDeCompromissoAmbiental}" target="_blank">View Document</a>
</p>
<p>
<strong>Approval Document:</strong>
<a href="${metadata.aprovacao}" target="_blank">View Document</a>
</p>
<p>
<strong>Ata Document:</strong>
<a href="${metadata.ata}" target="_blank">View Document</a>
</p>
<p>
<strong>CNPJ SPE 02 Document:</strong>
<a href="${metadata.cnpjSPE02}" target="_blank">View Document</a>
</p>
<p>
<strong>Declaration of Non-Exigibility:</strong>
<a href="${metadata.declaracaoDeInexibilidade}" target="_blank">View Document</a>
</p>
<p>
<strong>Definitive Dispatch Document:</strong>
<a href="${metadata.despachoDeferido}" target="_blank">View Document</a>
</p>
<p>
<strong>Enclosure Document:</strong>
<a href="${metadata.termoDeEncerramento}" target="_blank">View Document</a>
</p>
<p>
<strong>Approval Alvara:</strong>
<a href="${metadata.alvaraDeAprovacao}" target="_blank">View Document</a>
</p>
`;
}