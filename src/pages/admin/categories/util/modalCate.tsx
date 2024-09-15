import React, { useEffect } from "react";
import { Modal, Form, Input, Button, message, Spin, Skeleton } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Icate } from "../../../../interFaces/categories";
import Axios from "../../../../configs/axios";

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
  cates?: Icate | null; // Nếu có giá trị thì là chỉnh sửa, không có thì là thêm mới
}

const ModalComponentCate: React.FC<ModalComponentProps> = ({
  visible,
  onClose,
  cates,
}) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();

  // Mutation cho POST (Thêm mới)
  const { mutate: addCate, isPending: isAdding } = useMutation({
    mutationFn: async (newCate: Icate) => {
      return await Axios.post("/categories", newCate);
    },
    onSuccess: () => {
      messageApi.success("Thêm  thành công.");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      onClose();
    },
    onError: () => {
      messageApi.error("Thêm không thành công.");
    },
  });

  // Mutation
  // Mutation cho PUT (Chỉnh sửa)
  const { mutate: editCate, isPending: isEditing } = useMutation({
    mutationFn: async (updatedCate: Icate) => {
      return await Axios.put(`/categories/${updatedCate.id}`, updatedCate);
    },
    onSuccess: () => {
      messageApi.success("Chỉnh sửa  thành công.");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      onClose();
    },
    onError: () => {
      messageApi.error("Chỉnh sửa  không thành công.");
    },
  });

  // Khi modal mở ra để chỉnh sửa, điền dữ liệu khách hàng vào form
  useEffect(() => {
    if (cates) {
      form.setFieldsValue(cates);
    } else {
      form.resetFields();
    }
  }, [cates, form]);

  // Xử lý khi submit form
  const handleSubmit = (values: Icate) => {
    if (cates) {
      // Chỉnh sửa
      editCate({ ...cates, ...values });
    } else {
      // Thêm mới
      addCate(values);
    }
  };

  if (isEditing || isAdding) {
    return (
      <Spin tip="Đang tải dữ liệu...">
        <div className="content">
          <Skeleton active />
        </div>
      </Spin>
    );
  }

  return (
    <Modal
      title={cates ? "Chỉnh sửa" : "Thêm mới"}
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={cates || {}}
      >
        <Form.Item
          label="Tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên khách hàng!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isAdding || isEditing}
          >
            {cates ? "Lưu chỉnh sửa" : "Thêm mới"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalComponentCate;
