document.getElementById('mintForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    document.getElementById("loadingMsg").style.display = "block"
    const formData = {
        to: document.getElementById('to').value,
        metadata: {
            name: document.getElementById('name').value,
            image: document.getElementById('image').value,
            vgv: parseInt(document.getElementById('vgv').value),
            nomeDaEmpresa: document.getElementById('metadata_nomeDaEmpresa').value,
            imobFractionName:document.getElementById('metadata_imobFractionName').value,
            imobFractionSymbol:document.getElementById('metadata_imobFractionSymbol').value,
            cnpj: document.getElementById('metadata_cnpj').value,
            speUnitySPE02: document.getElementById('metadata_speUnitySPE02').value,
            endereco: document.getElementById('metadata_endereco').value,
            zoneamentoZC: document.getElementById('metadata_zoneamentoZC').value,
            torres: parseInt(document.getElementById('metadata_torres').value),
            pisos: document.getElementById('metadata_pisos').value,
            areaDePouso: document.getElementById('metadata_areaDePouso').value,
            areaDoada: document.getElementById('metadata_areaDoada').value,
            areaRestante: document.getElementById('metadata_areaRestante').value,
            areaPrivadaTotal: document.getElementById('metadata_areaPrivadaTotal').value,
            areaTotalConstruida: document.getElementById('metadata_areaTotalConstruida').value,
            areaComputavel: document.getElementById('metadata_areaComputavel').value,
            areaNaoComputavel: document.getElementById('metadata_areaNaoComputavel').value,
            projetoCG: parseInt(document.getElementById('metadata_projetoCG').value),
            gcMaximoPermitido: parseInt(document.getElementById('metadata_gcMaximoPermitido').value),
            projetoAreaPermeavel: document.getElementById('metadata_projetoAreaPermeavel').value,
            areaTotalDaLoja: document.getElementById('metadata_areaTotalDaLoja').value,
            estacionamento: document.getElementById('metadata_estacionamento').value,
            arquitetura: document.getElementById('metadata_arquitetura').value,
            uso: document.getElementById('metadata_uso').value,
            unidades: parseInt(document.getElementById('metadata_unidades').value),
            vagas: parseInt(document.getElementById('metadata_vagas').value),
            estudiosDeTipologia: document.getElementById('metadata_estudiosDeTipologia').value,
            tipologiaApartamentosTipo: document.getElementById('metadata_tipologiaApartamentosTipo').value,
            termoDeCompromissoAmbiental: document.getElementById('metadata_termoDeCompromissoAmbiental').value,
            aprovacao: document.getElementById('metadata_aprovacao').value,
            ata: document.getElementById('metadata_ata').value,
            cnpjSPE02: document.getElementById('metadata_cnpjSPE02').value,
            declaracaoDeInexibilidade: document.getElementById('metadata_declaracaoDeInexibilidade').value,
            despachoDeferido: document.getElementById('metadata_despachoDeferido').value,
            termoDeEncerramento: document.getElementById('metadata_termoDeEncerramento').value,
            alvaraDeAprovacao: document.getElementById('metadata_alvaraDeAprovacao').value,
        },
    };

    const authorizationToken = document.getElementById('authorization').value;
    const endpoint = 'http://localhost:8080/v1/mint';

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${authorizationToken}`,
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
            document.getElementById('successMessage').textContent = data.message;
            document.getElementById('diyNFTAddress').textContent = `DIY NFT Address: ${data.baseNFTAddress}`;
            document.getElementById('mintedTokenId').textContent = `Minted Token ID: ${data.mintedTokenId}`;
            document.getElementById('brickERC20Address').textContent = `Brick ERC20 Address: ${data.brickERC20Address}`;
            document.getElementById('transactionHash').textContent = `Transaction Hash: ${data.transactionHash}`;
            document.getElementById('transactionLink').innerHTML = `<a target="_blank" href="https://testnet.ftmscan.com/tx/${data.transactionHash}">Follow your transaction HERE!</a>`;
            document.getElementById('result').style.display = 'block';
            document.getElementById("loadingMsg").style.display = "none"
        } else {
            console.error('Error:', data.message);
            document.getElementById("loadingMsg").style.display = "none"
            alert("Error: ", data.message)
        }
    } catch (error) {
        document.getElementById("loadingMsg").style.display = "none"
        console.error('Error:', error);
        alert("Error", error)
    }
});