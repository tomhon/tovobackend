var config = {}

config.endpoint = process.env.CosmosDB_Endpoint  ;
config.primaryKey = process.env.CosmosDB_Key  ; 

config.database = {
    "id": "PlayerTrackingDB"
};

config.collection = {
    // "id": "V2 Data Structure"
    "id": "V3 Testing"
};



module.exports = config;