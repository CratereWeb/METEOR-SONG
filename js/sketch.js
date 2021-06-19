// creation d'une dataViz
// composition des météorites tombées et trouvées sur Terre jusqu'à 2020




// L.popup()
//     .setLatLng(latlng)
//     .setContent('<p>Hello world!<br />This is a nice popup.</p>')
//     .openOn(mapLeaflet);


// AVEC MAPPA.JS
// const options = {
//     lat: 46,
//     lng: 2,
//     zoom: 5,
//     minZoom : 3,
//     maxZoom: 6,
//     style: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
// }

// Création d'une instance de Leaflet
// const mappa = new Mappa('Leaflet');


let canvas;

//data
let data;

//design
let colorOC;
let colorH;
let colorL;
let colorLL;
let colorCI;
let colorCM;
let colorCO;
let colorCV;
let colorCB;
let colorCK;
let colorCR;
let colorCH;
let colorEL;
let colorEH;
let colorK;
let colorR;
let colorACH;
let colorBRA;
let colorWIN;
let colorHOW;
let colorEUC;
let colorDIO;
let colorAUB;
let colorURE;
let colorANG;
let colorLUNARANORTH;
let colorLUNARBASAL;
let colorLUNARGABBRO;
let colorSHE;
let colorNAK;
let colorCHA;
// let colorALH84001;
let colorPAL;
let colorMES;
let colorLOD;
let colorOCTA;
let colorHEXA;
let colorATAX;
let colorHOBA;
var colorArr =  [colorOC, colorH, colorL, colorLL, colorCI, colorCM, 
                colorCO, colorCV, colorCB, colorCK, colorCR, colorCH,
                colorEL, colorEH, colorK, colorR, colorACH, colorBRA,
                colorWIN, colorHOW, colorEUC, colorDIO, colorAUB,
                colorURE, colorANG, colorWIN, colorLUNARANORTH,
                colorLUNARBASAL, colorLUNARGABBRO, colorSHE, colorNAK,
                colorCHA, colorPAL, colorMES, colorLOD, colorOCTA, colorHEXA,
                colorATAX, colorHOBA];

let textOC, 
textH, 
textL, 
textLL, 
textCI, 
textCM, 
textCO, 
textCV, 
textCB, 
textCK, 
textCR, 
textCH, 
textEL, 
textEH, 
textR, 
textK, 
textACH, 
textBRA, 
textWIN, 
textHOW, 
textEUC, 
textDIO, 
textAUB, 
textURE, 
textANG, 
textLUNARANORTH, 
textLUNARBASAL, 
textLUNARGABBRO, 
textSHE, 
textNAK, 
textCHA, 
textPAL, 
textMES, 
textLOD, 
textOCTA, 
textHEXA, 
textATAX, 
textHOBA;

//IxD
let timeline, timelineLabel;
let maxTone, v;



// load meteor.JSON
// let meteorjson;


//map
// AVEC LEAFLET.JS

// déclaration des limites de la map
var corner1 = L.latLng(90, 179),
corner2 = L.latLng(-90, -179);
bounds = L.latLngBounds(corner1, corner2);

// création de la map
var mapLeaflet = L.map('mapid', {
    renderer : L.canvas(),
    zoom: 2.2,
    maxBounds : bounds,
    minZoom: 2.2,
    maxZoom: 19,
}).setView([40, 0], 2.2);


// ajout du tile
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
}).addTo(mapLeaflet);

console.log(mapLeaflet);


function setup() {
    console.log('firing setup()');
    
    canvas = createCanvas(windowWidth/3, windowHeight/2);
    
    // //design
    // //
    // colorOC = color(222, 230, 239, 125);
    // colorH = color(222, 230, 239, 125);
    // colorL = color(222, 230, 239, 125);
    // colorLL = color(222, 230, 239, 125);
    // //
    // colorCI = color(138, 190, 214, 125);
    // colorCM = color(138, 190, 214, 125);
    // colorCO = color(138, 190, 214, 125);
    // colorCV = color(138, 190, 214, 125);
    // colorCB = color(138, 190, 214, 125);
    // colorCK = color(138, 190, 214, 125);
    // colorCR = color(138, 190, 214, 125);
    // colorCH = color(138, 190, 214, 125);
    // //
    // colorEL = color(99, 148, 200, 125);
    // colorEH = color(99, 148, 200, 125);
    // colorK = color(99, 148, 200, 125);
    // colorR = color(99, 148, 200, 125);
    // //
    // colorACH = color(177, 151, 96, 125);
    // colorBRA = color(161, 70, 126, 125);
    // colorWIN = color(191, 129, 158, 125);
    // //
    // colorHOW = color(63, 175, 70, 125);
    // colorEUC = color(63, 175, 70, 125);
    // colorDIO = color(63, 175, 70, 125);
    // //
    // colorAUB = color(175, 208, 149, 125);
    // colorURE = color(175, 208, 149, 125);
    // colorANG = color(175, 208, 149, 125);
    // //
    // colorLUNARANORTH = color(255, 204, 255, 125);
    // colorLUNARBASAL = color(204, 153, 255, 125);
    // colorLUNARGABBRO = color(153, 102, 204, 125);
    // //
    // colorSHE = color(255, 182, 108, 125);
    // colorNAK = color(255, 151, 47, 125);
    // colorCHA = color(255, 134, 13, 125);
    // colorALH84001 = color(234, 177, 0, 125);
    // //
    // colorPAL = color(232, 242, 161, 125);
    // colorMES = color(212, 234, 107, 125);
    // colorLOD = color(187, 227, 61, 125);
    // //
    // colorOCTA = color(255, 233, 148, 125);
    // colorHEXA = color(255, 222, 89, 125);
    // colorATAX = color(255, 212, 40, 125);
    // colorHOBA = color(232, 162, 2, 125);

    // //IxD
    // let UI          = createDiv('');
    // timeline        = createSlider(0, 2020, 2020);
    // timelineLabel   = createSpan("Year: " + timeline.value());

    // maxTone        = createSlider(0, 100, 1);
    // toneLabel      = createSpan("Max Tone: "+maxTone.value());

    // timeline.parent(UI);
    // timelineLabel.parent(UI);
    // maxTone.parent(UI);
    // toneLabel.parent(UI);

    // timeline.input(updateTimeline);
    // maxTone.input(updateMaxTone);

    // //map
    // // myMap = mappa.tileMap(options);
    // // myMap.overlay(canvas);
    
    // console.log(colorHOBA);
}
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

