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
subnavLine.style.width = "68px";
subnavItems.forEach((subnavItem)=>{
    subnavItem.onclick = function(){
        $(".subnav-item.subnav-active").classList.remove("subnav-active");
        this.classList.add("subnav-active");
        subnavLine.style.left = subnavItem.offsetLeft + 'px';
        subnavLine.style.width = subnavItem.offsetWidth + 'px';
    }
})


// ////////////////// Game ////////////////// //
const app = {
    // Game data
    games : [
        {
            id : 1,
            image : "1.ASimpleTest.png",
            name : "A Simple Test",
            author : "Ben Bonk",
            description : ` A Simple Test is a very simple test provided by Oxcorp. Complete the trials correctly to potentially be accepted into the Oxcorp candidate program. Do not try to explore the test. Complete it, and move on with your life.
            \nPlease play with audio on for the intended experience. Press space to skip narration if needed.
            \nCode, Art, Narration, Writing, Trial Designer, and Creative Visionary  - BenBonk
            `,
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

    render : function(){
        var localInput = localStorage.getItem('localNameSearch');


        $(".search-result-box").innerHTML = `<p class="search-result">Search results for '${localInput}'</p>
        <a href="../index.html" class="search-all-games">Browse all games</a>`;
        

        var getNameArray = app.games.map((game)=>{
            return game.name.toLowerCase()
        })

        var getNameByComparing = getNameArray.filter((gamename)=>{
            return gamename.includes(localInput.toLowerCase());
        })

        var getGamesByName = app.games.filter((game)=>{
            return getNameByComparing.some((gameName)=>{
                return gameName == game.name.toLowerCase();
            })
        })

        var htmlIndex = getGamesByName.map((game,index)=>{
            return `<div class="grid__column-2-of-12">
            <a class="game-item" id="game-id-${game.id}" href="../game_page/game.html">
                <div class="game-thumbnail" style="background-image: url(../assets/image/game/${game.image});"></div>
                <div class="game-content">
                    <h2 class="game-name">${game.name}</h2>
                    <p class="game-description">${game.description}</p>
                    <div class="game-detail">
                        <h4 class="game-price">Free</h4>
                        <p class="game-download-count">${game.download}
                            <i class="ti-download"></i>
                        </p>
                    </div>
                    <h3 class="game-producer">${game.author}</h3>
                </div>
            </a>
        </div>`;
        });

        $(".search-container .grid__row:last-child").innerHTML = htmlIndex.join("");

        // Luu id của thẻ a game vào biến gameIdStorage lưu vào biến Local Storage 'localId'
        const gameItems = document.querySelectorAll(".game-item");
        for ( var gameItem of gameItems) {
            gameItem.onclick = function(){
                var idremove = this.id.replace("game-id-","")
                gameIdStorage = idremove;

                localStorage.setItem('localId', gameIdStorage);
            }
        }
    },

    searchByInput : function(){
        var inputSearch = $(".nav-search-input input")
        var inputSearchButton = $(".nav-search-button")

        inputSearchButton.onclick = function(){
            var inputValue = $(".nav-search-input--input").value;
            localStorage.setItem('localNameSearch', inputValue);
        }
    },


    //Start , chứa những function khác
    start : function (){
        this.render();
    }


}

app.start();










