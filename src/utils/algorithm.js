
function generateAdvice(bill, devices) {
    let advice = "";
  
    
    if (bill > 100) {
      advice += "Your electricity bill is quite high. ";
      if (bill > 200) {
        advice += "Consider reducing your electricity usage or switching to a cheaper plan. ";
      }
    } else {
      advice += "Your electricity bill is reasonable. ";
    }
  
    
    if (devices.length > 0) {
      advice += "You have the following devices: ";
      for (let i = 0; i < devices.length; i++) {
        if (i > 0) {
          advice += ", ";
        }
        advice += devices[i];
      }
      advice += ". ";
      if (devices.includes("TV") && devices.includes("microwave")) {
        advice += "Consider using these devices less frequently, as they consume a lot of electricity. ";
      }
    } else {
      advice += "You have no devices. ";
    }
  
    return advice;
  }
  
  
  const bill = 30;
  const devices = ["TV", "microwave", "lamp"];
  const advice = generateAdvice(bill, devices);
  console.log(advice);
  