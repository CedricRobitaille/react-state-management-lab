import { useState } from "react";
import "./App.css"

const team = [];
let totalMoney = 100
let totalStrength = 0;
let totalAgility = 0;

const zombieFighters = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]




const App = () => {
  const [teamList, setTeamList] = useState(team);
  const [zombieFighterList, setzombieFighterList] = useState(zombieFighters);


  const handleAddFighter = (fighterObj) => {
    if (fighterObj.price <= totalMoney) {

      // Add fighter to team
      const newTeamListArray = [...teamList, fighterObj];
      setTeamList(newTeamListArray);

      // Spend money for the fighter
      totalMoney -= fighterObj.price;
      
      // Add team Strength total
      totalStrength += fighterObj.strength;

      // Add team Agility total
      totalAgility += fighterObj.agility;






      // Remove fighter from fighter list
      const newZombieFighterList = [...zombieFighterList];
      const zombieIndex = newZombieFighterList.findIndex(element => element["id"] === fighterObj.id) // Find the array index the fighter comes from
      newZombieFighterList.splice(zombieIndex, 1);  // remove the fighter from the list
      setzombieFighterList(newZombieFighterList); // Update the fighter
    } else {
      console.log("Sorry, not enough money to buy this homie!")
    }
  }

  return (
    <>
      <h1>Zombie Fighters</h1>

      <h2>Money: {totalMoney}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team: </h2>
      <ul>
        
        {teamList.length > 0 ? teamList.map((teamMember,index) => (
          <li key={index}>
            <img src={teamMember.img} alt="" />
            <h3>{teamMember.name}</h3>
            <p><span>Price:</span> {teamMember.price}</p>
            <p><span>Strength:</span> {teamMember.strength}</p>
            <p><span>Agility:</span> {teamMember.agility}</p>
          </li>
        )) : <p>Pick some team members</p>}
      </ul>
      
      <h2>Fighters: </h2>
      <ul>
        {zombieFighterList.map((zombieFighter) => (
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img} alt="" />
            <h3>{zombieFighter.name}</h3>
            <p><span>Price:</span> {zombieFighter.price}</p>
            <p><span>Strength:</span> {zombieFighter.strength}</p>
            <p><span>Agility:</span> {zombieFighter.agility}</p>
            <button onClick={() => { handleAddFighter(zombieFighter)}}>Add</button>
          </li>
        ))}
      </ul>
    </>
    
  );
}

export default App
