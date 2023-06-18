
import React, { useState } from 'react';
import Header from "./Components/Headers";
import InputComp from "./Components/InputTxt";
import Button from "./Components/Buttons";
import './styles.css';



function convertExib (titleUser, urlUser, avatarUser, NickUser) {
   
  return `
  
    <div class="convert-exib">
    <img src="${avatarUser}" width="50px">
    <h3>${NickUser}</h3>
             
    <a href="${urlUser}" target="_blank"> ${titleUser} </a>
    <br>
    <hr></hr>
    </div>
  
  `
}



function App() {
  const [currentRepo, setCurrentRepo] = useState('');  


 

function handleSearchRepo() {

const ResultsLopp = document.getElementById('eita')
ResultsLopp.innerHTML = ""

  
    fetch(`https://api.github.com/search/repositories?q=${currentRepo}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      for (let i = 0; i < data.items.length; i++) {
        const dataItems = data.items[i];
        

      const titleUser = dataItems.description
      const urlUser = dataItems.clone_url
      const avatarUser = dataItems.owner.avatar_url
      const NickUser = dataItems.owner.login
      console.log(titleUser)
      console.log(urlUser)
      console.log(avatarUser)
      console.log(NickUser)
      ResultsLopp.innerHTML += convertExib(titleUser, urlUser, avatarUser, NickUser)
      }
  })
  
  
    
}


  return (
    
     <>
     <Header />
     <hr></hr>
     <InputComp value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
     <Button onClick = {handleSearchRepo} />
     <hr></hr>
     
      <div id="eita"></div>
      
     </>
    
  );
}

export default App;
