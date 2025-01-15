document.getElementById('roomType').addEventListener('change', function() {
    let price = 0;
    switch (this.value) {
      case 'Standard':
        price = 350000;
        break;
      case 'Deluxe':
        price = 500000;
        break;
      case 'Family':
        price = 950000;
        break;
    }
    document.getElementById('price').value = `Rp ${price.toLocaleString()}/malam`;
    calculateTotal(price);
  });

  document.getElementById('durasiMenginap').addEventListener('input', function() {
    let price = parseInt(document.getElementById('price').value.replace(/\D/g, ''), 10) || 0;
    calculateTotal(price);
  });

  document.getElementById('breakfast').addEventListener('change', function() {
    let price = parseInt(document.getElementById('price').value.replace(/\D/g, ''), 10) || 0;
    calculateTotal(price);
  });

  function calculateTotal(price) {
    let duration = document.getElementById('durasiMenginap').value || 0;
    let breakfast = document.getElementById('breakfast').checked ? 80000 : 0;
    let subtotal = price * duration + breakfast;
    let discount = duration > 3 ? subtotal * 0.1 : 0;
    let total = subtotal - discount;
    document.getElementById('totalBayar').value = `Rp ${total.toLocaleString()}`;
  }

  document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const namaPemesan = document.getElementById('namaPemesan').value;
    const gender = document.getElementById('gender').value;
    const nomorIdentitas = document.getElementById('nomorIdentitas').value;
    const roomType = document.getElementById('roomType').value;
    const tanggalPesan = document.getElementById('tanggalPesan').value;
    const durasiMenginap = document.getElementById('durasiMenginap').value;
    const includeBreakfast = document.getElementById('breakfast').checked ? 'Ya' : 'Tidak';
    const totalBayar = document.getElementById('totalBayar').value;
  
  // Validasi Nomor Identitas
    const errorField = document.getElementById("errorNomorIdentitas");
  
    // Reset pesan kesalahan
    errorField.textContent = "";
  
    // Validasi panjang nomor identitas
    if (nomorIdentitas.length !== 16 || !/^\d+$/.test(nomorIdentitas)) {
        errorField.textContent = "Nomor Identitas harus berupa 16 digit angka.";
        document.getElementById("nomorIdentitas").focus();
        e.preventDefault(); // Mencegah pengiriman form
        return;
      }
    alert(`Resume Pemesanan:\n\nNama: ${namaPemesan}\nJenis Kelamin: ${gender}\nNomor Identitas: ${nomorIdentitas}\nTipe Kamar: ${roomType}\nTanggal Pesan: ${tanggalPesan}\nDurasi Menginap: ${durasiMenginap} malam\nInclude Breakfast: ${includeBreakfast}\nTotal Bayar: ${totalBayar}`);
  });