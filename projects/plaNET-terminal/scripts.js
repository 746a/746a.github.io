
//Scanlines Animation
anime({
    targets: '.scan-lines',
    translateY: [0, '-30px'],
    duration: 10000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
});


//Fullscreen Button

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
document.getElementById('terminalMode').addEventListener('click', toggleFullscreen);


//Clear Data Button

var tb = document.getElementById('tb1');
var clearButton = document.getElementById('clearData');
clearButton.addEventListener('click', () => tb.value = "")


//Save Data Button

var terminalText = document.getElementById('tb1');
var saveDataButton = document.getElementById('saveData');

saveDataButton.addEventListener('click', function () {
    var content = terminalText.value;
    if (content.trim() !== "") {

        var currentDate = new Date();

        var day = ('0' + currentDate.getDate()).slice(-2);
        var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        var year = currentDate.getFullYear();
        var hours = ('0' + currentDate.getHours()).slice(-2);
        var minutes = ('0' + currentDate.getMinutes()).slice(-2);

        var filetype = ".md"

        var timestamp = day + '-' + month + '-' + year + '-' + hours + '-' + minutes + '-plaNETsaveData' + filetype;

        var blob = new Blob([content], { type: 'text/markdown' });

        var url = URL.createObjectURL(blob);

        var link = document.createElement('a');

        link.href = url;

        link.download = timestamp

        link.click();
    }
})


// Color Theme Picker

var emerald = document.getElementById('emerald');
var amber = document.getElementById('amber');
var sapphire = document.getElementById('sapphire');
var garnet = document.getElementById('garnet');

function changeColours(colour1, colour2) {
    document.documentElement.style.setProperty('--bg-color', colour1);
    document.documentElement.style.setProperty('--fg-color', colour2);
}

emerald.addEventListener('click', () => {
    console.log("Emerald Theme Selected");
    changeColours('#006400', '#32cd32');
    emerald.classList.add('clicked');
    amber.classList.remove('clicked')
    sapphire.classList.remove('clicked')
    garnet.classList.remove('clicked')

});

amber.addEventListener('click', () => {
    console.log("Amber Theme Selected");
    changeColours('#ca7003', '#FFA500');
    amber.classList.add('clicked');
    emerald.classList.remove('clicked')
    sapphire.classList.remove('clicked')
    garnet.classList.remove('clicked')
});

sapphire.addEventListener('click', () => {
    console.log("Sapphire Theme Selected");
    changeColours('#4f4fb8', '#45b5ff');
    sapphire.classList.add('clicked');
    amber.classList.remove('clicked')
    emerald.classList.remove('clicked')
    garnet.classList.remove('clicked')
});

garnet.addEventListener('click', () => {
    console.log("Garnet Theme Selected");
    changeColours('#600202', '#f80000');
    garnet.classList.add('clicked');
    amber.classList.remove('clicked')
    sapphire.classList.remove('clicked')
    emerald.classList.remove('clicked')
});


//Hack - Change Infobox Text
var a746 = document.getElementById('a746');
var planet = document.getElementById('planet');
var shell = document.getElementById('shell');

function changeInfobox() {
    a746.innerHTML = "";
    planet.innerHTML = "";
    shell.innerHTML = '<span style="font-size: 3em">MONERA | <button id="refreshPage" class="info-button">HELP</button></span>';

    // Refresh Page Button
    var refreshPage = document.getElementById("refreshPage");
    refreshPage.addEventListener('click', () => {
        location.reload();
    })
}




//Hack - Animate Text
var hack = document.getElementById('hack');

