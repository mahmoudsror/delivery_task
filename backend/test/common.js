const path = require('path');
const Models =require(path.resolve('models','index.js'));
module.exports={
  SetUp: done => {
    Models.tasks.create({
      "fromLocation": "25.194594, 55.274034",
      "toLocation": "25.125386, 55.227821",
      "deliveryDate": "2019-05-25",
      "startedAt": "",
      "finishedAt": "",
      "driverName": "Test case",
      "courier": "Wimo",
      "description": "Deliver a souq.com shipping",
      "status": "pending",
      "driverComment": "",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }).then((user,err) => {
      if (err){
        console.log(err)
          
      }
      done()
    })
  },
  tearDown: done => {
    Models.tasks.destroy({
      where: {"driverName": "Test case"},
      truncate: true
    }).then(user => {
      done()
    })
  }
}