const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $c = document.getElementsByClassName.bind(document);
const $i = document.getElementById.bind(document);

var gameIdStorage = 1;

//////////// Sub Navigation List ///////////
const subnavItems = $$(".subnav-item");
const subnavItemActived = $(".nav-button-sub .subnav-item.subnav-active");
const subnavLine = $(".subnav-line");

subnavLine.style.left = "0px";
subnavLine.style.width = "76px";
subnavItems.forEach((subnavItem)=>{
    subnavItem.onclick = function(){
        $(".subnav-item.subnav-active").classList.remove("subnav-active");
        this.classList.add("subnav-active");
        subnavLine.style.left = subnavItem.offsetLeft + 'px';
        subnavLine.style.width = subnavItem.offsetWidth + 'px';
    }
})

const app = {
    // Game data
    games : [
        {
            id : 1,
            image : "1.ASimpleTest.png",
            name : "A Simple Test",
            author : "Ben Bonk",
            description : " A Simple Test is a very simple test provided by Oxcorp. Complete the trials correctly to potentially be accepted into the Oxcorp candidate program. Do not try to explore the test. Complete it, and move on with your life.\
            Please play with audio on for the intended experience. Press space to skip narration if needed. \
            nCode, Art, Narration, Writing, Trial Designer, and Creative Visionary  - BenBonk\
            ",
            category : [ "Interactive", "Stimulation", "Fiction", "Adventure"],
            download : "1.234.111",
            link : "https://benbonk.itch.io/a-simple-test",
        },
        {
            id : 2,
            image : "2.Hauntsfield.png",
            name : "Hauntsfield",
            author : "Allie Mackie",
            description : `Oh no!  Someone has stolen all the pumpkins from your farm, and the Hauntsfield festival is tomorrow!
            \nGet to know the residents of Hauntsfield and its outskirts, and hopefully get your pumpkins back in time to save the festival…
            \nHauntsfield is a short and sweet Halloween RPG designed for Game Boy.
            \nPlay time is 20-30 minutes. Hauntsfield has spooky themes, but is not scary and is appropriate for all ages.
            `,
            category : [ "Role playing"],
            download : "1.598",
            link : "https://alliemackie.itch.io/hauntsfield",
        },
        {
            id : 3,
            image : "3.SquidGameOnline.png",
            name : "SQUID GAME ",
            author : "StefanN",
            description : `If you are a fan of the Squid game, then you will like Red Light Green Light.
            \nYou can play from mobile too. This is an online version of the game, so you won't need to download or install anything.
            `,
            category : [ "Survival"],
            download : "1.234.111",
            link : "https://nstefan.itch.io/squid-game-online-red-light-green-light",
        },
        {
            id : 4 ,
            image : "4.MechaGenesisTactics.png",
            name : "Mecha Genesis: Tactics",
            author : "Zizaco",
            description : `A strategy game where you can push your enemies into things to deal more damage.
            \nThe game was originally developed for the GDU Jam #5 with the theme: "Use Enemies as Weapons"`,
            category : [ "Strategy"],
            download : "1.234.111",
            link : "https://zizaco.itch.io/mecha-genesis",
        },
        {
            id : 5,
            image : "5.BadBen.png",
            name : "Bad Ben",
            author : "Corpsepile",
            description : `Experience the first Found Footage Video Game that isn’t about Slender Man (citation needed)! Based on the cult hit micro-micro-micro-budget film series, the Bad Ben game is here to take the beloved franchise digital. Take the role of Tom Riley—voiced by the man himself, Nigel Bach—as he once again makes the incredibly informed decision to buy a house sight unseen at a sheriff’s auction.
            \nObviously, the night does not go by un-ghosted. Soon after his arrival, paranormal happenings begin to plague the unflappable Tom. You’ll have to get to the bottom of these spectral shenanigans, mostly by finding keys. Because it’s an indie horror game.
            \nDo you have what it takes to survive the night?`,
            category : [ "Stimulation", "Adventure"],
            download : "1.234.111",
            link : "https://corpsepile.itch.io/bad-ben",
        },
        {
            id : 6,
            image : "6.BurgerandFrights.png",
            name : "Burger & Frights",
            author : "Donitz",
            description : `It's a late night and you were craving burgers. It's time to ride home.
            \nBurger & Frights is a short horror game in which the player rides a bike throughout a dark forest. The game was inspired by games such as Rides with Strangers, and a certain horror movie by John Carpenter.
            `,
            category : [ "Survival"],
            download : "1.234.111",
            link : "https://donitz.itch.io/burger-frights",
        },
        {
            id : 7,
            image : "7.Terminus.png",
            name : "Terminus",
            author : "Hide the Pain Studios",
            description : `You've overslept your stop, not an uncommon experience for a college student. However, this time things seem a little different. Loosely based on a local ghost story.
            \nTerminus is a short 2D atmospheric horror game brought to you by a subgroup of Hide The Pain Studios (not a real studio), the two half dead programmers who love watching horror movies.
            `,
            category : [ "Puzzle"],
            download : "1.234.111",
            link : "https://hide-the-pain-studios.itch.io/terminus",
        }
    ],

    //Render game to index.html UI
    render : function (){
        var getLocalId = localStorage.getItem('localId');

        var getGamebyId = this.games.find((game,index)=>{
            return game.id == getLocalId;
        })

        var getCategoryOfGame = getGamebyId.category.map((categori)=>{
            return categori;
        })

                
        $(".product-container").innerHTML = `
        <div class="product-information-header">
            <div class="product-image" >
                <img src="../assets/image/game/${getGamebyId.image}" alt="">
            </div>

            <div class="product-content">
                <div class="product-information">
                    <h4 class="product-name">${getGamebyId.name}</h4>
                    <div class="product-flex-box">
                        <p class="product-author">${getGamebyId.author}</p>
                        <div class="product-flex-box-2">
                            <p class="product-download-count">${getGamebyId.download}
                                <i class="fas fa-cloud-download-alt"></i>
                            </p>
                            <span class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                    </span>
                        </div>
                    </div>
                    <p class="product-category">Category : <em>${getCategoryOfGame.join(", ")}</em></p>
                    <p class="product-price">Free</p>
                </div>

                <a href="${getGamebyId.link}" class="product-download-link">Download 
                <i class="ti-download"></i>
                </a>
            </div>
        </div>
        
        <div class="product-description">
            <p class="product-description-1">      ${getGamebyId.description}</p>
            <p class="product-description-1">${getGamebyId.description}</p>
            <div class="product-description-image">
                <img src="../assets/image/game/${getGamebyId.image}" alt="">
            </div>
            <p class="product-description-2">${getGamebyId.description}</p>
            <p class="product-description-2">${getGamebyId.description}</p>
        </div>`;

    },

    searchByInput : function(){
        var inputSearch = $(".nav-search-input input")
        var inputSearchButton = $(".nav-search-button")

        inputSearchButton.onclick = function(){
            var inputValue = $(".nav-search-input input").value;
            localStorage.setItem('localNameSearch', inputValue);
        }
    },


    start : function (){
        this.render();
        this.searchByInput();
    }


}

app.start();

