var e = document.getElementById("value"); //drop down list
var textselected = e.options[e.selectedIndex].text; //selected text by user

var capricorn = [ //random text picker 1
    "Capricorns are hardworking, reliable, and dull as hell.",
    "Capricorns own lots of Filofaxes and other tools to organize the lives they do not have.",
    "In the event of nuclear war, Capricorns would find a way to survive.",
];

var aquarius = [ //random text picker 2
    "The Aquarius loves a party. Anytime, anywhere is their motto.",
    "Almost every Aquarian will claim to have seen Jerry Garcia's image in their Froot Loops at least once.",
    "Aquarians tend to be nostalgic about the 1960s because that was the last time they could be naked in public and get away with it.",
];

var pisces = [ //random text picker 3
    "Piscean women wear long floaty dresses and enormous amounts of unusual silver jewelry.",
    "You remember what you were wearing on March 3rd, 1981 but forget your own address.",
    "Pisceans say far too much and do whatever the hell they want.",
];

var aries = [ //random text picker 4
    "Aries are never born. They skip gaily from their mothers' wombs.",
    "The Aries makes life decisions as a toddler.",
    "Aries have ramlike eyebrows and smug expressions.",
];

var taurus = [ //random text picker 5
    "Text1",
    "Text2",
    "Text3",
];

var gemini = [ //random text picker 6
    "Text1",
    "Text2",
    "Text3",
];

var cancer = [ //random text picker 7
    "Text1",
    "Text2",
    "Text3",
];

var leo = [ //random text picker 8
    "Text1",
    "Text2",
    "Text3",
];

var virgo = [ //random text picker 9
    "Text1",
    "Text2",
    "Text3",
];

var libra = [ //random text picker 10
    "Text1",
    "Text2",
    "Text3",
];

var scorpio = [ //random text picker 11
    "Text1",
    "Text2",
    "Text3",
];

var sagittarius = [ //random text picker 12
    "Text1",
    "Text2",
    "Text3",
];



$("#click-button").click(function () { //button to pick random text

    if (textselected.includes('textselected1')) { //if user selected 1 then 
        $("#quote-box p").html(Select1[Math.floor(Math.random() * Select1.length)]);

    } else if (textselected.includes('textselected2')) {
        $("#quote-box p").html(Select2[Math.floor(Math.random() * Select2.length)]);


    } else if (textselected.includes('textselected3')) {
        $("#quote-box p").html(Select3[Math.floor(Math.random() * Select3.length)]);

    }
});    