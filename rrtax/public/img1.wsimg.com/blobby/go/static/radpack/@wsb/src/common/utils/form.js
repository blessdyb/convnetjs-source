const weightByType = {
  EMAIL: 1,
  SINGLE_LINE: 1,
  PHONE: 1,
  MULTI_LINE: 3,
  SUBMIT: 0,
};
export const calculateTotalFieldsWeight = (fields) => {
  let totalWeight = 0;
  fields.forEach((field) => {
    totalWeight += weightByType[field.type] || 0;
  });
  return totalWeight;
};

export const calculateTippingPoint = (fields, totalWeight) => {
  let numberOfFieldsOnLeftSide = 0;
  let currentWeight = 0;
  fields.forEach((field) => {
    if (currentWeight < totalWeight / 2) {
      currentWeight += weightByType[field.type];
      numberOfFieldsOnLeftSide += 1;
    }
  });
  return numberOfFieldsOnLeftSide;
};

export const getFieldsBalancingInfo = (fields) => {
  const MAX_LEFT_FIELDS_WEIGHT = 6;
  const totalWeight = calculateTotalFieldsWeight(fields);
  const useSecondColumn =
    totalWeight > MAX_LEFT_FIELDS_WEIGHT && fields.length > 4;
  const numberOfFieldsOnLeftSide = useSecondColumn
    ? calculateTippingPoint(fields, totalWeight)
    : fields.length - 1;

  return { totalWeight, useSecondColumn, numberOfFieldsOnLeftSide };
};
