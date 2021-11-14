const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $c = document.getElementsByClassName.bind(document);
const $i = document.getElementById.bind(document);

var gameIdStorage = 1;
var localRole = localStorage.getItem('localRole');
console.log(localRole)

if (localRole =='admin'){
    $(".main").classList.add("role--admin");
}else if (localRole =='user'){
    $(".main").classList.add("role--user");
}

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







// ////////////////// Game ////////////////// //
const app = {
    // Game data
    games : [
        {
            id : 1,
            image_thumbnail : "1.ASimpleTest.png",
            image_description: "1.1asimpletest.png",
            name : "A Simple Test",
            author : "Ben Bonk",
            category : [ "Interactive", "Stimulation", "Fiction", "Adventure"],
            rating : 4,
            description_1 : ` Simple Test is a very simple test provided by Oxcorp. Complete the trials correctly to potentially be accepted into the Oxcorp candidate program. Do not try to explore the test. Complete it, and move on with your life.
            Please play with audio on for the intended experience. Press space to skip narration if needed.`,
            description_2 : "Code, Art, Narration, Writing, Trial Designer, and Creative Visionary  - BenBonk",
            download : "1.234.111",
            link : "https://benbonk.itch.io/a-simple-test",
            comments : [
                {
                    id_comment : 1,
                    id_user : 2, // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "When I try to play the screen is just blue. The audio still plays, and I can interact with the screen I just can't see anything. Probably because I have a potato for a computer that was made over 10 years ago."
                },
                {
                    id_comment : 2,
                    id_user : 2, // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "2.png", // WAITING FOR USER DATA
                    comment_name : "Omen",
                    comment_rating : 4.5, // Cũng từ 0 tới 5
                    content : `Found a bug I think, if you skip the narrator in the \"What is wrong with this image\" thing it starts it over, great game though! I love it!’
                    comment3:’No offense but the condescending voice talking to me throughout the game is one of the most annoying things I’ve ever been through.
                    `
                }
            ]
        },
        {
            id : 2,
            image_thumbnail : "2.Hauntsfield.png",
            image_description: "2.1hauntsfield.png",
            name : "Hauntsfield",
            author : "Allie Mackie",
            category : ["Role playing"],
            rating : 3, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : `Oh no!  Someone has stolen all the pumpkins from your farm, and the Hauntsfield festival is tomorrow!
            Get to know the residents of Hauntsfield and its outskirts, and hopefully get your pumpkins back in time to save the festival…`,
            description_2 : `Hauntsfield is a short and sweet Halloween RPG designed for Game Boy.Play time is 20-30 minutes. Hauntsfield has spooky themes, but is not scary and is appropriate for all ages.`,
            download : "1.111.111",
            link : "https://alliemackie.itch.io/hauntsfield",
            comments : [
                {
                    id_comment : 1,
                    id_user : 2, // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "3.png", // WAITING FOR USER DATA
                    comment_name : "Champer",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "Unfortunately, I closed the browser while playing, but a great game regardless. I'll make sure to download it next time. Small RPGs like this are my favorite!"
                },
                {
                    id_comment : 2,
                    id_user : 2, // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "5.png", // WAITING FOR USER DATA
                    comment_name : "Killjoy",
                    comment_rating : 5, // Cũng từ 0 tới 5
                    content : "I really enjoyed this game! It very fun and the soundtrack was pretty good. Nice work"
                }
            ]
        },
        {
            id : 3,
            image_thumbnail : "3.SquidGameOnline.png",
            image_description: "3.1squidgame.png",
            name : "SQUID GAME | Squid Game Online",
            author : "StefanN",
            category : ["Survival"],
            rating : 3, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "If you are a fan of the Squid game, then you will like Red Light Green Light.You can play from mobile too.",
            description_2 : "This is an online version of the game, so you won't need to download or install anything.",
            download : "564.215",
            link : "https://nstefan.itch.io/squid-game-online-red-light-green-light",
            comments : [
                {
                    id_comment : 1,
                    id_user : 3 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 2, // Cũng từ 0 tới 5
                    content : "It won't work for me, it may just be that im using a chromebook"
                },
                {
                    id_comment : 2,
                    id_user : 3 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "4.png", // WAITING FOR USER DATA
                    comment_name : "Sova",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "Could you add the next level? PLSSSSS"
                },
                {
                    id_comment : 3,
                    id_user : 3 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "2.png", // WAITING FOR USER DATA
                    comment_name : "No name",
                    comment_rating : 5, // Cũng từ 0 tới 5
                    content : "the most SUSSIEST GAME EVER! 10/10"
                }

            ]
        },
        {
            id : 4 ,
            image_thumbnail : "4.MechaGenesisTactics.png",
            image_description: "4.1mechagenesistactics.png",
            name : "Mecha Genesis: Tactics",
            author : "Zizaco",
            category : ["Strategy"],
            rating : 4, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "A strategy game where you can push your enemies into things to deal more damage.The game was originally developed for the GDU Jam #5 with the theme: Use Enemies as Weapons",
            description_2 : "",
            download : "213.453",
            link : "https://zizaco.itch.io/mecha-genesis",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "7.png", // WAITING FOR USER DATA
                    comment_name : "Một bông hoa",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "Nice game, with simple yet cool graphics!"
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 5, // Cũng từ 0 tới 5
                    content : "The game was amazing as game jam entry, and is even more awesome now. A solid strategy game with catchy music and satisfying sound effects. Nicely polished!"
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "9.png", // WAITING FOR USER DATA
                    comment_name : "Reyna",
                    comment_rating : 3, // Cũng từ 0 tới 5
                    content : "May be a nice chess game than this game"
                }
            ]
        },
        {
            id : 5,
            image_thumbnail : "5.BadBen.png",
            image_description: "5.1badben.jpg",
            name : "Bad Ben",
            author : "Corpsepile",
            category : ["Stimulation", "Adventure"],
            rating : 5, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "Experience the first Found Footage Video Game that isn’t about Slender Man (citation needed)! Based on the cult hit micro-micro-micro-budget film series, the Bad Ben game is here to take the beloved franchise digital. Take the role of Tom Riley—voiced by the man himself, Nigel Bach—as he once again makes the incredibly informed decision to buy a house sight unseen at a sheriff’s auction.",
            description_2 : `Obviously, the night does not go by un-ghosted. Soon after his arrival, paranormal happenings begin to plague the unflappable Tom. You’ll have to get to the bottom of these spectral shenanigans, mostly by finding keys. Because it’s an indie horror game.
            Do you have what it takes to survive the night?`,
            download : "665.445",
            link : " https://corpsepile.itch.io/bad-ben",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "8.png", // WAITING FOR USER DATA
                    comment_name : "BenBonk",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "An absolutely brilliant game and just something different! At the end there is even an upgrade, let yourself be surprised!!!"
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "3.png", // WAITING FOR USER DATA
                    comment_name : "Cheems Burger",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "this sure was something :) I haven't seen the videos (yet) so I only have the game to go off of. It is kind of a neat little game."
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "Even though this is a humorous game, the guy peeking from the closet made me jump and the ending where you fast forward through some parts is genuinely horrifying. The sudden ad that plays near the attic was the absolute highlight of this game.  Good job!"
                }
            ]
        },
        {
            id : 6,
            image_thumbnail : "6.BurgerandFrights.png",
            image_description: "6.1burgerandfrights.png",
            name : "Burger & Frights",
            author : "Jack Carter",
            category : ["survival"],
            rating : 4, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "It's a late night and you were craving burgers. It's time to ride home.Burger & Frights is a short horror game in which the player rides a bike throughout a dark forest.",
            description_2 : "The game was inspired by games such as Rides with Strangers, and a certain horror movie by John Carpenter.",
            download : "713.452",
            link : "https://donitz.itch.io/burger-frights",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 5, // Cũng từ 0 tới 5
                    content : "DAMN GOOD GAME!"
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "6.png", // WAITING FOR USER DATA
                    comment_name : "Samsung Galaxy",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : `A truly scary experience, and the game mechanics are pretty well thought through too, the controls of the bicycle are just hard enough, that the player concentrates on it so when...
Ok, I'm not gonna spoil it, but once again, a very scary game!`
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "4.png", // WAITING FOR USER DATA
                    comment_name : "Killjoy",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "I wanted to see what would happen if I collided with a car at slow speed. It did not disappoint :D"
                }
            ]
        },
        {
            id : 7,
            image_thumbnail : "7.Terminus.png",
            image_description: "7.1terminus.png",
            name : "Terminus",
            author : "Lizzy",
            category : ["Puzzle"],
            rating : 5, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "You've overslept your stop, not an uncommon experience for a college student. However, this time things seem a little different. Loosely based on a local ghost story.",
            description_2 : "Terminus is a short 2D atmospheric horror game brought to you by a subgroup of Hide The Pain Studios (not a real studio), the two half dead programmers who love watching horror movies.",
            download : "600.112",
            link : "Terminus by Hide the Pain Studios, Kyraphus, Exsomni (itch.io)",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "3.png", // WAITING FOR USER DATA
                    comment_name : "Sage",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "Hey good game! I rly love the atmosphere and the art is really great :-)"
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 2, // Cũng từ 0 tới 5
                    content : "i got very confused after i exited the train"
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "2.png", // WAITING FOR USER DATA
                    comment_name : "Jetttttt",
                    comment_rating : 3, // Cũng từ 0 tới 5
                    content : "Really nice game! But the parallax of the yellow rails (where you find the scissors) makes me sick on my stomach. I think it's because the movement is unnatural, things closer to the camera should move faster, so since the rails are closer than the character it should move faster than him, not slower."
                }
            ]

        },
        {
            id : 8,
            image_thumbnail : "8.Screaminmygrave!.png",
            image_description: "8.1scream_in_my_grave.jpg",
            name : "Scream in my grave!",
            author : "MAGIC MAN",
            category : ["Adventure","Horror"],
            rating : 4, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "Don’t dig others graves or you’ll end up replacing them",
            description_2 : "",
            download : "520.132",
            link : "Scream in my Grave! by zedrick1435167@gmail.com (itch.io)",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "9.png", // WAITING FOR USER DATA
                    comment_name : "My name is Yasuo",
                    comment_rating : 5, // Cũng từ 0 tới 5
                    content : "Very interesting game per say . It short yet well made I say . The forth wall breaking was very cool . Have a great day/night"
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "7.png", // WAITING FOR USER DATA
                    comment_name : "Wind",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "I really like this game.. gg"
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "10.png", // WAITING FOR USER DATA
                    comment_name : "By my side",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "I liked it.  The ending and cursor steal was nice."
                }
            ]  
        },
        {
            id : 9,
            image_thumbnail : "9.FreeRunning2.png",
            image_description: "9.1free_running_2.jpg",
            name : "Free running 2",
            author : "Miniclip",
            category : ["Action"],
            rating : 4, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "Free Running 2 is the sequel to our smash-hit parkour game, featuring stunning 3D graphics, new moves, more game modes and challenges. Perform the same feats of athleticism and courage as parkour superstars like Sébastien Foucan and David Belle without leaving your computer.Free-run through a whole new set of challenging city environments and overcome all the obstacles in your way. Defy gravity and risk virtual life and limb in this fast-paced action game. Jump, grab and climb walls - and even do flips and somersaults, showing off for the camera to get a top score.",
            description_2 : "Remember, you’re against the clock - so watch out for the time bonuses and do your best to get to the end of the parkour courses before time runs out!",
            download : "323.132",
            link : "Free Running 2 - A free Sports Game (miniclip.com)",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 5, // Cũng từ 0 tới 5
                    content : "Very interesting game. The forth wall breaking was very cool."
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "6.png", // WAITING FOR USER DATA
                    comment_name : "No name pls",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "I really like this game:3"
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "10.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "I liked it.:>"
                }
            ]


        },
        {
            id : 10,
            image_thumbnail : "10.8ballpool.jpg",
            image_description: "10.1_8_ball_pool.jpg",
            name : "8 Ball Pool",
            author : "Miniclip",
            category : ["Multiplayers"],
            rating : 3, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "8 Ball Pool is the biggest & best multiplayer Pool game online! \nPlay billiards for FREE against other players & friends in 1-on-1 \nmatches, enter tournaments to win big! Level up and earn Pool Coins for \nyour wins. Customize with cues & cloths in the Pool Shop.",
            description_2 : "Also available for FREE on iPhone, iPad, iTouch & Android devices.",
            download : "153.932",
            link : "8 Ball Pool - A free Sports Game (miniclip.com)",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "5.png", // WAITING FOR USER DATA
                    comment_name : "Sova boizz",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "Very gud game, very cool."
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "6.png", // WAITING FOR USER DATA
                    comment_name : "Hatsune Miku",
                    comment_rating : 3, // Cũng từ 0 tới 5
                    content : "I like this game:3 and like you too"
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "8.png", // WAITING FOR USER DATA
                    comment_name : "Kawaiiiiiiiii",
                    comment_rating : 3, // Cũng từ 0 tới 5
                    content : "I liked it.>~<"
                }
            ]


        },
        {
            id : 11,
            image_thumbnail : "11.FireboyandWatergirlFairyTales.jpeg",
            image_description: "11.fireboyandwatergirl.jpg",
            name : "Fireboy & Watergirl 6: Fairy Tales",
            author : "Miniclip",
            category : ["Adventure","2 players"],
            rating : 4, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "Another magical adventure is about to begin in Fireboy & Watergirl 6: Fairy Tales!\nJoin the fearless duo on their latest journey in this online platform game.\nThey're about to enter another mysterious temple full of ancient gems in this exciting sixth installment of the popular Fireboy and Watergirl series. \nThis time around though, they'll need more than their courage and their amazing powers to get through each chamber. Along with plenty of pits full of water, lava, and poisonous goo, the temple contains a series of enchanted switches they won't be able to reach on their own.",
            description_2 : "\nFortunately, a local clan of friendly fairies is willing to lend them a hand and use the switches to remove barriers and lower platforms. With you helping them out as well, Fireboy and Watergirl are sure to make it back home safely. If you could use a little extra assistance, you can also play this two player game with a friend.",
            download : "212.321",
            link : "Fireboy & Watergirl 6: Fairy Tales - Play Fireboy & Watergirl 6: Fairy Tales online at Agame.com",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 3, // Cũng từ 0 tới 5
                    content : "nice game, very cool."
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "8.png", // WAITING FOR USER DATA
                    comment_name : "Kawaiiiiiiii",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "gud game to play with your brothers :3"
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "3.png", // WAITING FOR USER DATA
                    comment_name : "Lolipop",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "luv luv :3"
                }
            ]


        },
        {
            id : 12,
            image_thumbnail : "12.ImposterFindUs.jpg",
            image_description: "12.1imposter_find_us.png",
            name : "Impostor: Find Us",
            author : "Guess who :3",
            category : ["Adventure"],
            rating : 3, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "Can you locate the hidden aliens in Impostor: Find Us?\nThey're all lurking somewhere in a series of illustrations that were inspired by the popular mobile game Among Us.",
            description_2 : "\nLook closely at each one in this challenging installment of the Impostor series, but move fast! You won't have much time to find them in every fun and very exciting level.",
            download : "142.321",
            link : "Impostor: Find Us - Play Impostor: Find Us online at Agame.com",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 1, // Cũng từ 0 tới 5
                    content : "boringggggg~~~"
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "7.png", // WAITING FOR USER DATA
                    comment_name : "GG20",
                    comment_rating : 3, // Cũng từ 0 tới 5
                    content : "nice for destroying friendships :>"
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "10.png", // WAITING FOR USER DATA
                    comment_name : "I'm not Bixcuit",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "fun fun fun"
                }
            ]
        },
        {
            id : 13,
            image_thumbnail : "13.StickmanArcherOnline.png",
            image_description: "13.1stick_man_archer_online.jpg",
            name : "Stickman Archer Online",
            author : "who love stick",
            category : ["Action"],
            rating : 3, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "Shooting against the opponents",
            description_2 : "",
            download : "112.321",
            link : "Stickman Archer Online - Play Stickman Archer Online online at Agame.com",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "6.png", // WAITING FOR USER DATA
                    comment_name : "Breach",
                    comment_rating : 3, // Cũng từ 0 tới 5
                    content : "gud game~~"
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "5.png", // WAITING FOR USER DATA
                    comment_name : "Narutoooo",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "nice for destroying friendships :>"
                },
                {
                    id_comment : 3,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "4.png", // WAITING FOR USER DATA
                    comment_name : "Sasukeeee",
                    comment_rating : 5, // Cũng từ 0 tới 5
                    content : "fun"
                }
            ]
        },
        {
            id : 14,
            image_thumbnail : "14.Thenightof87.png",
            image_description: "14.1the_night_of_87.png",
            name : "The night of 87",
            author : "FreezeStudios",
            category : ["Action", "Shooter"],
            rating : 4, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "The night of '87 is a horror game with PS1-style graphics.You play as Robert Williams, who just woke up in a bathroom.\nHe has lost all of his recent memory.",
            description_2 : "Try to piece together what happened on the night of '87. Is the protagonist a hero or a villain trying to hide his dark past? Because waking up near a dead body is very sus.",
            download : "412.991",
            link : "https://freezestudios.itch.io/the-night-of-87",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "8.png", // WAITING FOR USER DATA
                    comment_name : "Lime Lime",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "Its fun for the first 30 seconds. After that it gets repetetive and boring. Gun is kinda useless, and the animations could use some work. Considering its for a jam its not that bad."
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "4.png", // WAITING FOR USER DATA
                    comment_name : "Cheems Burger",
                    comment_rating : 3, // Cũng từ 0 tới 5
                    content : "This is the single greatest video game I have ever played in my life. The story, the art direction, the gameplay, the experience, nothing in history will ever come close to anything this game provides.  Truly a masterpiece of strand type gaming."
                }
            ]
        },
        {
            id : 15,
            image_thumbnail : "15.GorftheGhostSaveHalloween.png",
            image_description: "15.1gorf_the_ghost_saves_halloween.png",
            name : "Gorf the Ghost Save Halloween",
            author : "GHOST",
            category : ["Adventure"],
            rating : 5, // (từ 0 tới 5, mún cho nhiu cho nha)
            description_1 : "You are Gorf the Ghost. It’s Halloween but everyone is too scared to trick or treat because of an evil skeleton in the graveyard. Explore the town, help your friends, and save Halloween!",
            description_2 : "",
            download : "532.991",
            link : "Gorf the Ghost Saves Halloween by DashRando (itch.io)",
            comments : [
                {
                    id_comment : 1,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "10.png", // WAITING FOR USER DATA
                    comment_name : "The Last",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "The colors and the sptites are top notch! Great style!"
                },
                {
                    id_comment : 2,
                    id_user : 1 , // ID CỦA NGƯỜI COMMENT THOI, ĐỂ TRỐNG CŨNG ĐC, TẠI CỦA CÓ DATA NGƯỜI DÙNG
                    comment_avt : "1.png", // WAITING FOR USER DATA
                    comment_name : "Bixcuit",
                    comment_rating : 4, // Cũng từ 0 tới 5
                    content : "Cool game! Unfortunately, it has the game boy aspect of me getting terribly lost and not knowing where I am. It would sure be nice if there was an indicator on the map that showed where you were at any time."
                }
            ]
        }
    ],

    //Render game to index.html UI
    render : function (){
        var htmlIndex = this.games.map((game,index)=>{
            return `<div class="grid__column-2-of-10">
            <a class="game-item" id="game-id-${game.id}" href="./game_page/game.html">
                <div class="game-thumbnail" style="background-image: url(./assets/image/game_thumbnail/${game.image_thumbnail});"></div>
                <div class="game-content">
                    <h2 class="game-name">${game.name}</h2>
                    <p class="game-description">${game.description_1}</p>
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

        $("#game-container .grid__row").innerHTML = htmlIndex.join("");

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

    filterCategory : function (){
        ////////// Category List Active ///////////
        const categoryItems = $$(".category-item");
        for (var categoryItem of categoryItems){
            categoryItem.onclick = function (){
                $(".category-item.category-item-actived").classList.remove("category-item-actived");
                this.classList.add("category-item-actived");

                var currentTag = this.innerHTML;

                if (currentTag == "All"){
                    app.render();
                }else{
                    var getGameByTag = app.games.filter((game)=>{
                        return game.category.some((tag)=>{
                            return currentTag == tag;
                        });
                    })
    
                    var htmlIndex = getGameByTag.map((game)=>{
                        return `<div class="grid__column-2-of-10">
                        <a class="game-item" id="game-id-${game.id}" href="./game_page/game.html">
                            <div class="game-thumbnail" style="background-image: url(./assets/image/game_thumbnail/${game.image_thumbnail});"></div>
                            <div class="game-content">
                                <h2 class="game-name">${game.name}</h2>
                                <p class="game-description">${game.description_1}</p>
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
            
                    $("#game-container .grid__row").innerHTML = htmlIndex.join("");
                    
                    
                    // Luu id của thẻ a game vào biến gameIdStorage lưu vào biến Local Storage 'localId'
                    const gameItems = document.querySelectorAll(".game-item");
                    for ( var gameItem of gameItems) {
                        gameItem.onclick = function(){
                            var idremove = this.id.replace("game-id-","")
                            gameIdStorage = idremove;

                            localStorage.setItem('localId', gameIdStorage);
                        }
                    }
                }
            }
        }
    },

    searchByInput : function(){
        var inputSearch = $(".nav-search-input input")
        var inputSearchButton = $(".nav-search-button")

        inputSearchButton.onclick = function(){
            var inputValue = $(".nav-search-input input").value;
            localStorage.setItem('localNameSearch', inputValue);
        }


        // inputSearch.onkeydown = function(e){
        //     var keycode = e ? e.which : window.event.keyCode;
        //     console.log(keycode)

        //     if (keycode =='13'){
        //         var inputValue = $(".nav-search-input input").value;
        //         var getNameArray = app.games.map((game)=>{
        //             return game.name.toLowerCase()
        //         })

        //         var getNameByComparing = getNameArray.filter((gamename)=>{
        //             return gamename.includes(inputValue);
        //         })

        //         var getGamesByName = app.games.filter((game)=>{
        //             return getNameByComparing.some((gameName)=>{
        //                 return gameName == game.name.toLowerCase();
        //             })
        //         })

        //         $i("nav-search-input--input").value = '';

        //         var htmlIndex = getGamesByName.map((game,index)=>{
        //             return `<div class="grid__column-2-of-10">
        //             <a class="game-item" id="game-id-${game.id}" href="./game_page/game.html">
        //                 <div class="game-thumbnail" style="background-image: url(./assets/image/game/${game.image});"></div>
        //                 <div class="game-content">
        //                     <h2 class="game-name">${game.name}</h2>
        //                     <p class="game-description">${game.description}</p>
        //                     <div class="game-detail">
        //                         <h4 class="game-price">Free</h4>
        //                         <p class="game-download-count">${game.download}
        //                             <i class="ti-download"></i>
        //                         </p>
        //                     </div>
        //                     <h3 class="game-producer">${game.author}</h3>
        //                 </div>
        //             </a>
        //         </div>`;
        //         });
        
        //         $("#game-container .grid__row").innerHTML = htmlIndex.join("");
        
        //         // Luu id của thẻ a game vào biến gameIdStorage lưu vào biến Local Storage 'localId'
        //         const gameItems = document.querySelectorAll(".game-item");
        //         for ( var gameItem of gameItems) {
        //             gameItem.onclick = function(){
        //                 var idremove = this.id.replace("game-id-","")
        //                 gameIdStorage = idremove;
        
        //                 localStorage.setItem('localId', gameIdStorage);
        //             }
        //         }
        //     }
        // }
    },


    //Start , chứa những function khác
    start : function (){
        this.render();
        this.filterCategory();
        this.searchByInput();
    }


}

app.start();










