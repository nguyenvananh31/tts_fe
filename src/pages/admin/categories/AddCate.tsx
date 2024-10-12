import { Form, Input, Button, message, Card, Spin, Skeleton } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Axios from "../../../configs/axios";
import { Icate } from "../../../interFaces/categories";

const AddCate = () => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  // Mutation cho POST (Thêm sản phẩm)
  const { mutate, isPending } = useMutation({
    mutationFn: async (newProduct: Icate) => {
      return await Axios.post("/categories", newProduct);
    },
    onSuccess: () => {
      messageApi.success("Thêm sản phẩm thành công.");
      form.resetFields();

      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      messageApi.error("Thêm sản phẩm không thành công.");
      console.log(error);
    },
  });

  // Xử lý khi submit form
  const handleSubmit = (values: Icate) => {
    mutate(values);
    // console.log(values);
  };

  if (isPending) {
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
      <Card
        title="Thêm mới danh mục"
        bordered={false}
        style={{ maxWidth: 800, margin: "auto" }}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Tên sản danh mục"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên danh mục!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending}>
              Thêm sản phẩm
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default AddCate;
