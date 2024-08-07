let docTitle = document.title;
window.addEventListener("blur", () =>{
  document.title = "Website 100ribu ? Kunjungi aku lagi!!";
})
window.addEventListener("focus", () =>{
  document.title = docTitle;
})

document.addEventListener("DOMContentLoaded", function() {
    const changingEmTextElement = document.getElementById("changingEmText");
    const textOptions = ["Kreatif", "Pintar "];
    let currentIndex = 0;

    function changeText() {
        changingEmTextElement.innerHTML = textOptions[currentIndex];
        currentIndex = (currentIndex + 1) % textOptions.length;
    }

    setInterval(changeText, 4000); // Ubah teks setiap 4 detik
});
document.addEventListener("DOMContentLoaded", function() {
    const changingEmTextElement = document.getElementById("changingEmTitle");
    const textOptions = ["Kreatif", "Pintar ", "Bisnis", "Umkm", "Portfolio"];
    let currentIndex = 0;

    function changeText() {
        changingEmTextElement.innerHTML = textOptions[currentIndex];
        currentIndex = (currentIndex + 1) % textOptions.length;
    }

    setInterval(changeText, 7000); // Ubah teks setiap 7 detik
});
document.addEventListener("DOMContentLoaded", function() {
  const changingEmTextElement = document.getElementById("changingEmBest");
  const textOptions = ["palinglaku", "bestseller", "rekomendasi"];
  let currentIndex = 0;

  function changeText() {
      changingEmTextElement.innerHTML = textOptions[currentIndex];
      currentIndex = (currentIndex + 1) % textOptions.length;
  }

  setInterval(changeText, 1500); // Ubah teks setiap 1,5 detik
});
// Fungsi untuk menggulir ke atas
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fungsi untuk menampilkan atau menyembunyikan tombol scroll up berdasarkan posisi scroll
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollUpBtn = document.getElementById("scrollUpBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}
function checkWebsite(event) {
    // Menghentikan perilaku default formulir
    event.preventDefault();

    // Menampilkan alert bahwa sedang memeriksa data website
    Swal.fire({
        icon: 'info',
        title: 'Memeriksa Data Website....',
        showConfirmButton: false
    });

    // Menambahkan jeda selama 2 detik sebelum melanjutkan pemeriksaan
    setTimeout(() => {
        const registeredWebsites = [
            { websiteName: 'lmao.shop' },
            { websiteName: 'sukiroku.online' },
            { websiteName: 'yellownetcctv.com' }
        ];

        const websiteNameInput = document.getElementById('websiteName').value;

        const isRegistered = registeredWebsites.some(site => site.websiteName === websiteNameInput);

        // Menutup alert yang menampilkan "Memeriksa Data Website...."
        Swal.close();

        if (isRegistered) {
            // Munculkan SweetAlert kustom untuk konfirmasi
            Swal.fire({
                icon: 'success',
                title: 'Pengecekan Berhasil!',
                text: 'Website Anda sudah terdaftar.',
                confirmButtonText: 'Ok'
            });
        } else {
            // Munculkan SweetAlert kustom untuk kesalahan
            Swal.fire({
                icon: 'error',
                title: 'Verifikasi Gagal',
                text: 'Website dan email kamu belum terdaftar atau kamu salah ketik.',
                confirmButtonText: 'Ok'
            });
        }
    }, 2000); // Jeda selama 2 detik (2000 milidetik)
}
// Fungsi pengiriman API Emailjs
function sendEmail() {
    Swal.fire({
        icon: 'info',
        title: 'Mengirim Pesan...',
        showConfirmButton: false
    });

    const templateParams = {
        user_name: document.getElementById('name').value,
        user_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_nknxhx9', 'template_errfr34', templateParams, 'w9YV4c_k0ab29gwf4')
        .then(function(response) {
            // Email terkirim, tampilkan SweetAlert
            Swal.close();

            Swal.fire({
                icon: 'success',
                title: 'Email Terkirim!',
                text: 'Terima kasih atas pesan Anda.',
                confirmButtonText: 'Ok'
            });

            // Reset formulir
            document.getElementById('contactForm').reset();
        }, function(error) {
            // Error dalam mengirim email, tampilkan SweetAlert kesalahan
            Swal.close();

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Gagal mengirim pesan. Silakan coba lagi nanti.',
                confirmButtonText: 'Ok'
            });
        });
}
// Fungsi untuk mengirim pesan ke WhatsApp menggunakan API fonnte
function sendWhatsAppMessage() {
  // Ambil nilai dari input formulir
  const user_name = document.getElementById('name').value;
  const user_email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const phone_number = '6285803537375'; // Nomor penerima WhatsApp


  // Data yang akan dikirimkan ke API fonnte
  const data = {
      user_name: user_name,
      user_email: user_email,
      subject: subject,
      message: message,
      phone_number: phone_number
  };

  // Kirim pesan ke WhatsApp melalui API fonnte
  fetch('https://api.fonnte.com/whatsapp/send', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'c13qAumT5CT_g3h-hibQ' // Ganti dengan kunci API fonnte Anda
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (response.ok) {
          // Pesan berhasil dikirim
          Swal.fire({
              icon: 'success',
              title: 'Pesan Terkirim!',
              text: 'Terima kasih atas pesan Anda.',
              confirmButtonText: 'Ok'
          });
          document.getElementById('contactForm').reset(); // Reset formulir setelah pengiriman berhasil
      } else {
          // Gagal mengirim pesan
          Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'Gagal mengirim pesan. Silakan coba lagi nanti.',
              confirmButtonText: 'Ok'
          });
      }
  })
  .catch(error => {
      console.error('Error:', error);
      // Gagal mengirim pesan
      Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Gagal mengirim pesan. Silakan coba lagi nanti.',
          confirmButtonText: 'Ok'
      });
  });
}

