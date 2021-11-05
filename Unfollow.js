let userCards = document.querySelectorAll(".follows-recommendation-card");

//Change the tags here
const targetTags = ["lion", "l.i.o.n", "open networker", "open-networker", "open linkedin networker", "open to networking", "lets connect"];

let count = 0;
userCards.forEach(function (userCard) {
    let userCardHeadline = userCard.outerText.toLowerCase();

    if (targetTags.some(el => userCardHeadline.includes(el))) {
        count++;

        userCard.querySelector(".follows-recommendation-card__follow-btn").click();
    }
});

if (count == 0)
    alert("Failed to find users with given tags");

else if (count.toString().includes("1"))
    alert("Unfollowing " + count + " user");

else 
    alert("Unfollowing " + count + " user");