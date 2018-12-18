class CastleBig extends THREE.Group {

    init (){

        var dChurch = this;        

        // instantiate a loader
var loader = new THREE.OBJLoader();

var amphiMaterial = new THREE.MeshPhongMaterial( { color: 0xb18868 } );

// load a resource
loader.load('models/castle/himeji.obj',	function ( object ) {

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

dChurch.scale.x = 0.4;
dChurch.scale.y = 0.4;
dChurch.scale.z = 0.4;
dChurch.rotation.y = 0.0;
dChurch.position.x = this.pX;
dChurch.position.y = 0.0;
dChurch.position.z = this.pZ;

    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;        
        this.pZ = pZ;        
        this.init();
    }
}