let meteorjson;
var meteorArray = [];
function preload() {
     //design
    //
    colorOC = color(222, 230, 239, 125);
    colorH = color(222, 230, 239, 125);
    colorL = color(222, 230, 239, 125);
    colorLL = color(222, 230, 239, 125);
    //
    colorCI = color(138, 190, 214, 125);
    colorCM = color(138, 190, 214, 125);
    colorCO = color(138, 190, 214, 125);
    colorCV = color(138, 190, 214, 125);
    colorCB = color(138, 190, 214, 125);
    colorCK = color(138, 190, 214, 125);
    colorCR = color(138, 190, 214, 125);
    colorCH = color(138, 190, 214, 125);
    //
    colorEL = color(99, 148, 200, 125);
    colorEH = color(99, 148, 200, 125);
    colorK = color(99, 148, 200, 125);
    colorR = color(99, 148, 200, 125);
    //
    colorACH = color(177, 151, 96, 125);
    colorBRA = color(161, 70, 126, 125);
    colorWIN = color(191, 129, 158, 125);
    //
    colorHOW = color(63, 175, 70, 125);
    colorEUC = color(63, 175, 70, 125);
    colorDIO = color(63, 175, 70, 125);
    //
    colorAUB = color(175, 208, 149, 125);
    colorURE = color(175, 208, 149, 125);
    colorANG = color(175, 208, 149, 125);
    //
    colorLUNARANORTH = color(255, 204, 255, 125);
    colorLUNARBASAL = color(204, 153, 255, 125);
    colorLUNARGABBRO = color(153, 102, 204, 125);
    //
    colorSHE = color(255, 182, 108, 125);
    colorNAK = color(255, 151, 47, 125);
    colorCHA = color(255, 134, 13, 125);
    colorALH84001 = color(234, 177, 0, 125);
    //
    colorPAL = color(232, 242, 161, 125);
    colorMES = color(212, 234, 107, 125);
    colorLOD = color(187, 227, 61, 125);
    //
    colorOCTA = color(255, 233, 148, 125);
    colorHEXA = color(255, 222, 89, 125);
    colorATAX = color(255, 212, 40, 125);
    colorHOBA = color(232, 162, 2, 125);

    // fill(color(255,255,255));
    // textAlign(LEFT, CENTER),
    textOC = "OC : Chondrites ordinaires";
    textH = "H : Chondrites ordinaires | à haut taux de fer";
    textL = "L : Chondrites ordinaires | à faible taux de fer";
    textLL = "LL : Chondrites ordinaires | à très faible taux de fer, olivine";
    textCI = "CI : Chondrites carbonées | carbone 3 à 5%, eau 20%";
    textCM = "CM : Chondrites carbonées | à fort taux de chondres";
    textCO = "CO : Chondrites carbonées | à petits chondres, eau 1%";
    textCV = "CV : Chondrites carbonées | présence de gros chondres";
    textCB = "CB : Chondrites carbonées | abondance de métal, présence de sphères métalliques";
    textCK = "CK : Chondrites carbonées | silicate sombre, pas de métal";
    textCR = "CR : Chondrites carbonées | chondres primitifs reliés par du carbone pur";
    textCH = "CH : ALH 85085 | riche en fer";
    textEL = "EL : Chondrites à Entastite | -12% Fe-Ni";
    textEH = "EH : Chondrites à Entastite | 35% Fe-Ni";
    textR = "R : Chondrites à Entastite | similaires à la météorite de Rumuruti (Kenya)";
    textK = "K : Chondrites à Entastite | similaires à la météorite de Kakangari (Inde)";
    textACH = "ACH : Achondrites ordinaires";
    textBRA = "BRA : Brachinites | Achondrites riches en olivine ";
    textWIN = "WIN : Winanoïtes | Achondrites riches en fer";
    textHOW = "HOW : Howardites";
    textEUC = "EUC : Eucrites | du grec ἐυκρινής (« facilement distinguable »). Des météorites différenciées de composition basaltique. Composées principalement de pyroxène pauvre en calcium, de pigeonite et de plagioclase riche en calcium. Les eucrites proviennent probablement de l'astéroïde Vesta. ";
    textDIO = "DIO : Diogénites | ";
    textAUB = "AUB : Aubrites | Achrondites contenant des minéraux inconnus sur Terre";
    textURE = "URE : Uréilites | Achondrites pouvant contenir du diamant";
    textANG = "ANG : Angrites | Achondrites provenant de Mercure, riches en pyroxène calcique";
    textLUNARANORTH = "LUNARANORTH : Lunaires appelées 'Brèches anorthosiques'";
    textLUNARBASAL = "LUNARBASAL : Lunaires appelées 'Brèches basaltiques'";
    textLUNARGABBRO = "LUNARGABBRO : Lunaires de la classe de Gabbro";
    textSHE = "SHE : Schergottittes martiennes";
    textNAK = "NAK : Nakhlites martiennes";
    textCHA = "CHA : Chassignites martiennes";
    textPAL = "PAL : Pallasites | famille des Sidérolithes, grains d'olivine";
    textMES = "MES : Mésodérites | famille des Sidérolithes, mélange fer-nickel-silicates";
    textLOD = "LOD : Lodranites | famille des Sidérolithes, mélange fer-silicates";
    textOCTA = "OCTA : Octaédrites | Météorites de fer (Sidérites) les plus communes, entre 6 et 17% Ni";
    textHEXA = "HEXA : Hexaédrites | Météorites de fer (Sidérites), < 6% Ni";
    textATAX = "ATAX : Ataxites | Météorites de fer (Sidérites), entre 16 et 60% Ni";
    textHOBA = "HOBA : Météorite de Hoba | Météorite de fer, unique.";

    //IxD
    // let UI          = createDiv('');
    // timeline        = createSlider(0, 2020, 2020);
    // timelineLabel   = createSpan("Year: " + timeline.value());

    // maxTone        = createSlider(0, 100, 1);
    // toneLabel      = createSpan("Max Tone: "+maxTone.value());

    // timeline.parent(UI);
    // timelineLabel.parent(UI);
    // maxTone.parent(UI);
    // toneLabel.parent(UI);

    // timeline.input(updateTimeline);
    // maxTone.input(updateMaxTone);

    //map
    // myMap = mappa.tileMap(options);
    // myMap.overlay(canvas);
    
    console.log(colorHOBA);

    let dataURL = "data/Meteorite_Landings.csv";
    data = loadTable(dataURL, 'csv', 'header');
    console.log(data);
    let jsonURL = "json/convertcsv_Meteorite_Landings.json";
    
    meteorjson = loadJSON(jsonURL, onJsonLoad);
    // console.log(meteorjson[0]);
    // console.log(meteorjson[0].name);
    
}

