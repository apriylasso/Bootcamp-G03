let saldo = 1000000; // Saldo awal

while (true) {
  let pilihan = prompt("Selamat datang di Bank Apri Sentosa!\n\nPilih menu yang diinginkan:\n1. Tarik Tunai\n2. Setor Tunai\n3. Cek Saldo\n\nKetik 'stop' untuk keluar");

  if (pilihan === "1") {
    let tarikTunai = prompt("Masukkan jumlah uang yang ingin ditarik tunai:");
    
    if (!tarikTunai) {
      alert("Anda memasukkan input yang tidak valid.");
      continue;
    }

    tarikTunai = parseInt(tarikTunai);

    if (isNaN(tarikTunai) || tarikTunai <= 0) {
      alert("Anda memasukkan jumlah tarik tunai yang tidak valid.");
      continue;
    }

    if (tarikTunai > saldo) {
      alert("Saldo Anda tidak cukup untuk melakukan tarik tunai sebesar " + tarikTunai);
      continue;
    }

    saldo -= tarikTunai;
    alert("Anda berhasil menarik tunai sebesar " + tarikTunai + ".\n\nSaldo Anda saat ini: " + saldo);
  } else if (pilihan === "2") {
    let setorTunai = prompt("Masukkan jumlah uang yang ingin disetor tunai:");

    if (!setorTunai) {
      alert("Anda memasukkan input yang tidak valid.");
      continue;
    }

    setorTunai = parseInt(setorTunai);

    if (isNaN(setorTunai) || setorTunai <= 0) {
      alert("Anda memasukkan jumlah setor tunai yang tidak valid.");
      continue;
    }

    saldo += setorTunai;
    alert("Anda berhasil melakukan setor tunai sebesar " + setorTunai + ".\n\nSaldo Anda saat ini: " + saldo);
  } else if (pilihan === "3") {
    alert("Saldo Anda saat ini: " + saldo);
  } else if (pilihan === "stop") {
    let konfirmasi = confirm("Apakah Anda yakin ingin keluar?");
    if (konfirmasi) {
      alert("Terima kasih telah menggunakan layanan Bank Apri Sentosa.");
      break;
    } else {
      continue;
    }
  } else {
    alert("Pilihan yang Anda masukkan tidak valid.");
  }
}
