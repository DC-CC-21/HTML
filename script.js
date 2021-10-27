var bgImages = {};
var chars = {};
var grayscale = {};
var sounds = {}
var imgs = {};
var theEye, sauron;
var loaded = 0;


function success(){
  console.log('success')
  loaded+=1;
}
function fail(){
  console.log('fail')
}

function preload() {

  bgImages = {
    lonelyMountain: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FThe%20Lonely%20Mountain.png?v=1634332568303",success,fail
    ),
    // var shireBg: loadImage('https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FThe%20Shire.svg?v=1634510454512')

    shireBg: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FThe%20Shire.svg?v=1634511101070"
    ),

    isengardBg: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FIsengard.svg?v=1634511371940"
    ),
    gondor: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fgondor.svg?v=1634694885748"
    ),
    minas_morgul: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fminas%20morgul.svg?v=1634695849422"
    ),

    treasure_erebor: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Ftreasure%20of%20erebor.svg?v=1634696052335"
    ),

    mordor: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FMordor.svg?v=1634678057364"
    ),

    amon_hen: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Famon%20hen.svg?v=1634696395448"
    ),

    rivendell: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Frivendell.svg?v=1634696552570"
    ),

    argonath: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fargonath.svg?v=1634696921882"
    ),
    bag_end: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fbag%20end.svg?v=1634697392933"
    ),

    moria: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fmoria.svg?v=1634851182269"
    ),
    beacons: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fbeacons.svg?v=1634705335862"
    )
  };

  chars = {
    legolas: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FLegolas.svg?v=1634360487219"
    ),
    tauriel: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FTauriel.svg?v=1634360723924"
    ),
    frodo: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FFrodo.svg?v=1634488130019"
    ),
    gandalf: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FGandalf.svg?v=1634488843899"
    ),
    orc: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FOrc.svg?v=1634488816180"
    ),
    ring: loadImage(
      // "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FOne%20Ring.png?v=1634489402613"
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FOne%20Ring.svg?v=1634693493863"
      // 'https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fimage2vector.svg?v=1634876413096'
    ),
    barrel: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FBarrel.png?v=1634359742592"
    ),
    sam: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FSam.svg?v=1634691131978"

      // 'https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FSam.png?v=1635196717731'
    ),
    elrond: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Felrond.svg?v=1634691346343"
    ),
    bard: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fbard.svg?v=1634691631491"
    ),
    bofur: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fbofur.svg?v=1634691962334"
    ),
    rock: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Frock4.svg?v=1634763090870"
    )
  };

  grayscale = {
    legolas: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Flegolas_grayscale.svg?v=1634955792998"
    ),
    tauriel: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Ftauriel_grayscale.svg?v=1634956119220"
    ),
    frodo: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FFrodo.svg?v=1634488130019"
    ),
    gandalf: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fgandalf_grayscale.svg?v=1634955794803"
    ),
    orc: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Forc_grayscale.svg?v=1634955779889"
    ),
    ring: loadImage(
      // "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FOne%20Ring.png?v=1634489402613"
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FOne%20Ring.svg?v=1634693493863"
      // 'https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fimage2vector.svg?v=1634876413096'
    ),
    barrel: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FBarrel.png?v=1634359742592"
    ),
    sam: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fsam_grayscale.svg?v=1634929696735"
    ),
    elrond: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Felrond_grayscale.svg?v=1634955797952"
    ),
    bard: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fbard_grayscale.png.svg?v=1634955806900"
    ),
    bofur: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fbofur_grayscale.svg?v=1634878193422"
    ),
    rock: loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Frock4.svg?v=1634763090870"
    )
  };
  theEye = loadImage(
    "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fthe%20great%20eye.svg?v=1634678464712"
  );

  sauron = loadImage(
    "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FSauron.svg?v=1634678278976"
  );
  soundFormats('mp3', 'ogg');
  
  sounds = {
    hobbits: loadSound('https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2F02%20Concerning%20Hobbits.m4a?v=1635305504119'),
  }
}

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
const canvasSize = WIDTH < HEIGHT ? WIDTH : HEIGHT;
var width = canvasSize;
var height = canvasSize;
function setup() {
  // let cnv = createCanvas(100, 100);

  var cnv = createCanvas(canvasSize, canvasSize);
  cnv.parent("canvas");

}
function random(min, max) {
  return Math.random() * (max - min) + min;
}
function PVector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}
function dist() {
  var dx, dy, dz;
  if (arguments.length === 4) {
    dx = arguments[0] - arguments[2];
    dy = arguments[1] - arguments[3];
    return Math.sqrt(dx * dx + dy * dy);
  }
  if (arguments.length === 6) {
    dx = arguments[0] - arguments[3];
    dy = arguments[1] - arguments[4];
    dz = arguments[2] - arguments[5];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }
}
var cos = Math.cos;
var sin = Math.sin;
var atan2 = Math.atan2;

function map(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
} //replace map
function toRad(deg) {
  return deg / (180 / Math.PI);
}
function Arc(x, y, w, h, start, stop) {
  arc(x, y, w, h, toRad(start), toRad(stop));
}
function Rotate(deg) {
  rotate(toRad(deg));
}
// frameRate(60);

