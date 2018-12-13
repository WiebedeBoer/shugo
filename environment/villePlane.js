class Plane extends THREE.Group {
    init(){
        var plane, geometry, material, mPlane, texture;

        mPlane = this;
        
        texture = new THREE.TextureLoader().load( "textures/plane/"+this.ground+".jpg" );
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0.29 , 0.89 ); //0.62bad,0.62good
        texture.repeat.set( this.width / 450, this.length / 450 );
        material = new THREE.MeshBasicMaterial( { map: texture} );      
        geometry = new THREE.PlaneGeometry( this.width, this.length );
        plane = new THREE.Mesh( geometry, material );
        plane.rotation.x= - 90 * Math.PI / 180;
        mPlane.add(plane);
    }
    constructor(width,length,ground){
        super();
        this.ground = ground;
        this.width = width;
        this.length = length;
        this.init();
    }
}