const DataHelper = (() => {
  // Return a Map where the keys are IDs and the values are elements.
  // The data is an array and contains an ID attribute for every element.
  const createIdMap = (data) => {
    if (data && Array.isArray(data)) {
      const idMap = new Map();
      data.forEach((item) => {
        if (item) {
          idMap.set(
            item.id
              ? item.id
              : item.Id
              ? item.Id
              : item.ID
              ? item.ID
              : undefined,
            item
          );
        }
      });
      return idMap;
    } else {
      return null;
    }
  };

  return {
    createIdMap: createIdMap,
  };
})();

module.exports = DataHelper;