for (var i = 0; i < Object.keys(chars).length; i++) {
  imgs[Object.keys(chars)[i]] = false;
}
/** -- Lists -- **/
var blocks = [];
var coins = [];
var gameBoard = [
  [
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1 ",
    "h1,  ,c ,c ,c ,c ,c ,g ,c ,c ,c ,c ,c ,c ,h1",
    "h1,  ,h1,c ,c ,  ,h1,h1,h1,  ,c ,c ,h1,c ,h1",
    "h1,  ,h1,h1,c ,c ,c ,h1,c ,c ,c ,h1,h1,c ,h1",
    "h1,  ,h1,c ,c ,h1,c ,  ,c ,h1,c ,c ,h1,c ,h1",
    "h1,  ,h1,c ,h1,h1,c ,h1,c ,h1,h1,c ,h1,c ,h1",
    "h1,  ,h1,c ,c ,h1,c ,c ,c ,h1,c ,c ,h1,c ,h1",
    "h1,g ,h1,h1,c ,c ,c ,p ,c ,c ,c ,h1,h1,g ,h1",
    "h1,  ,h1,c ,c ,h1,c ,c ,c ,h1,c ,c ,h1,c ,h1",
    "h1,  ,h1,c ,h1,h1,c ,h1,c ,h1,h1,c ,h1,c ,h1",
    "h1,  ,h1,c ,c ,h1,c ,  ,c ,h1,c ,c ,h1,c ,h1",
    "h1,  ,h1,h1,c ,c ,c ,h1,c ,c ,c ,h1,h1,c ,h1",
    "h1,  ,h1,c ,c ,  ,h1,h1,h1,  ,c ,c ,h1,c ,h1",
    "h1,  ,  ,c ,c ,c ,c ,g ,c ,c ,c ,c ,c ,c ,h1",
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1"
  ],
  [
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1",
    "h1,  ,  ,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1",
    "h1,  ,  ,  ,  ,h1,  ,  ,  ,  ,  ,  ,h1,h1,h1,  ,h1",
    "h1,  ,g ,  ,  ,  ,h1,  ,  ,  ,  ,  ,h1,  ,  ,  ,h1",
    "h1,  ,v1,  ,  ,  ,h1,g ,h1,  ,  ,  ,h1,  ,  ,  ,h1",
    "h1,  ,  ,h1,h1,h1,h1,h1,h1,h1,  ,p ,h1,g ,v1,  ,h1",
    "h1,  ,v1,  ,  ,  ,h1,g ,h1,  ,  ,  ,h1,  ,  ,  ,h1",
    "h1,  ,g ,  ,  ,  ,h1,  ,  ,  ,  ,  ,h1,  ,  ,  ,h1",
    "h1,  ,  ,  ,  ,h1,  ,  ,  ,  ,  ,  ,h1,h1,h1,  ,h1",
    "h1,  ,  ,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1"
  ],
  [
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,g ,v1,  ,h1,  ,  ,h1,  ,  ,h1,  ,h1,g ,  ,h1",
    "h1,  ,h1,h1,  ,h1,  ,  ,  ,  ,  ,h1,  ,h1,h1,  ,h1",
    "h1,  ,  ,  ,  ,h1,  ,  ,  ,  ,  ,h1,  ,  ,  ,  ,h1",
    "h1,  ,h1,h1,h1,h1,  ,h1,  ,h1,  ,h1,h1,h1,h1,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,h1,  ,h1,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,  ,  ,h1,h1,h1,  ,h1,h1,h1,  ,  ,  ,  ,h1",
    "h1,h1,h1,  ,  ,  ,  ,  ,p ,  ,  ,  ,  ,  ,h1,h1,h1",
    "h1,  ,  ,  ,  ,h1,h1,h1,  ,h1,h1,h1,  ,  ,  ,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,h1,  ,h1,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,h1,h1,h1,h1,  ,h1,  ,h1,  ,h1,h1,h1,h1,  ,h1",
    "h1,  ,  ,  ,  ,h1,  ,  ,  ,  ,  ,h1,  ,  ,  ,  ,h1",
    "h1,  ,h1,h1,  ,h1,  ,  ,  ,  ,  ,h1,  ,h1,h1,  ,h1",
    "h1,  ,g ,v1,  ,h1,  ,  ,h1,  ,  ,h1,  ,v1,g ,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1"
  ],
  [
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,g ,h1,h1,  ,  ,h1,h1,h1,  ,h1,h1,h1,  ,g ,h1",
    "h1,  ,h1,  ,  ,  ,  ,h1,NN,NN,h1,  ,  ,h1,  ,  ,h1,NN,NN,v1,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,h1,NN,NN,h1,  ,  ,h1,  ,  ,h1,NN,NN,h1,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,h1,NN,NN,h1,  ,  ,h1,  ,  ,h1,h1,h1,  ,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,h1,NN,NN,h1,p ,  ,h1,  ,  ,h1,v1,  ,  ,  ,h1",
    "h1,  ,h1,  ,g ,  ,  ,h1,NN,NN,h1,  ,  ,h1,  ,  ,h1,  ,v1,  ,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,h1,NN,NN,h1,  ,  ,h1,  ,  ,h1,  ,  ,v1,  ,h1",
    "h1,  ,h1,h1,h1,h1,  ,  ,h1,h1,  ,  ,  ,h1,  ,  ,h1,g ,  ,h1,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1"
  ],
  [
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1",
    "h1,p ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,h1,h1,h1,h1,  ,  ,h1,h1,h1,h1,  ,  ,  ,  ,h1",
    "h1,  ,h1,h1,  ,  ,  ,  ,  ,  ,  ,  ,h1,h1,  ,  ,  ,h1",
    "h1,  ,v1,  ,  ,h1,h1,h1,h1,h1,h1,  ,  ,h1,  ,  ,  ,h1",
    "h1,  ,h1,  ,h1,h1,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,  ,h1",
    "h1,  ,  ,  ,v1,  ,  ,g ,g ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,v1,  ,  ,  ,  ,g ,g ,  ,  ,  ,  ,v1,  ,  ,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,h1,  ,h1",
    "h1,  ,h1,h1,  ,  ,  ,  ,  ,  ,  ,  ,h1,h1,  ,h1,  ,h1",
    "h1,  ,  ,h1,h1,h1,h1,  ,  ,h1,h1,h1,h1,  ,  ,h1,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,h1,  ,h1",
    "h1,  ,  ,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,  ,  ,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1"
  ],
  [
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,h1,  ,  ,  ,h1,  ,  ,  ,  ,  ,  ,h1,  ,v1,v1,  ,h1,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,h1,  ,h1,  ,h1,  ,  ,  ,  ,v1,  ,h1,  ,v1,v1,  ,h1,  ,v1,  ,  ,  ,h1",
    "h1,  ,  ,h1,  ,h1,  ,h1,  ,  ,  ,v1,  ,  ,h1,  ,  ,  ,  ,h1,  ,  ,v1,  ,  ,h1",
    "h1,  ,  ,h1,h1,h1,h1,h1,  ,  ,  ,  ,  ,  ,h1,h1,v1,v1,h1,h1,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,  ,h1,  ,h1,  ,  ,  ,  ,  ,v1,  ,  ,h1,  ,  ,h1,  ,  ,v1,  ,  ,  ,h1",
    "h1,  ,  ,  ,h1,  ,h1,  ,  ,  ,  ,v1,  ,  ,  ,h1,  ,  ,h1,  ,  ,  ,v1,  ,  ,h1",
    "h1,  ,  ,  ,h1,  ,h1,  ,  ,  ,v1,  ,  ,  ,  ,h1,g ,  ,h1,  ,  ,  ,  ,v1,  ,h1",
    "h1,  ,  ,  ,h1,  ,h1,p ,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,  ,h1,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,  ,h1,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,h1,h1,  ,h1,h1,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,h1,h1,  ,  ,  ,h1,h1,  ,  ,  ,  ,  ,h1,h1,  ,  ,h1,h1,  ,  ,  ,  ,  ,h1",
    "h1,  ,h1,  ,  ,g ,  ,  ,h1,  ,  ,  ,  ,  ,h1,  ,  ,  ,  ,h1,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1"
  ],
  [
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,g ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,  ,h1,  ,h1,  ,  ,h1,  ,  ,h1,  ,h1,  ,  ,h1",
    "h1,  ,h1,  ,  ,  ,h1,  ,  ,  ,h1,  ,  ,  ,h1,  ,h1",
    "h1,  ,  ,  ,h1,  ,  ,h1,  ,h1,  ,  ,h1,  ,  ,  ,h1",
    "h1,  ,h1,  ,  ,h1,  ,  ,h1,  ,  ,h1,  ,  ,h1,  ,h1",
    "h1,  ,  ,h1,  ,  ,h1,  ,  ,  ,h1,  ,  ,h1,  ,  ,h1",
    "h1,  ,g ,  ,h1,  ,  ,  ,p ,  ,  ,  ,h1,  ,g ,  ,h1",
    "h1,  ,  ,h1,  ,  ,h1,  ,  ,  ,h1,  ,  ,h1,  ,  ,h1",
    "h1,  ,h1,  ,  ,h1,  ,  ,h1,  ,  ,h1,  ,  ,h1,  ,h1",
    "h1,  ,  ,  ,h1,  ,  ,h1,  ,h1,  ,  ,h1,  ,  ,  ,h1",
    "h1,  ,h1,  ,  ,  ,h1,  ,  ,  ,h1,  ,  ,  ,h1,  ,h1",
    "h1,  ,  ,h1,  ,h1,  ,  ,h1,  ,  ,h1,  ,h1,  ,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,g ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1"
  ],
  [
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,g ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,  ,h1,h1,h1,h1,h1,h1,  ,  ,  ,h1,h1,h1,h1,h1,h1,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,h1",
    "h1,  ,h1,  ,h1,h1,  ,  ,  ,  ,  ,  ,  ,h1,h1,  ,h1,  ,h1",
    "h1,  ,h1,  ,h1,  ,  ,  ,h1,  ,h1,  ,  ,  ,h1,  ,h1,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,h1,  ,  ,  ,h1,  ,  ,  ,  ,h1,  ,h1",
    "h1,  ,h1,  ,  ,  ,h1,  ,  ,  ,  ,  ,h1,  ,  ,  ,h1,  ,h1",
    "h1,  ,  ,  ,  ,h1,  ,  ,h1,  ,h1,  ,  ,h1,  ,  ,  ,  ,h1",
    "h1,g ,  ,  ,  ,  ,  ,  ,  ,p ,  ,  ,  ,  ,  ,  ,  ,g ,h1",
    "h1,  ,  ,  ,  ,h1,  ,  ,h1,  ,h1,  ,  ,h1,  ,  ,  ,  ,h1",
    "h1,  ,h1,  ,  ,  ,h1,  ,  ,  ,  ,  ,h1,  ,  ,  ,h1,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,h1,  ,  ,  ,h1,  ,  ,  ,  ,h1,  ,h1",
    "h1,  ,h1,  ,h1,  ,  ,  ,h1,  ,h1,  ,  ,  ,h1,  ,h1,  ,h1",
    "h1,  ,h1,  ,h1,h1,  ,  ,  ,  ,  ,  ,  ,h1,h1,  ,h1,  ,h1",
    "h1,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,h1",
    "h1,  ,h1,h1,h1,h1,h1,h1,  ,  ,  ,h1,h1,h1,h1,h1,h1,  ,h1",
    "h1,  ,  ,  ,  ,  ,  ,  ,  ,g ,  ,  ,  ,  ,  ,  ,  ,  ,h1",
    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1"
  ]
  // [
  //    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1",
  //    'h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1',
  //    'h1,  ,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1',
  //    'h1,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,h1',
  //    'h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1',
  //    'h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1',
  //    'h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1',
  //    'h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,g ,h1',
  //    'h1,  ,  ,  ,  ,  ,p ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1',
  //    'h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1',
  //    'h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1',
  //    'h1,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,h1',
  //    'h1,  ,  ,h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1,  ,  ,h1',
  //    'h1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,h1',
  //    "h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1,h1",
  // ],

  // [
  //    "h17,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,000",
  //    'v13,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,v13',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,g ,00000,00,0//    '000,  ,  ,  ,  ,  ,p ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    '000,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,000',
  //    "h17,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,000",
  // ],
];
var keys = [];
var player = [];
var ghosts = [];

