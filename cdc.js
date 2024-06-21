// CODELAB: Add feature detection here.
// const notSupported = document.getElementById('notSupported');
// notSupported.classList.toggle('hidden', 'serial' in navigator);
console.log(navigator.serial, 'serial' in navigator);
// CODELAB: Add code to request & open port here.
// - Request a port and open a connection.
const options = {
  filters: [
    { usbVendorId: 1240, usbProductId: 10 },
    { usbVendorId: 51966, usbProductId: 16387 }
  ],
};
var ZION_PROD_URL = "https://testec2.zioniot.com/xenon/adapt/";

var decoder;
var inputDone;
var inputStream;
var reader;

var encoder;
var outputDone;
var outputStream;
var MODE = null;
var DEVICE_IMEI = null;
const connect = async () => {
  port = await navigator.serial.requestPort(options);

  // - Wait for the port to open.
  await port.open({ baudRate: 115200 });
  DEVICE_IMEI = null;
  console.log("port is ", port);
  if (port) {
    const info = port.getInfo()
    console.log("info is ", info);
    // document.getElementById('connectedStatus').innerText = `Connected to ${info.usbVendorId === 51966 ? 'ESP' : 'Micorchip'}: vendorId: ${info.usbVendorId}, productId: ${info.usbProductId}`;
  }
  // CODELAB: Add code to read the stream here.
  decoder = new TextDecoderStream();
  inputDone = port.readable.pipeTo(decoder.writable);
  inputStream = decoder.readable;

  reader = inputStream.getReader();
  // reader = port.readable.getReader();
  readLoop();

  encoder = new TextEncoderStream();
  outputDone = encoder.readable.pipeTo(port.writable);
  outputStream = encoder.writable;

  getConfig(['PROD_URL']);
};

window.resetToWrongURL = () => {
  console.log('sending wrong url of zion');
  const command = `PROD_URL:${'http://wronurl.com'}`;
  handleMessageFromDevice = (msgString) => { console.log('running dummy msg handler', msgString) }
  COM.sendCommands(command);
  location.reload();
}

const addCCCdevice = async () => {
  const d = new Date();
  const device_id = `${d.getDate()}${(d.getMonth() + 1)}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`
  const deviceIDtxt = document.getElementById('deviceIdTxt').value;
  const payload = {
    entity: {
      "data": {
        "id": DEVICE_IMEI,
        "device_id": `CCC${deviceIDtxt}`,
        "type": "ZN_ANCHOR",
        "updated_at": d.getTime()
      }
    }
  };
  console.log('Adding device', payload);
  // https://entity.brokenatom.io/api/v1/entity/get_many?app_id=01gqy3rr869arna28cwytcgcqv&model_id=01gqy3vf5kvtg4vjegyk0cmwbv&attribute=id&limit=128&start_key=dc5475ceebc01716357498804&end_key=dc5475ceebc01716379098804&apikey=3ba5f0bcfbce60663934f8059c1a72e086d63c8fb2f5d6266249fd8f334e45ff
  let Xenon_URL = 'https://entity.brokenatom.io/api/v1/entity/put_one?app_id=01gqy3rr869arna28cwytcgcqv&model_id=01gr19bnhnmsfek8gc79pse3n5&apikey=3ba5f0bcfbce60663934f8059c1a72e086d63c8fb2f5d6266249fd8f334e45ff';
  fetch(Xenon_URL, {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
}).then(res => res.json())
  .then(res => {
    console.log('xenon res', res)
    if (res.success == true) {
    document.getElementById('info').innerHTML = 'Done. Please remove device';
    document.getElementById('deviceIdTxt').style.display = 'none';
    document.getElementById('addDevice').style.display = 'none';

    }
  });

};

const showConfirmation = () => {
  document.getElementById('connectButton').style.display = 'none';
  if (DEVICE_IMEI) {
    console.log('adding device imei', DEVICE_IMEI);
  }
  document.getElementById('deviceIdTxt').style.display = 'block';
  document.getElementById('info').innerHTML = 'Configuration Success. Please enter device Id below';
  // document.getElementById('info').innerHTML = 'Configuration Success. Please remove device';
  document.getElementById('addDevice').style.display = 'block';
};

