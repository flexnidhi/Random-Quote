let quotes = [
    "Do what you love and you’ll never work again.",
    "Success is not final, failure is not fatal.",
    "Believe you can and you're halfway there.",
    "Life is 10% what happens and 90% how you react.",
    "Success is the sum of small efforts repeated every day.",
    "Opportunities don’t happen, you create them.",
    "What we think, we become.",
    "The only way to do great work is love.",
    "The harder you work for something, the greater you feel.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success usually comes to those who are too busy to wait.",
    "The best way to predict the future is to create it.",
    "Happiness depends upon ourselves.",
    "Dream big. Start small. Act now.",
    "You miss 100% of the shots you don’t take.",
    "Your limitation—it’s only your imagination.",
    "Push yourself because no one else is going to do it.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go get it.",
    "The harder the battle, the sweeter the victory.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Dream it. Believe it. Build it.",
    "It always seems impossible until it’s done.",
    "You are capable of amazing things.",
    "In the middle of every difficulty lies opportunity.",
    "Your only limit is your mind.",
    "Strive for progress, not perfection.",
    "Everything you can imagine is real.",
    "Act as if what you do makes a difference.",
    "Don’t wait for opportunity. Create it.",
    "Doubt kills more dreams than failure ever will.",
    "Don’t limit your challenges, challenge your limits.",
    "The future depends on what you do today.",
    "Do one thing every day that scares you.",
    "You become what you believe.",
    "The only way to achieve the impossible is to believe.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Success doesn’t come from what you do occasionally, but consistency.",
    "You don’t have to be great to start.",
    "Don’t be afraid to give up the good to go better.",
    "The difference between ordinary and extraordinary is that little extra.",
    "A journey of a thousand miles begins with one step.",
    "Success is the sum of small efforts, repeated daily.",
    "Don’t count the days. Make the days count.",
    "You are stronger than you think.",
    "It does not matter how slowly you go, as long.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Be the change you want to see in the world.",
    "You don’t have to be perfect to be amazing.",
    "The best way out is always through.",
    "What lies behind us and what lies before us are tiny.",
    "Do what you can with all you have, where you are.",
    "You are never too old to set another goal."
];

let nextBtn = document.getElementsByClassName('nextbtn')[0];
let quoteEl = document.getElementsByClassName('quote')[0]
nextBtn.addEventListener("click",function(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomElement = quotes[randomIndex];
    quoteEl.textContent=randomElement;
})