var imagesLoaded = 0;

// chars.rock = loadImage('https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Frock2.svg?v=1634761814043')
// chars.rock = loadImage('https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Frock3.svg?v=1634762036767')
/** -- vars -- **/
var bSize = ~~(map(~~36.36363636363637, 0, 400, 0, width) * 1);
var character = "sam";
var lvl = gameBoard.length - 1;
// var lvl = 0;
var scene = "main";
var drawOnce = 0;
var letter = 0;
var currentCoins = 0;
var collectedCoins = Number(localStorage.getItem("coins")) || 0;
var gameBoardSplit = Array.from(Array(300), () => new Array(12));
var scroll_y = 0;
var purchasing = false;
var equipping = false;

var mobile = false;

// var inputBox = document.getElementById("input-container");
// var root = document.querySelector(":root");
/** -- FUNCTIONS -- **/
function collide(p, b) {
  return (
    p.x - b.x < b.w && b.x - p.x < p.w && p.y - b.y < b.h && b.y - p.y < p.h
  );
  // return a.x - b.x < b.w && b.x - a.x < a.w &&
  //   a.y - b.y < b.h && b.y - a.y < a.h;
}
var str = "main,1000,lvl";

function loadImages() {
  imagesLoaded += 1;
}
function displayStats(stat) {
  fill(255);
  stroke(0);
  textSize(map(25, 0, 474, 0, canvasSize));
  rect(
    map(73, 0, 474, 0, canvasSize),
    map(8, 0, 474, 0, canvasSize),
    textWidth(stat) + map(30.5, 0, 512, 0, canvasSize),
    map(30, 0, 474, 0, canvasSize)
  );

  image(
    chars.ring,
    map(87, 0, 532, 0, canvasSize),
    map(16, 0, 532, 0, canvasSize),
    map(20, 0, 532, 0, canvasSize),
    map(20, 0, 532, 0, canvasSize)
  );
  push();
  textAlign(LEFT, TOP);

  fill(0);
  text(stat, map(98, 0, 474, 0, canvasSize), map(13, 0, 474, 0, canvasSize));
  pop();
}

function Cos(deg) {
  return cos(deg / (180 / Math.PI));
}

function Sin(deg) {
  return sin(deg / (180 / Math.PI));
}

// -- CLASSES -- //
var Block = (function() {
  Block = function(self) {
    this.x = self.x;
    this.y = self.y;
    this.w = ~~self.w;
    this.h = ~~self.h;
    this.dir = self.dir;
    this.prevX = this.x;
    this.prevY = this.y;
  };
  Block.prototype.display = function() {
    this.prevX = this.x;
    this.prevY = this.y;
    // strokeWeight(1);
    // stroke(0);
    // fill(0, 200, 255);
    // rect(this.x, this.y, this.w, this.h);
    image(chars.rock, this.x, this.y, this.w, this.h);
    //         if (this.dir === "v") {
    //           for (var i = 0; i < this.h; i += bSize) {
    //             image(chars.rock, this.x, this.y + i, bSize, bSize);
    //           }
    //         }
    //         // image(this.img,this.x,this.y)

    //         if (this.dir === "h") {
    //           for (var i = 0; i < this.w; i += bSize) {
    //             image(chars.rock, this.x + i, this.y, bSize, bSize);
    //           }
    //         }
  };

  return Block;
})();

var Coin = (function() {
  Coin = function(self) {
    this.w = self.w / 2;
    this.h = self.h / 2;
    this.x = self.x + this.w / 2;
    this.y = self.y + this.h / 2;
  };
  Coin.prototype.display = function() {
    // fill(255, 255, 0);
    // rect(this.x, this.y, this.w, this.h);
    image(chars["ring"], this.x, this.y, this.w, this.h);
  };
  Coin.prototype.collect = function() {
    return collide(this, player[0]);
  };
  return Coin;
})();