// Menambahkan event listener ke formulir untuk menangani pengiriman pesan
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah perilaku bawaan formulir
  sendWhatsAppMessage(); // Panggil fungsi untuk mengirim pesan WhatsApp
});

function pilihtemplate() {
    // Menggunakan window.location untuk mengarahkan ke URL
    window.location.href = 'template';
}

let alertShown = false;
let timeout;

// Mendapatkan elemen targetDiv
const targetDiv = document.getElementById('targetDiv');

// Menambahkan event untuk meng-handle hover pada targetDiv
targetDiv.addEventListener('mouseenter', function() {
    // Membatalkan timeout yang sudah ada jika ada
    clearTimeout(timeout);
    // Menunda alert selama 6 detik setelah pengunjung berhenti menggulir atau mengarahkan kursor
    timeout = setTimeout(function() {
        if (!alertShown) {
            alertShown = true;
            Swal.fire({
                icon: 'info',
                title: 'Klik Pilih Template',
                text: 'Untuk Memilih Lebih Banyak Template',
                confirmButtonText: 'Ok'
            });
        }
    }, 6000);
});

// Menambahkan event scroll dengan fungsi untuk membatalkan timeout jika pengunjung menggulir
window.addEventListener('scroll', function() {
    clearTimeout(timeout);
});

// Link To CheckOut

  function pesanProduk(namaProduk) {
    // Gantilah dengan nilai ID service dan ID template yang sesuai
    const emailServiceId = 'service_b6er7nz';
    const emailTemplateId = 'template_8h3fkjs';
    const emailPublicKey = 'gtkqYU-0qi7HMZqVV';

    emailjs.init(emailPublicKey);

    // Cek apakah pelanggan sudah pernah memesan
    if (localStorage.getItem('SudahPesan')) {
      Swal.fire({
        icon: 'error',
        title: 'Maaf!',
        text: 'Anda tidak dapat memesan lagi karena Anda sudah pernah memesan.Mohon tunggu konfirmasi dari kami perihal pesanan tersebut!',
      });
      return;
    }

    // Tampilkan formulir pemesanan dengan SweetAlert2
    Swal.fire({
      title: 'Pemesanan ' + namaProduk,
      html:
        '<input type="text" id="nama" class="swal2-input" placeholder="Nama Anda">' +
        '<input type="tel" id="whatsapp" class="swal2-input" placeholder="Nomor WhatsApp anda">' +
        '<p>*Jika ingin menggunakan OnceClear anda tidak perlu mengisi formulir ini. Langsung ke tab OnceClear saja</p>' ,
        
      showCancelButton: true,
      confirmButtonText: 'Pesan Sekarang',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const nama = Swal.getPopup().querySelector('#nama').value;
        const whatsapp = Swal.getPopup().querySelector('#whatsapp').value;

        // Kirim data ke email.js
        return emailjs.send(emailServiceId, emailTemplateId, {
          to_name: nama,
          to_whatsapp: whatsapp,
          produk: namaProduk,
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Terima Kasih!',
          text: 'Pesanan Anda telah berhasil dikirim. Tunggu konfirmasi dari kami di WhatsApp Anda.',
        });
        // Tandai bahwa pelanggan sudah memesan
        localStorage.setItem('SudahPesan', true);
      } else if (result.isDenied) {
        Swal.fire('Pesanan Gagal', 'Maaf, pesanan Anda tidak terkirim.', 'error');
      }
    });
  }
