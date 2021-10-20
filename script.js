var canvas = document.getElementById("canvas");
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var code = function(js) {
  with (js) {
    const canvasSize = WIDTH < HEIGHT ? WIDTH : HEIGHT;
    size(canvasSize, canvasSize);
    // size(583,583);
    ///////////////////////
    // angleMode='radians';
    function toRad(deg) {
      return deg / (180 / Math.PI);
    }
    function Arc(x, y, w, h, start, stop) {
      arc(x, y, w, h, toRad(start), toRad(stop));
    }
    function Rotate(deg) {
      rotate(toRad(deg));
    }
    frameRate(60);
    /** -- Backgrounds --**/
    var lonelyMountain = loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FThe%20Lonely%20Mountain.png?v=1634332568303"
    );
    // var shireBg = loadImage('https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FThe%20Shire.svg?v=1634510454512')
    var shireBg = loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FThe%20Shire.svg?v=1634511101070"
    );
    var isengardBg = loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FIsengard.svg?v=1634511371940"
    );
    var theEye = loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fthe%20great%20eye.svg?v=1634678464712"
    );
    var sauron = loadImage(
      "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FSauron.svg?v=1634678278976"
    );
    
    /** -- Custom Backgrounds -- **/
    background(0, 0);
    var thickness = width / 2;
    var startC = color(0);
    var endC = color(34, 200, 34);

    for (var i = 0; i < thickness; i++) {
      strokeWeight(thickness * 2 - i * 2);
      noFill();
      var c = lerpColor(startC, endC, i / thickness);
      stroke(c);
      rect(60, 60, width / 1.2, height / 1.2, 36);
    }
    var settingBg = get();
    
    background(0,0)
    for(var i = 0; i < height/3.5; i ++){
    stroke(0,255-map(i,0,height/3.5,0,255));
    strokeWeight(2);
    line(0,i,width,i);
}
var fadeBg = get();
    //}

    background(0, 0);
    textAlign(CENTER, CENTER);
    /** -- Lists -- **/
    var blocks = [];
    var coins = [];
    var gameBoard = [
      [
        "h13,",
        "b1 ,c ,c ,c ,c ,c ,c ,c ,c ,c ,c ,c ,b1",
        "b1 ,c ,b1,b1,b1,c ,c ,c ,b1,b1,b1,c ,b1",
        "b1 ,c ,b1,c ,c ,c ,c ,c ,c ,c ,b1,c ,b1",
        "b1 ,c ,b1,c ,c ,c ,c ,c ,c ,c ,b1,c ,b1",
        "b1 ,c ,c ,c ,c ,c ,c ,c ,c ,c ,c ,c ,b1",
        "b1 ,c ,c ,c ,c ,c ,p ,c ,c ,c ,c ,c ,b1",
        "b1 ,c ,c ,c ,c ,c ,c ,c ,c ,c ,c ,c ,b1",
        "b1 ,c ,b1,c ,c ,c ,c ,c ,c ,c ,b1,c ,b1",
        "b1 ,c ,b1,c ,c ,c ,c ,c ,c ,c ,b1,c ,b1",
        "b1 ,c ,b1,b1,b1,c ,c ,c ,b1,b1,b1,c ,b1",
        "b1 ,c ,c ,c ,c ,c ,c ,c ,c ,c ,c ,c ,b1",
        "h13"
      ],
      [
        "h15,   ,  ,   ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,   ",
        "v13,c  ,c ,c  ,c ,c ,c ,g ,c ,c ,c ,c ,c ,c ,v13",
        "000,c ,v11,c ,c  ,  ,h3,00,00,  ,c ,c ,v11,c ,000",
        "000,c ,000,h1,c ,c ,c ,h1,c ,c ,c ,h1,000,c ,000",
        "000,c ,000,c ,c ,v3,c ,  ,c ,v3,c ,c ,000,c ,000",
        "000,c ,000,c ,h1,00,c ,h1,c ,00,h1,c ,000,c ,000",
        "000,c ,000,c ,c ,00,c ,c ,c ,00,c ,c ,000,c ,000",
        "000,g ,000,h1,c ,c ,c ,p ,c ,c ,c ,h1,000,g ,000",
        "000,c ,000,c ,c ,v3,c ,c ,c ,v3,c ,c ,000,c ,000",
        "000,c ,000,c ,h1,00,c ,h1,c ,00,h1,c ,000,c ,000",
        "000,c ,000,c ,c ,00,c ,  ,c ,00,c ,c ,000,c ,000",
        "000,c ,000,h1,c ,c ,c ,h1,c ,c ,c ,h1,000,c ,000",
        "000,c ,000,c ,c ,  ,h3,00,00,  ,c ,c ,000,c ,000",
        "000,c ,c  ,c ,c ,c ,c ,g ,c ,c ,c ,c ,c  ,c ,000",
        "h15,  ,   ,  ,  ,  ,  ,  ,  ,  ,  ,  ,   ,  ,   "
      ]
    ];
    var keys = [];
    var player = [];
    var ghosts = [];
    var chars = {
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
        "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FOne%20Ring.png?v=1634489402613"
      ),
      barrel: loadImage(
        "https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FBarrel.png?v=1634359742592"
      ),
      sam: loadImage(
        'https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2FSam.svg?v=1634691131978'
      ),
      elrond:loadImage(
        'https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Felrond.svg?v=1634691346343'
      ),
      bard:loadImage(
        'https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fbard.svg?v=1634691631491'
      ),
      bofur:loadImage(
        'https://cdn.glitch.me/b66bf39b-233c-468a-8a28-13aa4bee15a2%2Fbofur.svg?v=1634691962334'
      ),
    };

    /** -- vars -- **/
    var bSize = ~~(map(~~36.36363636363637, 0, 400, 0, width) * 1);
    var character = "gandalf";
    var lvl = 1;
    var scene = "main";
    var drawOnce = 0;
    var letter = 0;
    var currentCoins = 0;
    var collectedCoins = 0;
    var gameBoardSplit = Array.from(Array(2), () => new Array(4));
    var scroll_y = 0;
    /** -- Classes -- **/
    function collide(p, b) {
      return (
        p.x - b.x < b.w && b.x - p.x < p.w && p.y - b.y < b.h && b.y - p.y < p.h
      );
      // return a.x - b.x < b.w && b.x - a.x < a.w &&
      //   a.y - b.y < b.h && b.y - a.y < a.h;
    }

    function displayStats(stat) {
      fill(255);
      stroke(0)
      textSize(map(20, 0, 474, 0, canvasSize));
      rect(
        map(68, 0, 474, 0, canvasSize),
        map(8, 0, 474, 0, canvasSize),
        textWidth(stat) + map(30.5, 0, 512, 0, canvasSize),
        map(21, 0, 474, 0, canvasSize)
      );

      image(
        chars.ring,
        map(80, 0, 532, 0, canvasSize),
        map(11, 0, 532, 0, canvasSize),
        map(20, 0, 532, 0, canvasSize),
        map(20, 0, 532, 0, canvasSize)
      );
      pushStyle();
      textAlign(LEFT, TOP);

      fill(0);
      text(stat, map(91, 0, 474, 0, canvasSize), map(8, 0, 474, 0, canvasSize));
      popStyle();
    }
    var Block = (function() {
      Block = function(self) {
        this.x = self.x;
        this.y = self.y;
        this.w = ~~self.w;
        this.h = ~~self.h;
      };
      Block.prototype.display = function() {
        this.prevX = this.x;
        this.prevY = this.y;
        strokeWeight(1);
        stroke(0);
        fill(0, 200, 255);
        rect(this.x, this.y, this.w, this.h);
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
        this.speed = 5;
        this.img = loadImage();
      };
      Player.prototype.display = function() {
        this.charW = map(this.w, 0, 400, 0, width);
        this.charH = map(this.h, 0, 400, 0, height);

        fill(255, 0);
        stroke(0);

        rect(this.x, this.y, this.w, this.h);
        // tint(255,0,0)

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
        if (keys[UP]) {
          this.acl.x = 0;
          this.acl.y = -this.speed;
        }
        if (keys[DOWN]) {
          this.acl.x = 0;
          this.acl.y = this.speed;
        }
        this.y += this.acl.y;
        this.UDcollide();

        if (keys[LEFT]) {
          this.acl.x = -this.speed;
          this.acl.y = 0;
        }
        if (keys[RIGHT]) {
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
        this.pos = new PVector(~~(this.x / bSize), ~~(this.y / bSize));
        if (this.pos.x - 1 > 0) {
          if (
            this.id[this.pos.x - 1][this.pos.y][0] === "h" ||
            this.id[this.pos.x - 1][this.pos.y][0] === "v" ||
            this.id[this.pos.x - 1][this.pos.y][0] === "0"
          ) {
          } else {
            this.sides.push("left");
          }
        }
        if (this.pos.x + 1 < this.id.length) {
          if (
            this.id[this.pos.x + 1][this.pos.y][0] === "h" ||
            this.id[this.pos.x + 1][this.pos.y][0] === "v" ||
            this.id[this.pos.x + 1][this.pos.y][0] === "0"
          ) {
          } else {
            this.sides.push("right");
          }
        }
        if (this.pos.y - 1 > 0) {
          if (
            this.id[this.pos.x][this.pos.y - 1][0] === "h" ||
            this.id[this.pos.x][this.pos.y - 1][0] === "v" ||
            this.id[this.pos.x][this.pos.y - 1][0] === "0"
          ) {
          } else {
            this.sides.push("up");
          }
        }
        if (this.pos.y + 1 < this.id[this.pos.x].length) {
          if (
            this.id[this.pos.x][this.pos.y + 1][0] === "h" ||
            this.id[this.pos.x][this.pos.y + 1][0] === "v" ||
            this.id[this.pos.x][this.pos.y + 1][0] === "0"
          ) {
          } else {
            this.sides.push("down");
          }
        }
        for (var i = this.sides.length - 1; i >= 0; i--) {
          if (this.sides[i] === this.prevDir) {
            this.sides.splice(i, 1);
          }
        }
      };
      Ghost.prototype.checkAround = function(a, b, w, h) {
        return (
          a.X - b.x < b.w && b.x - a.X < w && a.Y - b.y < b.h && b.y - a.Y < h
        );
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
        fill(255, 0, 0);
        rect(this.X, this.Y, this.W, this.H);
        fill(0, 255, 0);
        rect(this.x, this.y, this.w, this.h);
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
      };

      moveLetter.prototype.display = function() {
        textSize(CENTER, CENTER);
        textSize(this.txtSize);
        fill(this.txtColor.r, this.txtColor.g, this.txtColor.b);

        pushMatrix();
        translate(this.x, this.y);
        rotate(
          map(
            dist(this.x, this.y, this.endX, this.endY),
            0,
            width * 100,
            0,
            360
          )
        );
        text(this.text, 0, 0);
        popMatrix();
      };
      moveLetter.prototype.toPosition = function() {
        // println(this.endX);
        this.x -= (this.x - this.endX) / this.rx;
        this.y -= (this.y - this.endY) / this.ry;
        if (
          Math.abs(this.x - this.endX) < 1 &&
          Math.abs(this.y - this.endY) < 1
        ) {
          this.isdone = true;
          letter += 1;
        }
      };
      return moveLetter;
    })();
    var moveletter = [
      new moveLetter({
        x: 0,
        y: -100,
        endX: 120,
        endY: 220,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "T",
        scene: "main",
        mapSize: "653"
      }),
      new moveLetter({
        x: width + 199,
        y: 0,
        endX: 156,
        endY: 220,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "I",
        scene: "main",
        mapSize: "653"
      }),
      new moveLetter({
        x: 300,
        y: -500,
        endX: 191,
        endY: 220,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "T",
        scene: "main",
        mapSize: "653"
      }),
      new moveLetter({
        x: -50,
        y: 500,
        endX: 238,
        endY: 220,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "L",
        scene: "main",
        mapSize: "653"
      }),

      new moveLetter({
        x: 660,
        y: 700,
        endX: 286,
        endY: 220,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "E",
        scene: "main",
        mapSize: "653"
      }),
      new moveLetter({
        x: -660,
        y: 500,
        endX: 363,
        endY: 220,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        scene: "main",
        text: "H",
        scene: "main",
        mapSize: "653"
      }),
      new moveLetter({
        x: -60,
        y: 1500,
        endX: 420,
        endY: 220,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "E",
        scene: "main",
        mapSize: "653"
      }),
      new moveLetter({
        x: -100,
        y: -250,
        endX: 475,
        endY: 220,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "R",
        scene: "main",
        mapSize: "653"
      }),
      new moveLetter({
        x: 860,
        y: -500,
        endX: 530,
        endY: 220,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "E",
        scene: "main",
        mapSize: "653"
      }),
      new moveLetter({
        x: 106,
        y: random(-height, 0),
        endX: 106,
        endY: 450,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "Y",
        scene: "lose",
        mapSize: "569"
      }),
      new moveLetter({
        x: 166,
        y: random(-height, 0),
        endX: 166,
        endY: 450,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "O",
        scene: "lose",
        mapSize: "569"
      }),
      new moveLetter({
        x: 224,
        y: random(-height, 0),
        endX: 224,
        endY: 450,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "U",
        scene: "lose",
        mapSize: "569"
      }),
      new moveLetter({
        x: 298,
        y: random(-height, 0),
        endX: 298,
        endY: 450,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "L",
        scene: "lose",
        mapSize: "569"
      }),
      new moveLetter({
        x: 352,
        y: random(-height, 0),
        endX: 352,
        endY: 450,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "O",
        scene: "lose",
        mapSize: "569"
      }),
      new moveLetter({
        x: 410,
        y: random(-height, 0),
        endX: 410,
        endY: 450,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "S",
        scene: "lose",
        mapSize: "569"
      }),
      new moveLetter({
        x: 462,
        y: random(-height, 0),
        endX: 462,
        endY: 450,
        txtColor: { r: 250, g: 0, b: 0 },
        txtSize: 80,
        text: "E",
        scene: "lose",
        mapSize: "569"
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
            583,
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
      }
      display() {
        fill(this.color.r, this.color.g, this.color.b);
        rect(this.x, this.y, this.w, this.h, this.r);

        if (!this.char) {
          fill(this.textColor.r, this.textColor.g, this.textColor.b);
          textSize(this.textS);
          var tWidth = textWidth(this.text);
          var tHeight = textDescent(this.text) + textAscent(this.text);
          text(this.text, this.x + this.w / 2, this.y + this.h / 2);
        } else {
          image(chars["barrel"], this.x, this.y, this.w, this.h);
          image(chars[this.char],this.x+this.w/3,this.y+this.h/2.5,this.w/3,this.h/3)
          pushMatrix();
          translate(this.x-this.w/1.8,this.y+this.h/1.4);
          displayStats(this.cost);
          popMatrix();
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
        if (this.isin()) {
          this.cmd();
          // scene = this.cmd;
          println(scene);
        }
      }
    }
    var btns = [
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
          scene = "play";
          drawOnce = 0;
        }
      }), //PLAY
      new Button({
        x: 10,
        y: 10,
        w: 60,
        h: 25,
        r: 5,
        color: { r: 34, g: 139, b: 34 },
        text: "BACK",
        textS: 16,
        textColor: { r: 255, g: 255, b: 0 },
        scene: "*",
        cmd: function() {
          scene = "main";
          letter = 0;
          for (var i = moveletter.length - 1; i >= 0; i--) {
            moveletter[i].x = moveletter[i].prevX;
            moveletter[i].y = moveletter[i].prevY;
          }
        }
      }), //BACK
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
          // download('I JUST CREATED A FILE DOWNLOADER IN JAVASCRIPT',"filename.csv", "text/csv")
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
        cost: '1000',
        scrollable:'true',
        cmd: function() {
          character = "legolas";
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
        scene: "store",
        char: "tauriel",
        cost:'200',
        scrollable:'true',
        cmd: function() {
          character = "tauriel";
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
        cost:'500',
        scrollable:'true',
        cmd: function() {
          character = "tauriel";
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
        cost:'100',
        scrollable:'true',
        cmd: function() {
          character = "tauriel";
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
        scene: "store",
        char: "elrond",
        cost:'2000',
        scrollable:'true',

        cmd: function() {
          character = "tauriel";
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
        cost:'1200',
        scrollable:'true',

        cmd: function() {
          character = "tauriel";
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
        cost:'800',
        scrollable:'true',
       
        cmd: function() {
          character = "tauriel";
        }
      }),

    ];
    scene = "store";
    var Game = (function() {
      Game = function(self) {
        this.board = Array.from(Array(2), () => new Array(4));
        this.eye = 0;
      };
      Game.prototype.create = function() {
        player.splice(0, player.length);
        blocks.splice(0, blocks.length);
        coins.splice(0, coins.length);
        ghosts.splice(0, ghosts.length);
        currentCoins = 0;
        for (var i = gameBoard[lvl].length - 1; i >= 0; i--) {
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
                    h: bSize
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
                    h: bSize * h
                  })
                );
                break;
              case "p":
                player.push(
                  new Player({
                    x: j * bSize,
                    y: i * bSize,
                    w: bSize / 1.3,
                    h: bSize / 1.3
                  })
                );
                break;
              case "c":
                coins.push(
                  new Coin({ x: j * bSize, y: i * bSize, w: bSize, h: bSize })
                );
                break;
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
            }
          }
        }
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
        background(255, 0, 0);
        image(lonelyMountain, 0, 0, width * 1.5, height);
        textSize(map(80, 0, 653, 0, canvasSize));
        fill(0);
        // text(
        //   "TITLE HERE",
        //   map(653 / 2, 0, 653, 0, canvasSize),
        //   map(220, 0, 653, 0, canvasSize)
        // );
      };
      Game.prototype.store = function() {
        background(0);

      };
      Game.prototype.equip = function() {
        image(shireBg, 0, 0, canvasSize, canvasSize);
      };
      Game.prototype.save = function() {
        background(34, 193, 34);
      };
      Game.prototype.settings = function() {
        image(isengardBg, 0, 0, canvasSize, canvasSize);
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
      return Game;
    })();

    var g = new Game();
    function createGame() {
      if (!drawOnce) {
        g.eye = 0;
        g.create();
      }
      drawOnce = 1;
      switch (scene) {
        case "play":
          pushMatrix();
          g.trans();
          g.display();
          popMatrix();
          displayStats(currentCoins);
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
      }

      if (letter < moveletter.length) {
        if (moveletter[letter].scene === scene) {
          moveletter[letter].toPosition();
        } else {
          letter += 1;
        }
      }
      for (var i = 0; i < moveletter.length; i++) {
        if (moveletter[i].scene === scene) {
          moveletter[i].display();
        }
      }
      if(scene === 'store'){
        image(fadeBg)
        displayStats(collectedCoins)
      }     
      for (var i = 0; i < btns.length; i++) {
        
        if (
          btns[i].scene === scene ||
          (btns[i].scene === "*" && scene !== "main")
        ) {
          btns[i].mouseenter();
          btns[i].display();
        }
      }

    }

    draw = function() {
      // this._clearLogs();
      if (frameCount % 50 === 0) {
        // console.clear();
      }
      background(0, 0);
      createGame();
      fill(0);
      text(this.__frameRate, 100, 100);
      // image(chars['orc'],0,0,width,height)

    };

    keyPressed = function() {
      keys[keyCode] = true;
    };
    keyReleased = function() {
      keys[keyCode] = false;
    };

    mouseClicked = function() {
      for (var i = 0; i < btns.length; i++) {

        if (
          btns[i].scene === scene ||
          (btns[i].scene === "*" && scene !== "main")
        ) {
          btns[i].click();
        }
      }
    };
    mouseScrolled = function(){
      
      for(var i = btns.length-1; i >= 0; i --){

        if(btns[i].scrollable){
          btns[i].y-= mouseScroll * 10;
        }
      }
      
    };
    ///////////////////////
  }
  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    const canvasSize = WIDTH < HEIGHT ? WIDTH : HEIGHT;
    size(canvasSize, canvasSize);
  }
};
var processing = new Processing(canvas, code);
