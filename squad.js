class squad {
    constructor (defaultResources) {
        this.squad = [];
        if (defaultResources) this.combineResources(defaultResources);
     }
     
    isReadyToMove () {
        return this.squad.every(function(resourse) {
           return resourse.isReadyToMove();
        }) 
     };
    
    isReadyToFight () {
        return this.squad.every(function(resourse) {
           return resourse.isReadyToFight();
        }) 
     };
    
    restore () {
       return this.squad.forEach(function(resourse) {
          return resourse.restore();
       }) 
    };
    
    getReadyToMoveResources () {
       return this.squad.filter(function(resourse) {
          return resourse.getReadyToMoveResources();
       }) 
    };
    
    combineResources (arr) {
         return this.squad.concat(arr)
     };
    
    cloneResource () {
       return new squad (
          this.resourses.map(function(resourses) {
             return resourses.clone
          })
       )
    };
} 
