import { useSelector } from "react-redux";

import "./profile.css";

export async function displayPopup() {
  const user = useSelector((state) => state.user);
  const username = user.user.username;

  const message = `You are logged in as: ${username}`;

  const background = document.getElementById("background");

  const htmlString = `
        <div class="popup">
            <button id="closeBtn" onClick="closePopup()">Close</button>
            <div class="card">
                <img class="card-image" src="${image}" />
                <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                <p><small>Height: </small>${pokemon.height} | <small>Weight: </small>${pokemon.weight} | 
                <small>Type: </small>${type}
            </div>    
        </div>
    `;
}

export default displayPopup;