let handleMessageFromDevice = (msgString) => {
  try {
    const msg = JSON.parse(msgString);
    console.log("msg:", msg);
    if (msg) {
      const value = msg.v;
      DEVICE_IMEI = msg.deviceUid;
      const msgs = value.split(';');
      let isTempConfig = false;
      msgs.forEach(m => {
        const item = m.split(':');
        if (item.length) {
          const key = item[0];
          if (key == 'PROD_URL') {
            const PROD_URL_device = item.slice(1).join(":");
            if (ZION_PROD_URL !== PROD_URL_device) {
              console.log('sending prod url of zion');
              const command = `PROD_URL:${ZION_PROD_URL}`;
              COM.sendCommands(command);
            } else {
              console.log("updated");
              showConfirmation();
            }
            console.log("PROD_URL IS ", item.slice(1).join(":"));
          }
          if (['TEMP_VH', 'TEMP_VL'].includes(key)) isTempConfig = true;
          const keyValue = item[1] || '';
          if (COMMANDS[key] && COMMANDS[key].update) {
            COMMANDS[key].update(keyValue);
          } else if (QUERIES[key] && QUERIES[key].update) {
            QUERIES[key].update(keyValue);
          }
          currentDeviceConfig[key] = keyValue;
        }
      });
      if (isTempConfig) refreshTempOption()
    }
  } catch (error) {
    console.log("Error parsing msg", msgString);
  }
}

const readLoop = async () => {
  // CODELAB: Add read loop here.
  let log = "";
  console.log("reading...");
  let lastReadTime = null;
  let timeout = null;
  const putLog = () => {
    const logDiv = document.getElementById('logs');
    // logDiv.innerHTML = `<hr><span style="color:#008081">[Response] ${new Date().toLocaleTimeString()}:</span> ${log} </br>` + logDiv.innerHTML;
    handleMessageFromDevice(log);
    lastReadTime = null;
    log = "";
    // reader.releaseLock();
  }
  while (true) {
    const { value, done } = await reader.read().catch((err) => {
      console.log("Err!!!", err);
      if (err.message && err.message.includes('The device has been lost.')) {
        document.getElementById('connectButton').style.display = 'block';
        document.getElementById('info').innerHTML = 'Connect device and Click Connect';
        DEVICE_IMEI = null;
      }
    });
    if (value) {
      // const currentTime = Date.now();
      log += value;
      if (!lastReadTime) {
        lastReadTime = Date.now();
        setTimeout(() => {
          putLog();
          // log += value + '\n';

        }, 10);
      }

    }
    if (done) {
      console.log('[readLoop] DONE', done, "\n log:", log);
      reader.releaseLock();
      break;
    }
  }
}

const writeToStream = async (line) => {
  // CODELAB: Write to output stream
  const writer = outputStream.getWriter();
  console.log('[SEND]', line);
  const logDiv = document.getElementById('logs');
  // logDiv.innerHTML = `<span style="color:darkorange">[Command] ${new Date().toLocaleTimeString()}:</span> ${line}</br>` + logDiv.innerHTML;
  writer.write(line).then(() => {
    writer.releaseLock();
    // readLoop();
  });
}

// document.getElementById('commandInput').addEventListener('keydown', (e) => {
//   if (!e) e = window.event;
//   var keyCode = e.code || e.key;
//   if (keyCode == 'Enter') {
//     // Enter pressed
//     if (MODE === 'CDC') {
//       const input = document.getElementById('commandInput').value;
//       writeToStream(input);
//       console.log('Enter key pressed', input);
//     } else if (MODE === 'HTTP') {
//       const imei = $('#httpImeiInput').val();
//       const input = document.getElementById('commandInput').value;
//       if (!imei || !input || !input.length) return;
//       const commands = input.split(';');
//       commands.forEach(c => {
//         const cSplit = c.split(':');
//         if (!Object.keys(COMMANDS).includes(cSplit[0]) || cSplit.length<1) return;
//         $.get(`/redis/?key=${imei}-http-utf-responses&type=hset&value=${cSplit[1]}&field=${cSplit[0]}`);
//       });
//       $('#httpCommandInputDiv').fadeOut('slow', function () {
//         $(this).fadeIn('slow', function () {
//           $('#getFromServerButton').click();
//         });
//       });
//     }
//   }
//   return false;
// });

