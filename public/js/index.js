if(window.ethereum){
    // Quando ele tiver MetaMask
    document.querySelector('button').addEventListener('click',  async()=>{
        try{
        const accounts = await ethereum.request({method:'eth_requestAccounts'});
        account = accounts[0];
        window.location.href = './tela.html'
    } catch(e){}
    })
}
else{
    alert('Não pode interagir com o nosso website...')
}