var Player = (function() {
  Player = function(self) {
    this.x = self.x;
    this.y = self.y;
    this.w = ~~(self.w * 1);
    this.h = ~~(self.h * 1);
    this.acl = new PVector(0, 0);
    this.speed = map(5, 0, 512, 0, canvasSize);

    this.aclx = 0;
    this.acly = 0;
  };
  Player.prototype.display = function() {
    this.charW = map(this.w, 0, 400, 0, width);
    this.charH = map(this.h, 0, 400, 0, height);

    fill(255, 0);
    stroke(0);

    // rect(this.x, this.y, this.w, this.h);
    // tint(255,0,0)
    // if(loadedImages){}

    image(
      chars[character],
      this.x,
      this.y,
      map(chars[character].width, 0, chars[character].width, 0, this.w),
      map(chars[character].height, 0, chars[character].height, 0, this.h)
    );
  };
  Player.prototype.LRcollide = function() {
    for (var i = blocks.length - 1; i >= 0; i--) {
      if (collide(this, blocks[i])) {
        this.acl.x = 0;
        // this.x = this.x < blocks[i].x ? blocks[i].x - this.w : blocks[i].x + blocks[i].w;
        this.x =
          this.prevX < blocks[i].x
            ? blocks[i].x - this.w
            : blocks[i].x + blocks[i].w;
      }
    }
  };
  Player.prototype.UDcollide = function() {
    for (var i = blocks.length - 1; i >= 0; i--) {
      if (collide(this, blocks[i])) {
        this.acl.y = 0;
        // this.y = this.y < blocks[i].y ? blocks[i].y - this.h : blocks[i].y + blocks[i].h;
        this.y =
          this.prevY < blocks[i].y
            ? blocks[i].y - this.h
            : blocks[i].y + blocks[i].h;
      }
    }
  };
  Player.prototype.move = function() {
    this.prevX = this.x;
    this.prevY = this.y;
    if (keys[UP_ARROW]) {
      this.acl.x = 0;
      this.acl.y = -this.speed;
    }
    if (keys[DOWN_ARROW]) {
      this.acl.x = 0;
      this.acl.y = this.speed;
    }

    this.y += this.acl.y;
    this.UDcollide();

    if (keys[LEFT_ARROW]) {
      this.acl.x = -this.speed;
      this.acl.y = 0;
    }
    if (keys[RIGHT_ARROW]) {
      this.acl.x = this.speed;
      this.acl.y = 0;
    }
    this.x += this.acl.x;
    this.LRcollide();

    for (var i = ghosts.length - 1; i >= 0; i--) {
      if (collide(this, ghosts[i])) {
        scene = "lose";
      }
    }
  };

  return Player;
})();

var Ghost = (function() {
  function Ghost(self) {
    // println(canvasSize);
    this.keys = Object.keys(self);
    this.mappedSelf = {};
    for (var i = 0; i < this.keys.length; i++) {
      this.mappedSelf[this.keys[i]] = map(
        self[this.keys[i]],
        0,
        canvasSize,
        0,
        canvasSize
      );
    }
    for (var i = 0; i < this.keys.length; i++) {
      if (typeof self[this.keys[i]] === "number") {
        this[this.keys[i]] = this.mappedSelf[this.keys[i]];
      } else {
        this[this.keys[i]] = self[this.keys[i]];
      }
    }

    this.direction = "left";
    this.pos = new PVector(0, 0);
    this.changePos = new PVector(0, 0);
    this.id = gameBoardSplit[lvl];
    this.sides = [];
    this.newDirection = "left";
    this.collisions = 0;
    this.prevCollisions = this.collisions;
    this.prevX = this.x;
    this.prevY = this.y;
  }
  Ghost.prototype.LRcollide = function() {
    for (var i = blocks.length - 1; i >= 0; i--) {
      if (collide(this, blocks[i])) {
        var r = ~~random(this.sides.length);
        this.direction = this.sides[r];

        this.x =
          this.prevX < blocks[i].x
            ? blocks[i].x - this.w
            : blocks[i].x + blocks[i].w;
      }
    }
  };
  Ghost.prototype.UDcollide = function() {
    for (var i = blocks.length - 1; i >= 0; i--) {
      if (collide(this, blocks[i])) {
        var r = ~~random(this.sides.length);
        this.direction = this.sides[r];
        this.y =
          this.prevY < blocks[i].y
            ? blocks[i].y - this.h
            : blocks[i].y + blocks[i].h;
      }
    }
  };
  Ghost.prototype.checkSides = function() {
    this.sides.splice(0, this.sides.length);

    this.pos = new PVector(~~(this.y / bSize), ~~(this.x / bSize));

    if (this.pos.x - 1 > 0) {
      if (
        this.id[this.pos.x - 1][this.pos.y][0] === "h" ||
        this.id[this.pos.x - 1][this.pos.y][0] === "v" ||
        this.id[this.pos.x - 1][this.pos.y][0] === "0"
      ) {
      } else {
        this.sides.push("up");
      }
    }
    if (this.pos.x + 1 < this.id.length) {
      if (
        this.id[this.pos.x + 1][this.pos.y][0] === "h" ||
        this.id[this.pos.x + 1][this.pos.y][0] === "v" ||
        this.id[this.pos.x + 1][this.pos.y][0] === "0"
      ) {
      } else {
        this.sides.push("down");
      }
    }
    if (this.pos.y - 1 > 0) {
      if (
        this.id[this.pos.x][this.pos.y - 1][0] === "h" ||
        this.id[this.pos.x][this.pos.y - 1][0] === "v" ||
        this.id[this.pos.x][this.pos.y - 1][0] === "0"
      ) {
      } else {
        this.sides.push("left");
      }
    }
    if (this.pos.y + 1 < this.id[this.pos.x].length) {
      if (
        this.id[this.pos.x][this.pos.y + 1][0] === "h" ||
        this.id[this.pos.x][this.pos.y + 1][0] === "v" ||
        this.id[this.pos.x][this.pos.y + 1][0] === "0"
      ) {
      } else {
        this.sides.push("right");
      }
    }
    // for (var i = this.sides.length - 1; i >= 0; i--) {
    //   if (this.sides[i] === this.prevDir) {
    //     this.sides.splice(i, 1);
    //   }
    // }
  };
  Ghost.prototype.checkAround = function(a, b, w, h) {
    return a.X - b.x < b.w && b.x - a.X < w && a.Y - b.y < b.h && b.y - a.Y < h;
  };
  Ghost.prototype.selfCollide = function(that) {
    this.checkSides();
    that.checkSides();
    // this.direction = 'left'

    this.direction = this.sides[~~random(this.sides.length)];
    that.direction = that.sides[~~random(that.sides.length)];
  };
  Ghost.prototype.move = function() {
    this.prevY = this.y;
    this.prevX = this.x;
    this.prevDir = this.direction;
    this.prevCollisions = this.collisions || 0;
    this.collisions = 0;
    this.checkSides();
    for (var i = blocks.length - 1; i >= 0; i--) {
      this.W = bSize * 1.5;
      this.X = this.x - 12;
      this.H = bSize * 1.5;
      this.Y = this.y - 12;
      if (this.checkAround(this, blocks[i], this.W, this.H)) {
        this.collisions += 1;
      }
    }

    if (this.prevCollisions !== this.collisions) {
      var r = Math.random();
      if (r > 0.5) {
        this.checkSides();
        this.sides.push("down");
        this.sides.push("up");
        this.direction = this.sides[~~random(this.sides.length)];
      }
      // this.direction = 'down'
    }

    if (this.direction === "right") {
      this.x += 2;
    }
    if (this.direction === "left") {
      this.x -= 2;
    }

    for (var i = ghosts.length - 1; i >= 0; i--) {
      if (
        collide(this, ghosts[i]) &&
        dist(this.x, this.y, ghosts[i].x, ghosts[i].y)
      ) {
        var r = ~~random(this.sides.length);
        this.direction = this.sides[r];

        this.x =
          this.prevX < ghosts[i].x
            ? ghosts[i].x - this.w
            : ghosts[i].x + ghosts[i].w;
      }
    }

    this.LRcollide();

    if (this.direction === "down") {
      this.y += 2;
    }
    if (this.direction === "up") {
      this.y -= 2;
    }
    for (var i = ghosts.length - 1; i >= 0; i--) {
      if (
        collide(this, ghosts[i]) &&
        dist(this.x, this.y, ghosts[i].x, ghosts[i].y)
      ) {
        var r = ~~random(this.sides.length);
        this.direction = this.sides[r];

        this.y =
          this.prevY < ghosts[i].y
            ? ghosts[i].y - this.h
            : ghosts[i].y + ghosts[i].h;
      }
    }

    this.UDcollide();
  };
  Ghost.prototype.display = function() {
    // fill(255, 0, 0);
    // rect(this.X, this.Y, this.W, this.H);
    // fill(0, 255, 0);
    // rect(this.x, this.y, this.w, this.h);
    image(chars["orc"], this.x, this.y, this.w, this.h);
  };
  return Ghost;
})();

