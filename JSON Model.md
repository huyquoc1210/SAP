# JSON Model

Khởi tạo 1 mô hình JSON. Dữ liệu cho mô hình chỉ chứa property `recipient` bên trong nó có 1 property cho `name`

Để có thể sử dụng mô hình này từ bên trong chế độ view XML, chúng tôi gọi hàm `setModel` trên chế độ view và truyền vào model mới tạo của chúng tôi.

## App.view.XML

Để cập nhật thay đổi khi người dùng nhậpvafo , set thuộc tính `valueLiveUpdate` của control thành true