// async function LoadJson(jsonURL){
//     const response  = await fetch(jsonURL);
//     const jsonData   = await response.text();
//     console.log(response);
//     // console.log(rawData);
//     /**
//      * rawData is store as a simple text. We need to parse the CSV
//      * and store each data into a readable array
//      * We use the split() for that purpose https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
//      * We also remove the first rows, the header, from the data set
//      */
//     // const data = jsonData.split("\n").slice(1);
//     // console.log(rows);
//     /**
//      * Now we can retreive each data into their own cols
//      */
//     console.log("LoadJson répond : " + jsonData[0].name);
//     // jsonData.forEach(row => {
//     //     const columns   = row.split(',');
//     //     const name      = columns[0];
//     //     const recclass  = columns[1];
//     //     const surclass  = columns[2];
//     //     const mass      = columns[3];
//     //     const fall      = columns[4];
//     //     const date      = columns[5];
//     //     const year      = columns[6];
//     //     const reclat    = columns[7];
//     //     const reclong   = columns[8];

//     //     surclasses.push(surclass);
//     //     masses.push(mass);
//         // console.log(mass, year);

//         //sort data and count the number of occurence
//         // const singleYear    = [];
//         // const yearCount     = [];

//         // console.log(singleYear, yearCount)

//     // })
// }

let masterVolume = 3; // in decibel.

