class Ducktypium {

  validateArgum(argm){
    return (argm === "red" || argm === "blue" || argm === "yellow") ? true : false;
  }

  constructor(argm) {
    argm = argm.toLowerCase();
    if (this.validateArgum(argm)){
      this.color = argm;
      this.calibrationSequence = [];
    } else
      throw new Error(`Ooops: ${argm} is not a valid color`);
  }

  refract(argm){
    argm = argm.toLowerCase();
    if (this.validateArgum(argm)) {
      if (argm !== this.color) {
        if (argm === "red")
          return ((this.color === "blue") ? "purple" : "orange");
        else if (argm === "yellow")
          return ((this.color === "red") ? "orange" : "green");
        else if (argm === "blue")
          return ((this.color === "yellow") ? "green" : "purple");
      } else
        return argm;
    } else
      throw new Error("oops");
  } 
  
  calibrate(argm){
    const sortedArray = argm.sort();
    this.calibrationSequence = argm.map(e => e * 3);
  }

}

