# Beginner Guide Using String Management

Sebuah aplikasi membutuhkan banyak string sebagai deskripsi dari tampilan tertentu sehingga dapat dengan mudah dimengerti oleh pengguna dan dalam membuat sebuah aplikasi perusahaan atau tim bekerja dengan sejumlah pihak atau individu. Sehingga String Management adalah salah satu cara mempermudah maintenance aplikasi dalam sebuah scope yang luas. Sebagai contohnya saat kita bekerja dalam sebuah tim atau mengerjakan sebuah aplikasi yang memiliki bahasa terjemahan yang berbeda *(multi-language)*.
Karena perubahan dalam file ini akan banyak dilakukan dalam pengerjaan aplikasi dan diubah oleh banyak orang, maka dari itu beberapa aturan sangatlah diperlukan dalam etichal coding sebagai standard dalam kerjasama tim.

Dalam bentuk teknologi apapun yang dipakai, dalam sebuah project string management akan dibuat dalam sebuah file terpisah yang akan dipanggil dalam Component/UI/Screen dalam bentuk sebuah object *key-value* dengan key dituliskan dalam camelCase. Sebagai contohnya :

```javascript
{
  "accept": "Accept",
  "camera": "Camera",
}
```
Dalam kerja tim string managment harus mengikuti beberapa aturan berikut ini :

***1. Penamaan yang jelas***

Menggunakan nama yang jelas dan mudah dimengerti oleh orang lain akan memudahkan rekan tim untuk mengerti apa maksud dan fungsi dari string tersebut.

***GUNAKAN***
```javascript
{
  "accept": "Accept"
}
```
***JANGAN GUNAKAN***
```javascript
{
  "txtAcpt": "Accept"
}
```
***2. Bahasa internasional untuk menulis key***

Menggunakan bahasa internasional atau bahasa inggris akan mempermudah pembacaan kode sebagai standard penulisan sehingga kode kamu dapat dibaca bahkan untuk rekan tim atau reviewer yang berbeda kebangsaan sekalipun.

***GUNAKAN***
```javascript
{
  "accept": "Accept"
}
```
***JANGAN GUNAKAN***
```javascript
{
  "terima": "Accept"
}
```
***3. Urutkan key berdasarkan alphabet***

Dalam sebuah tim terkadang kita bekerja dan menggunakan kata yang sama, untuk menghindari duplikasi key-value ada sebaiknya String Management diurutkan secara alphabet sehingga akan memperkecil kemungkinan tersebut.
***GUNAKAN***
```javascript
{
  "accept": "Accept",
  "camera": "Camera",
  "cancel": "Cancel"
  "gallery": "Gallery",
}
```
***JANGAN GUNAKAN***
```javascript
{
  "accept": "Accept",
  "gallery": "Gallery",
  "camera": "Camera",
  "cancel": "Cancel",
}
```
***4. Nested Object untuk String dengan scope khusus***

Hal ini dilakukan untuk mengelompokan string dalam scope tertentu

***GUNAKAN***
```javascript
{
  "error": {
    "timeOutConnection": "Connection timeout. Please try again later.",
    "internalServer": ""Internal Server Error"
  }
}
```
***JANGAN GUNAKAN***
```javascript
{
  "errorRTO": "Connection timeout. Please try again later.",
  "errorInternalServer": "Internal Server Error"
}
```
***5. Menyamakan Isi dalam Setiap File String Multilanguage***

Untuk menghindari missing string language ada baiknya kita memeriksa ulang isi dari setiap file string multilanguage dengan value yang berbeda namun harus memiliki key yang sama.

***en.json***
```javascript
{
  "error": {
    "timeOutConnection": "Connection timeout. Please try again later.",
    "internalServer": ""Internal Server Error"
  }
}
```
***id.json***
```javascript
{
  "error": {
    "timeOutConnection": "Koneksi timeout. Silakan coba kembali nanti.",
    "internalServer": "Kesalahan server internal"
  }
}
