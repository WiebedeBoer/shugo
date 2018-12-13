class Mountain extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/boulder/","boulder_03.obj","models/boulder/","boulder_03.mtl", (mesh) => {
            mesh.scale.x = 0.13;
            mesh.scale.y = 0.13;
            mesh.scale.z = 0.13;
            dChurch.position.x = this.pX;
            dChurch.position.y = -8;
            dChurch.position.z = this.pZ;
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