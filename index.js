if(process.env.NODE_ENV !== "test") {
  console.warn("testkit is not intended to be used in any situations other than test environment");
}


module.exports = {
  
  web: require("./lib/web")
  
};