var moveLetter = (function() {
  moveLetter = function(self) {
    this.isdone = false;
    this.keys = Object.keys(self);
    this.mappedSelf = {};
    for (var i = 0; i < this.keys.length; i++) {
      this.mappedSelf[this.keys[i]] = map(
        self[this.keys[i]],
        0,
        self.mapSize,
        0,
        canvasSize
      );
    }
    for (var i = 0; i < this.keys.length; i++) {
      if (typeof self[this.keys[i]] === "number") {
        this[this.keys[i]] = this.mappedSelf[this.keys[i]];
      } else {
        this[this.keys[i]] = self[this.keys[i]];
      }
    }
    this.prevX = this.x;
    this.prevY = this.y;
    this.rx = ~~(Math.random() * 5) + 3;
    this.ry = ~~(Math.random() * 5) + 3;
    this.maxDist = dist(this.x, this.y, this.endX, this.endY);
  };

  moveLetter.prototype.display = function() {
    textAlign(CENTER, CENTER);
    textSize(this.txtSize);
    fill(this.txtColor.r, this.txtColor.g, this.txtColor.b);

    push();
    translate(this.x, this.y);
    rotate(
      map(dist(this.x, this.y, this.endX, this.endY), 0, this.maxDist, 0, 3.14)
    );
    text(this.text, 0, 0);
    pop();
  };
  moveLetter.prototype.toPosition = function() {
    // println(this.endX);
    this.x -= (this.x - this.endX) / this.rx;
    this.y -= (this.y - this.endY) / this.ry;
    if (Math.abs(this.x - this.endX) < 1 && Math.abs(this.y - this.endY) < 1) {
      this.isdone = true;
      letter += 1;
    }
  };
  return moveLetter;
})();
var titleLetters = [
  new moveLetter({
    x: random(-100, width + 100),
    y: -Math.random() * 100 - 100,
    endX: 171,
    endY: 220,
    w: 100,
    h: 100,
    txtSize: 80,
    text: "P",
    txtColor: { r: 255, g: 0, b: 0 },
    mapSize: "653"
  }),
  new moveLetter({
    x: random(-100, width + 100),
    y: -Math.random() * 100 - 100,
    endX: 220,
    endY: 220,
    w: 100,
    h: 100,
    txtSize: 80,
    text: "A",
    txtColor: { r: 255, g: 0, b: 0 },
    mapSize: "653"
  }),
  new moveLetter({
    x: random(-100, width + 100),
    y: -Math.random() * 100 - 100,
    endX: 276,
    endY: 220,
    w: 100,
    h: 100,
    txtSize: 80,
    text: "C",
    txtColor: { r: 255, g: 0, b: 0 },
    mapSize: "653"
  }),
  new moveLetter({
    x: random(-100, width + 100),
    y: -Math.random() * 100 - 100,
    endX: 317,
    endY: 220,
    w: 100,
    h: 100,
    txtSize: 80,
    text: "-",
    txtColor: { r: 255, g: 0, b: 0 },
    mapSize: "653"
  }),
  new moveLetter({
    x: random(-100, width + 100),
    y: -Math.random() * 100 - 100,
    endX: 363,
    endY: 220,
    w: 100,
    h: 100,
    txtSize: 80,
    text: "M",
    txtColor: { r: 255, g: 0, b: 0 },
    mapSize: "653"
  }),
  new moveLetter({
    x: random(-100, width + 100),
    y: -Math.random() * 100 - 100,
    endX: 423,
    endY: 220,
    w: 100,
    h: 100,
    txtSize: 80,
    text: "A",
    txtColor: { r: 255, g: 0, b: 0 },
    mapSize: "653"
  }),
  new moveLetter({
    x: random(-100, width + 100),
    y: -Math.random() * 100 - 100,
    endX: 480,
    endY: 220,
    w: 100,
    h: 100,
    txtSize: 80,
    text: "N",
    txtColor: { r: 255, g: 0, b: 0 },
    mapSize: "653"
  })
];

class Button {
  constructor(self) {
    //583,660

    this.keys = Object.keys(self);
    this.mappedSelf = {};
    for (var i = 0; i < this.keys.length; i++) {
      this.mappedSelf[this.keys[i]] = map(
        self[this.keys[i]],
        0,
        self.map ? self.map : 583,
        0,
        canvasSize
      );
    }
    for (var i = 0; i < this.keys.length; i++) {
      if (typeof self[this.keys[i]] === "number") {
        this[this.keys[i]] = this.mappedSelf[this.keys[i]];
      } else {
        this[this.keys[i]] = self[this.keys[i]];
      }
    }
    this.cost = Number(this.cost);
  }
  display() {
    textAlign(CENTER, CENTER);
    fill(this.color.r, this.color.g, this.color.b);
    rect(this.x, this.y, this.w, this.h, this.r);

    if (!this.char) {
      fill(this.textColor.r, this.textColor.g, this.textColor.b);
      textSize(this.textS);
      var tWidth = textWidth(this.text);
      var tHeight = textDescent(this.text) + textAscent(this.text);
      text(this.text, this.x + this.w / 2, this.y + this.h / 2);
    } else {
      if (scene === "store") {
        image(chars["barrel"], this.x, this.y, this.w, this.h);
        image(
          chars[this.char],
          this.x + this.w / 3,
          this.y + this.h / 2.5,
          this.w / 3,
          this.h / 3
        );
        push();
        translate(this.x - this.w / 1.65, this.y + this.h / 1.5);
        displayStats(this.cost);
        pop();
      } else {
        if (imgs[this.char]) {
          image(chars[this.char], this.x, this.y, this.w, this.h);
        } else {
          image(grayscale[this.char], this.x, this.y, this.w, this.h);
        }
      }
    }
  }
  mouseenter() {}
  isin() {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    );
  }
  click() {
    if(this.isin()){
      this.cmd();
      clicked = 5;
    }
  }
}
var BACK = new Button({
    x: 10,
    y: 10,
    w: 70,
    h: 35,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "BACK",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "*",
    cmd: function() {
      scene = "main";
      letter = 0;
      for (var i = titleLetters.length - 1; i >= 0; i--) {
        titleLetters[i].x = titleLetters[i].prevX;
        titleLetters[i].y = titleLetters[i].prevY;
      }
      changeScene = 0;
    }
  }); //BACK
