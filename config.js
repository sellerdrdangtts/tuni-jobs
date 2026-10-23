// Dán Google OAuth Client ID vào giữa hai dấu nháy để bật đăng nhập Google + đồng bộ Drive.
// Để trống thì app vẫn chạy, dữ liệu chỉ lưu trên thiết bị.
window.GOOGLE_CLIENT_ID = '769336581666-hi55bqg0rk5k9kjg3a6ag71vjls61h15.apps.googleusercontent.com';
// Cloudflare Worker giữ Client Secret để làm mới thẻ đăng nhập, app không bị hết phiên mỗi giờ.
window.AUTH_URL = 'https://tuni-auth.sellerdrdang-tts.workers.dev';
