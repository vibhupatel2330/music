
function calculateBill() {
  // Retrieve data from the form
  const onPeakUsage = parseFloat(document.getElementById("onPeak").value) || 0;
  const offPeakUsage = parseFloat(document.getElementById("offPeak").value) || 0;
  const province = document.getElementById("province").value;

  // Perform calculations
  const onPeakRate = 0.132; // $/kWh
  const offPeakRate = 0.065; // $/kWh
  const hstRate = 0.13; // 13%
  const provincialRebateRate = 0.08; // 8%

  const onPeakCharges = onPeakUsage * onPeakRate;
  const offPeakCharges = offPeakUsage * offPeakRate;
  const grossCharges = onPeakCharges + offPeakCharges;
  const hst = grossCharges * hstRate;
  const provincialRebate = province === 'BC' ? grossCharges * provincialRebateRate : 0;
  const netCharges = grossCharges + hst - provincialRebate;

  // Update the receipt area with calculated values
  document.getElementById("onPeakCharges").textContent = `$${onPeakCharges.toFixed(2)}`;
  document.getElementById("offPeakCharges").textContent = `$${offPeakCharges.toFixed(2)}`;
  document.getElementById("grossCharges").textContent = `$${grossCharges.toFixed(2)}`;
  document.getElementById("hst").textContent = `$${hst.toFixed(2)}`;
  document.getElementById("provincialRebate").textContent = `$${provincialRebate.toFixed(2)}`;
  document.getElementById("netCharges").textContent = `$${netCharges.toFixed(2)}`;

  // Display the receipt area
  document.getElementById("ElectricityBill").style.display = 'none';
  document.getElementById("receipt").style.display = 'block';

  const totalCharges = onPeakCharges + offPeakCharges;
  document.getElementById("totalCharges").textContent = `$${totalCharges.toFixed(2)}`;
}