// document.getElementById('queryInput').addEventListener('keydown', (e) => {
//   if (!e) e = window.event;
//   var keyCode = e.code || e.key;
//   if (keyCode == 'Enter') {
//     // Enter pressed
//     if (MODE === 'CDC') {
//       const input = document.getElementById('queryInput').value;
//       writeToStream(input);
//       console.log('Enter key pressed', input);
//     } else if (MODE === 'HTTP') {
//       const imei = $('#httpImeiInput').val();
//       const input = document.getElementById('queryInput').value;
//       if (!imei || !input || !input.length) return;
//       const query = input.split(';');
//       query.forEach(q => {
//         if (!Object.keys(QUERIES).includes(q) || q.split(':').length > 1) return;
//         $.get(`/redis/?key=${imei}-http-utf-query&type=sadd&value=${q}`);
//       });
//       $('#httpQueryInputDiv').fadeOut('slow', function () {
//         $(this).fadeIn('slow', function () {
//           $('#getFromServerButton').click();
//         });
//       });
//     }
//     return false;
//   }
// });


const currentDeviceConfig = {
  DEVICE_ID: '',
  MODEL: '',
  FW_VERSION: '',
  UNIX: '',
  TZ_OFFSET: '',
  TITAN_ENV: '',
  LIGHT_TH: '',
  SHOCK_TH: '',
  PRESSURE_TH: '',
  APN: '',
  N_MODE: '',
  CALIBRATION_EXPIRY: '',
  DELAY_INTERVAL: '',
  TRIP_START_METHODS: '',
  TRIP_END_METHODS: '',
  PRIMARY_TEMP_SENSOR: '',
  COLLECTION_INTERVAL: '',
  SENDING_INTERVAL_TRIP: '',
  SENDING_INTERVAL_NU: '',
  _syncedAt: '',
  _unixQueriedAt: '',
}

const APNs = {
  truphone: { v: "iot.truphone.com", uiOptionVal: "1" },
  teal: { v: "iot.teal.com", uiOptionVal: "2" },
  hologram: { v: "hologram", uiOptionVal: "3" },
  airtel: { v: "airteliot.com", uiOptionVal: "4" }
};

const NETWORK_MODES = {
  global: { v: "ALL", uiOptionVal: "1" },
  gsm: { v: "GSM", uiOptionVal: "2" },
  catm1: { v: "CATM1", uiOptionVal: "3" }
};

const TEMP_SETTINGS = {
  1: { VL: 2, VH: 8 },
  2: { VL: 15, VH: 25 },
  3: { VL: '', VH: '' }, // none
  custom: {} // custom
};

