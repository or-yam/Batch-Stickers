// Importing all inputs and outputs
const batchNumber = document.getElementById('batch');
const batchWeight = document.getElementById('totalWeight');
const packType = document.getElementById('packType');
const stickerBatch = document.getElementById('stickerBatch');
const stickerWeight = document.getElementById('stickerWeight');
const stickerUnits = document.getElementById('stickerUnits');
const stickerExpire = document.getElementById('stickerExpire');
const stickersAmount = document.getElementById('stickersAmount');
const btn = document.getElementById(button);

// calculate pack weight by pack type
const stickerWeightCal = type => {
  let weight = '';
  if (type === '6/8') {
    weight = '960';
  } else if (type === '30/20') {
    weight = '600';
  } else {
    weight = '500';
  }
  return weight;
};
// calculate units in pack by pack type
const stickerUnitsCal = type => {
  let units = '';
  if (type === '6/8') {
    units = '6';
  } else if (type === '30/20') {
    units = '30';
  } else {
    units = '50';
  }
  return units;
};
// calculate number of stickers needed by the total batch weight and type of packing
const stickerAmountCal = (type, weight) => {
  let amount = Math.round(weight / (type / 1000)) + 3; // adding 3 extra stickers
  return amount;
};
// calculate expire date from batch number
const calculateExpireDate = (batch, monthsToExpire = 20) => {
  let batchArry = batch.split('');
  const month = batchArry[5] + batchArry[6];
  const year = batchArry[7] + batchArry[8];
  let expireMonth = (parseInt(month) + monthsToExpire) % 12;
  let expireYear =
    Math.floor((parseInt(month) + monthsToExpire) / 12) + parseInt(year);
  if (expireMonth < 10) {
    expireMonth = '0' + expireMonth;
  }
  expireDate = expireMonth + '/' + '20' + expireYear;
  return expireDate;
};

// on submitting the inputs.
const onPress = () => {
  stickerBatch.textContent = 'Batch: ' + batchNumber.value;

  stickerWeight.textContent =
    'Weight: ' + stickerWeightCal(packType.value) + 'gr';
  stickerUnits.textContent = 'Units: ' + stickerUnitsCal(packType.value);

  stickersAmount.textContent =
    'Number Of Packs: ' +
    stickerAmountCal(stickerWeightCal(packType.value), batchWeight.value);
    
  stickerExpire.textContent =
    'Expire:' + calculateExpireDate(batchNumber.value);
};