function onJsonLoad() {
    // console.log(meteorjson[150].year);
    
    
    for (let k in meteorjson) {
        meteorArray.push(meteorjson[k]);    
    }
    console.log(meteorArray);
    
    
    // function initSong() {
/////////////////////////////////////////////////////////////////////////////////////
////////////// CREATION DES INSTRUMENTS ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

        // ******************* //
        // Create #1 PolySynth //
        // ******************* //
        synth1 = new Tone.PolySynth();
        synth1.volume.value = -9;
        synth1.toDestination(); // synth.connect(Tone.Master);

        // note that the first parameter to Loop() is an anonymous function,
        // ie a function defined "on the fly"
        // loop1 = new Tone.Loop( (time1) => {    
        //     let n1 = noise(frameCount * 0.1);
        //     let i1 = floor(map(n1, 0, 1, 0, scale1.length)); // floor rounds down
        //     let note1 = scale1[i1];
        //     if (prevNote1 != note1) {
        //     // (freq, noteDuration, time)
        //     synth1.triggerAttackRelease(note1, "8n", time1);
        //     }
        //     prevNote1 = note1;
        // }, "8n");  // '16n' here sets the speed of our loop -- every 16th note
        
        // Effect : Chorus 1 => Synth 1
        chorus1 = new Tone.Chorus({
            frequency: 3,
            delayTime: 2.5,
            depth: 0.2
        }).toDestination();

        // Connect : Chorus 1 => Synth 1
        synth1.connect(chorus1);

        // Effect : Distortion 1 => Synth 1
        dist1 = new Tone.Distortion(0.1).toDestination();
        // Connect : Distortion 1 => Synth 1
        synth1.connect(dist1);

        // Start loop1, chorus
        //loop1.start();
        chorus1.start();

    // };
        // ******************* //
        // END #1 PolySynth //
        // ******************* //
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
        // ******************* //
        // Create #2 PolySynth //
        // ******************* //

        // Effect JCReverb => Synth 2
        // Effect FeedbackDelay => Synth 2
        jcreverb2 = new Tone.JCReverb(0.9).toDestination();
        fbdelay2 = new Tone.FeedbackDelay(0);
        
        synth2 = new Tone.MonoSynth().chain(fbdelay2, jcreverb2);
        synth2.volume.value = -12;
        synth2.toDestination(); // synth.connect(Tone.Master);
        
        // note that the first parameter to Loop() is an anonymous function,
        // ie a function defined "on the fly"
        // loop2 = new Tone.Loop( (time2) => {    
        //     let n2 = noise(frameCount * 0.1);
        //     let i2 = floor(map(n2, 0, 1, 0, scale2.length)); // floor rounds down
        //     let note2 = scale2[i2];
        //     if (prevNote2 != note2) {
        //     // (freq, noteDuration, time)
        //     synth2.triggerAttackRelease(note2, "8n", time2);
        //     }
        //     prevNote2 = note2;
        // }, "1n");  // '16n' here sets the speed of our loop -- every 16th note

        // Loop 2 => START
        //loop2.start();
        // Connect : FBDelay 2 => Synth 2
        synth2.connect(fbdelay2);
        // Effect : JCReverb 2 => Synth 2
        synth2.connect(jcreverb2);

/////////////////////////////////////////////////////////////////
        // ******************** //
        // Create #3 PluckSynth //
        // ******************** //
        
        // Effect BitCrusher => Synth 3
        crusher3 = new Tone.BitCrusher(4).toDestination();
        
        synth3 = new Tone.PluckSynth();
        synth3.volume.value = 3;
        // Connect : BitCrusher 3 => Synth 3
        synth3.connect(crusher3);
        
        synth3.toDestination();

        // note that the first parameter to Loop() is an anonymous function,
        // ie a function defined "on the fly"
        // loop3 = new Tone.Loop( (time3) => {    
        //     let n3 = noise(frameCount * 0.1);
        //     let i3 = floor(map(n3, 0, 1, 0, scale3.length)); // floor rounds down
        //     let note3 = scale3[i3];
        //     if (prevNote3 != note3) {
        //     // (freq, noteDuration, time)
        //     synth3.triggerAttackRelease(note3, "4n", time3);
        //     }
        //     prevNote3 = note3;
        // }, "4n");  // '16n' here sets the speed of our loop -- every 16th note

        // Loop 3 => START
        //loop3.start();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
        // ******************** //
        // Create #4 FMSynth //
        // ******************** //
        
        // Effect BitCrusher => Synth 4
        crusher4 = new Tone.BitCrusher(4).toDestination();
        
        synth4 = new Tone.FMSynth();
        synth4.volume.value = -15;
        // Connect : BitCrusher 4 => Synth 4
        synth4.connect(crusher4);
        
        synth4.toDestination();

        // note that the first parameter to Loop() is an anonymous function,
        // ie a function defined "on the fly"
        // loop4 = new Tone.Loop( (time4) => {    
        //     let n4 = noise(frameCount * 0.1);
        //     let i4 = floor(map(n4, 0, 1, 0, scale4.length)); // floor rounds down
        //     let note4 = scale4[i4];
        //     if (prevNote4 != note4) {
        //     // (freq, noteDuration, time)
        //     synth4.triggerAttackRelease(note4, "1n", time4);
        //     }
        //     prevNote4 = note4;
        // }, "1n");  // '16n' here sets the speed of our loop -- every 16th note

        // Loop 4 => START
        //loop4.start();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
        // ******************** //
        // Create #5 MetalSynth //
        // ******************** //
        
        // Effect BitCrusher => Synth 5
        //crusher5 = new Tone.BitCrusher(5).toDestination();
        
        synth5 = new Tone.MetalSynth( 
            {
            frequency : 200 ,
            envelope : {
            attack : 0.007 ,
            decay : 1.1 ,
            release : 0.1
            }
            ,
            harmonicity : 10 ,
            modulationIndex : 10,
            resonance : 600 ,
            octaves : 4
            }
        );
        synth5.volume.value = -10;
        // Connect : BitCrusher 5 => Synth 5
        //synth5.connect(crusher5);
        
        synth5.toDestination();

        // note that the first parameter to Loop() is an anonymous function,
        // ie a function defined "on the fly"
        // loop5 = new Tone.Loop( (time5) => {    
        //     let n5 = noise(frameCount * 0.1);
        //     let i5 = floor(map(n5, 0, 1, 0, scale5.length)); // floor rounds down
        //     let note5 = scale5[i5];
        //     if (prevNote5 != note5) {
        //     // (freq, noteDuration, time)
        //     synth5.triggerAttackRelease(note5, "1n", time5);
        //     }
        //     prevNote5 = note5;
        // }, "4n");  // '16n' here sets the speed of our loop -- every 16th note

        // Loop 5 => START
        //loop5.start();

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
        // ******************** //
        // Create #6 Xylophone //
        // ******************** //
        
        // Effect BitCrusher => Synth 6
        //crusher6 = new Tone.BitCrusher(6).toDestination();
        
        synth6 = new Tone.MonoSynth({
            portamento : 0.02,
            oscillator : {
                type : "square"
            },
            envelope : {
                attack : 0.005,
                decay : 0.2,
                sustain : 0.4,
                release : 1.4,
            },
            filterEnvelope : {
                attack : 0.005,
                decay : 0.1,
                sustain : 0.05,
                release : 0.8,
                baseFrequency : 300,
                octaves : 4
            }
        })
        synth6.volume.value = 0;
        // Connect : BitCrusher 6 => Synth 6
        //synth6.connect(crusher6);
        
        synth6.toDestination();

        // note that the first parameter to Loop() is an anonymous function,
        // ie a function defined "on the fly"
        // loop6 = new Tone.Loop( (time6) => {    
        //     let n6 = noise(frameCount * 0.1);
        //     let i6 = floor(map(n6, 0, 1, 0, scale6.length)); // floor rounds down
        //     let note6 = scale6[i6];
        //     if (prevNote6 != note6) {
        //     // (freq, noteDuration, time)
        //     synth6.triggerAttackRelease(note6, "1n", time6);
        //     }
        //     prevNote6 = note6;
        // }, "4n");  // '16n' here sets the speed of our loop -- every 16th note

        // Loop 6 => START
        //loop6.start();



/////////////////////////////////////////////////////////////////////////////////////
//////////////////// FIN DE LA CREATION DES INSTRUMENTS ////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

    
    let count = 0;
    let rad;
    let note;
    let classColor;
    let classText;
    // Look at Tonal.ScaleType.names() for a full list of 
    // supported scales
    let scale0 = Tonal.Scale.get("B0 mixolydian").notes;
    let scale1 = Tonal.Scale.get("B1 mixolydian").notes;
    let scale2 = Tonal.Scale.get("B2 mixolydian").notes;
    let scale3 = Tonal.Scale.get("B3 mixolydian").notes;
    let scale4 = Tonal.Scale.get("B4 mixolydian").notes;
    let scale5 = Tonal.Scale.get("B5 mixolydian").notes;
    let scale6 = Tonal.Scale.get("B6 mixolydian").notes;
    // let scale7 = Tonal.Scale.get("C6 minor").notes;


    // let ready = false;

    // let wave; // this object allows us to draw waveforms



    //// GLOBAL : WAVE & MASTER
    // wave = new Tone.Waveform();
    // Tone.Master.connect(wave);

    
    

    function rangeMassClass() {
        // boucle for servant à se faire une idée de la répartition des météorites dans
        // les 6 catégories de masse:
        // cat6 : les plus légers
        // cat1 : les plus lourds
        let massClassArray = 
        [
            {
                "cat1" : 0,
                "cat2" : 0,
                "cat3" : 0,
                "cat4" : 0,
                "cat5" : 0,
                "cat6" : 0
            }
        ];
        for(let i = 0; i<meteorArray.length; i++){
            if(meteorArray[i].mass < 10) {
                massClassArray[0].cat6++;
            } else if(meteorArray[i].mass < 100) {
                massClassArray[0].cat5++;
            } else if(meteorArray[i].mass < 1000) {
                massClassArray[0].cat4++;
            } else if(meteorArray[i].mass < 10000) {
                massClassArray[0].cat3++;
            } else if(meteorArray[i].mass < 100000) {
                massClassArray[0].cat2++;
            } else if(meteorArray[i].mass > 100000) {
                massClassArray[0].cat1++;
            }
        }
        console.log(massClassArray);
    }
    rangeMassClass();


    function drawDataviz(){
        
        

        if(count < meteorArray.length){
            count++;
            
            
            
            if(count > 150) {
                console.log(count, meteorArray[count].year);
                document.getElementById('year-display').innerHTML = meteorArray[count].year;
                document.getElementById('con-text').style.display = "none";
                

                // synth8.triggerAttackRelease(["C4", "A4", "G4"], "8n")
            } else {
                console.log(count, meteorArray[count].year, meteorArray[count].name);
                document.getElementById('year-display').innerHTML = "?";
            }
            
            switch (meteorArray[count].surclass) {
                case 'OC' : {classColor = colorOC; classText = textOC;};
                break;
                case 'H' : {classColor = colorH; classText = textH;};
                break;
                case 'L' : {classColor = colorL; classText = textL};
                break;
                case 'LL' : {classColor = colorLL; classText = textLL;};
                break;
                case 'CI' : {classColor = colorCI; classText = textCI;};
                break;
                case 'CM' : {classColor = colorCM; classText = textCM;};
                break;
                case 'CO' : {classColor = colorCO; classText = textCO;};
                break;
                case 'CV' : {classColor = colorCV; classText = textCV;};
                break;
                case 'CB' : {classColor = colorCB; classText = textCB;};
                break;
                case 'CK' : {classColor = colorCK; classText = textCK;};
                break;
                case 'CR' : {classColor = colorCR; classText = textCR;};
                break;
                case 'CH' : {classColor = colorCH; classText = textCH;};
                break;
                case 'EL' : {classColor = colorEL; classText = textEL;};
                break;
                case 'EH' : {classColor = colorEH; classText = textEH;};
                break;
                case 'R' : {classColor = colorR; classText = textR;};
                break;
                case 'K' : {classColor = colorK; classText = textK};
                break;
                case 'ACH' : {classColor = colorACH; classText = textACH;};
                break;
                case 'HOW' : {classColor = colorHOW; classText = textHOW;};
                break;
                case 'EUC' : {classColor = colorEUC; classText = textEUC;};
                break;
                case 'DIO' : {classColor = colorDIO; classText = textDIO;};
                break;
                case 'URE' : {classColor = colorURE; classText = textURE;};
                break;
                case 'AUB' : {classColor = colorAUB; classText = textAUB;};
                break;
                case 'ANG' : {classColor = colorANG; classText = textANG;};
                break;
                case 'LUNARANORTH' : {classColor = colorLUNARANORTH; classText = textLUNARANORTH;};
                break;
                case 'LUNARBASAL' : {classColor = colorLUNARBASAL; classText = textLUNARBASAL;};
                break;
                case 'LUNARGABBRO' : {classColor = colorLUNARGABBRO; classText = textLUNARGABBRO;};
                break;
                case 'SHE' : {classColor = colorSHE; classText = textSHE;};
                break;
                case 'NAK' : {classColor = colorNAK; classText = textNAK;};
                break;
                case 'CHA' : {classColor = colorCHA; classText = textCHA;};
                break;
                case 'WIN' : {classColor = colorWIN; classText = textWIN;};
                break;
                case 'BRA' : {classColor = colorBRA; classText = textBRA;};
                break;
                case 'PAL' : {classColor = colorPAL; classText = textPAL;};
                break;
                case 'MES' : {classColor = colorMES; classText = textMES;};
                break;
                case 'LOD' : {classColor = colorLOD; classText = textLOD;};
                break;
                case 'O' : {classColor = colorOCTA; classText = textOCTA;};
                break;
                case 'HEXA' : {classColor = colorHEXA; classText = textHEXA;};
                break;
                case 'ATAX' : {classColor = colorATAX; classText = textATAX;};
                break;
                case 'HOBA' : {classColor = colorHOBA; classText = textHOBA;};
                break;
            
            }
            var mass= meteorArray[count].mass;
            // console.log(meteorArray[count].surclass);
            // console.log(colorHOBA);
            if(mass < 10) {
                // rad = meteorArray[count].mass;
                rad = 2000;
                scale = scale6;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth1;
                synth.volume.value = -10;
                atk = "16n";
                console.log("CAT %c6 : " + synth.name, "color: lightblue; font-size: 18px;" );
            } else if(mass < 100) {
                // rad= meteorArray[count].mass;
                rad = 6000;
                scale = scale5;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth1;
                synth.volume.value = -8;
                atk = "2n";
                console.log("CAT %c5 : " + synth.name, "color: blue; font-size: 18px;");
            } else if(mass < 1000) {
                // rad=meteorArray[count].mass/2;
                rad = 10000;
                scale = scale4;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth= synth1;
                synth.volume.value = -6;
                atk = "2n";
                console.log("CAT %c4 : " + synth.name, "color: green; font-size: 18px;");
            } else if(mass < 10000) {
                // rad=meteorArray[count].mass/40;
                rad = 15000;
                scale = scale3;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth4;
                synth.volume.value = -4;
                atk = "4n";
                console.log("CAT %c3 : " + synth.name, "color: magenta; font-size: 18px;", synth.name);
            } else if(mass < 100000) {
                // rad= meteorArray[count].mass/500;
                rad = 25000;
                scale = scale2;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth1;
                synth.volume.value = -5;
                atk = "2n";
                console.log("CAT %c2 : " + synth.name, "color: orange; font-size: 18px;");
            } else if(mass < 500000) {
                // rad= meteorArray[count].mass/10000;
                rad = 35000;
                scale = scale1;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth4;
                synth.volume.value = -4;
                atk = "2n";
                console.log("CAT %c1 : " + synth.name, "color: red; font-size: 18px;");
            } else if(mass < 1000000) {
                // rad= meteorArray[count].mass/10000;
                rad = 70000;
                scale = scale0;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth4;
                synth.volume.value = 5;
                atk = "8n";
                console.log("CAT %c1 : " + synth.name, "color: red; font-size: 18px;");
            } else if(mass > 1000000) {
                // rad= meteorArray[count].mass/10000;
                rad = 120000;
                scale = scale0;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth4;
                synth.volume.value = 5;
                atk = "10n";
                console.log("CAT %c1 : " + synth.name, "color: red; font-size: 18px;");
            }
            synth.triggerAttackRelease(note, atk);
            
            var popup = L.popup({
                className : 'popUp'
            })
            .setContent(
                '<p class="nameProp">Nom :<span class="nameValue"> '+meteorArray[count].name+'</span></p>'
                + '<p class="yearProp">Trouvée en : <span class="yearValue">'+meteorArray[count].year+'</span></p>'
                + '<p class="massProp">Masse : <br><span class="massValue">'+mass/1000000000+' <em>tonnes,</em><br>'+mass/1000+' <em>kg,</em><br>'+mass+'<em> g</em></span></p>'
                + '<p class="surclassProp">Famille : <span class="surclassValue" style="color:'+classColor+';">'+meteorArray[count].surclass+'</span></p>'
                + '<p class="shortClassResume" style="color:'+classColor+';">'+classText+'</p>'
                )
            // fill('red');
            // ellipse(meteorArray[count].reclong, meteorArray[count].reclat, 20, 20);
            L.circleMarker([meteorArray[count].reclat, meteorArray[count].reclong], {
                radius: rad/1000,
                stroke: false,
                strokeOpacity: 0.9,
                fill: true,
                fillColor : classColor,
                fillOpacity: 0.04,
                className: 'raindrop'
            }).addTo(mapLeaflet)
            L.circle([meteorArray[count].reclat, meteorArray[count].reclong], rad, {
                stroke: false,
                fillColor : classColor,
                fillOpacity: 0.85
            }).addTo(mapLeaflet).bindPopup(popup)
            // let line = L.rectangle([[90, meteorArray[count].reclong], [-90, meteorArray[count].reclong]], {
            //     color: classColor,
            //     weight: 0.0045
            // })
            // line.addTo(mapLeaflet);
            // setTimeout(function () {
            //     line.remove();
            // }, 600);
            // let onde = L.circleMarker([meteorArray[count].reclat, meteorArray[count].reclong], {
            //     radius: rad/1500,
            //     stroke: true,
            //     strokeWidth: 0.1,
            //     opacity: 0.0001,
            //     color: classColor,
            //     fill: false,
            //     fillColor : classColor,
            //     fillOpacity: 0,
            //     className: 'pulse'
            // })
            // onde.addTo(mapLeaflet);
                
                
                
                
        } else {
            console.log("clear interval");
            window.clearInterval(interval);
            window.clearInterval(interval2);
        }
    
    }
    // radius est défini en fonction de la catégorie de masse d'une météorite
     // A FAIRE
    
    // function addProps() {
    //     meteorArray[count].newProperty = "newValue" + count;
    //     console.log(meteorArray[count].newProperty);
    // }    
    // var interval2 = window.setInterval(addProps, 200);
    var interval = window.setInterval(drawDataviz, 300);
    
}
    Tone.Master.volume.value = masterVolume;
    Tone.Transport.start();

