async function getAvailableDoctors(){
    let time = (new Date()).getHours();
    if(6 <= time && time < 19){
        const losOlivos =  await import('./initLosOlivos.mjs');
        return(losOlivos.default.getAvailableDoctors())
    } else {
        const sanPedro = await import('./initSanPedro.mjs');
        return(sanPedro.default.getAvailableDoctors());
    }
}

//console.log(await getAvailableDoctors());

export default getAvailableDoctors;

