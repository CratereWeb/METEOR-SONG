// creation d'une dataViz
// composition des météorites tombées et trouvées sur Terre jusqu'à 2020


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

let meteorjson;
var meteorArray = [];
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
    minZoom: 2.2
}).setView([50, 80], 2.2);


// ajout du tile
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
}).addTo(mapLeaflet);

console.log(mapLeaflet);


function setup() {
    console.log('firing setup()');
    
    //canvas = createCanvas(windowWidth, windowHeight);
  
    // //IxD
    //let UI          = createDiv('');
    //timeline        = createSlider(0, 2020, 2020);
    //timelineLabel   = createSpan("Year: " + timeline.value());

    // maxTone        = createSlider(0, 100, 1);
    // toneLabel      = createSpan("Max Tone: "+maxTone.value());

    // timeline.parent(UI);
    //timelineLabel.parent(UI);
    // maxTone.parent(UI);
    // toneLabel.parent(UI);

    // timeline.input(updateTimeline);
    // maxTone.input(updateMaxTone);

    // //map
    // // myMap = mappa.tileMap(options);
    // // myMap.overlay(canvas);
    
    // console.log(colorHOBA);
}


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

    // descriptif
    textOC = "OC : Chondrites ordinaires";
    textH = "H : Chondrites ordinaires | à haut taux de fer. <br>Le type de météorite le plus courant (environ 40 % des météorites). Le nom (H pour high, « haut » en anglais) vient de leur abondance en fer, par rapport aux autres chondrites ordinaires. Cet élément représente entre 25 et 31 % du poids. Plus de la moitié est présent sous forme métallique, expliquant le fort magnétisme de ces météorites malgré leur apparence de pierre.";
    textL = "L : Chondrites ordinaires | à faible taux de fer.<br> Elles constituent environ 35 % de l'ensemble des météorites cataloguées, et 40 % des chondrites ordinaires. On pense que les chondrites ordinaires proviennent de trois astéroïdes corps parents, dont les fragments ont formé respectivement les groupes des chondrites de type H, de type L et de type LL.";
    textLL = "LL : Chondrites ordinaires | à très faible taux de fer, olivine.";
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


    let dataURL = "data/Meteorite_Landings.csv";
    data = loadTable(dataURL, 'csv', 'header');
    console.log(data);
    let jsonURL = "json/convertcsv_Meteorite_Landings.json";
    
    meteorjson = loadJSON(jsonURL, onJsonLoad);
    
}

let masterVolume = 3; // in decibel.

function onJsonLoad() {
    
    for (let k in meteorjson) {
        meteorArray.push(meteorjson[k]);    
    }
    console.log(meteorArray);
    
/////////////////////////////////////////////////////////////////////////////////////
////////////// CREATION DES INSTRUMENTS ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

      // ******************* //
      // Create #1 PolySynth //
      // ******************* //
      synth1 = new Tone.PolySynth();
      synth1.volume.value = -9;
      synth1.toDestination(); // synth.connect(Tone.Master);

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
    let scale7 = Tonal.Scale.get("B7 mixolydian").notes;


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
        //console.log(massClassArray);
    }
    rangeMassClass();


    function drawDataviz(){
        
        if(count < meteorArray.length){
            count++;
            
            
            
            if(count > 150) {
                console.log(count, meteorArray[count].year);
                document.getElementById('year-display').innerHTML = meteorArray[count].year;
                document.getElementById('context').innerHTML = "Vous pouvez cliquer sur les points d'impacts afin d'avoir des informations concernant les météorites.";
                

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
                atk = "8n";
                console.log("CAT %c8 : " + synth.name, "color: lightblue; font-size: 18px;" );
            } else if(mass < 100) {
                // rad= meteorArray[count].mass;
                rad = 6000;
                scale = scale5;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth1;
                synth.volume.value = -8;
                atk = "2n";
                console.log("CAT %c7 : " + synth.name, "color: blue; font-size: 18px;");
            } else if(mass < 1000) {
                // rad=meteorArray[count].mass/2;
                rad = 10000;
                scale = scale4;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth= synth1;
                synth.volume.value = -6;
                atk = "2n";
                console.log("CAT %c6 : " + synth.name, "color: green; font-size: 18px;");
            } else if(mass < 10000) {
                // rad=meteorArray[count].mass/40;
                rad = 15000;
                scale = scale3;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth4;
                synth.volume.value = -4;
                atk = "4n";
                console.log("CAT %c5 : " + synth.name, "color: magenta; font-size: 18px;", synth.name);
            } else if(mass < 100000) {
                // rad= meteorArray[count].mass/500;
                rad = 25000;
                scale = scale2;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth1;
                synth.volume.value = -5;
                atk = "2n";
                console.log("CAT %c4 : " + synth.name, "color: orange; font-size: 18px;");
            } else if(mass < 500000) {
                // rad= meteorArray[count].mass/10000;
                rad = 35000;
                scale = scale1;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth4;
                synth.volume.value = -4;
                atk = "2n";
                console.log("CAT %c3 : " + synth.name, "color: red; font-size: 18px;");
            } else if(mass < 1000000) {
                // rad= meteorArray[count].mass/10000;
                rad = 70000;
                scale = scale0;
                note = scale[Math.floor(Math.random()*scale.length)];
                synth = synth4;
                synth.volume.value = 5;
                atk = "8n";
                console.log("CAT %c2 : " + synth.name, "color: red; font-size: 18px;");
            } else if(mass > 1000000) {
                // rad= meteorArray[count].mass/10000;
                rad = mass/220;
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
                + '<p class="surclassProp">Classification : <span class="surclassValue" style="color:'+classColor+';">'+meteorArray[count].surclass+'</span></p>'
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
            let line = L.rectangle([[90, meteorArray[count].reclong], [-90, meteorArray[count].reclong]], {
                color: classColor,
                weight: 0.0045
            })
            line.addTo(mapLeaflet);
            setTimeout(function () {
                line.remove();
            }, 600);
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


//function updateTimeline(){
//    updateAll(timelineLabel, "Year: "+timeline.value(), drawDataviz);
//}

//function updateMaxTone(){
//    updateAll(toneLabel, "Max Tone: "+maxTone.value(), drawDataviz);
//}

//function updateAll(label, data, callback){
//    label.html(data);
//    if (typeof callback == "function") 
//                callback()
//}