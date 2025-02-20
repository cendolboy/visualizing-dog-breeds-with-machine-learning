function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getDogImages(breed) {
  // Mengambil Model Data dari website DOG CEO
  const url = "https://dog.ceo/api/breed/" + breed + "/images";

  try {
    const response = UrlFetchApp.fetch(url);
    const data = JSON.parse(response.getContentText());
    
    if (data.status === "success" && data.message.length > 0) {
      return data.message; // Mengembalikan daftar URL gambar anjing
    } else {
      return ['No images found for this breed.']; // Mengembalikan pesan jika breed tidak ditemukan
    }
  } catch (error) {
    return ['DATASETS belum tersedia untuk label ini']; // Handle errors such as connection or API issues
  }
}
