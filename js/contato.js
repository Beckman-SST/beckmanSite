document.addEventListener('DOMContentLoaded', function() {
    const openMapBtn = document.getElementById('openMapBtn');
    const copyAddressBtn = document.getElementById('copyAddressBtn');
    const address = "R. Dom Francisco, Rua 04, Quadra 3, Nº 12, Cohama, CEP: 65073-450, São Luís – MA";

    // Função para abrir no Google Maps
    openMapBtn.addEventListener('click', function() {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(mapsUrl, '_blank');
    });

    // Função para copiar o endereço
    copyAddressBtn.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(address);
            alert('Endereço copiado para a área de transferência!');
        } catch (err) {
            console.error('Erro ao copiar endereço:', err);
            alert('Não foi possível copiar o endereço. Por favor, tente novamente.');
        }
    });
});