var mainBtns = [
  //-- MAIN SCREEN --//
  new Button({
    x: 583 / 2 - 60,
    y: 320,
    w: 120,
    h: 100,
    r: 10,
    scaleTo: 10,
    color: { r: 34, g: 139, b: 34 },
    text: "PLAY",
    textS: 35,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "main",
    cmd: function() {
      console.log('hi')
      scene = "play";
      drawOnce = 0;
      createScene = 0;
    }
  }), //PLAY

  new Button({
    x: 30,
    y: 50,
    w: 100,
    h: 60,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "EQUIP",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "main",
    cmd: function() {
      scene = "equip";
      createScene = 0;
    }
  }), //EQUIP
  new Button({
    x: 583 - 30 - 100,
    y: 50,
    w: 100,
    h: 60,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "STORE",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "main",
    cmd: function() {
      scene = "store";
      createScene = 0;
    }
  }), //STORE
  new Button({
    x: 80,
    y: 400,
    w: 90,
    h: 60,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "SAVE",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "main",
    cmd: function() {
      localStorage.setItem("coins", collectedCoins);
      // println(`Your save code: ${CryptoJS.AES.encrypt(str, "1234")}`);
    }
  }), //SAVE
  new Button({
    x: 583 - 80 - 90,
    y: 400,
    w: 90,
    h: 60,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "LOAD",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "main",
    cmd: function() {
      ///////////
      // println('hi')
      // loading = true;
      // root.style.setProperty(
      //   "--fontSize",
      //   `${map(15, 0, 512, 0, canvasSize)}px`
      // );
      // root.style.setProperty(
      //   '--inputDisp',
      //   'block'
      // );
      // inputBox.style.display = 'grid';
      // inputBox.style.height = `${map(25, 0, 512, 0, canvasSize)}px`;
      // inputBox.style.width = `${map(200, 0, 512, 0, canvasSize)}px`;
      // inputBox.style.marginLeft = `${map(150, 0, 512, 0, canvasSize)}px`;
      // inputBox.style.marginTop = `${map(240, 0, 512, 0, canvasSize)}px`;
      /////////
    }
  }), //LOAD
  new Button({
    x: 583 / 2 - 100 / 2,
    y: 500,
    w: 100,
    h: 40,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "SETTINGS",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "main",
    cmd: function() {
      scene = "settings";
    }
  }), //SETTINGS
]
var storeBtns = [
  //-- CHARACTERS -- //

  new Button({
    x: 100,
    y: 50,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "store",
    char: "legolas",
    cost: "1000",
    scrollable: "true",
    cmd: function() {
      if (collectedCoins >= this.cost && !imgs[this.char]) {
        purchasing = this.char;
      }
    }
  }), //TAURIEL BARREL
  new Button({
    x: 250,
    y: 50,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "store",
    char: "tauriel",
    cost: "200",
    scrollable: "true",
    cmd: function() {
      if (collectedCoins >= this.cost && !imgs[this.char]) {
        purchasing = this.char;
      }
    }
  }), //TAURIEL BARREL
  new Button({
    x: 400,
    y: 50,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "store",
    char: "gandalf",
    cost: "500",
    scrollable: "true",
    cmd: function() {
      if (collectedCoins >= this.cost && !imgs[this.char]) {
        purchasing = this.char;
      }
    }
  }), //GANDALF BARREL
  new Button({
    x: 100,
    y: 220,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "store",
    char: "sam",
    cost: "500",
    scrollable: "true",
    cmd: function() {
      if (collectedCoins >= this.cost && !imgs[this.char]) {
        purchasing = this.char;
      }
    }
  }), //GANDALF BARREL
  new Button({
    x: 250,
    y: 220,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "store",
    char: "elrond",
    cost: "2000",
    scrollable: "true",

    cmd: function() {
      if (collectedCoins >= this.cost && !imgs[this.char]) {
        purchasing = this.char;
      }
    }
  }), // ELROND BARREL
  new Button({
    x: 400,
    y: 220,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "store",
    char: "bard",
    cost: "1200",
    scrollable: "true",

    cmd: function() {
      if (collectedCoins >= this.cost && !imgs[this.char]) {
        purchasing = this.char;
      }
    }
  }), //BARD BARREL
  new Button({
    x: 100,
    y: 390,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "store",
    char: "bofur",
    cost: "800",
    scrollable: "true",

    cmd: function() {
      if (collectedCoins >= this.cost && !imgs[this.char]) {
        purchasing = this.char;
      }
    }
  }),
]
var yes_noBtns = [
  // -- YES _ NO -- //
  new Button({
    x: 682 / 2 + 40,
    y: 420,
    w: 120,
    h: 60,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "NO",
    textS: 30,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "store",
    char: "",
    cost: "1200",
    scrollable: "true",
    purchase: true,
    map: 682,
    cmd: function() {
      purchasing = false;
      equipping = false;
    }
  }), //NO BARREL
  new Button({
    x: 682 / 2 - 120 - 40,
    y: 420,
    w: 120,
    h: 60,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "YES",
    textS: 30,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "store",
    char: "",
    cost: "800",
    scrollable: "true",
    purchase: true,
    map: 682,
    cmd: function() {
      if(scene === 'store'){
        for(var i = 0; i < storeBtns.length; i ++){
          if(storeBtns[i].char === purchasing){
            collectedCoins -= storeBtns[i].cost;
          }
        }
        imgs[purchasing] = true;
        purchasing = false;
      }
      if(scene === 'equip'){
        character = equipping;
        equipping = false;
      }
    }
  }), //YES BUTTON

  // -- GRAYSCALE -- //
];
var equipBtns = [
  new Button({
    x: 100,
    y: 50,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "equip",
    char: "legolas",
    cost: "1000",
    scrollable: "true",
    cmd: function() {
      if (imgs[this.char] && !equipping) {
        equipping = this.char;
      }
    }
  }), //LEGOLAS BARREL
  new Button({
    x: 250,
    y: 50,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "equip",
    char: "tauriel",
    cost: "200",
    scrollable: "true",
    cmd: function() {
      if (imgs[this.char] && !equipping) {
        equipping = this.char;
      }
    }
  }), //TAURIEL BARREL
  new Button({
    x: 400,
    y: 50,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "equip",
    char: "gandalf",
    cost: "500",
    scrollable: "true",
    cmd: function() {
      if (imgs[this.char] && !equipping) {
        equipping = this.char;
      }
    }
  }), //GANDALF BARREL
  new Button({
    x: 100,
    y: 220,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "equip",
    char: "sam",
    cost: "500",
    scrollable: "true",
    cmd: function() {
      if (imgs[this.char] && !equipping) {
        equipping = this.char;
      }
    }
  }), //SAM BARREL
  new Button({
    x: 250,
    y: 220,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "equip",
    char: "elrond",
    cost: "2000",
    scrollable: "true",

    cmd: function() {
      if (imgs[this.char] && !equipping) {
        equipping = this.char;
      }
    }
  }), // ELROND BARREL
  new Button({
    x: 400,
    y: 220,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "equip",
    char: "bard",
    cost: "1200",
    scrollable: "true",

    cmd: function() {
      if (imgs[this.char] && !equipping) {
        equipping = this.char;
      }
    }
  }), //BARD BARREL
  new Button({
    x: 100,
    y: 390,
    w: 120,
    h: 140,
    r: 5,
    color: { r: 34, g: 139, b: 34 },
    text: "",
    textS: 16,
    textColor: { r: 255, g: 255, b: 0 },
    scene: "equip",
    char: "bofur",
    cost: "800",
    scrollable: "true",

    cmd: function() {
      if (imgs[this.char] && !equipping) {
        equipping = this.char;
      }
    }
  }) //BOFUR
];
// -- Controls -- //
var Controls = (function() {
  Controls = function(self) {
    this.keys = Object.keys(self);
    this.mappedSelf = {};
    for (var i = 0; i < this.keys.length; i++) {
      this.mappedSelf[this.keys[i]] = map(
        self[this.keys[i]],
        0,
        self.map ? self.map : 512,
        0,
        width
      );
    }
    for (var i = 0; i < this.keys.length; i++) {
      if (typeof self[this.keys[i]] === "number") {
        this[this.keys[i]] = this.mappedSelf[this.keys[i]];
      } else {
        this[this.keys[i]] = self[this.keys[i]];
      }
    }

    this.minX = ((this.r - this.r2) / 2) * Cos(180) + this.x; //180Left//0Right
    this.maxX = ((this.r - this.r2) / 2) * Cos(0) + this.x; //180Left//0Right

    this.minY = ((this.r - this.r2) / 2) * Sin(-90) + this.y; //-90Top//90Bottom
    this.maxY = ((this.r - this.r2) / 2) * Sin(90) + this.y; //-90Top//90Bottom
  };
  Controls.prototype.display = function() {
    ellipse(this.x, this.y, this.r, this.r);
    ellipse(this.moveX, this.moveY, this.r2, this.r2);
  };
  Controls.prototype.isin = function() {
    return dist(this.x, this.y, mouseX, mouseY) < this.r;
  };
  Controls.prototype.move = function() {
    if (this.isClicked) {
      this.moveX = mouseX;
      this.moveY = mouseY;
    } else {
      this.moveX = this.x;
      this.moveY = this.y;
    }
    this.circleConstrain();
  };
  Controls.prototype.circleConstrain = function() {
    var dst = dist(this.x, this.y, this.moveX, this.moveY);
    var angle = atan2(this.moveY - this.y, this.moveX - this.x);
    // _clearLogs();

    if (dst > (this.r - this.r2) / 2) {
      this.moveX = ((this.r - this.r2) / 2) * cos(angle) + this.x; //180Left//0Right
      this.moveY = ((this.r - this.r2) / 2) * sin(angle) + this.y; //-90Top//90Bottom
    }

    // println(this.moveX);
    // println(this.moveY);
    // println(map(this.moveX,this.minX,this.maxX,-5,5));
    // println(map(this.moveY,this.minY,this.maxY,-5,5));

    player[0].acl.x = map(
      this.moveX,
      this.minX,
      this.maxX,
      -player[0].speed,
      player[0].speed
    );
    player[0].acl.y = map(
      this.moveY,
      this.minY,
      this.maxY,
      -player[0].speed,
      player[0].speed
    );
  };
  return Controls;
})();
var controls = new Controls({
  x: 100,
  y: 512 - 100,
  r: 100,

  moveX: 200,
  moveY: 400,
  r2: 50,
  map: 512,
  isClicked: false
});

