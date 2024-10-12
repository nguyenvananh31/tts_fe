import { Form, Input, Button, message, Spin, Skeleton,   Card } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios from "../../../configs/axios";
import { useParams } from "react-router-dom";
import { Icate } from "../../../interFaces/categories";

const EditCate = () => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  const { id } = useParams();

  // Lấy danh sách danh mục sản phẩm
  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        return await Axios.get(`/categories/${id}`);
      } catch (error) {
        messageApi.error("Lấy danh sách danh mục không thành công.");
        console.log(error);
        return [];
      }
    },
  });

  // Mutation cho PUT (Chỉnh sửa sản phẩm)
  const { mutate, isPending } = useMutation({
    mutationFn: async (updatedProduct: Icate) => {
      return await Axios.put(`/categories/${id}`, updatedProduct);
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


  // Xử lý khi submit form
  const handleSubmit = (values: Icate) => {
    mutate(values);
  };


  if (isPending || isLoadingCategories) {
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
        <Form form={form} layout="vertical" initialValues={categories} onFinish={handleSubmit}>
          <Form.Item
            label="Tên danh mục"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending}>
              Lưu chỉnh sửa sản phẩm
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default EditCate;
