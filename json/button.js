function Dowloadzip() {
    // Failu.zip vajag pievienot projekta mape dowloadzip
    const zipUrl = 'dowloadfails/Warehouse_inventory_system.zip'; // faila atrodašanas vieta
    const a = document.createElement('a');
    a.href = zipUrl;
    a.download = 'Warehouse_system.zip'; // faila nosaukums 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}