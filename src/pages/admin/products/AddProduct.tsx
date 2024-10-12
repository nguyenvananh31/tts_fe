import  { useState } from "react";
import { Form, Input, Button, message, InputNumber, Upload, UploadFile, Select, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios from "../../../configs/axios";
import { IProduct } from "../../../interFaces/products";

const AddProduct = () => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // Lấy danh sách danh mục sản phẩm
  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        return await Axios.get("/categories");
      } catch (error) {
        messageApi.error("Lấy danh sách danh mục không thành công.");
        console.log(error);
        return [];
      }
    },
  });

  // console.log(categories?.data);
  

  // Mutation cho POST (Thêm sản phẩm)
  const { mutate: addProduct, isPending: isAdding } = useMutation({
    mutationFn: async (newProduct: FormData) => {
      return await Axios.post("/products", newProduct, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      messageApi.success("Thêm sản phẩm thành công.");
      form.resetFields();
      setFileList([]);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      messageApi.error("Thêm sản phẩm không thành công.");
      console.log(error);
    },
  });

  // Xử lý khi submit form
  const handleSubmit = (values: IProduct) => {
    const formData = new FormData();

    // Thêm các field khác vào FormData
    Object.keys(values).forEach((key) => {
      formData.append(key, (values as any)[key]);
    });


    

    // Thêm file vào FormData
    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("image", file.originFileObj);
      }
    });

    addProduct(formData); // Gọi mutation để thêm sản phẩm
    // console.log(values);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  if (isLoadingCategories) {
    return <p>Đang tải danh sách danh mục...</p>;
  }

  return (
    <>
      {contextHolder}
      <Card title="Thêm mới sản phẩm" bordered={false} style={{ maxWidth: 800, margin: "auto" }}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Ảnh sản phẩm"
            name="image"
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              beforeUpload={(file) => {
                const isImage = file.type.startsWith("image/");
                if (!isImage) {
                  message.error("Chỉ được upload file hình ảnh!");
                  return Upload.LIST_IGNORE;
                }
                return true;
              }}
              multiple
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item
            label="Mô tả ngắn"
            name="sortdescription"
            rules={[{ required: true, message: "Vui lòng nhập mô tả ngắn!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Danh mục sản phẩm"
            name="category_id"
            rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
          >
            <Select placeholder="Chọn danh mục">
              {categories?.data.map((category) => (
                <Select.Option key={category.id} value={category.id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Giá sản phẩm"
            name="price"
            rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            label="Số lượng"
            name="quantity"
            rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            label="Mô tả sản phẩm"
            name="description"
            rules={[{ required: true, message: "Vui lòng nhập mô tả sản phẩm!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isAdding}>
              Thêm sản phẩm
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default AddProduct;
