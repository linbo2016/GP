/*
function sceneDesign() {

  // add obstacles to the scene
  scene.obstacles = [];
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(150,0,150), 50) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(-100,0,200), 30) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(0,0,-100), 60) )
    
  scene.targets = [];
  scene.targets.push (new Target (1, new THREE.Vector3 (300,0,300) ));
  scene.targets.push (new Target (2, new THREE.Vector3 (-200,0,150) ));
  scene.targets.push (new Target (3, new THREE.Vector3 (250,0,-200) ));
  scene.targets.push (new Target (4, new THREE.Vector3 (0,0,-200) ));

}
*/

function sceneFromJSON () {
  const JSONStr = '{"obstacles":[{"center":{"x":4.856586368847883,"y":4.914421044093242e-15,"z":-22.13258478292005},"size":20},{"center":{"x":-203.86574781057618,"y":-2.6629097508536735e-15,"z":11.992679361665864},"size":20},{"center":{"x":9.188974305347596,"y":-5.5328698502220454e-14,"z":249.17830595749456},"size":20},{"center":{"x":247.74269188013474,"y":1.0693869764181993e-13,"z":30.390921148813618},"size":20},{"center":{"x":-91.09282287763645,"y":4.8710051653521e-14,"z":-219.37057047599478},"size":20},{"center":{"x":170.22073748157368,"y":4.42196135555235e-14,"z":-199.14743513112296},"size":20},{"center":{"x":111.42137430475287,"y":-2.741303572263526e-14,"z":123.45733746555425},"size":20},{"center":{"x":-163.46824155290327,"y":-3.217155879687143e-14,"z":144.88782020951817},"size":20}],"targets":[{"id":0,"pos":{"x":-94.35729905537994,"y":2.7057178201241854e-14,"z":-121.85469766480992}},{"id":1,"pos":{"x":-67.44567621961151,"y":-2.732044213858687e-14,"z":123.04033303493702}},{"id":2,"pos":{"x":163.53400034289388,"y":1.2569397089156052e-13,"z":-54.07532046994993}},{"id":3,"pos":{"x":230.7978872347426,"y":6.082675953540791e-14,"z":238.06062842218216}},{"id":4,"pos":{"x":87.63120732575153,"y":3.453465440697862e-14,"z":356.46974328136224}},{"id":5,"pos":{"x":21.54009077624867,"y":-3.672230754826175e-14,"z":165.38257059053637}},{"id":6,"pos":{"x":-149.23985331245638,"y":-7.162402607246921e-14,"z":322.56593713074705}},{"id":7,"pos":{"x":-217.94075370621127,"y":4.2170989267474236e-14,"z":-189.92125155084216}}]}';
    
  let myScene = JSON.parse (JSONStr);
  
  scene.obstacles = []
  myScene.obstacles.forEach (function (obs) {
  	scene.obstacles.push (new Obstacle (new THREE.Vector3 (obs.center.x, obs.center.y, obs.center.z), 30))
  })
  
  scene.targets = []
  myScene.targets.forEach (function (tt) {
  	scene.targets.push (new Target (tt.id, new THREE.Vector3 (tt.pos.x, tt.pos.y, tt.pos.z) ))
  })

}