class LogModel{
    constructor(metaDatas){
      this.information={
          date: Date.now(), ...metaDatas
      }
    }
}

module.exports=LogModel