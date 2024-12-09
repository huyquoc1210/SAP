# Descriptor for Applications

i18n là cấu hình:

- `bundleName`: parameter tham chiếu đến tài nguyên
- `supportedLocales` :thuộc tính xác định ngôn ngữ (ví dụ en_GB, en-GB hoặc en)
- `fallbackLocale`: thuộc tính chỉ định ngôn ngữ dự phòng nếu ngôn ngữ sử dụng k có trong list hỗ trợ, default là `en`
- title: Bây giờ chúng tôi triển khai điều này bằng cách tham chiếu văn bản appTitle từ gói tài nguyên bằng cú pháp điều khiển: {{key}}
- description: chúng tôi làm cho văn bản mô tả phụ thuộc vào ngôn ngữ bằng cách tham chiếu văn bản mô tả ứng dụng từ gói tài nguyên bằng cú pháp điều khiển: {{key}}

sap.ui :

- `technology`: thuộc tính này chỉ định công nghệ được sử dụng cho ứng dụng; giá trị của nó là UI5
- `devicesTypes`: thuộc tính này xác định các thiết bị hỗ trợ cho app. Nó là 1 object chứa 3 thuộc tính có giá trị là Boolean :Desktop, Tablet, Phone.Nếu tất cả là true thì nó sử dụng được trên 3 thiết bị
- `dependencies` : dependencies của Component sẽ kèm theo setting theo sau:
  - `minUI5Version`: chỉ định phiên bản của SAPUI5. Component của chúng tôi yêu cầu tối thiểu version 1.20
  - Setting lb
- `rootView`: view gốc của ứng dụng (ví dụ "viewName": "ui5.walkthrough.view.App")
- `model`: mô hình vòng đời của app. mỗi model được xác định bằng 1 key duy nhất và chuỗi rỗng