////////////////////
// lvl = gameBoard.length-1;
scene = "equip";
purchasing = "";
equipping = "";
var loading = false;
// lvl = 1;
// -- GAME -- //
var Game = (function() {
  Game = function(self) {
    this.board = Array.from(Array(100), () => new Array(100));
    this.eye = 0;
    this.drawn1 = 0;
    this.img = ~~random(Object.keys(bgImages).length);
    this.coins = 0;
  };
  Game.prototype.create = function() {
    player.splice(0, player.length);
    blocks.splice(0, blocks.length);
    coins.splice(0, coins.length);
    ghosts.splice(0, ghosts.length);
    currentCoins = 0;
    for (var i = gameBoard[lvl].length - 1; i >= 0; i--) {
      // gameBoardSplit[lvl].push([])
      gameBoardSplit[lvl][i] = gameBoard[lvl][i].split(",");
    }

    for (var i = gameBoardSplit[lvl].length - 1; i >= 0; i--) {
      for (var j = gameBoardSplit[lvl][i].length - 1; j >= 0; j--) {
        var id = gameBoardSplit[lvl][i][j];

        switch (id[0]) {
          case "h":
            var w = "" + id[1];
            if (id.length > 2) {
              w += id[2];
            }

            blocks.push(
              new Block({
                x: j * bSize,
                y: i * bSize,
                w: bSize * w,
                h: bSize,
                dir: "h"
              })
            );
            break;
          case "v":
            var h = "" + id[1];
            if (id.length > 2) {
              h += id[2];
            }

            blocks.push(
              new Block({
                x: j * bSize,
                y: i * bSize,
                w: bSize,
                h: bSize * h,
                dir: "v"
              })
            );
            break;
          case "p":
            player.push(
              new Player({
                x: j * bSize,
                y: i * bSize,
                w: bSize / 1.1,
                h: bSize / 1.1
              })
            );
            break;
          // case "c":
          //   coins.push(
          //     new Coin({ x: j * bSize, y: i * bSize, w: bSize, h: bSize })
          //   );
          //   break;
          case "g":
            ghosts.push(
              new Ghost({
                x: j * bSize,
                y: i * bSize,
                w: bSize,
                h: bSize
              })
            );
            break;
          default:
            if ((id[0] === " ") | (id[0] === "c")) {
              coins.push(
                new Coin({ x: j * bSize, y: i * bSize, w: bSize, h: bSize })
              );
            }
            break;
        }
      }
    }
    this.coins = coins.length;
  };
  Game.prototype.display = function() {
    for (var i = blocks.length - 1; i >= 0; i--) {
      blocks[i].display();
    }
    for (var i = coins.length - 1; i >= 0; i--) {
      coins[i].display();
      if (coins[i].collect()) {
        coins.splice(i, 1);
        currentCoins += 1;
        collectedCoins += 1;
      }
    }
    for (var i = ghosts.length - 1; i >= 0; i--) {
      ghosts[i].move();
      ghosts[i].display();
    }
    for (var i = player.length - 1; i >= 0; i--) {
      player[i].move();
      player[i].display();
    }
    if (currentCoins >= this.coins) {
      drawOnce = 0;
      currentCoins = 0;
      lvl += 1;
    }
  };
  Game.prototype.trans = function() {
    if (player[0]) {
      // println(player[i].x);
      var x = width / 2 - player[0].x - player[0].w / 2;
      var y = height / 2 - player[0].y - player[0].h / 2;
      translate(x, y);
    }
  };
  Game.prototype.mainScreen = function() {
    textAlign(CENTER, CENTER);
    background(255, 0, 0);
    image(bgImages.lonelyMountain, 0, 0, width * 1.5, height);
    // textSize(map(80, 0, 653, 0, canvasSize));
    // fill(0);
    // text(
    //   "PAC-MAN",
    //   map(653 / 2, 0, 653, 0, canvasSize),
    //   map(220, 0, 653, 0, canvasSize)
    // );

    textSize(map(20, 0, 512, 0, canvasSize));
    fill(0, 100, 255, map(letter, 0, titleLetters.length - 1, 0, 255));
    text(
      "Lord of the Rings Edition",
      map(512 / 2, 0, 512, 0, canvasSize),
      map(220, 0, 512, 0, canvasSize)
    );
    if (letter < titleLetters.length) {
      titleLetters[letter].toPosition();
    }
    for (var i = titleLetters.length - 1; i >= 0; i--) {
      // titleLetters[i].toPosition();
      titleLetters[i].display();
    }
    
    for(var i = 0; i < mainBtns.length; i ++){
      mainBtns[i].display();
    }
  };
  Game.prototype.store = function() {
    background(0);
    image(bgImages.gondor, 0, 0, canvasSize, canvasSize);
    for(var i = 0; i < storeBtns.length; i ++){
      storeBtns[i].display();
    }

    return Game.prototype;
  };
  Game.prototype.equip = function() {
    image(bgImages.shireBg, 0, 0, canvasSize, canvasSize);
    for(var i = 0; i < equipBtns.length; i ++){
      equipBtns[i].display();
    }
  };
  Game.prototype.save = function() {
    background(34, 193, 34);
    println(`Your save code: ${CryptoJS.AES.encrypt(str, "1234")}`);
  };
  Game.prototype.settings = function() {
    image(bgImages.isengardBg, 0, 0, canvasSize, canvasSize);
  };
  Game.prototype.lose = function() {
    background(0);
    if (this.eye < 10) {
      image(theEye, 0, 0, canvasSize, canvasSize);
      this.eye += 0.5;
    } else {
      image(sauron, 0, 0, canvasSize, canvasSize);
    }
    textSize(80);
    fill(255);

    textAlign(CENTER, CENTER);
    text("YOU LOSE", width / 2, map(450, 0, 569, 0, canvasSize));
  };
  Game.prototype.purchasing = function() {
    textAlign(CENTER, CENTER);
    fill(244, 244, 255, 150);
    rect(0, 0, width, height);
    
    image(
      chars[purchasing],
      width / 2 - map(200, 0, 640, 0, canvasSize) / 2,
      map(70, 0, 640, 0, canvasSize),
      map(200, 0, 640, 0, canvasSize),
      map(200, 0, 640, 0, canvasSize)
    );

    push();
    textSize(map(60, 0, 512, 0, canvasSize));
    fill(0, 66, 66);

    text(
      `Purchase ${purchasing.split("")[0].toUpperCase()}${purchasing
        .split("")
        .splice(1, purchasing.split("").length)
        .join("")}`,
      map(829 / 2, 0, 829, 0, canvasSize),
      map(250, 0, 512, 0, canvasSize)
    );
    pop();
    
    for(var i = 0; i < yes_noBtns.length; i ++){
      yes_noBtns[i].display();
    }
  };
  Game.prototype.equipping = function() {
    fill(244, 244, 255, 150);
    rect(0, 0, width, height);


    image(
      chars[equipping],
      width / 2 - map(200, 0, 640, 0, canvasSize) / 2,
      map(60, 0, 512, 0, canvasSize),
      map(200, 0, 640, 0, canvasSize),
      map(200, 0, 640, 0, canvasSize)
    );

    push();
    textSize(map(60, 0, 512, 0, canvasSize));
    fill(0, 66, 66);

    text(
      `Equip ${equipping.split("")[0].toUpperCase()}${equipping
        .split("")
        .splice(1, equipping.split("").length)
        .join("")}`,
      map(829 / 2, 0, 829, 0, canvasSize),
      map(250, 0, 512, 0, canvasSize)
    );

    pop();
    for(var i = 0; i < yes_noBtns.length; i ++){
      yes_noBtns[i].display();
    }
  };
  Game.prototype.load = function() {
    fill(244, 244, 255, 150);
    rect(0, 0, width, height);
  };
  return Game;
})();