function animateText() {
    garnet.click();
    
    var textBox = document.getElementById('tb1');

    // Text to animate
    var text = "#0000FF 対立{]! )({}[& #000080 {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #00FFFF !@(^ &^{{ [}-{^) [{]} #@!} ]Ηχητικός Pixel{(- )[_& }#{{- }][) (*&^( ^]{] ]}[){} {]}[){ {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #@!} ] Pixel{(- )[)( #008000 {]!Crash λογότυπα %^[]\\ &^{{ [}-{^) [{]} #@!} ] Pixel{(- ){]!logos Σύγκρουση 家 エレクトロニクス ΔΙΕΥΘΥΝΣΗ}[({}[& #000080 {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #00FFFF !@(^ [_& }#{{- }][) (*&^(  {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){^]{] ]}[){} {!@%{ {)}[}]% $}]{)} #FF0000 \'[] #FFA500 []\] #FF4500  ][][-- #008080 -{^) [{]} Sonic οίκος #00FFFF !@(^ &^{{ [}-{^) [{]} #@!} ]Ηχητικός Pixel{(- )[_& }#{{- }][) (*&^( ^]{] ]}[){} {]}[){ }[)@% }]{!@%{ {){]}[){ }[)@%]Ηχητικός Pixel{(- )[_& }#{{- }][) (*&^( ^]{] ]}[){} {]}[){ }[)@% }]{!@%{ {){]}[){ }[)@% }]}[}]% $}]{)} #FF0000 \'[]#4B0082 Virus {[#& {]!#FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #@!} ] Pixel{(- )[)( #008000 {]!Crash λογότυπα %^[]\\ &^{{ [}-{^) [{]} #@!} ] Pixel{(- ){]!logos Σύγκρουση 家 エレクトロニクス ΔΙΕΥΘΥΝΣΗ}[({}[& #000080 {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #00FFFF !@(^ [_& }#{{- }][) (*&^(  {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){^]{] ]}[){} {!@%{ {)}[}]% $}]{)} #FF0000 \'[] #FFA500 []\] #FF4500  ][][-- #008080 -{^) [{]} Sonic οίκος #00FFFF !@(^ &^{{ [}-{^) [{]} #@!} ]Ηχητικός Pixel{(- )[_& }#{{- }][) (*&^( ^]{] ]}[){} {]}[){ }[)@% }]{!@%{ {){]}[){ }[)@% }]}[}]% $}]{)} #FF0000 \'[]#4B0082 Virus {[#& {]!#800080 Ρετρό レトロ 対立 }]}[}]% $}]{)} #FF0000 \'[]#4B0082 Virus {[#& {]!#800080 Ρετρό レトロ 対立 )({}[& #000080 {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic)@% }]{!@%{ {){]}[){ }[)@% }]}[}]% $}]{)} #FF0000 \'[]#4B0082 Virus {[#& {]!#800080 Ρετρό レトロ 対立 )({}[& #000080 {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος Εικονοκύτταρο (}{]!( #008000 -{^) [{]} #@!} ] Pixel{(- )[)( Ιός ピクセル Retro {]!} 対立 )({}[& #000080 {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #00FFFF !@(^ [_& }#{{- }][) (*&^(  {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){^]{] ]}[){} {!@%{ {)}[}]% $}]{)} #FF0000 \'[] #FFA500 []\] #FF4500  ][][-- #008080 -{^) [{]} Sonic οίκος #00FFFF !@(^ &^{{ [}-{^) [{]} #@!} ]Ηχητικός Pixel{(- )[_& }#{{- }][) (*&^( ^]{] ]}[){} {]}[){ }[)@% }]{!@%{ {){]}[){ }[)@% }]}[}]% $}]{)} #FF0000 \'[]#4B0082 Virus {[#& {]!#FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #@!} ] Pixel{(- )[)( #008000 {]!Crash λογότυπα %^[]\\ &^{{ [}-{^) [{]} #@!} ] Pixel{(- ){]!logos Σύγκρουση 家 エレクトロニクス ΔΙΕΥΘΥΝΣΗ}[({}[& #000080 {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #00FFFF !@(^ [_& }#{{- }][) (*&^(  {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){^]{] ]}[){} {!@%{ {)}[}]% $}]{)} #FF0000 \'[] #FFA500 []\] #FF4500  ][][-- #008080 -{^) [{]} Sonic οίκος #00FFFF !@(^ &^{{ [}-{^) [{]} #@!} ]Ηχητικός Pixel{(- )[_& }#{{- }][) (*&^( ^]{] ]}[){} {]}[){ }[)@% }]{!@%{ {){]}[){ }[)@% }]}[}]% $}]{)} #FF0000 \'[]#4B0082 Virus {[#& {]!#800080 Ρετρό レトロ 対立 )({}[& #000080 {]!@% #FFD700 #800080 Ρετρό レトロ 対立 )({}[& #000080 {]!@% #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #@!} ] Pixel{(- )[)( #008000 {]!Crash λογότυπα %^[]\\ &^{{ [}-{^) [{]} #@!} ] Pixel{(- ){]!logos Σύγκρουση 家 エレクトロニクス ΔΙΕΥΘΥΝΣΗ  住所 ソニック {]}[){ }[)@% }]ウイルス{]! ΗΛΕΚΤΡΟΝΙΚΗ  #FFFF00  #FFD700 [(}) {}#{ ^]{} {]}[){ }[)@% }] oikos #800000 Sonic οίκος #00FFFF !@(^ [_& }#{{- }][) (*&^( ^]{] ]}[){} {!@%{ {)}[}]% $}]{)} #FF0000 \'[] #FFA500 []\] #FF4500  ][][-- #008080 -{^) [{]} #@!} ] Pixel{(- )[)( #008000 {]!Crash [)@( *){}][ }{#{) -({()}] #EE82EE Email";

    // Split the text into an array of characters
    var chars = text.split('');

    // Clear existing text
    textBox.value = '';

    // Initialize index for character animation
    var index = 0;

    // Use setInterval to animate typing effect
    var typingInterval = setInterval(function () {
        if (index < chars.length) {
            // Append the next character to the textarea
            textBox.value += chars[index];
            index++;
            tb1.scrollTop = textBox.scrollHeight;
        } else {
            // Clear the interval when all characters are typed
            clearInterval(typingInterval);
        }
    }, 10); // Typing speed (milliseconds)
}

hack.addEventListener('click', () => {
    animateText();
    changeInfobox();
    console.log("Hacked!");
});
