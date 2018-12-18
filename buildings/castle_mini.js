/*
class MiniCastle extends THREE.Group {

    init (){

        var dChurch = this;        

        // instantiate a loader
var loader = new THREE.OBJLoader();

var amphiMaterial = new THREE.MeshPhongMaterial( { color: 0xb18868 } );

// load a resource
loader.load('models/minicastle/22.obj',	function ( object ) {

    object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {             
             child.material = amphiMaterial;
            }
        } );
   
    dChurch.add(object);
	},
	// called when loading is in progresses
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);

dChurch.scale.x = 1.2;
dChurch.scale.y = 1.2;
dChurch.scale.z = 1.2;
dChurch.rotation.y = 0.0;
dChurch.position.x = this.pX;
dChurch.position.y = -120.0;
dChurch.position.z = this.pZ;

    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;        
        this.pZ = pZ;        
        this.init();
    }
}
*/


class MiniCastle extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/minicastle/","22.obj","models/minicastle/","22.mtl", (mesh) => {
            mesh.scale.x = 0.3;
            mesh.scale.y = 0.3;
            mesh.scale.z = 0.3;
            dChurch.position.x = this.pX -33;
            dChurch.position.y = -33.0;
            dChurch.position.z = this.pZ +66;
            dChurch.add(mesh);

        });
    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;        
        this.pZ = pZ;
        this.init();
    }
}

  