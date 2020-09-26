class Turtle {
    #x = -5;
    #y = -2;
    #dir = 0;
    #geometry = new THREE.Geometry();

    constructor(x, y, dir) {
        this.#x = x;
        this.#y = y;
        this.#dir = dir;
    }

    fd(dist) {
        this.#x += dist * Math.cos(this.#dir);
        this.#y += dist * Math.sin(this.#dir);

        this.#geometry.vertices.push(new THREE.Vector3(this.#x, this.#y, 0));
    }

    lt(angle) {
        this.#dir += angle * Math.PI / 180;
    }

    rt(angle) {
        this.lt(-angle);
    }

    get geometry() {
        return this.#geometry;
    }

    set geometry(geometry) {
        return this.#geometry = geometry;
    }

    resetGeometry() {
        this.#geometry = new THREE.Geometry();
        this.#geometry.verticesNeedUpdate = true;
        this.#geometry.elementsNeedUpdate = true;
    }
}
