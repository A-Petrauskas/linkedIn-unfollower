let userCards = document.querySelectorAll(".follows-recommendation-card");

const targetTags = ["lion", "l.i.o.n", "open networker", "open-networker"];

let count = 0;
userCards.forEach(function (userCard) {
    let userCardHeadline = userCard.outerText.toLowerCase();

    if (targetTags.some(el => userCardHeadline.includes(el))) {
        count++;

        userCard.querySelector(".follows-recommendation-card__follow-btn").click();
    }
});

alert("Unfollowing " + count + " users");