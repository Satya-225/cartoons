const {
    postCartoons,
    getCartoons,
    getCartoonsById,
    updateCartoonById,
    deleteCartoons,
} = require("../controllers/cartoons.controller");
const {verifyToken} = require("../middlewares/auth");
module.exports = function (app) {
    app.post("/cartoon/api/v1/cartoons", [verifyToken], postCartoons);
  
    app.get("/cartoon/api/v1/cartoons", [verifyToken], getCartoons);
  
    app.get("/cartoon/api/v1/cartoons/:id", [verifyToken], getCartoonsById);
  
    app.put("/cartoon/api/v1/cartoons/:id", [verifyToken], updateCartoonById, );

    app.delete("/cartoon/api/v1/cartoons", [verifyToken], deleteCartoons, );
    
  };
    