var g = new Game();
function createGame() {
  if (!drawOnce) {
    lvl = ~~random(gameBoard.length);
    g.eye = 0;
    g.img = ~~random(Object.keys(bgImages).length);
    g.create();
  }
  drawOnce = 1;
  switch (scene) {
    case "play":
      if (mobile) {
        controls.move();
      }

      image(
        bgImages[Object.keys(bgImages)[g.img]],
        0,
        0,
        canvasSize,
        canvasSize
      );
      push();
      g.trans();
      g.display();
      pop();
      displayStats(currentCoins);
      if (mobile) {
        controls.display();
      }
      break;
    case "main":
      g.mainScreen();
      break;
    case "save":
      g.save();
      break;
    case "settings":
      background(255);
      g.settings();

      break;
    case "store":
      g.store();
      break;
    case "lose":
      g.lose();
      break;
    case "equip":
      g.equip();
      break;
  }

  if (scene === "store") {
    // image(fadeBgTop);
    // image(fadeBgBtm);
    displayStats(collectedCoins);
  }

  if(scene !== 'main'){BACK.display();}
  if(purchasing || equipping){
    g[purchasing ? 'purchasing' : 'equipping']();
  }
  
  
}
var clicked = 10;
var createScene = 0;
draw = function() {

  clicked -= 1;

  background(0, 0);
  push();
  createGame();
  pop();
  
  if(!createScene){sounds.hobbits.play();createScene = 1;}
};

keyPressed = function() {
  keys[keyCode] = true;
};
keyReleased = function() {
  keys[keyCode] = false;
};

// -- MOUSE EVENTS -- //
function mousePressed() {
  if (controls.isin()) {
    controls.isClicked = true;
  }
}
function mouseReleased() {
  controls.isClicked = false;
}
function mouseClicked() {
  if(scene !== 'main' && !purchasing && !equipping){BACK.click();}
  if(scene === 'main'){
    for(var i = 0; i < mainBtns.length; i ++){
      mainBtns[i].click();
    }
  }
  else if(scene === 'store'){
    if(!purchasing){
      for(var i = 0; i < storeBtns.length; i ++){
        storeBtns[i].click();

      }
    }
    else{
      for(var i = 0; i < yes_noBtns.length; i ++){
        yes_noBtns[i].click();
      }
    }
  }
  else if(scene === 'equip'){
    if(!equipping){
      for(var i = 0; i < equipBtns.length; i ++){
        equipBtns[i].click();
      }
    }
    else{
      for(var i = 0; i < yes_noBtns.length; i ++){
        yes_noBtns[i].click();
      }
    }
  }
  else{}

}
function mouseWheel(event) {

}

// -- TOUCH EVENTS -- //
var start = 0;
function touchStarted(e) {

  mobile = true;
  start = mouseY;
  if(!clicked){
    if(scene !== 'main' && !purchasing && !equipping){BACK.click();}
    if(scene === 'main'){
      for(var i = 0; i < mainBtns.length; i ++){
        mainBtns[i].click();
      }
    }
    else if(scene === 'store'){
      if(!purchasing){
        for(var i = 0; i < storeBtns.length; i ++){
          storeBtns[i].click();

        }
      }
      else{
        for(var i = 0; i < yes_noBtns.length; i ++){
          yes_noBtns[i].click();
        }
      }
    }
    else if(scene === 'equip'){
      if(!equipping){
        for(var i = 0; i < equipBtns.length; i ++){
          equipBtns[i].click();
        }
      }
      else{
        for(var i = 0; i < yes_noBtns.length; i ++){
          yes_noBtns[i].click();
        }
      }
    }
    else{}
  }
  if (controls.isin()) {
    controls.isClicked = true;
  } 
}
function touchMoved(e) {

}
function touchEnd(e) {

  controls.isClicked = false;
}

document.addEventListener("touchmove", touchMoved, false);
document.addEventListener("touchstart", touchStarted, false);
document.addEventListener("touchend", touchEnd, false);
///////////////////////