// function drawDataviz() {
//     console.log('firing drawDataviz()');
//     clear();

//     noStroke();
//     rectMode(CENTER);


//     let scan = {};
//         scan.height = windowHeight;
//         scan.long = 0;

//     // stroke(200);
//     // line(windowWidth*0.6, windowHeight, windowWidth*0.6, 0);

//     for(let row = 0; row < data.getRowCount(); row++) {
//         let date    = data.getString(row, 6);

//         if(date == undefined){
//             const lat  = Number(data.getString(row, 7));
//             const long = Number(data.getString(row, 8));

//             if(mapLeaflet.map.getBounds().contains({lat: lat, lng: long})){
//                 const pos       = mapLeaflet.latLngToPixel(lat, long);

//                 let name        = data.getString(row, 0);
//                 let surclass    = data.getString(row, 2);
//                 let mass        = data.getString(row, 3);
//                 let fell        = (data.getString(row, 4) === 'Fell') ? true : false;


//                 let rad         = sqrt(mass) / PI;
//                 rad             *= 0.025;
//                 rad             = constrain(rad, 2, width) + myMap.zoom();


//                 noStroke();
                
//                 /* for (var i = 0; i < colorArr.length; i++){
//                     if(colorArr[i].substr(5) === surclass){
//                         fill(("color" + surclass));
//                     }
//                 }
//                 */
//                switch (surclass) {
//                     case 'OC' : {fill(colorOC);};
//                     break;
//                     case 'H' : {fill(colorH)};
//                     break;
//                     case 'L' : {fill(colorL)};
//                     break;
//                     case 'LL' : {fill(colorLL)};
//                     break;
//                     case 'CI' : {fill(colorCI)};
//                     break;
//                     case 'CM' : {fill(colorCM)};
//                     break;
//                     case 'CO' : {fill(colorCO)};
//                     break;
//                     case 'CV' : {fill(colorCV)};
//                     break;
//                     case 'CB' : {fill(colorCB)};
//                     break;
//                     case 'CK' : {fill(colorCK)};
//                     break;
//                     case 'CR' : {fill(colorCR)};
//                     break;
//                     case 'CH' : {fill(colorCH)};
//                     break;
//                     case 'EL' : {fill(colorEL)};
//                     break;
//                     case 'EH' : {fill(colorEH)};
//                     break;
//                     case 'R' : {fill(colorR)};
//                     break;
//                     case 'K' : {fill(colorK)};
//                     break;
//                     case 'ACH' : {fill(colorACH)};
//                     break;
//                     case 'HOW' : {fill(colorHOW)};
//                     break;
//                     case 'EUC' : {fill(colorEUC)};
//                     break;
//                     case 'DIO' : {fill(colorDIO)};
//                     break;
//                     case 'URE' : {fill(colorURE)};
//                     break;
//                     case 'AUB' : {fill(colorAUB)};
//                     break;
//                     case 'ANG' : {fill(colorANG)};
//                     break;
//                     case 'LUNARANORTH' : {fill(colorLUNARANORTH)};
//                     break;
//                     case 'LUNARBASAL' : {fill(colorLUNARBASAL)};
//                     break;
//                     case 'LUNARGABBRO' : {fill(colorLUNARGABBRO)};
//                     break;
//                     case 'SHE' : {fill(colorSHE)};
//                     break;
//                     case 'NAK' : {fill(colorNAK)};
//                     break;
//                     case 'CHA' : {fill(colorCHA)};
//                     break;
//                     case 'WIN' : {fill(colorWIN)};
//                     break;
//                     case 'BRA' : {fill(colorBRA)};
//                     break;
//                     case 'PAL' : {fill(colorPAL)};
//                     break;
//                     case 'MES' : {fill(colorMES)};
//                     break;
//                     case 'LOD' : {fill(colorLOD)};
//                     break;
//                     case 'O' : {fill(colorOCTA)};
//                     break;
//                     case 'HEXA' : {fill(colorHEXA)};
//                     break;
//                     case 'ATAX' : {fill(colorATAX)};
//                     break;
//                     case 'HOBA' : {fill(colorHOBA)};
//                     break;
//                 }
                
                
//                 if(date != undefined){
//                     ellipse(pos.x, pos.y, rad * 2, rad * 2);
//                 }else{
//                     rect(pos.x, pos.y, rad * 2, rad * 2);
//                 }
//                 if(mass > maxTone.value() * 250000){
//                     fill(255,255,255);
//                     noStroke();
//                     textAlign(LEFT, CENTER);
//                     textSize(8 + myMap.zoom());
//                     text(name+", "+surclass+", "+date+", mass: "+mass+"g", pos.x + rad * 1.25 + 10, pos.y);
//                     stroke(0);
//                     line(pos.x, pos.y, pos.x + rad * 1.25, pos.y);
//                 }
//                 if(mass > maxTone.value() * 500000){
//                     fill(255,255,255);
//                     noStroke();
//                     textAlign(LEFT, CENTER);
//                     textSize(8 + myMap.zoom());
//                     text(name+", "+surclass+", "+date+", mass: "+mass+"g", pos.x + rad * 1.25 + 10, pos.y);
//                     stroke(0);
//                     line(pos.x, pos.y, pos.x + rad * 1.25, pos.y);
//                 }
//                 if(mass > maxTone.value() * 1000000){
//                     fill(255,255,255);
//                     noStroke();
//                     textAlign(LEFT, CENTER);
//                     textSize(8 + myMap.zoom());
//                     text(name+", "+surclass+", "+date+", mass: "+mass+"g", pos.x + rad * 1.25 + 10, pos.y);
//                     stroke(0);
//                     line(pos.x, pos.y, pos.x + rad * 1.25, pos.y);
//                 }
//             }
//         }
//     }

