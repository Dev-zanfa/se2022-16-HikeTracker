'use strict';

class Parking{

    constructor(id, name, numSpots, hasFreeSpots, pointId, ownerId){
        this.id = id;
        this.name = name;
        this.numSpots = numSpots;
        this.hasFreeSpots = hasFreeSpots;
        this.pointId = pointId;
        this.ownerId = ownerId;
    }
}

module.exports = Parking;