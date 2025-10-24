// Ganti nama bunga secara manual di sini
const namaAnda = "Habib 🌻";

// Tampilkan nama dari variabel di atas
document.getElementById('flowerName').textContent = namaAnda;

// Atau jika ada parameter di URL (?name=...)
(function(){
  const qs = new URLSearchParams(location.search);
  const name = qs.get('name');
  if(name){
    document.getElementById('flowerName').textContent = decodeURIComponent(name);
  }
})();