//     //console.log(scan);

//     //legend
//     noStroke();
//     fill(colorOC)
//     rect(20, height-760, 20, 20);
//     fill(colorH)
//     rect(20, height-740, 20, 20);
//     fill(colorL)
//     rect(20, height-720, 20, 20);
//     fill(colorLL)
//     rect(20, height-700, 20, 20);
//     fill(colorCI)
//     rect(20, height-680, 20, 20);
//     fill(colorCM)
//     rect(20, height-660, 20, 20);
//     fill(colorCO)
//     rect(20, height-640, 20, 20);
//     fill(colorCV)
//     rect(20, height-620, 20, 20);
//     fill(colorCB)
//     rect(20, height-600, 20, 20);
//     fill(colorCK)
//     rect(20, height-580, 20, 20);
//     fill(colorCR)
//     rect(20, height-560, 20, 20);
//     fill(colorCH)
//     rect(20, height-540, 20, 20);
//     fill(colorEL)
//     rect(20, height-520, 20, 20);
//     fill(colorEH)
//     rect(20, height-500, 20, 20);
//     fill(colorR)
//     rect(20, height-480, 20, 20);
//     fill(colorK)
//     rect(20, height-460, 20, 20);
//     fill(colorACH)
//     rect(20, height-440, 20, 20);
//     fill(colorBRA)
//     rect(20, height-420, 20, 20);
//     fill(colorWIN)
//     rect(20, height-400, 20, 20);
//     fill(colorHOW)
//     rect(20, height-380, 20, 20);
//     fill(colorEUC)
//     rect(20, height-360, 20, 20);
//     fill(colorDIO)
//     rect(20, height-340, 20, 20);
//     fill(colorAUB)
//     rect(20, height-320, 20, 20);
//     fill(colorURE)
//     rect(20, height-300, 20, 20);
//     fill(colorANG)
//     rect(20, height-280, 20, 20);
//     fill(colorLUNARANORTH)
//     rect(20, height-260, 20, 20);
//     fill(colorLUNARBASAL)
//     rect(20, height-240, 20, 20);
//     fill(colorLUNARGABBRO)
//     rect(20, height-220, 20, 20);
//     fill(colorSHE)
//     rect(20, height-200, 20, 20);
//     fill(colorNAK)
//     rect(20, height-180, 20, 20);
//     fill(colorCHA)
//     rect(20, height-160, 20, 20);
//     fill(colorPAL)
//     rect(20, height-140, 20, 20);
//     fill(colorMES)
//     rect(20, height-120, 20, 20);
//     fill(colorLOD)
//     rect(20, height-100, 20, 20);
//     fill(colorOCTA)
//     rect(20, height-80, 20, 20);
//     fill(colorHEXA)
//     rect(20, height-60, 20, 20);
//     fill(colorATAX)
//     rect(20, height-40, 20, 20);
//     fill(colorHOBA)
//     rect(20, height-20, 20, 20);

    // fill(color(255,255,255));
    // textAlign(LEFT, CENTER)
    // text("OC : Chondrites ordinaires", 40, height-760);
    // text("H : Chondrites ordinaires | à haut taux de fer", 40, height-740);
    // text("L : Chondrites ordinaires | à faible taux de fer", 40, height-720);
    // text("LL : Chondrites ordinaires | à très faible taux de fer, olivine", 40, height-700);
    // text("CI : Chondrites carbonées | carbone 3 à 5%, eau 20%", 40, height-680);
    // text("CM : Chondrites carbonées | à fort taux de chondres", 40, height-660);
    // text("CO : Chondrites carbonées | à petits chondres, eau 1%", 40, height-640);
    // text("CV : Chondrites carbonées | présence de gros chondres", 40, height-620);
    // text("CB : Chondrites carbonées | abondance de métal, présence de sphères métalliques", 40, height-600);
    // text("CK : Chondrites carbonées | silicate sombre, pas de métal", 40, height-580);
    // text("CR : Chondrites carbonées | chondres primitifs reliés par du carbone pur", 40, height-560);
    // text("CH : ALH 85085 | riche en fer", 40, height-540);
    // text("EL : Chondrites à Entastite | -12% Fe-Ni", 40, height-520);
    // text("EH : Chondrites à Entastite | 35% Fe-Ni", 40, height-500);
    // text("R : Chondrites à Entastite | similaires à la météorite de Rumuruti (Kenya)", 40, height-480);
    // text("K : Chondrites à Entastite | similaires à la météorite de Kakangari (Inde)", 40, height-460);
    // text("ACH : Achondrites ordinaires", 40, height-440);
    // text("BRA : Brachinites | Achondrites riches en olivine ", 40, height-420);
    // text("WIN : Winanoïtes | Achondrites riches en fer", 40, height-400);
    // text("HOW : Howardites", 40, height-380);
    // text("EUC : Eucrites | ", 40, height-360);
    // text("DIO : Diogénites | ", 40, height-340);
    // text("AUB : Aubrites | Achrondites contenant des minéraux inconnus sur Terre", 40, height-320);
    // text("URE : Uréilites | Achondrites pouvant contenir du diamant", 40, height-300);
    // text("ANG : Angrites | Achondrites provenant de Mercure, riches en pyroxène calcique", 40, height-280);
    // text('LUNARANORTH : Lunaires appelées "Brèches anorthosiques"', 40, height-260);
    // text('LUNARBASAL : Lunaires appelées "Brèches basaltiques"', 40, height-240);
    // text('LUNARGABBRO : Lunaires de la classe de Gabbro', 40, height-220);
    // text("SHE : Schergottittes martiennes", 40, height-200);
    // text("NAK : Nakhlites martiennes", 40, height-180);
    // text("CHA : Chassignites martiennes", 40, height-160);
    // text("PAL : Pallasites | famille des Sidérolithes, grains d'olivine", 40, height-140);
    // text("MES : Mésodérites | famille des Sidérolithes, mélange fer-nickel-silicates", 40, height-120);
    // text("LOD : Lodranites | famille des Sidérolithes, mélange fer-silicates", 40, height-100);
    // text("OCTA : Octaédrites | Météorites de fer (Sidérites) les plus communes, entre 6 et 17% Ni", 40, height-80);
    // text("HEXA : Hexaédrites | Météorites de fer (Sidérites), < 6% Ni", 40, height-60);
    // text("ATAX : Ataxites | Météorites de fer (Sidérites), entre 16 et 60% Ni", 40, height-40);
    // text("HOBA : Météorite de Hoba | Météorite de fer, unique.", 40, height-20);

    // noStroke();
    // fill(colorOC);
    // rect(20, height-20, 20, 20);
    // fill(colorH);
    // rect(20, height-40, 20, 20);
    // fill(0);
    // textAlign(LEFT, CENTER);

//     // console.log(masses);
    
// }

function updateTimeline(){
    updateAll(timelineLabel, "Year: "+timeline.value(), drawDataviz);
}

function updateMaxTone(){
    updateAll(toneLabel, "Max Tone: "+maxTone.value(), drawDataviz);
}

function updateAll(label, data, callback){
    label.html(data);
    if (typeof callback == "function") 
                callback()
}