const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $c = document.getElementsByClassName.bind(document);
const $i = document.getElementById.bind(document);

                    //////////// TO DO LIST /////////////////////////////////////
                    // 1. Restruct Game page ( game page )
                    // 2. Filter category bar ( home page )
                    // 3. Search game ( header nav bar --> another search page )
                    // 4. Sign up, Sign in Logic ( users data )
                    // 5. User page ( waiting design )
                    // 6. Responsive 
                    // 7. Footer
                    // 8. 
                    // 9. 

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


const app = {
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
            image : "3.ASimpleTest.png",
            name : "A Simple Test",
            description : " ",
            category : [ "Interactive", "Stimulation", "Fiction", "Adventure"],
            download : "1.234.111",
            link : "https://benbonk.itch.io/a-simple-test",
        }
    ]
}










