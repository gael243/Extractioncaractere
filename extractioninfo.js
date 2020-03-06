let phrase="Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital.Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com."

phrase=phrase.split(/[ ,]/);
 

//tableau qui supprime le point final
const supprimerPoint=(tableauPointasupprimer)=>{
    for(let i=0;i<tableauPointasupprimer.length;i++){
        if(tableauPointasupprimer[i].endsWith('.')){
            tableauPointasupprimer[i]=tableauPointasupprimer[i].slice(0,tableauPointasupprimer[i].length-1);
        }
    }
}
//Trouver le nombre des adresse mail et les Lister
 const toutlesadresse=phrase.filter((AdresseMail)=>{
     return AdresseMail.includes('@');
 })
let nombreAdresse=toutlesadresse.length;
  supprimerPoint(toutlesadresse)
 console.log("nous avons dans notre phrase "+nombreAdresse+" adresse mail \n et les voici: "+toutlesadresse+'\n');
 
//  trouver les nombres des numeros de telephone et les Lister
const toutlesnumerosphone=phrase.filter((NumeroPhone)=>{
    return NumeroPhone.startsWith('+243');
})
let nombreNumPhone=toutlesnumerosphone.length;
supprimerPoint(toutlesnumerosphone)
console.log("nous avons dans notre phrase "+nombreNumPhone+" numeros telephone \n et les voici: "+toutlesnumerosphone+'\n');


//trouver tout les numeros tigo different d'orange
const toutlesnumerostigo=phrase.filter((numerosTigo)=>{
    return  numerosTigo.startsWith('+24389');
})
supprimerPoint(toutlesnumerostigo)
console.log("voici les numeros tigo trouver: "+toutlesnumerostigo);

//trouver tout les numeros orange different de tigo
const toutlesnumerosorange=phrase.filter((numerosOrange)=>{
    return  numerosOrange.startsWith('+24384') || numerosOrange.startsWith('+24385')  ;
})
supprimerPoint(toutlesnumerosorange)
console.log("voici les numeros orange trouver: "+toutlesnumerosorange);

//trouver tout les adresses mail professionelle
const toutlesadresseprofessionel=phrase.filter((AdresseMailProfessionel)=>{
    return AdresseMailProfessionel.includes('@kinshasadigital');
})
supprimerPoint(toutlesadresseprofessionel)
console.log("voici les adresse mail professionel trouver:"+toutlesadresseprofessionel);

//trouver tout les adresses mail privee
const toutlesadresseprivee=phrase.filter((AdresseMailPrivee)=>{
    return AdresseMailPrivee.includes('@gmail');
})
supprimerPoint(toutlesadresseprivee)
console.log("voici les adresse mail priver trouver:"+toutlesadresseprivee)

//trouver le nombre des mots en Excluant les articles, pronon personnel et relatif
   let  suppression=phrase.filter(word=>!/le|\la\|les|des|du|un|une|243|@|je|tu|il|elle|nous|vous|elles|ils|à|qui/.test(word))
   suppression=suppression.length

console.log("il y a : "+suppression+" mots après la suppression des autres elements");



  



