class Materializer {

  constructor(argm) {
    this.target     = argm;
    this.activated  = false;
  }

  activate() {
    this.activated  = true;
  }

  materialize(){
    return (this.activated ? this.target : undefined);
  }

}