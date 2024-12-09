# Dialogs and Fragments

Chúng tôi thêm một file XML mới để xác định khai báo dialog của chúng tôi trong fragments. Nội dung mảnh được đặt trong không gian tên lõi, vì vậy chúng tôi thêm không gian tên xml cho nó bên trong thẻ `FragmentDefinition`.

Nếu dialog fragment là null | undefined thì nó sẽ gọi API LoadFragment. Sau đó chúng tôi sử dụng dialog trên controller. Điều này cho phép chúng tôi sử dụng dialog mỗi khi event được kích hoạt
