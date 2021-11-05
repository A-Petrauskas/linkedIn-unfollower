let userCards = document.querySelectorAll(".follows-recommendation-card");

const targetTags = ["lion", "l.i.o.n", "open networker", "open-networker"];

let count = 0;
userCards.forEach(function (element) {
    let userCardInfo = element.outerText.toLowerCase();

    if (targetTags.some(el => userCardInfo.includes(el)))
        count++;
});

console.log(count);