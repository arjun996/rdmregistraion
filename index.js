document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let teamName = document.getElementById("teamName").value;
    let leaderName = document.getElementById("leaderName").value;
    let leaderPhone = document.getElementById("leaderPhone").value;
    let tournamentId = document.getElementById("tourNumber").value;
    
    let message = `*RDM Gaming Hub - Team Registration*%0A----------------%0A*Team Name:* ${teamName}%0A*Leader Name:* ${leaderName}%0A*Tournament ID:* ${tournamentId}%0A*Phone:* ${leaderPhone}`;
    
    let adminNumber = "919061089106"; // Replace with admin's WhatsApp number (without +)
    window.open(`https://wa.me/${adminNumber}?text=${message}`, "_blank");
});