const COMMANDS = {
  'DEVICE_ID': {
    update: (deviceId) => {
      $('#deviceIdInput').val(deviceId);
    },
    getFromUI: () => $('#deviceIdInput').val(),
  },
  'MODEL': {
    update: (modelVal) => {
      $('#modelName').val(modelVal);
    },
    getFromUI: () => $('#modelName').val(),
  },
  'UNIX': {
    update: (unix) => {
      const t = getUnix();
      const diff = Number(unix) - t;
      $('#unixTimestampInput').val(`${unix} (${diff})`);
    }
  },
  'TZ_OFFSET': {
    update: (modelVal) => {
      $('#timezoneOffsetInput').val(modelVal);
    },
    getFromUI: () => $('#timezoneOffsetInput').val(),
  },
  'TITAN_ENV': {
    update: (val) => {
      if (["PROD", "DEV"].includes(val)) {
        $('#titanENV').val(val);
      }
    },
    getFromUI: () => $('#titanENV').val(),
  },
  'LIGHT_TH': {
    update: (val) => {
      $('#lighThresholdInput').val(val);
    },
    getFromUI: () => $('#lighThresholdInput').val(),
  },
  'SHOCK_TH': {
    update: (val) => {
      $('#shockThresholdInput').val(val);
    },
    getFromUI: () => $('#shockThresholdInput').val(),
  },
  'PRESSURE_TH': {
    update: (val) => {
      $('#pressureThresholdInput').val(val);
    },
    getFromUI: () => $('#pressureThresholdInput').val(),
  },
  'APN': {
    update: (val) => {
      const apn = Object.keys(APNs).find(a => (APNs[a].v === val));
      if (apn) {
        $('#APN').val(APNs[apn].uiOptionVal);
      }
    },
    getFromUI: () => {
      const val = $('#APN').val();
      const apn = Object.keys(APNs).find(a => APNs[a].uiOptionVal === val);
      return APNs[apn].v;
    }
  },
  'N_MODE': {
    update: (val) => {
      const networkMode = Object.keys(NETWORK_MODES).find(a => (NETWORK_MODES[a].v === val));
      if (networkMode) {
        $('#networkMode').val(NETWORK_MODES[networkMode].uiOptionVal);
      }
    },
    getFromUI: () => {
      const val = $('#networkMode').val();
      const networkMode = Object.keys(NETWORK_MODES).find(a => NETWORK_MODES[a].uiOptionVal === val);
      return NETWORK_MODES[networkMode].v;
    }
  },
  'CALIBRATION_CERT_UPDATE': {
    update: (val) => {
      $('#updateCalibrationCheck').val(val);
    },
    getFromUI: () => document.getElementById("updateCalibrationCheck").checked ? 1 : 0,
  },
  'CALIBRATION_EXPIRY': {
    update: (val) => { // val in unix
      let val1 = new Date(Number(val) * 1000);
      const dateString = `${val1.getMonth() + 1}/${val1.getDate()}/${val1.getFullYear()}`;
      $('#calibrationExpiryInput').val(dateString);
    },
    getFromUI: () => {
      const date = $("#calibrationExpiryInput").val();
      const unix = getUnix(date);
      console.log("cal expiry", date, " unix:", unix);
      return unix || "";
    }
  },
  'DELAY_INTERVAL': {
    update: (val) => {
      $('#delayIntervalInput').val(val);
    },
    getFromUI: () => $('#delayIntervalInput').val(),
  },
  'T_SET_VH': {
    getFromUI: () => {
      const tempRange = $('#tempRangeSelect').val();
      if (TEMP_SETTINGS[tempRange] && TEMP_SETTINGS[tempRange].VH) {
        return TEMP_SETTINGS[tempRange].VH;
      } else if (tempRange === 'custom') {
        return $('#tempRangeMax').val() || '-';
      }
    }
  },
  'T_SET_VL': {
    getFromUI: () => {
      const tempRange = $('#tempRangeSelect').val();
      if (TEMP_SETTINGS[tempRange] && TEMP_SETTINGS[tempRange].VL) {
        return TEMP_SETTINGS[tempRange].VL;
      } else if (tempRange === 'custom') {
        return $('#tempRangeMin').val() || '-';
      }
    }
  },
  'TRIP_START_METHODS': {
    update: (val) => {
      const methods = val.split(',');
      var buttonStart = document.getElementById("tripStartButton");
      buttonStart.checked = methods.includes('BTN');
      var serverStart = document.getElementById("tripStartServer");
      serverStart.checked = methods.includes('SERVER');
    },
    getFromUI: () => {
      let val = '';
      if (document.getElementById("tripStartButton").checked) val += 'BTN,';
      if (document.getElementById("tripStartServer").checked) val += 'SERVER,';
      if (val.length) val = val.slice(0, val.length - 1);
      return val;
    }
  },
  'TRIP_END_METHODS': {
    update: (val) => {
      const methods = val.split(',');
      var buttonEnd = document.getElementById("tripEndButton");
      buttonEnd.checked = methods.includes('BTN');
      var serverEnd = document.getElementById("tripEndServer");
      serverEnd.checked = methods.includes('SERVER');
      var USBEnd = document.getElementById("tripEndUSB");
      USBEnd.checked = methods.includes('USB');
    },
    getFromUI: () => {
      let val = '';
      if (document.getElementById("tripEndButton").checked) val += 'BTN,';
      if (document.getElementById("tripEndServer").checked) val += 'SERVER,';
      if (document.getElementById("tripEndUSB").checked) val += 'USB,';
      if (val.length) val = val.slice(0, val.length - 1);
      return val;
    }
  },
  'PRIMARY_TEMP_SENSOR': {
    update: (val) => {
      var internalPrimary = document.getElementById("internal");
      internalPrimary.checked = (val === "INT");
      var probePrimary = document.getElementById("probe")
      probePrimary.checked = (val === "PRB");
    },
    getFromUI: () => {
      let val = '';
      if (document.getElementById("internal").checked) val = 'INT';
      else if (document.getElementById("probe").checked) val = 'PRB';
      return val;
    }
  },
  'COLLECTION_INTERVAL': {
    update: (val) => {
      $('#collectionInterval').val(val);
    },
    getFromUI: () => $('#collectionInterval').val(),
  },
  'SENDING_INTERVAL_TRIP': {
    update: (val) => {
      $('#sendingIntervalTrip').val(val)
    },
    getFromUI: () => $('#sendingIntervalTrip').val(),
  },
  'SENDING_INTERVAL_NU': { // NU - Not in Use
    update: (val) => {
      $('#sendingIntervalNU').val(val)
    },
    getFromUI: () => $('#sendingIntervalNU').val(),
  },
  'FOTA': {

  }
};