// Link To OnceClear

  function OnceClear(namaProduk) {
    // Gantilah dengan nilai ID service dan ID template yang sesuai
    const emailServiceId = 'service_b6er7nz';
    const emailTemplateId = 'template_8nxwjvo';
    const emailPublicKey = 'gtkqYU-0qi7HMZqVV';

    emailjs.init(emailPublicKey);

    // Cek apakah pelanggan sudah pernah memesan
    if (localStorage.getItem('SudahPesan')) {
      Swal.fire({
        icon: 'error',
        title: 'Maaf!',
        text: 'Anda tidak dapat memesan lagi karena Anda sudah pernah memesan.Mohon tunggu konfirmasi dari kami perihal pesanan tersebut!',
      });
      return;
    }

    // Tampilkan formulir pemesanan dengan SweetAlert2
    Swal.fire({
      title: 'Pakai Metode ' + namaProduk,
      html:
        '<input type="text" id="nama" class="swal2-input" placeholder="Nama anda">' +
        '<input type="tel" id="paket" class="swal2-input" placeholder="Paket yang dibeli">' +
        '<input type="tel" id="whatsapp" class="swal2-input" placeholder="Nomor WhatsApp anda">',
      showCancelButton: true,
      confirmButtonText: 'Pesan Sekarang',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const nama = Swal.getPopup().querySelector('#nama').value;
        const paket = Swal.getPopup().querySelector('#paket').value;
        const whatsapp = Swal.getPopup().querySelector('#whatsapp').value;

        // Kirim data ke email.js
        return emailjs.send(emailServiceId, emailTemplateId, {
          to_name: nama,
          to_package: paket,
          to_whatsapp: whatsapp,
          metode: namaProduk,
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Terima Kasih!',
          text: 'Pesanan Anda telah berhasil dikirim. Tunggu konfirmasi dari kami di WhatsApp Anda.',
        });
        // Tandai bahwa pelanggan sudah memesan
        localStorage.setItem('SudahPesan', true);
      } else if (result.isDenied) {
        Swal.fire('Pesanan Gagal', 'Maaf, pesanan Anda tidak terkirim.', 'error');
      }
    });
  }

//Download katalog

  function downloadKatalog() {
    Swal.fire({
      title: "Mau lihat katalog dari mana?",
      showDenyButton: true,
      showCloseButton: true,
      denyButtonColor: "#3085d6",
      confirmButtonText: "Download Katalog",
      denyButtonText: `Katalog di Whatsapp`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Tunggu Sebentar...',
          text: 'Sedang menyiapkan katalog untuk diunduh.',
          showConfirmButton: false,
          allowOutsideClick: false,
          timer: 3000, // 3 detik
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });
    
        // Tunggu 3 detik sebelum mengunduh file
        setTimeout(() => {
          // Simulasi pengunduhan file (ganti URL sesuai dengan lokasi file)
          const downloadLink = document.createElement('a');
          downloadLink.href = 'https://kayol.site/assets/katalog.pdf';
          downloadLink.download = 'katalog.pdf';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
    
          // Tutup SweetAlert setelah pengunduhan selesai
          Swal.close();
        }, 3000);
      } else if (result.isDenied) {
        Swal.fire({
          title: 'Tunggu Sebentar...',
          text: 'Menuju Ke Katalog Whatsapp',
          showConfirmButton: false,
          allowOutsideClick: false,
          timer: 1000, // 1 detik
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });
    
        // Tunggu 3 detik sebelum mengunduh file
        setTimeout(() => {
          // Simulasi pengunduhan file (ganti URL sesuai dengan lokasi file)
          const Katalog = document.createElement('a');
          Katalog.href = 'https://wa.me/c/62882008025015';
          document.body.appendChild(Katalog);
          Katalog.click();
          document.body.removeChild(Katalog);
    
          // Tutup SweetAlert setelah pengunduhan selesai
          Swal.close();
        }, 3000);
      }
    });

  }
