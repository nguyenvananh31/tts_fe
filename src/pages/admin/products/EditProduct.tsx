import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Spin, Skeleton, InputNumber, Upload, UploadFile, Select, Card } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PlusOutlined } from "@ant-design/icons";
import { IProduct } from "../../../interFaces/products";
import Axios from "../../../configs/axios";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { id } = useParams();

  // Lấy dữ liệu sản phẩm
  const { data: product } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      try {
        return await Axios.get(`/products/${id}`);
      } catch (error) {
        messageApi.error("Lấy dữ liệu sản phẩm không thành công.");
        console.log(error);
        return null;
      }
    },
  });

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

  // Mutation cho PUT (Chỉnh sửa sản phẩm)
  const { mutate: editProducts, isPending: isEditing } = useMutation({
    mutationFn: async (updatedProduct: FormData) => {
      return await Axios.put(`/products/`, updatedProduct, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      messageApi.success("Chỉnh sửa thành công.");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      messageApi.error("Chỉnh sửa không thành công.");
      console.log(error);
    },
  });

  useEffect(() => {
    if (product) {
      form.setFieldsValue(product.data); // Set giá trị của form với dữ liệu sản phẩm

      if (product.data.image && Array.isArray(product.data.image)) {
        // Nếu sản phẩm có ảnh, chuyển chúng thành danh sách file để hiển thị
        const imageFiles = product.data.image.map((imageUrl, index) => ({
          uid: `-${index}`,
          url: imageUrl,
          name: `image${index}`,
        }));
        setFileList(imageFiles);
      }
    } else {
      form.resetFields();
      setFileList([]);
    }
  }, [product, form]);

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
        formData.append("images", file.originFileObj);
      }
    });

    editProducts(formData); // Gọi mutation để cập nhật sản phẩm
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  if (isEditing || isLoadingCategories) {
    return (
      <Spin tip="Đang tải dữ liệu...">
        <div className="content">
          <Skeleton active />
        </div>
      </Spin>
    );
  }

  return (
    <>
      {contextHolder}
      <Card title="Chỉnh sửa sản phẩm" bordered={false} style={{ maxWidth: 800, margin: "auto" }}>
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
            name="images"
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
              {categories?.data.data.map((category) => (
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
            <Button type="primary" htmlType="submit" loading={isEditing}>
              Lưu chỉnh sửa sản phẩm
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default EditProduct;