const QUERIES = {
  'DEVICE_ID': {},
  'SIM_MODULE_IMEI': {
    update: (val) => {
      $('#IMEI').html(val);
    }
  },
  'ESP_MAC_ID': {
    update: (val) => {
      $('#chipMacId').html(val);
    }
  },
  'MODEL': {},
  'FW_VERSION': {
    update: (modelVal) => {
      $('#FWversionInput').val(modelVal)
    }
  },
  'UNIX': {},
  'TZ_OFFSET': {

  },
  'TITAN_ENV': {},
  'LIGHT_TH': {},
  'SHOCK_TH': {},
  'PRESSURE_TH': {},
  'APN': {},
  'N_MODE': {},
  'CALIBRATION_EXPIRY': {},
  'DELAY_INTERVAL': {},
  'TRIP_START_METHODS': {},
  'TRIP_END_METHODS': {},
  'PRIMARY_TEMP_SENSOR': {},
  'COLLECTION_INTERVAL': {},
  'SENDING_INTERVAL_TRIP': {},
  'SENDING_INTERVAL_NU': {}, // NU - Not in Use
};

const COM = {
  isQueryValid: (param) => QUERIES.includes(param),
  isCommandValid: (param) => COMMANDS.includes(param),
  sendCommands: (commandsString) => {
    const msg = {
      type: "COMMAND",
      v: commandsString
    };
    writeToStream(JSON.stringify(msg));
  },
  query: (queryString) => {
    const msg = {
      type: "QUERY",
      v: queryString
    };
    writeToStream(JSON.stringify(msg));
  }
};

const syncTime = () => {
  const command = `UNIX:${getUnix()}`;
  COM.sendCommands(command);
};

const getConfig = (q) => {
  const queryValue = (q ? q : Object.keys(QUERIES)).join(';') + ';';
  const queryJSON = {
    type: 'QUERY',
    v: queryValue,
  };
  const queryString = JSON.stringify(queryJSON);
  console.log("getConfig queryString", queryString);
  writeToStream(queryString);
}

const updateConfig = () => {
  const updateString = Object.keys(COMMANDS).filter(a => COMMANDS[a].getFromUI).map(c => `${c}:${COMMANDS[c].getFromUI()}`).join(";") + ';';
  const commandJSON = {
    type: 'COMMAND',
    v: updateString,
  };
  const commandString = JSON.stringify(commandJSON);
  writeToStream(commandString);
};




const handleTempRangeChange = (event) => {
  const newVal = $('#tempRangeSelect').val();
  if (newVal === 'custom') {
    $('#tempMaxCol').show(200);
    $('#tempMinCol').show(200);
  } else {
    $('#tempMaxCol').hide(200);
    $('#tempMinCol').hide(200);

  }
  console.log(" select changed", $('#tempRangeSelect').val());
};

const refreshTempOption = () => {
  let isCustom = true;
  Object.keys(TEMP_SETTINGS).forEach((o) => {
    if (TEMP_SETTINGS[o].VH == currentDeviceConfig.TEMP_VH && TEMP_SETTINGS[0].VL == currentDeviceConfig.TEMP_VL) {
      $('#tempRangeSelect').val(o);
      isCustom = false;
    }
  });
  if (isCustom) {
    $('#tempRangeSelect').val('custom');
    $('#tempRangeMin').val(currentDeviceConfig.TEMP_VL);
    $('#tempRangeMax').val(currentDeviceConfig.TEMP_VH);
  }
  handleTempRangeChange();
};

window.ADAPT_Write = writeToStream;
window.ADAPT_handleMessageFromDevice = handleMessageFromDevice;

const getUnix = (unix) => {
  if (unix) return Math.round(new Date(unix).getTime() / 1000);
  return Math.round(new Date().getTime() / 1000);
}


// pairing Code

function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  // console.warn(`Code scan error = ${error}`);
}

