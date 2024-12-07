# Translatable Texts

Trong hướng dẫn này on properties file.Tuy nhiên trong thực tế dùng hậu tố để hỗ trợ cho từng ngôn ngữ

i18n_en.properties: tiếng anh
i18n_vi.properties: tiếng việt

## Controller

Tạo 1 `ResourceModel` và chỉnh định tham số `bundleName` tham chiếu đến file (i18n.properties).Sau đó sử dụng hàm `setModel` on view để gán cho model mới tạo của mình làm model được key `i18nModel`.

Trong hàm `onShowHello` chúng tôi thay thế "Hello Word" tĩnh bằng "HelloMsg" từ resource bundle và thay thế phần giữu chỗ trong văn bản bằng name `recipient` từ model data. Để truy xuất recipient name,chúng tôi truy cập vào JSON model được liên kết và sử dụng method `getProperty`. Phương pháp này cho phép truy xuất 1 giá trị cho một thuộc tính model bằng đường dẫn nhất định. Chúng ta truyền đường dẫn đến tên người nhận làm đối số cho phương thức `getProperty()` để truy xuất giá trị tương ứng.

## App.view.xml

Bây giờ chúng ta cố thể liên kết các thuộc tính văn bản chế độ view XML.Chúng tôi connect các thuộc tính `showHelloButtonText`. Để tham chiếu model, đường dẫn liên kết bằng model i18n, theo sau là ký tự `>`
