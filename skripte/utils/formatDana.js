
//Vraca dan u formatu //Sunday, March 2 
export let dodajDane = (datum,brojDana)=>
{
    const rezultat = new Date(datum);

    rezultat.setDate(rezultat.getDate()+brojDana);
    const opcije = {weekday:'long',month:'long',day:'numeric'};
    const formatiraniDatum = rezultat.toLocaleDateString('US',opcije);

    return formatiraniDatum;
}