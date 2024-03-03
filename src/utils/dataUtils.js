const axios = require("axios");

const DataUtils = (() => {
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(`Error fetching data from ${url}: ${error.message}`);
      return null;
    }
  };
  return {
    fetchData: fetchData,
  };
})();

module.exports = DataUtils;
